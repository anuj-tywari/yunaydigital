'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import SuccessModal from './SuccessModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Blockchain Development', href: '/services/blockchain-development' },
    { name: 'AI & Machine Learning', href: '/services/ai-ml-development' },
    { name: 'All Services', href: '/services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/yunay-digital-services' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yunaydigital' },
    { name: 'Github', icon: Github, href: 'https://github.com/yunaydigital' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/yunaydigital' }
  ];

  return (
    <footer className="relative bg-space-950 text-white overflow-hidden">
      {/* Radiant top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent" />

      {/* Aurora glows */}
      <div className="aurora w-96 h-96 bg-violet-600/30 -top-40 -left-24" />
      <div className="aurora w-80 h-80 bg-cyan-500/20 bottom-0 right-0" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" variant="dark" />
            </div>
            <p className="text-violet-200/70 mb-6 leading-relaxed">
              We craft radiant digital products — web, mobile, cloud, AI and beyond —
              that help ambitious businesses grow and transform.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:contact@yunaydigital.com"
                className="flex items-center gap-3 text-violet-200/80 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-fuchsia-400 flex-shrink-0" />
                contact@yunaydigital.com
              </a>
              <div className="flex items-center gap-3 text-violet-200/80">
                <Phone size={16} className="text-fuchsia-400 flex-shrink-0" />
                +91 79-77704812
              </div>
              <div className="flex items-start gap-3 text-violet-200/80">
                <MapPin size={16} className="text-fuchsia-400 mt-1 flex-shrink-0" />
                <span>
                  The Circle, Unitech Trade Center,<br />
                  Gurugram, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-violet-200/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-violet-200/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Stay in the loop</h3>
            <p className="text-violet-200/70 mb-4">
              Monthly insights on technology, design and digital growth. No spam, ever.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (isLoading) return;

                try {
                  setIsLoading(true);

                  const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  });

                  const data = await response.json();

                  if (response.ok) {
                    setShowSuccessModal(true);
                    setEmail('');
                  } else {
                    alert(data.error || 'Something went wrong. Please try again.');
                  }
                } catch (error) {
                  console.error('Subscription error:', error);
                  alert('Network error. Please check your connection and try again.');
                } finally {
                  setIsLoading(false);
                }
              }}
              className="mb-6"
            >
              <div className="ring-radiant rounded-full p-1 flex bg-white/5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 min-w-0 px-4 py-2.5 bg-transparent text-white placeholder-violet-300/50 focus:outline-none text-sm disabled:opacity-50"
                  style={{ boxShadow: 'none' }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="bg-radiant rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-1.5 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-violet-200/80 hover:text-white hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 transition-all duration-200 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-violet-300/60 text-sm flex items-center gap-1.5">
              <Sparkles size={13} className="text-fuchsia-400" />
              © {currentYear} Yunay Digital Services Private Limited. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-violet-300/60 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="subscribe"
      />
    </footer>
  );
};

export default Footer;
