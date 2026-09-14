'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Palette, 
  Eye, 
  Users, 
  Smartphone, 
  Monitor, 
  Tablet,
  CheckCircle,
  ArrowRight,
  Figma,
  Layers,
  MousePointer,
  TrendingUp,
  Star,
  Quote,
  Lightbulb,
  Target
} from 'lucide-react';

const UIUXDesignPage = () => {
  const services = [
    {
      icon: Eye,
      title: 'User Research',
      description: 'In-depth user research to understand your audience and their needs.'
    },
    {
      icon: Lightbulb,
      title: 'UX Strategy',
      description: 'Strategic approach to user experience design and information architecture.'
    },
    {
      icon: Layers,
      title: 'Wireframing',
      description: 'Detailed wireframes and prototypes to visualize user flows.'
    },
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Beautiful interfaces that align with your brand and convert users.'
    },
    {
      icon: MousePointer,
      title: 'Interaction Design',
      description: 'Smooth animations and micro-interactions for engaging experiences.'
    },
    {
      icon: Target,
      title: 'Usability Testing',
      description: 'Testing and optimization to ensure the best user experience.'
    }
  ];

  const designTypes = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Responsive websites and web applications',
      features: ['Landing Pages', 'Corporate Websites', 'E-commerce Stores', 'SaaS Platforms']
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'iOS and Android app interfaces',
      features: ['Native Apps', 'Hybrid Apps', 'Progressive Web Apps', 'Tablet Interfaces']
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Scalable design systems and component libraries',
      features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Brand Guidelines']
    },
    {
      icon: Users,
      title: 'Dashboard Design',
      description: 'Complex data visualization and admin interfaces',
      features: ['Analytics Dashboards', 'Admin Panels', 'CRM Systems', 'Data Visualization']
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Understanding your business goals, target audience, and market landscape.',
      deliverables: ['User Personas', 'Competitive Analysis', 'Project Requirements']
    },
    {
      step: '02',
      title: 'Information Architecture',
      description: 'Structuring content and creating user flows for optimal navigation.',
      deliverables: ['Site Maps', 'User Flows', 'Content Strategy']
    },
    {
      step: '03',
      title: 'Wireframing & Prototyping',
      description: 'Creating low and high-fidelity wireframes and interactive prototypes.',
      deliverables: ['Wireframes', 'Interactive Prototypes', 'User Journey Maps']
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Applying visual hierarchy, typography, and brand elements.',
      deliverables: ['Visual Mockups', 'Design System', 'Brand Guidelines']
    },
    {
      step: '05',
      title: 'Testing & Iteration',
      description: 'User testing and design refinement based on feedback.',
      deliverables: ['Usability Reports', 'Design Iterations', 'Final Assets']
    },
    {
      step: '06',
      title: 'Development Handoff',
      description: 'Preparing assets and specifications for development.',
      deliverables: ['Design Specifications', 'Asset Export', 'Developer Guidelines']
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce Redesign',
      category: 'Web Design',
      description: 'Complete redesign of an e-commerce platform resulting in 40% increase in conversions.',
      metrics: ['40% higher conversion', '60% less bounce rate', '300% more engagement'],
      technologies: ['Figma', 'Adobe XD', 'Principle']
    },
    {
      title: 'Banking Mobile App',
      category: 'Mobile Design',
      description: 'Intuitive mobile banking app with biometric security and seamless transactions.',
      metrics: ['4.9 App Store rating', '500K+ downloads', '95% user satisfaction'],
      technologies: ['Sketch', 'InVision', 'Framer']
    },
    {
      title: 'SaaS Dashboard',
      category: 'Dashboard Design',
      description: 'Complex analytics dashboard with real-time data visualization.',
      metrics: ['50% faster task completion', '80% user adoption', '90% positive feedback'],
      technologies: ['Figma', 'Chart.js', 'D3.js']
    }
  ];

  const tools = [
    { name: 'Figma', category: 'Design', icon: '🎨', description: 'Collaborative design tool' },
    { name: 'Adobe XD', category: 'Design', icon: '🎯', description: 'UI/UX design platform' },
    { name: 'Sketch', category: 'Design', icon: '💎', description: 'Vector graphics editor' },
    { name: 'InVision', category: 'Prototyping', icon: '🔗', description: 'Digital product design' },
    { name: 'Framer', category: 'Prototyping', icon: '⚡', description: 'Interactive prototyping' },
    { name: 'Principle', category: 'Animation', icon: '🎬', description: 'Timeline-based animation' }
  ];

  const testimonials = [
    {
      quote: "The UI/UX design by Yunay Digital transformed our user experience. Our app engagement increased by 300% and user complaints dropped to almost zero.",
      author: "Rachel Green",
      company: "TechFlow Inc.",
      rating: 5
    },
    {
      quote: "Exceptional design work! They understood our vision perfectly and created a design that not only looks great but also performs incredibly well.",
      author: "Alex Chen",
      company: "StartupHub",
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
              <Palette size={16} className="mr-2" />
              UI/UX Design Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Create Beautiful{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                User Experiences
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We design intuitive interfaces that delight users and drive business results. 
              From wireframes to pixel-perfect designs, we create experiences that convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Design Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Design Portfolio
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300">Designs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Design Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Design Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive UI/UX design services to create exceptional user experiences.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-6">
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

      {/* Design Types Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Design
            </h2>
            <p className="text-xl text-gray-600">
              From web to mobile, we design across all digital platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, featureIndex) => (
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

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to creating exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  {step.deliverables.map((deliverable, delIndex) => (
                    <div key={delIndex} className="flex items-center">
                      <CheckCircle size={14} className="text-violet-500 mr-2" />
                      <span className="text-sm text-gray-600">{deliverable}</span>
                    </div>
                  ))}
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
              Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools for professional design work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <span className="text-sm text-gray-500">{tool.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Design Work
            </h2>
            <p className="text-xl text-gray-600">
              Real projects with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Palette size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center">
                        <TrendingUp size={14} className="text-violet-500 mr-2" />
                        <span className="text-sm text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
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
              What Clients Say About Our Design
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied clients
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
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Let's create a design that delights your users and drives your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Design Project</span>
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

export default UIUXDesignPage; 