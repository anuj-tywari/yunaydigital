'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Filter,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  Eye,
  ArrowRight,
  Calendar,
  Users,
  Award,
  X
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  team: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  results: string[];
  image: string;
  color: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

const WorksPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Memoized filter handler to prevent unnecessary re-renders
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);

  // Memoized modal handlers
  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'marketing', name: 'Digital Marketing', icon: TrendingUp }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'TechMart',
      year: '2024',
      duration: '4 months',
      team: '6 people',
      shortDescription: 'A comprehensive e-commerce platform with advanced features and modern design.',
      fullDescription: 'We developed a full-featured e-commerce platform for TechMart, including inventory management, payment processing, order tracking, and a sophisticated admin dashboard. The platform increased their online sales by 300% within the first quarter.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Multi-vendor marketplace',
        'Advanced search and filtering',
        'Real-time inventory management',
        'Secure payment processing',
        'Mobile-responsive design',
        'Admin analytics dashboard'
      ],
      results: [
        '300% increase in online sales',
        '50% reduction in cart abandonment',
        '40% improvement in page load speed',
        '95% customer satisfaction rate'
      ],
      image: '/projects/ecommerce.jpg',
      color: 'from-violet-500 to-fuchsia-500',
      liveUrl: 'https://techmart-demo.com',
      githubUrl: 'https://github.com/yunaydigital/techmart'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      client: 'SecureBank',
      year: '2024',
      duration: '6 months',
      team: '8 people',
      shortDescription: 'Secure and user-friendly mobile banking application with biometric authentication.',
      fullDescription: 'A comprehensive mobile banking solution featuring biometric authentication, real-time transactions, budget tracking, and investment portfolio management. The app serves over 100,000 active users.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      features: [
        'Biometric authentication',
        'Real-time transactions',
        'Budget tracking',
        'Investment portfolio',
        'Bill payment system',
        'Customer support chat'
      ],
      results: [
        '100,000+ active users',
        '99.9% uptime achieved',
        '4.8/5 app store rating',
        '60% increase in mobile transactions'
      ],
      image: '/projects/banking-app.jpg',
      color: 'from-fuchsia-500 to-cyan-500',
      liveUrl: 'https://securebank-app.com',
      githubUrl: null
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'design',
      client: 'MedCare Systems',
      year: '2024',
      duration: '3 months',
      team: '4 people',
      shortDescription: 'Intuitive dashboard design for healthcare professionals to manage patient data.',
      fullDescription: 'Designed a comprehensive healthcare dashboard that helps medical professionals efficiently manage patient records, appointments, and medical histories. The interface prioritizes ease of use and accessibility.',
      technologies: ['Figma', 'Adobe XD', 'React', 'D3.js', 'Material-UI'],
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Medical history tracking',
        'Data visualization',
        'Accessibility compliance',
        'Mobile responsive design'
      ],
      results: [
        '75% reduction in data entry time',
        '90% user satisfaction score',
        'WCAG 2.1 AA compliant',
        '50% faster patient processing'
      ],
      image: '/projects/healthcare-dashboard.jpg',
      color: 'from-purple-500 to-violet-500',
      liveUrl: 'https://medcare-dashboard.com',
      githubUrl: 'https://github.com/yunaydigital/medcare-dashboard'
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      client: 'StartupX',
      year: '2023',
      duration: '2 months',
      team: '5 people',
      shortDescription: 'Comprehensive digital marketing campaign that increased brand awareness by 400%.',
      fullDescription: 'Executed a multi-channel digital marketing campaign including SEO optimization, social media marketing, content creation, and paid advertising. The campaign successfully launched StartupX\'s new product line.',
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp'],
      features: [
        'SEO optimization',
        'Social media marketing',
        'Content marketing',
        'PPC advertising',
        'Email marketing',
        'Analytics and reporting'
      ],
      results: [
        '400% increase in brand awareness',
        '250% boost in website traffic',
        '180% improvement in conversion rate',
        '300% growth in social media followers'
      ],
      image: '/projects/marketing-campaign.jpg',
      color: 'from-cyan-500 to-blue-500',
      liveUrl: 'https://startupx-campaign.com',
      githubUrl: null
    },
    {
      id: 5,
      title: 'SaaS Management Platform',
      category: 'web',
      client: 'CloudTech',
      year: '2023',
      duration: '8 months',
      team: '10 people',
      shortDescription: 'Enterprise SaaS platform for managing cloud infrastructure and resources.',
      fullDescription: 'Built a comprehensive SaaS platform that helps enterprises manage their cloud infrastructure, monitor resource usage, and optimize costs. The platform handles thousands of cloud resources across multiple providers.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Kubernetes', 'AWS'],
      features: [
        'Multi-cloud support',
        'Resource monitoring',
        'Cost optimization',
        'Auto-scaling',
        'Security compliance',
        'Team collaboration'
      ],
      results: [
        '40% reduction in cloud costs',
        '99.99% platform uptime',
        '500+ enterprise clients',
        '85% customer retention rate'
      ],
      image: '/projects/saas-platform.jpg',
      color: 'from-violet-600 to-purple-600',
      liveUrl: 'https://cloudtech-platform.com',
      githubUrl: 'https://github.com/yunaydigital/cloudtech-platform'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      client: 'QuickEats',
      year: '2023',
      duration: '5 months',
      team: '7 people',
      shortDescription: 'Feature-rich food delivery app with real-time tracking and seamless ordering.',
      fullDescription: 'Developed a comprehensive food delivery application with features like real-time order tracking, multiple payment options, restaurant discovery, and a robust delivery management system for drivers.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
      features: [
        'Real-time order tracking',
        'Restaurant discovery',
        'Multiple payment options',
        'Delivery management',
        'Reviews and ratings',
        'Push notifications'
      ],
      results: [
        '50,000+ downloads in first month',
        '4.7/5 app store rating',
        '35% increase in order volume',
        '90% customer retention rate'
      ],
      image: '/projects/food-delivery.jpg',
      color: 'from-fuchsia-600 to-violet-600',
      liveUrl: 'https://quickeats-app.com',
      githubUrl: 'https://github.com/yunaydigital/quickeats'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 group cursor-pointer"
      onClick={() => handleProjectSelect(project)}
    >
      <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code size={40} />
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-violet-100 text-sm mt-2">{project.client}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
            <Calendar size={16} className="text-white" />
          </div>
          <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
            <Eye size={16} className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-violet-600 text-sm font-medium">{project.client} • {project.year}</p>
          </div>
          <span className="text-xs bg-violet-100 text-violet-800 px-3 py-1 rounded-full">
            {categories.find(cat => cat.id === project.category)?.name}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{project.team}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 bg-violet-100 text-violet-800 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            className="text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              handleProjectSelect(project);
            }}
          >
            View Details <ArrowRight size={14} className="ml-1" />
          </button>
          <div className="flex space-x-2">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-violet-100 hover:bg-violet-200 rounded-full transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} className="text-violet-600" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20">
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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of successful projects and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-violet-50 hover:text-violet-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-violet-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise across different technologies and industries.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={`${activeFilter}-${project.id}`} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed', icon: Award },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '98%', label: 'Success Rate', icon: TrendingUp },
              { number: '24/7', label: 'Support Available', icon: Globe }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center bg-gradient-to-br from-white to-violet-50 rounded-xl p-8 shadow-lg border border-violet-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-violet-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Let's work together to create something amazing. Get in touch and let's discuss your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-violet-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-64 bg-gradient-to-br ${selectedProject.color} relative`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleModalClose();
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors z-50"
                  type="button"
                  aria-label="Close modal"
                  style={{ zIndex: 9999 }}
                >
                  <X className="text-white" size={20} />
                </button>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-white text-center">
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-violet-100">{selectedProject.client} • {selectedProject.year}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.fullDescription}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="bg-violet-50 rounded-lg p-3">
                          <span className="text-violet-700 font-medium text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Project Details</h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Team Size:</span>
                          <span className="font-medium">{selectedProject.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Year:</span>
                          <span className="font-medium">{selectedProject.year}</span>
                        </div>
                      </div>
                      
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-violet-100 text-violet-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            View Live
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                          >
                            <Github size={16} className="mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorksPage; 