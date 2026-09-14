'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Mail, Phone } from 'lucide-react';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.',
      examples: ['Session cookies', 'Security cookies', 'Load balancing cookies']
    },
    {
      title: 'Analytics Cookies',
      icon: Eye,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.',
      examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis']
    },
    {
      title: 'Marketing Cookies',
      icon: Settings,
      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts.',
      examples: ['Social media pixels', 'Advertising cookies', 'Remarketing cookies']
    },
    {
      title: 'Preference Cookies',
      icon: Cookie,
      description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.',
      examples: ['Language preferences', 'Theme settings', 'User customizations']
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance tracking',
      dataCollection: 'Usage statistics, page views, user interactions',
      optOut: 'https://tools.google.com/dlpage/gaoptout'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertisement delivery and remarketing',
      dataCollection: 'Ad interactions, conversion tracking',
      optOut: 'https://adssettings.google.com/'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media marketing and analytics',
      dataCollection: 'Website interactions, conversion events',
      optOut: 'https://www.facebook.com/settings/?tab=ads'
    },
    {
      name: 'LinkedIn Insight Tag',
      purpose: 'Professional network marketing analytics',
      dataCollection: 'Page views, conversions, user demographics',
      optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out'
    }
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
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
            <p className="text-lg text-gray-300 mt-4">
              This Cookie Policy explains how Yunay Digital Services Private Limited uses cookies and 
              similar technologies when you visit our website.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and to 
                provide information to the owners of the site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies allow us to recognize your device and store some information about your preferences 
                or past actions on our website to enhance your browsing experience.
              </p>
            </div>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-violet-800 mb-3">Website Functionality</h3>
                <p className="text-violet-700 text-sm">
                  To remember your preferences, login status, and provide a seamless browsing experience.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Performance Analysis</h3>
                <p className="text-blue-700 text-sm">
                  To understand how visitors use our website and identify areas for improvement.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Marketing Optimization</h3>
                <p className="text-purple-700 text-sm">
                  To deliver relevant advertisements and measure the effectiveness of our marketing campaigns.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use several third-party services that may place cookies on your device:
            </p>
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-700 mb-2">{service.purpose}</p>
                      <p className="text-sm text-gray-600">Collects: {service.dataCollection}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <a
                        href={service.optOut}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        Opt Out
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings preferences. 
                You can usually find these settings in the "options" or "preferences" menu of your browser.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Browser Settings:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li>• <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li>• <strong>Edge:</strong> Settings → Privacy & Security → Cookies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Options:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Accept all cookies</li>
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Ask before accepting cookies</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact of Disabling Cookies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-yellow-700 leading-relaxed mb-4">
                Please note that if you disable cookies, some features of our website may not function properly:
              </p>
              <ul className="space-y-2 text-yellow-700">
                <li>• Login sessions may not persist</li>
                <li>• Preferences and settings may not be saved</li>
                <li>• Some interactive features may not work</li>
                <li>• Website performance may be affected</li>
                <li>• Personalized content may not be available</li>
              </ul>
            </div>
          </motion.div>

          {/* Updates to Cookie Policy */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will notify you of any material changes by posting the new Cookie Policy on this page 
              and updating the "Last updated" date.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:privacy@yunaydigital.com" className="text-orange-600 hover:underline">
                    privacy@yunaydigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-600" />
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

export default CookiePolicyPage; 