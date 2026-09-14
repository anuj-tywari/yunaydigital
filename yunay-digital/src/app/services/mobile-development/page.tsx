'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  Tablet, 
  Download, 
  Star, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Bell,
  CreditCard,
  Globe,
  Users,
  Play,
  Apple,
  Quote
} from 'lucide-react';

const MobileDevelopmentPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform',
      description: 'Build for iOS and Android with native performance and cross-platform efficiency.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized apps with smooth animations and lightning-fast response times.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling.'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Engage users with personalized and timely push notifications.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Seamless payment processing with multiple payment gateways.'
    },
    {
      icon: Globe,
      title: 'API Integration',
      description: 'Connect with any third-party service or your existing backend systems.'
    }
  ];

  const platforms = [
    { name: 'iOS', icon: Apple, description: 'Native iOS apps with Swift & Objective-C', color: 'from-gray-700 to-gray-900' },
    { name: 'Android', icon: Play, description: 'Native Android apps with Kotlin & Java', color: 'from-violet-500 to-violet-700' },
    { name: 'React Native', icon: Smartphone, description: 'Cross-platform apps with React Native', color: 'from-blue-500 to-blue-700' },
    { name: 'Flutter', icon: Smartphone, description: 'Cross-platform apps with Flutter & Dart', color: 'from-blue-400 to-purple-600' }
  ];

  const appTypes = [
    {
      title: 'Business Apps',
      description: 'Internal tools and productivity apps for enterprises',
      examples: ['CRM Apps', 'Project Management', 'Employee Portals', 'Inventory Management']
    },
    {
      title: 'E-commerce Apps',
      description: 'Online shopping and marketplace applications',
      examples: ['Shopping Apps', 'Marketplace', 'Food Delivery', 'Service Booking']
    },
    {
      title: 'Social Apps',
      description: 'Social networking and communication platforms',
      examples: ['Chat Apps', 'Social Networks', 'Dating Apps', 'Community Platforms']
    },
    {
      title: 'Entertainment Apps',
      description: 'Gaming, media streaming, and entertainment apps',
      examples: ['Gaming Apps', 'Video Streaming', 'Music Apps', 'News & Media']
    }
  ];

  const projects = [
    {
      title: 'Food Delivery App',
      description: 'A comprehensive food delivery platform with real-time tracking and payment integration.',
      platform: 'React Native',
      downloads: '50K+',
      rating: 4.8,
      features: ['Real-time tracking', 'Multiple payment options', 'Restaurant management', 'Customer reviews']
    },
    {
      title: 'Fitness Tracker',
      description: 'A health and fitness app with workout tracking and progress monitoring.',
      platform: 'Flutter',
      downloads: '100K+',
      rating: 4.9,
      features: ['Workout tracking', 'Progress analytics', 'Social sharing', 'Wearable integration']
    },
    {
      title: 'Banking App',
      description: 'Secure banking application with biometric authentication and transaction management.',
      platform: 'Native iOS/Android',
      downloads: '200K+',
      rating: 4.7,
      features: ['Biometric auth', 'Transaction history', 'Bill payments', 'Card management']
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Research & Planning',
      description: 'Market research, competitor analysis, and feature planning.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'User interface design and user experience optimization.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Frontend and backend development with regular testing.',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and platforms.',
      duration: '2-3 weeks'
    },
    {
      step: '05',
      title: 'App Store Release',
      description: 'App store submission and release management.',
      duration: '1-2 weeks'
    },
    {
      step: '06',
      title: 'Maintenance',
      description: 'Ongoing updates, bug fixes, and feature additions.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      quote: "The mobile app developed by Yunay Digital exceeded our expectations. It's user-friendly, fast, and has significantly improved our customer engagement.",
      author: "Jennifer Lee",
      company: "RetailTech Solutions",
      rating: 5
    },
    {
      quote: "Outstanding development team! They delivered our e-commerce app on time and within budget. The app has already generated substantial revenue.",
      author: "David Kumar",
      company: "ShopEasy",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-space-950 via-space-800 to-brand-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-6">
              <Smartphone size={16} className="mr-2" />
              Mobile App Development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build Amazing{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create engaging mobile experiences for iOS and Android. From concept to app store, 
              we build high-performance apps that users love and businesses rely on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Your App</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View App Portfolio
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Apps Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-300">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Mobile Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create mobile apps that deliver exceptional user experiences and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Support
            </h2>
            <p className="text-xl text-gray-600">
              We develop for all major mobile platforms and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600">
              From simple utilities to complex enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-violet-500 mr-2" />
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our App Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From idea to app store in a structured, proven process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
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

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Mobile Apps
            </h2>
            <p className="text-xl text-gray-600">
              Successful apps we've built for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Smartphone size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full">
                      {project.platform}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current mr-1" size={16} />
                      <span className="text-sm font-medium">{project.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Download size={16} className="text-violet-500 mr-1" />
                      <span className="text-sm text-gray-600">{project.downloads} downloads</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle size={14} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              What our mobile app clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
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
      <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Turn your app idea into reality with our expert mobile development team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
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

export default MobileDevelopmentPage; 