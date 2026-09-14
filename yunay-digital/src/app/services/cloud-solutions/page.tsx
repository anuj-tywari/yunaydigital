'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Lock,
  BarChart,
  Users,
  Settings,
  Upload,
  Download,
  Monitor,
  Star,
  Quote,
  Rocket,
  RefreshCw
} from 'lucide-react';

const CloudSolutionsPage = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance to industry standards and regulations.'
    },
    {
      icon: Zap,
      title: 'Auto Scaling',
      description: 'Automatic scaling based on demand to optimize performance and costs.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data backup, recovery, and management solutions.'
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and maintenance of your cloud infrastructure.'
    },
    {
      icon: Settings,
      title: 'DevOps Integration',
      description: 'CI/CD pipelines and DevOps practices for efficient development workflows.'
    }
  ];

  const platforms = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services cloud solutions', color: 'from-orange-500 to-orange-700' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure cloud platform', color: 'from-blue-500 to-blue-700' },
    { name: 'Google Cloud', icon: Cloud, description: 'Google Cloud Platform services', color: 'from-red-500 to-red-700' },
    { name: 'Digital Ocean', icon: Server, description: 'Simple cloud hosting solutions', color: 'from-blue-400 to-blue-600' }
  ];

  const serviceTypes = [
    {
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Virtual servers, storage, and networking resources on-demand',
      examples: ['Virtual Machines', 'Cloud Storage', 'Load Balancers', 'Content Delivery Networks']
    },
    {
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment environments in the cloud',
      examples: ['Application Hosting', 'Database Services', 'Development Tools', 'Runtime Environments']
    },
    {
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use software applications delivered over the internet',
      examples: ['CRM Systems', 'Email Services', 'Collaboration Tools', 'Business Applications']
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and recovery solutions for business continuity',
      examples: ['Data Backup', 'System Replication', 'Failover Solutions', 'Recovery Testing']
    }
  ];

  const projects = [
    {
      title: 'E-commerce Migration',
      description: 'Migrated a large e-commerce platform to AWS with 99.9% uptime and 40% cost reduction.',
      platform: 'AWS',
      savings: '40%',
      uptime: '99.9%',
      features: ['Auto-scaling', 'Load balancing', 'CDN integration', 'Database optimization']
    },
    {
      title: 'SaaS Platform Deployment',
      description: 'Deployed a multi-tenant SaaS application on Azure with global availability.',
      platform: 'Microsoft Azure',
      savings: '35%',
      uptime: '99.95%',
      features: ['Multi-region deployment', 'Auto-backup', 'Security compliance', 'Performance monitoring']
    },
    {
      title: 'Data Analytics Solution',
      description: 'Built a scalable data analytics platform on Google Cloud for real-time insights.',
      platform: 'Google Cloud',
      savings: '50%',
      uptime: '99.8%',
      features: ['Real-time processing', 'Machine learning', 'Data visualization', 'API integration']
    }
  ];

  const implementationProcess = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your current infrastructure and cloud migration strategy.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design scalable and secure cloud architecture tailored to your needs.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Migration Planning',
      description: 'Detailed migration plan with minimal downtime and risk mitigation.',
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute the migration with real-time monitoring and support.',
      duration: '3-6 weeks'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization of cloud systems.',
      duration: '1-2 weeks'
    },
    {
      step: '06',
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring, maintenance, and support for your cloud infrastructure.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      quote: "Yunay Digital's cloud migration service transformed our business. We achieved 99.9% uptime and reduced our infrastructure costs by 40%.",
      author: "James Wilson",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "The team's expertise in cloud architecture helped us scale our SaaS platform globally. Excellent support and implementation!",
      author: "Maria Garcia",
      company: "CloudFlow Inc.",
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
              <Cloud size={16} className="mr-2" />
              Cloud Services & Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Scale with{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud services. From migration to management, 
              we help you leverage the power of cloud computing for scalability, security, and cost efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Cloud Journey</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Cloud Projects
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Cloud Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Cloud Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end cloud solutions that drive business growth and operational efficiency.
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
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-600">
              We work with all major cloud providers to find the best fit for your needs
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

      {/* Service Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Cloud Services We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful cloud adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationProcess.map((step, index) => (
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
              Featured Cloud Projects
            </h2>
            <p className="text-xl text-gray-600">
              Successful cloud implementations for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Cloud size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full">
                      {project.platform}
                    </span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-violet-600 font-medium">{project.savings} savings</span>
                      <span className="text-violet-600 font-medium">{project.uptime} uptime</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
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
              What our cloud clients say about our services
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let our cloud experts help you design and implement the perfect cloud solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Cloud Consultation</span>
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

export default CloudSolutionsPage; 