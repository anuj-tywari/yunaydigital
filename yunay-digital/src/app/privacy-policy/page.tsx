'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, company name, and any other information you choose to provide.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect certain information about your device when you use our services, including your IP address, browser type, operating system, and information about your use of our services.'
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          text: 'We use cookies and similar tracking technologies to track activity on our service and store certain information. You can set your browser to refuse all or some browser cookies.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about our services.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to send you technical notices, updates, security alerts, and support and administrative messages.'
        },
        {
          subtitle: 'Marketing',
          text: 'With your consent, we may use your information to send you promotional communications about new features, products, events, or other opportunities.'
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: Lock,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Encryption',
          text: 'We use industry-standard encryption to protect sensitive information transmitted online. We also protect your information offline by storing it in secure, access-controlled facilities.'
        },
        {
          subtitle: 'Regular Audits',
          text: 'We regularly review our security practices and update them as necessary to ensure the continued protection of your information.'
        }
      ]
    }
  ];

  const rights = [
    'Access and receive a copy of your personal information',
    'Rectify inaccurate or incomplete personal information',
    'Erase your personal information in certain circumstances',
    'Restrict the processing of your personal information',
    'Object to the processing of your personal information',
    'Data portability in certain circumstances',
    'Withdraw consent where processing is based on consent'
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
            <p className="text-lg text-gray-300 mt-4">
              Your privacy is important to us. This Privacy Policy explains how Yunay Digital Services Private Limited 
              collects, uses, and protects your information when you use our services.
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
                Yunay Digital Services Private Limited ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with our policies and practices, do not use our services.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Your Rights Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-4">
                <Users size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>

            <div className="space-y-3">
              {rights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cookies Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small data files stored on your device that help us provide and improve our services.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </div>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes for which 
              it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When we no longer need your personal information, we will securely delete or anonymize it.
            </p>
          </motion.div>

          {/* International Transfers */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers are made in accordance with applicable data protection laws 
              and with appropriate safeguards in place to protect your information.
            </p>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this 
              Privacy Policy are effective when they are posted on this page.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:privacy@yunaydigital.com" className="text-blue-600 hover:underline">
                    privacy@yunaydigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600" />
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

export default PrivacyPolicyPage; 