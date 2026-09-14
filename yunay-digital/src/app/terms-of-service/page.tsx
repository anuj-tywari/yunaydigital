'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle, 
  Mail, 
  Phone,
  Clock,
  CreditCard,
  Users,
  Globe,
  Lock
} from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: 'By accessing and using the services provided by Yunay Digital Services Private Limited ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      icon: Scale,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on our website, or remove any copyright or other proprietary notations from the materials.'
    },
    {
      title: 'Service Terms',
      icon: Shield,
      content: 'Our services are provided "as is" and we make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations',
      icon: AlertTriangle,
      content: 'In no event shall Yunay Digital Services Private Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.'
    }
  ];

  const serviceTerms = [
    {
      title: 'Project Scope',
      icon: FileText,
      description: 'All projects will be clearly defined in a separate statement of work (SOW) or project agreement that outlines deliverables, timelines, and costs.'
    },
    {
      title: 'Payment Terms',
      icon: CreditCard,
      description: 'Payment terms will be specified in each project agreement. Generally, we require a deposit before work begins and progress payments throughout the project.'
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      description: 'Upon full payment, you will own the rights to the final deliverables. We retain the right to use the work for portfolio and marketing purposes.'
    },
    {
      title: 'Confidentiality',
      icon: Lock,
      description: 'We respect your confidential information and will not disclose it to third parties without your consent, except as required by law.'
    },
    {
      title: 'Project Timeline',
      icon: Clock,
      description: 'Project timelines are estimates based on the agreed scope. Delays may occur due to client feedback cycles, change requests, or unforeseen technical challenges.'
    },
    {
      title: 'Support and Maintenance',
      icon: Users,
      description: 'Post-launch support and maintenance terms will be outlined in separate service agreements if applicable.'
    }
  ];

  const userResponsibilities = [
    'Provide accurate and complete information when requesting services',
    'Respond to our requests for information in a timely manner',
    'Provide necessary access to systems, accounts, and resources',
    'Review and approve deliverables within agreed timeframes',
    'Make payments according to the agreed schedule',
    'Respect intellectual property rights and licensing terms',
    'Use our services only for lawful purposes',
    'Maintain the confidentiality of any login credentials provided'
  ];

  const prohibited = [
    'Violate any applicable laws or regulations',
    'Infringe upon intellectual property rights',
    'Transmit malicious code or viruses',
    'Attempt to gain unauthorized access to our systems',
    'Use our services for spam or unsolicited communications',
    'Reverse engineer or attempt to extract source code',
    'Resell or redistribute our services without permission',
    'Interfere with the proper functioning of our services'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-space-950 via-space-800 to-brand-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
            <p className="text-lg text-gray-300 mt-4">
              These terms and conditions govern your use of our website and services provided by 
              Yunay Digital Services Private Limited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Yunay Digital Services Private Limited. These Terms of Service ("Terms") govern your 
                use of our website located at yunaydigital.com and our software development, design, 
                and digital marketing services (the "Service") operated by Yunay Digital Services Private Limited.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our Service. Your access to and use of 
                the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </div>
          </motion.div>

          {/* Main Sections */}
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            );
          })}

          {/* Service-Specific Terms */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Service-Specific Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceTerms.map((term, index) => {
                const Icon = term.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {term.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {term.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a client or user of our services, you agree to:
            </p>
            <div className="space-y-3">
              {userResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{responsibility}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prohibited Uses */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-6">Prohibited Uses</h2>
              <p className="text-red-700 leading-relaxed mb-6">
                You may not use our services to:
              </p>
              <div className="space-y-3">
                {prohibited.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Payment and Billing */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <CreditCard size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Payment and Billing</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Payment Terms:</strong> Payment terms are specified in individual project agreements. 
                We typically require a deposit before project commencement and may request progress payments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Late Payments:</strong> Late payments may result in project delays and may incur 
                additional charges as specified in your agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Refund Policy:</strong> Refunds are handled on a case-by-case basis and are subject 
                to the terms outlined in your specific project agreement.
              </p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate the service agreement with written notice as specified in the 
              individual project agreement. Upon termination:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• You remain responsible for payment of all work completed up to the termination date</li>
              <li>• We will provide all work product completed as of the termination date</li>
              <li>• Both parties' confidentiality obligations continue beyond termination</li>
              <li>• We may retain copies of work for our records and portfolio use</li>
            </ul>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-800 mb-6">Disclaimer</h2>
              <p className="text-yellow-700 leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent 
                permitted by law, we exclude all representations, warranties, conditions, and terms 
                relating to our website and the use of this website.
              </p>
              <p className="text-yellow-700 leading-relaxed">
                Nothing in this disclaimer will limit or exclude our or your liability for death or 
                personal injury, fraud, or fraudulent misrepresentation, or any liability that cannot 
                be excluded or limited under applicable law.
              </p>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Globe size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of India. Any disputes arising 
              under these Terms shall be subject to the exclusive jurisdiction of the courts in 
              Gurugram, Haryana, India.
            </p>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to update or modify these Terms at any time without prior notice. 
              Your continued use of the Service after any such changes constitutes your acceptance of 
              the new Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will post the updated Terms on this page and update the "Last updated" date at the top 
              of these Terms.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-violet-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:legal@yunaydigital.com" className="text-violet-600 hover:underline">
                    legal@yunaydigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-violet-600" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <span className="text-gray-700">+91 79-77704812</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="font-semibold text-gray-900 mb-2">Mailing Address:</p>
              <p className="text-gray-700">
                Yunay Digital Services Private Limited<br />
                The Circle, Unitech Trade Center<br />
                Gurugram, Haryana, India
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage; 