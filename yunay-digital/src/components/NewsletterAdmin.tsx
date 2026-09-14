'use client';

import React, { useState, useEffect } from 'react';
import { Send, Users, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  coverImage: string;
  tags: string[];
  author: {
    name: string;
    username: string;
  };
}

interface SubscriberStats {
  activeSubscribers: number;
  totalSubscribers: number;
  unsubscribed: number;
}

const NewsletterAdmin = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [subscriberStats, setSubscriberStats] = useState<SubscriberStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  useEffect(() => {
    fetchArticles();
    fetchSubscriberStats();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blogs?tag=technology&per_page=10');
      const data = await response.json();
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscriberStats = async () => {
    try {
      const response = await fetch('/api/subscribe');
      const data = await response.json();
      setSubscriberStats(data);
    } catch (error) {
      console.error('Error fetching subscriber stats:', error);
    }
  };

  const handleArticleSelect = (articleId: number) => {
    setSelectedArticles(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const sendNewsletter = async () => {
    if (selectedArticles.length === 0) {
      setMessage('Please select at least one article to send.');
      return;
    }

    try {
      setSending(true);
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleIds: selectedArticles,
          subject: subject || `Latest Tech Insights - ${new Date().toLocaleDateString()}`,
          customMessage
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage(`Newsletter sent successfully to ${data.stats.successful} subscribers!`);
        setSelectedArticles([]);
        setSubject('');
        setCustomMessage('');
      } else {
        setMessage('Failed to send newsletter. Please try again.');
      }
    } catch (error) {
      setMessage('Error sending newsletter. Please try again.');
      console.error('Error sending newsletter:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Newsletter Admin</h2>
        <p className="text-gray-600">Send curated articles to your subscribers</p>
      </div>

      {/* Subscriber Stats */}
      {subscriberStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-violet-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-violet-600">Active Subscribers</p>
                <p className="text-2xl font-bold text-violet-900">{subscriberStats.activeSubscribers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-600">Total Subscribers</p>
                <p className="text-2xl font-bold text-blue-900">{subscriberStats.totalSubscribers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-gray-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
                <p className="text-2xl font-bold text-gray-900">{subscriberStats.unsubscribed}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Configuration */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Latest Tech Insights - Today's Date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selected Articles
            </label>
            <div className="px-3 py-2 bg-white border border-gray-300 rounded-md">
              {selectedArticles.length} article(s) selected
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Custom Message (Optional)
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Add a personal message to your subscribers..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* Article Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Articles to Send</h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader className="animate-spin w-8 h-8 text-violet-600" />
            <span className="ml-2 text-gray-600">Loading articles...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedArticles.includes(article.id)
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleArticleSelect(article.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    width={64}
                    height={64}
                    className="object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/64/64';
                    }}
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedArticles.includes(article.id)
                      ? 'border-violet-500 bg-violet-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedArticles.includes(article.id) && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>by @{article.author.username}</span>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Send Newsletter */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">
              Ready to send newsletter to {subscriberStats?.activeSubscribers || 0} active subscribers?
            </p>
          </div>
          
          <button
            onClick={sendNewsletter}
            disabled={sending || selectedArticles.length === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              sending || selectedArticles.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg'
            }`}
          >
            {sending ? (
              <>
                <Loader className="animate-spin w-5 h-5 mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Newsletter
              </>
            )}
          </button>
        </div>
        
        {message && (
          <div className={`mt-4 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-violet-50 text-violet-800 border border-violet-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterAdmin; 