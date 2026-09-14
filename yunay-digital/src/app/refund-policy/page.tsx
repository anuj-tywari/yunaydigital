'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  DollarSign, 
  Clock, 
  FileText, 
  Mail, 
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const RefundPolicyPage = () => {
  const refundConditions = [
    {
      title: 'Project Cancellation Before Work Begins',
      icon: XCircle,
      status: 'Full Refund',
      description: 'If you cancel the project before we begin work, you are eligible for a full refund minus any payment processing fees.',
      timeframe: 'Within 48 hours of cancellation request'
    },
    {
      title: 'Project Cancellation After Work Begins',
      icon: AlertCircle,
      status: 'Partial Refund',
      description: 'Refunds will be calculated based on work completed. You will be charged for completed work and eligible for refund of remaining amount.',
      timeframe: 'Within 7 days of cancellation request'
    },
    {
      title: 'Service Delivery Issues',
      icon: CheckCircle,
      status: 'Case by Case',
      description: 'If we fail to deliver services as agreed, we will work to resolve issues or provide appropriate refunds.',
      timeframe: 'Within 30 days of delivery'
    },
    {
      title: 'Completed Projects',
      icon: CheckCircle,
      status: 'No Refund',
      description: 'Once a project is completed and delivered according to specifications, refunds are generally not available.',
      timeframe: 'N/A'
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Contact us via email or phone with your refund request and reason'
    },
    {
      step: 2,
      title: 'Review Process',
      description: 'We will review your request within 2-3 business days'
    },
    {
      step: 3,
      title: 'Decision',
      description: 'You will receive a decision and explanation within 5 business days'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Approved refunds will be processed within 7-10 business days'
    }
  ];

  const nonRefundable = [
    'Custom development work that has been delivered and accepted',
    'Third-party licenses and subscriptions purchased on your behalf',
    'Domain registration and hosting setup fees',
    'Consultation fees for time already spent',
    'Rush delivery charges and expedited service fees',
    'Training sessions that have been conducted',
    'Marketing campaigns that have been launched'
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
            <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
            <p className="text-lg text-gray-300 mt-4">
              This Refund Policy outlines our policies and procedures for refunds on services 
              provided by Yunay Digital Services Private Limited.
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
                At Yunay Digital Services Private Limited, we strive to provide high-quality services 
                that meet our clients' expectations. We understand that circumstances may change, and 
                we have established this refund policy to ensure fairness for both our clients and our business.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Refund eligibility depends on various factors including the type of service, project stage, 
                and specific circumstances. Please read this policy carefully to understand your rights and obligations.
              </p>
            </div>
          </motion.div>

          {/* Refund Conditions */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Refund Conditions</h2>
            <div className="space-y-6">
              {refundConditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        condition.status === 'Full Refund' ? 'bg-violet-100' :
                        condition.status === 'Partial Refund' ? 'bg-yellow-100' :
                        condition.status === 'Case by Case' ? 'bg-blue-100' :
                        'bg-red-100'
                      }`}>
                        <Icon size={24} className={
                          condition.status === 'Full Refund' ? 'text-violet-600' :
                          condition.status === 'Partial Refund' ? 'text-yellow-600' :
                          condition.status === 'Case by Case' ? 'text-blue-600' :
                          'text-red-600'
                        } />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{condition.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                            condition.status === 'Full Refund' ? 'bg-violet-100 text-violet-800' :
                            condition.status === 'Partial Refund' ? 'bg-yellow-100 text-yellow-800' :
                            condition.status === 'Case by Case' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {condition.status}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-2">{condition.description}</p>
                        <p className="text-sm text-gray-600">
                          <strong>Processing Time:</strong> {condition.timeframe}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Refund Process */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Refund Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-4">
                <DollarSign size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Refund Methods</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will be processed using the same payment method used for the original transaction:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Credit/Debit Cards</h3>
                  <p className="text-gray-700 text-sm">Refunds appear in 5-10 business days</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bank Transfer</h3>
                  <p className="text-gray-700 text-sm">Refunds processed in 3-7 business days</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Wallets</h3>
                  <p className="text-gray-700 text-sm">Refunds appear in 1-3 business days</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">UPI/Net Banking</h3>
                  <p className="text-gray-700 text-sm">Refunds processed in 2-5 business days</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Non-Refundable Items */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-6">Non-Refundable Items</h2>
              <p className="text-red-700 leading-relaxed mb-6">
                The following items are generally non-refundable:
              </p>
              <div className="space-y-3">
                {nonRefundable.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special Circumstances */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <AlertCircle size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Special Circumstances</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Force Majeure Events</h3>
                <p className="text-blue-700 text-sm">
                  In case of unforeseen circumstances beyond our control (natural disasters, pandemics, etc.), 
                  refund terms may be adjusted on a case-by-case basis.
                </p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <h3 className="font-semibold text-violet-900 mb-2">Service Guarantee</h3>
                <p className="text-violet-700 text-sm">
                  If we fail to deliver services according to agreed specifications and timeline, 
                  we will work to resolve issues or provide appropriate compensation.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">Dispute Resolution</h3>
                <p className="text-yellow-700 text-sm">
                  We encourage open communication to resolve any issues. If disputes arise, 
                  we will work together to find a mutually acceptable solution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Clock size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Important Timelines</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Refund Request Window</span>
                  <span className="text-gray-700">Within 30 days of service completion</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Response Time</span>
                  <span className="text-gray-700">2-3 business days</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Decision Timeline</span>
                  <span className="text-gray-700">5 business days</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium text-gray-900">Refund Processing</span>
                  <span className="text-gray-700">7-10 business days</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to update or modify this Refund Policy at any time. Changes will be 
              effective immediately upon posting on our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We recommend reviewing this policy periodically. Continued use of our services after 
              changes constitutes acceptance of the revised policy.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-fuchsia-50 to-blue-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us for Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about our refund policy or need to request a refund, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-fuchsia-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:billing@yunaydigital.com" className="text-fuchsia-600 hover:underline">
                    billing@yunaydigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-fuchsia-600" />
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

            <div className="mt-6 pt-6 border-t border-fuchsia-200">
              <p className="text-sm text-gray-600">
                When contacting us about refunds, please include your project details, 
                payment information, and reason for the refund request to expedite the process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage; 