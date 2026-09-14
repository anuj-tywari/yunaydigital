'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cpu, 
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart,
  Eye,
  Mic,
  TrendingUp,
  Users,
  Star,
  Database,
  Bot,
  Target
} from 'lucide-react';

const AIMLDevelopmentPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Custom AI solutions using state-of-the-art machine learning algorithms.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis systems.'
    },
    {
      icon: Mic,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and conversational AI solutions.'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting for business intelligence.'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate complex processes with AI-powered decision making.'
    },
    {
      icon: Target,
      title: 'Personalization',
      description: 'AI-driven recommendation systems and personalized experiences.'
    }
  ];

  const services = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for classification, regression, clustering, and deep learning applications.',
      features: ['Custom Model Development', 'Model Training & Optimization', 'Feature Engineering', 'Model Deployment']
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis systems for various industry applications.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Medical Imaging']
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, chatbots, and language understanding systems.',
      features: ['Sentiment Analysis', 'Chatbot Development', 'Text Classification', 'Language Translation']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Business intelligence and predictive analytics powered by artificial intelligence.',
      features: ['Predictive Modeling', 'Anomaly Detection', 'Business Intelligence', 'Real-time Analytics']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-space-950 via-space-800 to-brand-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <Brain size={16} className="mr-2" />
              AI & Machine Learning Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Unlock Intelligence with{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI and ML solutions. 
              From computer vision to natural language processing, we build intelligent systems that drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Your AI Project</span>
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
              <div className="text-gray-300">AI Models Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI & ML Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies to create intelligent solutions that transform businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-indigo-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI & ML Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions power innovation across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Healthcare', description: 'Medical imaging, diagnosis assistance, and patient care optimization.' },
              { title: 'Finance', description: 'Fraud detection, risk assessment, and algorithmic trading systems.' },
              { title: 'Retail & E-commerce', description: 'Recommendation engines, inventory optimization, and customer insights.' },
              { title: 'Manufacturing', description: 'Predictive maintenance, quality control, and supply chain optimization.' },
              { title: 'Education', description: 'Personalized learning, automated grading, and educational analytics.' },
              { title: 'Transportation', description: 'Route optimization, autonomous systems, and traffic management.' }
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building intelligent solutions that deliver results.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Problem Analysis & Data Assessment',
                description: 'We analyze your business problem and assess data quality and availability for AI solutions.',
                duration: '1-2 weeks'
              },
              {
                step: '02',
                title: 'Algorithm Selection & Model Design',
                description: 'Choose the right AI/ML algorithms and design the model architecture.',
                duration: '2-3 weeks'
              },
              {
                step: '03',
                title: 'Data Preparation & Training',
                description: 'Clean, preprocess data, and train the AI models with optimization.',
                duration: '4-8 weeks'
              },
              {
                step: '04',
                title: 'Testing & Validation',
                description: 'Comprehensive testing and validation to ensure model accuracy and reliability.',
                duration: '2-3 weeks'
              },
              {
                step: '05',
                title: 'Deployment & Monitoring',
                description: 'Deploy the AI solution and provide continuous monitoring and improvements.',
                duration: 'Ongoing'
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-indigo-600 font-medium">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your AI project and explore how we can help you build intelligent solutions that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/works"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
            >
              View AI Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMLDevelopmentPage; 