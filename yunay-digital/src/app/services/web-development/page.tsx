'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Monitor,
  Cloud,
  Search,
  BarChart,
  Users,
  Star,
  Quote
} from 'lucide-react';

const WebDevelopmentPage = () => {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Websites that look perfect on all devices and screen sizes.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with lightning-fast load times.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built with security best practices and regular updates.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Search engine friendly architecture for better rankings.'
    },
    {
      icon: Database,
      title: 'Scalable Backend',
      description: 'Robust backend systems that grow with your business.'
    },
    {
      icon: Cloud,
      title: 'Cloud Ready',
      description: 'Deployed on reliable cloud infrastructure for 99.9% uptime.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', popularity: 95 },
    { name: 'Next.js', category: 'Framework', popularity: 90 },
    { name: 'TypeScript', category: 'Language', popularity: 88 },
    { name: 'Node.js', category: 'Backend', popularity: 85 },
    { name: 'MongoDB', category: 'Database', popularity: 82 },
    { name: 'PostgreSQL', category: 'Database', popularity: 80 }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      results: ['300% increase in sales', '50% faster checkout', '99.9% uptime']
    },
    {
      title: 'SaaS Dashboard',
      description: 'A comprehensive analytics dashboard for business intelligence.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      image: '/api/placeholder/400/250',
      results: ['40% improved efficiency', 'Real-time analytics', 'Custom reporting']
    },
    {
      title: 'Corporate Website',
      description: 'Modern corporate website with CMS integration and SEO optimization.',
      technologies: ['React', 'Gatsby', 'Contentful', 'Netlify'],
      image: '/api/placeholder/400/250',
      results: ['200% more leads', 'Top 3 Google ranking', 'Mobile-first design']
    }
  ];

  const testimonials = [
    {
      quote: "Yunay Digital created an amazing website that perfectly represents our brand. The attention to detail and technical expertise is outstanding.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      quote: "Our e-commerce platform built by Yunay Digital has increased our online sales by 300%. The team is professional and delivers on time.",
      author: "Michael Chen",
      company: "E-Commerce Pro",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and mockups to visualize the user experience and interface.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers build your website using modern technologies and best practices.',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and browsers to ensure perfect functionality.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing maintenance and support.',
      duration: 'Ongoing'
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
              <Code size={16} className="mr-2" />
              Web Development Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build Powerful{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Web Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create modern, scalable web applications that drive business growth. 
              From simple websites to complex web platforms, we deliver solutions that exceed expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2-6</div>
              <div className="text-gray-300">Weeks Delivery</div>
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
              Why Choose Our <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Web Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  <span className="text-sm text-gray-500">{tech.category}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.popularity}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-1">{tech.popularity}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="text-sm text-violet-600 font-medium">Duration: {step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Monitor size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-600">{result}</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
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

export default WebDevelopmentPage; 