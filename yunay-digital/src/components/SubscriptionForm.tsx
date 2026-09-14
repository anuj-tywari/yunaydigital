'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setIsSuccess(false);
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessage = () => {
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isLoading}
          className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button 
          type="submit"
          disabled={isLoading || !email}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isLoading ? 'Subscribing...' : 'Subscribe'}</span>
          {!isLoading && <ArrowRight size={20} />}
        </button>
      </form>

      {/* Message Display */}
      {message && (
        <div className={`mt-4 p-4 rounded-lg flex items-center justify-between ${
          isSuccess 
            ? 'bg-violet-100 border border-violet-300 text-violet-800' 
            : 'bg-red-100 border border-red-300 text-red-800'
        }`}>
          <div className="flex items-center space-x-2">
            {isSuccess ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
            <span className="text-sm">{message}</span>
          </div>
          <button
            onClick={clearMessage}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm; 