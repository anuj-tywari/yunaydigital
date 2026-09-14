'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, User, Clock, Tag, TrendingUp, ChevronRight, Loader } from 'lucide-react';

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

const BlogPage = () => {
  const [posts, setPosts] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [isSubscriptionSuccess, setIsSubscriptionSuccess] = useState(false);
  
  const categories = useMemo(() => [
    { id: 'all', name: 'All Articles', tag: '' },
    { id: 'webdev', name: 'Web Development', tag: 'webdev' },
    { id: 'javascript', name: 'JavaScript', tag: 'javascript' },
    { id: 'react', name: 'React', tag: 'react' },
    { id: 'python', name: 'Python', tag: 'python' },
    { id: 'ai', name: 'AI & ML', tag: 'ai' },
    { id: 'tutorial', name: 'Tutorials', tag: 'tutorial' },
  ], []);

  const fetchPosts = async (tag: string = '') => {
    try {
      setLoading(true);
      setError(null);
      
      // Use dev.to API directly
      const apiUrl = tag 
        ? `https://dev.to/api/articles?tag=${tag}&per_page=20&top=7`
        : 'https://dev.to/api/articles/latest?per_page=20';
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      
      const data: DevToArticle[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Error loading articles. Please try again.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const selectedCat = categories.find(cat => cat.id === selectedCategory);
    fetchPosts(selectedCat?.tag || '');
  }, [selectedCategory, categories]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tag_list.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRandomColor = () => {
    const colors = [
      'from-violet-500 to-fuchsia-500',
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-indigo-500 to-purple-500',
      'from-fuchsia-500 to-cyan-500',
      'from-orange-500 to-red-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    setSubscriptionMessage('');

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
        setIsSubscriptionSuccess(true);
        setSubscriptionMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setIsSubscriptionSuccess(false);
        setSubscriptionMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setIsSubscriptionSuccess(false);
      setSubscriptionMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader className="animate-spin w-12 h-12 text-violet-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Loading latest tech insights...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Articles</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={() => fetchPosts()}
                className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-space-950 via-space-800 to-brand-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends, insights, and innovations in technology. Curated content from the best minds in tech.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex bg-white/10 backdrop-blur-sm rounded-full p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to our newsletter"
                required
                disabled={isSubscribing}
                className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isSubscribing || !email.trim()}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubscribing ? 'Subscribing...' : 'Subscribe'}</span>
              </button>
            </form>
            
            {/* Subscription Message */}
            {subscriptionMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                isSubscriptionSuccess 
                  ? 'bg-violet-100/20 border border-violet-300/30 text-violet-100' 
                  : 'bg-red-100/20 border border-red-300/30 text-red-100'
              }`}>
                {subscriptionMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            <span className="font-medium">{filteredPosts.length}</span> articles found
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or explore different categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.cover_image || post.social_image || '/api/placeholder/400/200'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/200';
                    }}
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getRandomColor()}`}>
                    {post.tag_list[0] || 'Tech'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Author and Date */}
                  <div className="flex items-center mb-4">
                    <Image
                      src={post.user.profile_image_90}
                      alt={post.user.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/api/placeholder/40/40';
                      }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{post.user.name}</div>
                      <div className="text-xs text-gray-500">@{post.user.username}</div>
                    </div>
                    <div className="text-xs text-gray-500">{post.readable_publish_date}</div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tag_list.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.reading_time_minutes} min read
                      </span>
                      <span className="flex items-center">
                        ❤️ {post.positive_reactions_count}
                      </span>
                      <span className="flex items-center">
                        💬 {post.comments_count}
                      </span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors group"
                  >
                    Read Full Article
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;