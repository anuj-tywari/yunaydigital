'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { 
  Calendar, 
  User, 
  Clock, 
  Heart, 
  MessageCircle, 
  Share2, 
  ArrowLeft,
  ExternalLink,
  Twitter,
  Linkedin,
  Facebook,
  Loader
} from 'lucide-react';

// Dev.to API interface for individual article
interface DevToArticleDetail {
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
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    profile_image: string;
    profile_image_90: string;
  };
}

const BlogPostPage = () => {
  const params = useParams();
  const [article, setArticle] = useState<DevToArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://dev.to/api/articles/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Article not found');
        }
        
        const data: DevToArticleDetail = await response.json();
        setArticle(data);
      } catch (err) {
        setError('Failed to load article. Please try again.');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchArticle();
    }
  }, [params.id]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article?.title || '';

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-500'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader className="animate-spin w-12 h-12 text-violet-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Loading article...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Article Not Found</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <Link
                href="/blog"
                className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-violet-50">
      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Cover Image */}
        {(article.cover_image || article.social_image) && (
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.cover_image || article.social_image}
              alt={article.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tag_list.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.description}
          </p>

          {/* Author and Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div className="flex items-center">
              <Image
                src={article.user.profile_image}
                alt={article.user.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/api/placeholder/48/48';
                }}
              />
              <div>
                <div className="font-semibold text-gray-900">{article.user.name}</div>
                <div className="text-gray-600">@{article.user.username}</div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.readable_publish_date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.reading_time_minutes} min read</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                <span>{article.positive_reactions_count}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>{article.comments_count}</span>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-gray-600 font-medium">Share this article:</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${social.color} transition-colors rounded-full hover:bg-gray-50`}
                    aria-label={`Share on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-violet-600 transition-colors rounded-full hover:bg-gray-50"
                aria-label="View on dev.to"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-violet-600 prose-code:bg-violet-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to read more tech insights?</h3>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly curated content delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-violet-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;