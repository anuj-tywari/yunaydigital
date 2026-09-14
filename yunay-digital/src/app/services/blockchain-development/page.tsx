'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Blocks, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Coins,
  Lock,
  Globe,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

const BlockchainDevelopmentPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Immutable',
      description: 'Built with cryptographic security and immutable ledger technology.'
    },
    {
      icon: Zap,
      title: 'Fast Transactions',
      description: 'Optimized for high-speed transactions with minimal fees.'
    },
    {
      icon: Globe,
      title: 'Decentralized',
      description: 'Truly decentralized applications without single points of failure.'
    },
    {
      icon: Coins,
      title: 'Token Integration',
      description: 'Custom tokens, NFTs, and cryptocurrency integrations.'
    },
    {
      icon: Lock,
      title: 'Smart Contracts',
      description: 'Automated smart contracts with rigorous security audits.'
    }
  ];

  const services = [
    {
      title: 'DeFi Development',
      description: 'Build decentralized finance applications including DEXs, lending platforms, and yield farming protocols.',
      features: ['AMM Development', 'Liquidity Pools', 'Yield Farming', 'Flash Loans']
    },
    {
      title: 'NFT Platforms',
      description: 'Create NFT marketplaces, minting platforms, and digital collectible ecosystems.',
      features: ['Minting Platforms', 'Marketplace Development', 'Royalty Systems', 'Cross-chain NFTs']
    },
    {
      title: 'Smart Contracts',
      description: 'Develop secure, audited smart contracts for various blockchain applications.',
      features: ['Contract Auditing', 'Gas Optimization', 'Upgradeable Contracts', 'Multi-sig Wallets']
    },
    {
      title: 'dApp Development',
      description: 'Build full-stack decentralized applications with modern web technologies.',
      features: ['Web3 Integration', 'Wallet Connectivity', 'Real-time Updates', 'Mobile dApps']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-space-950 via-space-800 to-brand-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Blocks size={16} className="mr-2" />
              Blockchain Development Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future with{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blockchain Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create secure, scalable blockchain solutions that revolutionize industries. 
              From DeFi platforms to NFT marketplaces, we deliver cutting-edge decentralized applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
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
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Smart Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$100M+</div>
              <div className="text-gray-300">TVL Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-300">Blockchain Networks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Security Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Blockchain Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep blockchain expertise with modern development practices to deliver secure, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain development services to bring your vision to life.
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
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Blockchain Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your blockchain project and explore how we can help you leverage this revolutionary technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/works"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainDevelopmentPage; 