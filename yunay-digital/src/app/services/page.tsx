'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database,
  Cloud,
  Settings,
  Search,
  BarChart,
  Users,
  MessageCircle,
  Blocks,
  Brain
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      shortDescription: 'Custom web applications built with modern technologies and best practices.',
      fullDescription: 'We create powerful, scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and modern frameworks. Our team focuses on performance, security, and user experience.',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization',
        'SEO-Friendly Architecture',
        'Cross-browser Compatibility'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
      color: 'from-violet-500 to-fuchsia-500',
      pricing: 'Starting from $2,500'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
      fullDescription: 'Build engaging mobile experiences with our expert team. We develop both native and cross-platform applications using React Native, Flutter, and native iOS/Android technologies.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Payment Integration',
        'Analytics & Tracking'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-fuchsia-500 to-cyan-500',
      pricing: 'Starting from $5,000'
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that enhance user experience.',
      fullDescription: 'Our design team creates stunning user interfaces and experiences that not only look great but also convert. We focus on user research, wireframing, prototyping, and visual design.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Brand Identity',
        'Design Systems',
        'Usability Testing',
        'Responsive Design',
        'Accessibility Compliance'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle'],
      color: 'from-purple-500 to-violet-500',
      pricing: 'Starting from $1,500'
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      shortDescription: 'Data-driven marketing strategies to grow your online presence.',
      fullDescription: 'Boost your online presence with our comprehensive digital marketing services. We help businesses reach their target audience and achieve measurable growth through strategic campaigns.',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting',
        'Conversion Optimization',
        'Brand Strategy'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp'],
      color: 'from-cyan-500 to-blue-500',
      pricing: 'Starting from $1,000/month'
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      shortDescription: 'Scalable cloud infrastructure and deployment solutions.',
      fullDescription: 'Leverage the power of cloud computing with our expert cloud solutions. We help businesses migrate, deploy, and manage applications on leading cloud platforms.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'DevOps Implementation',
        'Security & Compliance',
        'Cost Optimization',
        'Monitoring & Logging',
        '24/7 Support'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      color: 'from-violet-600 to-purple-600',
      pricing: 'Custom Pricing'
    },
    {
      id: 'blockchain-development',
      icon: Blocks,
      title: 'Blockchain Development',
      shortDescription: 'Secure, scalable blockchain solutions and decentralized applications.',
      fullDescription: 'Build the future with our blockchain expertise. We create secure DeFi platforms, NFT marketplaces, smart contracts, and decentralized applications using cutting-edge blockchain technologies.',
      features: [
        'Smart Contract Development',
        'DeFi Platform Creation',
        'NFT Marketplace Development',
        'Cryptocurrency Integration',
        'Blockchain Consulting',
        'Security Auditing',
        'Multi-chain Solutions',
        'dApp Development'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Polygon', 'Hardhat', 'IPFS'],
      color: 'from-purple-500 to-blue-500',
      pricing: 'Starting from $10,000'
    },
    {
      id: 'ai-ml-development',
      icon: Brain,
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      fullDescription: 'Transform your business with AI and ML solutions. We develop custom machine learning models, computer vision systems, natural language processing applications, and intelligent automation.',
      features: [
        'Custom ML Model Development',
        'Computer Vision Solutions',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI-powered Automation',
        'Recommendation Systems',
        'Chatbot Development',
        'Data Science Consulting'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'OpenCV'],
      color: 'from-indigo-500 to-purple-500',
      pricing: 'Starting from $8,000'
    },
    {
      id: 'consulting',
      icon: Settings,
      title: 'Technology Consulting',
      shortDescription: 'Strategic technology guidance for business growth.',
      fullDescription: 'Get expert advice on technology strategy, digital transformation, and business process optimization. Our consultants help you make informed decisions about your technology investments.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Architecture Review',
        'Security Assessment',
        'Performance Audit',
        'Cost Analysis',
        'Implementation Roadmap'
      ],
      technologies: ['Various based on needs'],
      color: 'from-fuchsia-600 to-violet-600',
      pricing: 'Starting from $150/hour'
    }
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Discovery',
      description: 'We start by understanding your business goals, requirements, and challenges.'
    },
    {
      icon: Palette,
      title: 'Planning & Design',
      description: 'Our team creates detailed plans, wireframes, and designs for your project.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build your solution using agile methodology with regular updates.'
    },
    {
      icon: Shield,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution is bug-free and performs optimally.'
    },
    {
      icon: Zap,
      title: 'Launch',
      description: 'We deploy your solution and ensure a smooth go-live process.'
    },
    {
      icon: Settings,
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your solution running smoothly.'
    }
  ];

  const testimonials = [
    {
              quote: "Yunay Digital Services Private Limited delivered an exceptional e-commerce platform that increased our sales by 300%.",
      author: "John Smith",
      company: "TechMart"
    },
    {
      quote: "Their mobile app development expertise helped us reach millions of users worldwide.",
      author: "Sarah Johnson",
      company: "StartupX"
    },
    {
      quote: "Outstanding design work that perfectly captured our brand and improved user engagement.",
      author: "Mike Chen",
      company: "DesignCorp"
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-space-950 via-space-800 to-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="bg-gradient-to-br from-white to-violet-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="bg-violet-50 rounded-lg p-3 mb-6">
                    <p className="text-sm text-violet-700 font-medium">{service.pricing}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-violet-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-violet-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-violet-100 text-violet-800 text-xs rounded-full border border-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-violet-600">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-violet-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-violet-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-violet-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-violet-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 