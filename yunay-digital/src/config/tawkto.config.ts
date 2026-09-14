// Tawk.to Configuration
// Replace these with your actual tawk.to property ID and widget ID
// You can find these in your tawk.to dashboard

// Extend Window interface for TypeScript
interface TawkAPI {
  onLoad?: () => void;
  onStatusChange?: (status: string) => void;
  setAttributes?: (attributes: { [key: string]: string }) => void;
  hideWidget?: () => void;
  showWidget?: () => void;
  toggle?: () => void;
  maximize?: () => void;
  minimize?: () => void;
  addTags?: (tags: string[]) => void;
  customStyle?: {
    visibility?: {
      desktop?: {
        position?: string;
        xOffset?: string | number;
        yOffset?: string | number;
      };
      mobile?: {
        position?: string;
        xOffset?: string | number;
        yOffset?: string | number;
      };
    };
  };
}

declare global {
  interface Window {
    Tawk_API: TawkAPI;
    Tawk_LoadStart: Date;
  }
}

export const TAWKTO_CONFIG = {
  // Your tawk.to Property ID (found in your tawk.to dashboard)
  PROPERTY_ID: process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID || "6848774cad7c5719114529d5",
  
  // Your tawk.to Widget ID (found in your tawk.to dashboard)
  WIDGET_ID: process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID || "1itdh41g0",
  
  // Chat widget settings
  SETTINGS: {
    // Widget position: 'br' (bottom-right), 'bl' (bottom-left), 'tr' (top-right), 'tl' (top-left)
    position: 'br',
    
    // Offset from edges (in pixels)
    xOffset: 20,
    yOffset: 20,
    
    // Mobile specific offsets
    mobileXOffset: 10,
    mobileYOffset: 10,
    
    // Widget appearance
    hideWhenOffline: false,
    
    // Custom styling options
    customStyle: {
      // Widget bubble color (optional)
      bubbleColor: '#10b981', // Matches your brand green color
      
      // Widget background color (optional)
      backgroundColor: '#ffffff',
      
      // Text color (optional)
      textColor: '#1f2937',
    }
  }
};

// Helper function to check if tawk.to is properly configured
export const isTawkToConfigured = (): boolean => {
  return TAWKTO_CONFIG.PROPERTY_ID !== "YOUR_PROPERTY_ID" && 
         TAWKTO_CONFIG.WIDGET_ID !== "YOUR_WIDGET_ID";
};

// Tawk.to API helpers
export const tawkToHelpers = {
  // Hide the chat widget
  hideWidget: () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.hideWidget?.();
    }
  },
  
  // Show the chat widget
  showWidget: () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.showWidget?.();
    }
  },
  
  // Toggle chat widget visibility
  toggleWidget: () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.toggle?.();
    }
  },
  
  // Maximize the chat window
  maximize: () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.maximize?.();
    }
  },
  
  // Minimize the chat window
  minimize: () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.minimize?.();
    }
  },
  
  // Set visitor attributes
  setAttributes: (attributes: Record<string, string>) => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.setAttributes?.(attributes);
    }
  },
  
  // Add tags to visitor
  addTags: (tags: string[]) => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.addTags?.(tags);
    }
  }
}; 