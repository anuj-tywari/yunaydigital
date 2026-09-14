'use client';

import { useEffect } from 'react';
import { TAWKTO_CONFIG, isTawkToConfigured } from '@/config/tawkto.config';

interface TawkToProps {
  propertyId?: string;
  widgetId?: string;
}

const TawkTo: React.FC<TawkToProps> = ({ 
  propertyId = TAWKTO_CONFIG.PROPERTY_ID, 
  widgetId = TAWKTO_CONFIG.WIDGET_ID 
}) => {
  useEffect(() => {
    // Only load if tawk.to is properly configured
    if (!isTawkToConfigured()) {
      console.warn('Tawk.to is not configured. Please set your PROPERTY_ID and WIDGET_ID in the config file.');
      return;
    }

    // Check if tawk.to script is already loaded
    if (window.Tawk_API) {
      return;
    }

    // Load tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add script to document
    document.head.appendChild(script);

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Configure tawk.to settings
    window.Tawk_API.onLoad = function() {
      console.log('Tawk.to chat loaded successfully');
      
      // Apply custom styling if configured
      if (TAWKTO_CONFIG.SETTINGS.customStyle.bubbleColor) {
        window.Tawk_API.setAttributes?.({
          'bubble-color': TAWKTO_CONFIG.SETTINGS.customStyle.bubbleColor
        });
      }
    };

    // Customize widget appearance and position
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: TAWKTO_CONFIG.SETTINGS.position,
          xOffset: TAWKTO_CONFIG.SETTINGS.xOffset,
          yOffset: TAWKTO_CONFIG.SETTINGS.yOffset
        },
        mobile: {
          position: TAWKTO_CONFIG.SETTINGS.position,
          xOffset: TAWKTO_CONFIG.SETTINGS.mobileXOffset,
          yOffset: TAWKTO_CONFIG.SETTINGS.mobileYOffset
        }
      }
    };

    // Hide widget when offline if configured
    if (TAWKTO_CONFIG.SETTINGS.hideWhenOffline) {
      window.Tawk_API.onStatusChange = function(status: string) {
        if (status === 'offline') {
          window.Tawk_API.hideWidget?.();
        } else {
          window.Tawk_API.showWidget?.();
        }
      };
    }

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      const existingScript = document.querySelector(`script[src*="embed.tawk.to"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
};



export default TawkTo; 