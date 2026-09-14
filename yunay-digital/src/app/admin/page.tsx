'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Send, 
  Users, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageCircle,
  Clock,
  RefreshCw,
  Settings,
  Download,
  Filter,
  Search,
  ChevronRight,
  Loader,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

// Dev.to API interfaces
interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  published_timestamp: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    profile_image: string;
    profile_image_90: string;
  };
}

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  id: string;
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [emailSubject, setEmailSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [lastSent, setLastSent] = useState<string | null>(null);

  const tags = ['webdev', 'javascript', 'react', 'python', 'ai', 'tutorial', 'programming', 'discuss'];

  const loadInitialData = useCallback(async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetchArticles(),
        fetchSubscribers()
      ]);
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const fetchArticles = async (tag: string = '') => {
    try {
      const apiUrl = tag 
        ? `https://dev.to/api/articles?tag=${tag}&per_page=30&top=7`
        : 'https://dev.to/api/articles/latest?per_page=30';
      
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const fetchSubscribers = async () => {
    try {
      // This would typically fetch from your API
      // For demo purposes, we'll simulate some data
      const mockSubscribers: Subscriber[] = [
        { id: '1', email: 'user1@example.com', subscribedAt: '2024-01-15', status: 'active' },
        { id: '2', email: 'user2@example.com', subscribedAt: '2024-01-20', status: 'active' },
      ];
      setSubscribers(mockSubscribers);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    fetchArticles(tag);
  };

  const toggleArticleSelection = (articleId: number) => {
    setSelectedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const sendNewsletter = async () => {
    if (selectedArticles.length === 0) {
      alert('Please select at least one article to send');
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
          subject: emailSubject || 'Latest Tech Insights',
          customMessage: customMessage.trim() || undefined
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Newsletter sent successfully to ${result.subscriberCount} subscribers!`);
        setLastSent(new Date().toISOString());
        setSelectedArticles([]);
        setEmailSubject('');
        setCustomMessage('');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending newsletter:', error);
      alert('Failed to send newsletter. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tag_list.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeSubscribers = subscribers.filter(s => s.status === 'active');

  if (loading) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader className="animate-spin w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Loading admin dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Newsletter Admin Dashboard</h1>
          <p className="text-gray-600">Manage blog content and send newsletters to subscribers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Subscribers</p>
                <p className="text-2xl font-bold text-gray-900">{activeSubscribers.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-violet-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Available Articles</p>
                <p className="text-2xl font-bold text-gray-900">{articles.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Selected Articles</p>
                <p className="text-2xl font-bold text-gray-900">{selectedArticles.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Last Sent</p>
                <p className="text-sm font-bold text-gray-900">
                  {lastSent ? new Date(lastSent).toLocaleDateString() : 'Never'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Newsletter Composition */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-32">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Send className="w-5 h-5 mr-2 text-blue-600" />
                Newsletter Composition
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Latest Tech Insights"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Message (Optional)
                  </label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Add a personal message to your subscribers..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Newsletter Preview</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>📧 Subject: {emailSubject || 'Latest Tech Insights'}</div>
                    <div>📝 Articles: {selectedArticles.length} selected</div>
                    <div>👥 Recipients: {activeSubscribers.length} subscribers</div>
                    {customMessage && (
                      <div>💬 Custom message: Yes</div>
                    )}
                  </div>
                </div>

                <button
                  onClick={sendNewsletter}
                  disabled={sending || selectedArticles.length === 0}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    sending || selectedArticles.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  }`}
                >
                  {sending ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{sending ? 'Sending...' : 'Send Newsletter'}</span>
                </button>

                {selectedArticles.length === 0 && (
                  <p className="text-sm text-orange-600 text-center">
                    Select articles from the list to enable sending
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-violet-600" />
                    Latest Dev.to Articles
                  </h2>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => fetchArticles(selectedTag)}
                      className="flex items-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Refresh</span>
                    </button>
                  </div>
                </div>

                {/* Search and Filters */}
                <div className="mt-4 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleTagFilter('')}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedTag === '' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All
                    </button>
                    {tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagFilter(tag)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedTag === tag 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredArticles.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                          selectedArticles.includes(article.id) ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                        }`}
                        onClick={() => toggleArticleSelection(article.id)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              selectedArticles.includes(article.id)
                                ? 'bg-blue-600 border-blue-600'
                                : 'border-gray-300'
                            }`}>
                              {selectedArticles.includes(article.id) && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <Image
                                src={article.user.profile_image_90}
                                alt={article.user.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="text-sm font-medium text-gray-900">{article.user.name}</span>
                              <span className="text-sm text-gray-500">{article.readable_publish_date}</span>
                            </div>

                            <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                              {article.title}
                            </h4>
                            
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {article.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {article.tag_list.slice(0, 3).map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center space-x-3 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {article.reading_time_minutes}m
                                </span>
                                <span className="flex items-center">
                                  <Heart className="w-3 h-3 mr-1" />
                                  {article.positive_reactions_count}
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  {article.comments_count}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Download className="w-5 h-5" />
              <span>Export Subscribers</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Eye className="w-5 h-5" />
              <span>Preview Newsletter</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Settings className="w-5 h-5" />
              <span>Email Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 
