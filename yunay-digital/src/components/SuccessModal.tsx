'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Mail, Send } from 'lucide-react';
import Link from 'next/link';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'subscribe' | 'contact';
  title?: string;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  message
}) => {
  const defaultMessages = {
    subscribe: {
      title: '🎉 Welcome to Our Newsletter!',
      message: 'Thank you for subscribing! You\'ll receive the latest tech insights and updates directly in your inbox.'
    },
    contact: {
      title: '✅ Message Sent Successfully!',
      message: 'Thank you for contacting us! We\'ve received your message and our team will get back to you within 24 hours.'
    }
  };

  const modalContent = {
    title: title || defaultMessages[type].title,
    message: message || defaultMessages[type].message
  };

  const icon = type === 'subscribe' ? Mail : Send;
  const Icon = icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {modalContent.title}
                </h3>

                {/* Message */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {modalContent.message}
                </p>

                {/* Additional Content Based on Type */}
                {type === 'subscribe' && (
                  <div className="bg-violet-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Icon size={20} className="text-violet-600 mr-2" />
                      <span className="text-violet-800 font-medium">What's Next?</span>
                    </div>
                    <ul className="text-sm text-violet-700 space-y-1">
                      <li>• Weekly tech insights delivered to your inbox</li>
                      <li>• Exclusive content and industry analysis</li>
                      <li>• Early access to our latest blog posts</li>
                    </ul>
                  </div>
                )}

                {type === 'contact' && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Icon size={20} className="text-blue-600 mr-2" />
                      <span className="text-blue-800 font-medium">What Happens Next?</span>
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Our team will review your inquiry</li>
                      <li>• You'll receive a detailed response within 24 hours</li>
                      <li>• We may schedule a consultation call if needed</li>
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Got it!
                  </button>
                  
                  {type === 'subscribe' && (
                    <Link
                      href="/blog"
                      className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                    >
                      Read Our Blog
                    </Link>
                  )}
                  
                  {type === 'contact' && (
                    <Link
                      href="/services"
                      className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                    >
                      Our Services
                    </Link>
                  )}
                </div>

                {/* Social Proof */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    {type === 'subscribe' 
                      ? 'Join 1000+ developers and tech enthusiasts' 
                      : 'Trusted by 150+ satisfied clients worldwide'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal; 