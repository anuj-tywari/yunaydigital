'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Code,
  Palette,
  TrendingUp
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and creative solutions to deliver cutting-edge digital experiences.',
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, ensuring robust, scalable, and secure solutions.',
      color: 'from-fuchsia-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver, bringing enthusiasm to every challenge.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve their goals.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market demands, ensuring timely delivery.',
      color: 'from-violet-600 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We think globally while acting locally, bringing world-class solutions to businesses everywhere.',
      color: 'from-fuchsia-600 to-violet-600'
    }
  ];

  const team = [
    {
      name: 'Anuj Tiwari',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years of experience in software development and business strategy.',
      image: '/team/anuj.jpg',
      skills: ['Leadership', 'Strategy', 'Full-Stack Development']
    },
    {
      name: 'Rajkumar Tiwari',
      role: 'CTO',
      description: 'Technology expert specializing in cloud architecture, scalable solutions, and enterprise-level system design.',
      image: '/team/rajkumar.jpg',
      skills: ['Cloud Architecture', 'DevOps', 'System Design', 'Technical Leadership']
    },
    {
      name: 'Shivangu Tiwari',
      role: 'Development Lead',
      description: 'Experienced development leader focused on delivering high-quality software solutions and mentoring development teams.',
      image: '/team/shivangu.jpg',
      skills: ['Full-Stack Development', 'Team Leadership', 'Code Architecture', 'Technical Mentoring']
    },
    {
      name: 'Nidhi Wadhwa',
      role: 'Lead Designer',
      description: 'Creative design leader with expertise in user-centered design and creating beautiful, intuitive interfaces.',
      image: '/team/nidhi.jpg',
      skills: ['UI/UX Design', 'Design Systems', 'User Research', 'Branding']
    },
    {
      name: 'Sunny Tiwari',
      role: 'Product Lead',
      description: 'Product strategy expert focused on delivering user-centric solutions and driving product innovation.',
      image: '/team/sunny.jpg',
      skills: ['Product Strategy', 'User Experience', 'Market Research', 'Product Development']
    },
    {
      name: 'Anmol Chauhan',
      role: 'Lead Business Analyst',
      description: 'Business analysis specialist ensuring projects align with business objectives and stakeholder requirements.',
      image: '/team/anmol.jpg',
      skills: ['Business Analysis', 'Requirements Gathering', 'Process Optimization', 'Stakeholder Management']
    },
    {
      name: 'Ashwin Tiwari',
      role: 'QA Lead',
      description: 'Quality assurance expert ensuring the highest standards of software quality and performance.',
      image: '/team/ashwin.jpg',
      skills: ['Quality Assurance', 'Test Automation', 'Performance Testing', 'Quality Standards']
    },
    {
      name: 'Ranjan Kumar Soni',
      role: 'Project Manager',
      description: 'Experienced project manager ensuring smooth delivery, timeline adherence, and client satisfaction.',
      image: '/team/ranjan.jpg',
      skills: ['Project Management', 'Agile Methodologies', 'Client Relations', 'Team Coordination']
    },
    {
      name: 'Utkarsh Tiwari',
      role: 'Technical Lead',
      description: 'Seasoned technical leader with expertise in software architecture, development best practices, and team mentorship.',
      image: '/team/utkarsh.jpg',
      skills: ['Technical Leadership', 'Software Architecture', 'Code Review', 'Team Mentoring']
    },
    {
      name: 'Dharmendra Kumar Mishra',
      role: 'Technical Lead',
      description: 'Expert technical lead specializing in scalable system design, performance optimization, and technical innovation.',
      image: '/team/dharmendra.jpg',
      skills: ['System Design', 'Performance Optimization', 'Technical Strategy', 'Innovation']
    },
    {
      name: 'Pooja Joshi',
      role: 'Scrum Master',
      description: 'Certified Scrum Master focused on agile practices, team facilitation, and ensuring continuous improvement.',
      image: '/team/pooja.jpg',
      skills: ['Scrum Methodology', 'Agile Coaching', 'Team Facilitation', 'Process Improvement']
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
              description: 'Yunay Digital Services Private Limited was established with a vision to transform businesses through technology.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 15+ talented professionals across development, design, and marketing.'
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Received industry awards for our innovative mobile app development work.'
    },
    {
      year: '2023',
      title: '100+ Projects',
      description: 'Achieved the milestone of completing 100+ successful projects for clients worldwide.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions and became a certified AI development partner.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '11+', label: 'Core Team Members', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target }
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
              About{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Yunay Digital Services Private Limited
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and strategists dedicated to 
              transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Mission & Vision */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Target className="text-violet-600 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance efficiency, and create meaningful connections with their customers. 
                  We strive to be the bridge between innovative technology and business success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Eye className="text-fuchsia-600 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading digital transformation partner, recognized globally for our 
                  innovation, quality, and commitment to client success. We envision a future where 
                  every business can leverage technology to reach its full potential.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center bg-gradient-to-br from-white to-violet-50 rounded-xl p-6 shadow-lg border border-violet-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-violet-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our <span className="text-violet-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-violet-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              From a small startup to a growing digital agency - here's our story.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-violet-400 to-fuchsia-600"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gradient-to-br from-white to-violet-50 rounded-xl p-6 shadow-lg border border-violet-100">
                    <div className="text-2xl font-bold text-violet-600 mb-2">{milestone.year}</div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Circle on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-violet-600">Amazing Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              The talented people behind our success and your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center relative z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={40} />
                    </div>
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-violet-100 text-sm mt-2">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-violet-100 text-violet-800 text-xs rounded-full border border-violet-200"
                      >
                        {skill}
                      </span>
                    ))}
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
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Let's work together to bring your ideas to life and transform your business through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-violet-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/works"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 