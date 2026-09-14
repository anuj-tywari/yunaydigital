'use client';

import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Search, 
  Target, 
  BarChart, 
  Users, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Mail,
  Share2,
  MousePointer,
  Eye,
  Star,
  Quote,
  DollarSign,
  Calendar
} from 'lucide-react';

const DigitalMarketingPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines.'
    },
    {
      icon: MousePointer,
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted advertising campaigns on Google, Facebook, and other platforms.'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with customers on social platforms.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with effective email campaigns.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics.'
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Improve your website\'s conversion rate and maximize ROI.'
    }
  ];

  const marketingChannels = [
    {
      icon: Search,
      title: 'Search Engine Marketing',
      description: 'SEO and PPC strategies for search engines',
      features: ['Google Ads', 'Bing Ads', 'Local SEO', 'Technical SEO'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategies',
      features: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Ads', 'Twitter Marketing'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Mail,
      title: 'Email & Content Marketing',
      description: 'Engaging content and email campaigns',
      features: ['Newsletter Campaigns', 'Content Strategy', 'Blog Writing', 'Video Marketing'],
      color: 'from-violet-500 to-violet-700'
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Data-driven marketing optimization',
      features: ['Google Analytics', 'Conversion Tracking', 'A/B Testing', 'Performance Reports'],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const campaignTypes = [
    {
      title: 'Brand Awareness',
      description: 'Increase brand recognition and reach new audiences',
      strategies: ['Display Advertising', 'Social Media Campaigns', 'Content Marketing', 'Influencer Partnerships'],
      metrics: ['Impressions', 'Reach', 'Brand Mentions', 'Share of Voice']
    },
    {
      title: 'Lead Generation',
      description: 'Generate qualified leads for your sales team',
      strategies: ['Search Engine Marketing', 'Landing Page Optimization', 'Email Marketing', 'Lead Magnets'],
      metrics: ['Lead Quality', 'Cost per Lead', 'Conversion Rate', 'ROI']
    },
    {
      title: 'E-commerce Growth',
      description: 'Drive online sales and revenue',
      strategies: ['Shopping Ads', 'Retargeting', 'Product Feed Optimization', 'Email Automation'],
      metrics: ['Revenue', 'ROAS', 'Cart Abandonment', 'Customer Lifetime Value']
    },
    {
      title: 'Local Marketing',
      description: 'Target customers in specific geographic areas',
      strategies: ['Local SEO', 'Google My Business', 'Location-based Ads', 'Local Directories'],
      metrics: ['Local Rankings', 'Store Visits', 'Local Leads', 'Review Ratings']
    }
  ];

  const marketingProcess = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Comprehensive market research and strategy development.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Setting up tracking, campaigns, and optimization tools.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Creating compelling ad copy, visuals, and landing pages.',
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Launching campaigns across selected channels.',
      duration: '1 week'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization for better results.',
      duration: 'Ongoing'
    },
    {
      step: '06',
      title: 'Reporting & Analysis',
      description: 'Regular performance reports and strategic recommendations.',
      duration: 'Monthly'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Store Growth',
      industry: 'Retail',
      challenge: 'Low online sales and poor brand visibility',
      solution: 'Comprehensive SEO, PPC, and social media strategy',
      results: [
        '300% increase in organic traffic',
        '250% boost in online sales',
        '40% reduction in cost per acquisition',
        '500% growth in social media following'
      ],
      duration: '6 months'
    },
    {
      title: 'SaaS Lead Generation',
      industry: 'Technology',
      challenge: 'High customer acquisition cost and low lead quality',
      solution: 'Targeted content marketing and LinkedIn advertising',
      results: [
        '150% increase in qualified leads',
        '60% reduction in cost per lead',
        '85% improvement in lead-to-customer conversion',
        '200% growth in trial signups'
      ],
      duration: '4 months'
    },
    {
      title: 'Local Business Expansion',
      industry: 'Healthcare',
      challenge: 'Limited local visibility and patient acquisition',
      solution: 'Local SEO, Google Ads, and reputation management',
      results: [
        '400% increase in local search visibility',
        '180% more appointment bookings',
        '95% positive review rating',
        '320% growth in website traffic'
      ],
      duration: '8 months'
    }
  ];

  const tools = [
    { name: 'Google Analytics', category: 'Analytics', description: 'Website and campaign analytics' },
    { name: 'Google Ads', category: 'PPC', description: 'Search and display advertising' },
    { name: 'Facebook Ads Manager', category: 'Social Media', description: 'Social media advertising' },
    { name: 'SEMrush', category: 'SEO', description: 'SEO and competitor analysis' },
    { name: 'Mailchimp', category: 'Email', description: 'Email marketing automation' },
    { name: 'HubSpot', category: 'CRM', description: 'Customer relationship management' }
  ];

  const testimonials = [
    {
      quote: "Yunay Digital's marketing expertise transformed our online presence. We saw a 300% increase in qualified leads within just 3 months.",
      author: "Mark Thompson",
      company: "TechSolutions Inc.",
      rating: 5
    },
    {
      quote: "Their data-driven approach and transparent reporting gave us confidence in our marketing investment. ROI improved by 250%.",
      author: "Lisa Chen",
      company: "E-commerce Plus",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-linear-to-br from-space-950 via-space-800 to-brand-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-6">
              <TrendingUp size={16} className="mr-2" />
              Digital Marketing Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Grow Your Business with{' '}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Data-Driven Marketing
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Drive growth with strategic digital marketing campaigns. From SEO to social media, 
              we help businesses reach their target audience and achieve measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-linear-to-r from-violet-600 via-fuchsia-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Marketing Campaign</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Campaigns Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">250%</div>
              <div className="text-gray-300">Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50M+</div>
              <div className="text-gray-300">Impressions Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Campaign Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Marketing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20 bg-linear-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Channels We Master
            </h2>
            <p className="text-xl text-gray-600">
              Multi-channel approach for maximum reach and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-linear-to-r ${channel.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{channel.title}</h3>
                      <p className="text-gray-600">{channel.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {channel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Campaigns We Run
            </h2>
            <p className="text-xl text-gray-600">
              Tailored campaigns for different business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{campaign.title}</h3>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Strategies:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {campaign.strategies.map((strategy, strategyIndex) => (
                      <div key={strategyIndex} className="flex items-center">
                        <Target size={14} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center">
                        <BarChart size={14} className="text-blue-500 mr-2" />
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600">
              Strategic approach to digital marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="text-sm text-violet-600 font-medium">Duration: {step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                  <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <TrendingUp size={14} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar size={14} className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Completed in {study.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Professional tools for effective campaign management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                  <span className="text-sm text-gray-500">{tool.category}</span>
                </div>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Marketing Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from businesses that grew with our marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <Quote className="text-violet-500 mb-4" size={32} />
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-violet-600 via-fuchsia-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Let's create a marketing strategy that delivers measurable results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Marketing Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage; 