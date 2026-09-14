'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useInView, animate } from 'framer-motion';
import {
  Code,
  Palette,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  Rocket,
  Shield,
  Zap,
  Clock,
  Heart,
  Sparkles,
  Cloud,
  Blocks,
  Brain,
  Send,
  ShoppingBag,
  CreditCard,
  Fingerprint,
  BarChart3,
  PieChart,
  MapPin,
  Truck,
  Package,
  Wifi,
  Search,
  Bell
} from 'lucide-react';

/* ---------- Animation helpers ---------- */

const FadeIn = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

/* ---------- Premium portfolio covers ---------- */

const FloatChip = ({
  icon: Icon,
  className = '',
  delay = 0
}: {
  icon: React.ElementType;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute z-20 flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg text-white ${className}`}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <Icon size={18} />
  </motion.div>
);

const BrowserFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-72 rounded-xl overflow-hidden border border-white/25 bg-space-950/55 backdrop-blur-md shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.03] transition-transform duration-500">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border-b border-white/10">
      <span className="w-2 h-2 rounded-full bg-rose-400/80" />
      <span className="w-2 h-2 rounded-full bg-amber-400/80" />
      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
      <span className="ml-2 flex-1 h-3.5 rounded-full bg-white/10 flex items-center px-2">
        <Search size={8} className="text-white/40" />
      </span>
    </div>
    <div className="p-3">{children}</div>
  </div>
);

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-36 rounded-[1.4rem] overflow-hidden border border-white/25 bg-space-950/55 backdrop-blur-md shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.03] transition-transform duration-500">
    <div className="flex justify-center pt-1.5">
      <span className="w-12 h-1.5 rounded-full bg-white/20" />
    </div>
    <div className="p-2.5">{children}</div>
  </div>
);

const SkeletonLine = ({ w, h = 'h-1.5' }: { w: string; h?: string }) => (
  <div className={`${h} ${w} rounded-full bg-white/15`} />
);

const CoverEcommerce = () => (
  <>
    <FloatChip icon={ShoppingBag} className="top-6 left-6" />
    <FloatChip icon={CreditCard} className="bottom-8 right-8" delay={1.4} />
    <BrowserFrame>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/10 p-1.5 space-y-1.5">
            <div className="h-9 rounded-md bg-gradient-to-br from-white/25 to-white/5 flex items-center justify-center">
              <Package size={13} className="text-white/70" />
            </div>
            <SkeletonLine w="w-full" />
            <div className="flex items-center justify-between">
              <SkeletonLine w="w-1/2" />
              <span className="text-[7px] font-bold text-white/80">$49</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 h-6 rounded-md bg-white/20 flex items-center justify-center gap-1">
        <ShoppingBag size={9} className="text-white" />
        <span className="text-[8px] font-semibold text-white">Add to cart</span>
      </div>
    </BrowserFrame>
  </>
);

const CoverBanking = () => (
  <>
    <FloatChip icon={Fingerprint} className="top-6 right-8" />
    <FloatChip icon={Shield} className="bottom-8 left-8" delay={1.2} />
    <PhoneFrame>
      <div className="rounded-lg bg-gradient-to-br from-white/30 to-white/10 p-2 mb-2">
        <div className="flex items-center justify-between mb-2.5">
          <Wifi size={9} className="text-white/80 rotate-90" />
          <span className="text-[7px] font-semibold text-white/90 tracking-wider">VISA</span>
        </div>
        <div className="text-[8px] font-bold text-white tracking-[0.18em]">•••• 4821</div>
        <div className="text-[7px] text-white/70 mt-0.5">$24,590.00</div>
      </div>
      <div className="space-y-1.5 mb-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-white/15 flex-shrink-0" />
            <SkeletonLine w="w-full" />
          </div>
        ))}
      </div>
      <div className="h-6 rounded-md bg-white/20 flex items-center justify-center gap-1">
        <Fingerprint size={10} className="text-white" />
        <span className="text-[8px] font-semibold text-white">Pay securely</span>
      </div>
    </PhoneFrame>
  </>
);

const CoverAnalytics = () => (
  <>
    <FloatChip icon={PieChart} className="top-6 right-6" />
    <FloatChip icon={TrendingUp} className="bottom-8 left-8" delay={1.6} />
    <BrowserFrame>
      <div className="flex gap-2 mb-2">
        {['+38%', '12.4k', '99.9%'].map((kpi) => (
          <div key={kpi} className="flex-1 rounded-md bg-white/10 px-1.5 py-1">
            <div className="text-[8px] font-bold text-white">{kpi}</div>
            <SkeletonLine w="w-2/3" h="h-1" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-14 rounded-md bg-white/5 p-2">
        {[35, 55, 40, 70, 50, 85, 65, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-white/30 to-white/70"
            initial={{ height: '15%' }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </BrowserFrame>
  </>
);

const CoverLogistics = () => (
  <>
    <FloatChip icon={Truck} className="top-6 left-8" />
    <FloatChip icon={Bell} className="bottom-8 right-8" delay={1.1} />
    <PhoneFrame>
      <div className="relative h-24 rounded-lg bg-white/10 mb-2 overflow-hidden">
        <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full">
          <path d="M12 66 C 30 60, 28 30, 50 34 S 82 24, 88 14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        </svg>
        <MapPin size={12} className="absolute left-[8%] bottom-[12%] text-white" />
        <span className="absolute right-[8%] top-[8%] w-5 h-5 rounded-full bg-white/25 border border-white/40 flex items-center justify-center">
          <Package size={10} className="text-white" />
        </span>
      </div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
        <span className="text-[8px] font-semibold text-white/90">Out for delivery</span>
      </div>
      <SkeletonLine w="w-3/4" />
    </PhoneFrame>
  </>
);

const coverMap: Record<string, React.ReactNode> = {
  ecommerce: <CoverEcommerce />,
  banking: <CoverBanking />,
  analytics: <CoverAnalytics />,
  logistics: <CoverLogistics />
};

const SectionBadge = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-5 py-1.5 mb-5 backdrop-blur-sm">
    <Icon size={14} className="text-fuchsia-400" />
    <span className="text-fuchsia-200 font-medium text-xs tracking-widest uppercase">{label}</span>
  </div>
);

/* ---------- Page ---------- */

const HomePage = () => {
  const router = useRouter();
  const [navigationLoading, setNavigationLoading] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    setNavigationLoading(href);
    router.push(href);
  };

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Automation',
      description: 'Transform your business with cutting-edge AI — computer vision, NLP and predictive analytics built around your data.',
      color: 'from-violet-500 to-purple-500',
      features: ['Custom ML Models', 'Computer Vision', 'NLP Solutions', 'Predictive Analytics'],
      href: '/services/ai-ml-development'
    },
    {
      icon: Blocks,
      title: 'Blockchain Development',
      subtitle: 'Decentralized Solutions',
      description: 'Secure, scalable blockchain applications — DeFi platforms, NFT marketplaces and audited smart contracts.',
      color: 'from-fuchsia-500 to-pink-500',
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'dApps'],
      href: '/services/blockchain-development'
    },
    {
      icon: Code,
      title: 'Web & Mobile Development',
      subtitle: 'Full-Stack Solutions',
      description: 'End-to-end product engineering for web and mobile with modern frameworks and battle-tested architecture.',
      color: 'from-violet-500 to-fuchsia-500',
      features: ['React & Next.js', 'iOS & Android', 'React Native', 'Progressive Web Apps'],
      href: '/services/web-development'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Beautiful, intuitive interfaces designed around your users — built to convert visitors into customers.',
      color: 'from-pink-500 to-rose-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      href: '/services/ui-ux-design'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      subtitle: 'Scalable Infrastructure',
      description: 'Cloud migration, DevOps and infrastructure management that scales with your growth — with 99.9% uptime.',
      color: 'from-cyan-500 to-sky-500',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps', '24/7 Monitoring'],
      href: '/services/cloud-solutions'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      subtitle: 'Growth Strategy',
      description: 'Data-driven marketing that grows your visibility and pipeline — with measurable, compounding ROI.',
      color: 'from-fuchsia-500 to-violet-500',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      href: '/services/digital-marketing'
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Rapid, agile development cycles that get you to market in weeks — not quarters.',
      category: 'Efficiency'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Senior engineers and designers with proven enterprise track records.',
      category: 'Expertise'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Security best practices and industry standards baked into every build.',
      category: 'Security'
    },
    {
      icon: Heart,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for total peace of mind.',
      category: 'Support'
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce Platform',
      category: 'Web Application',
      description: 'A comprehensive online marketplace with advanced payment integration and inventory management.',
      tech: ['React', 'Node.js', 'MongoDB'],
      type: 'Enterprise Solution',
      duration: '8 weeks',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      kind: 'ecommerce'
    },
    {
      title: 'Banking Mobile App',
      category: 'Mobile App',
      description: 'Secure banking application with biometric authentication and real-time transaction monitoring.',
      tech: ['React Native', 'Firebase', 'JWT'],
      type: 'Financial Software',
      duration: '12 weeks',
      gradient: 'from-fuchsia-600 via-pink-600 to-rose-500',
      kind: 'banking'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web Application',
      description: 'Real-time business intelligence dashboard with advanced data visualization and reporting.',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL'],
      type: 'Business Intelligence',
      duration: '6 weeks',
      gradient: 'from-cyan-600 via-sky-600 to-violet-600',
      kind: 'analytics'
    },
    {
      title: 'Logistics Management',
      category: 'Mobile App',
      description: 'Complete logistics solution with GPS tracking and automated delivery management.',
      tech: ['Flutter', 'Google Maps', 'Stripe'],
      type: 'Enterprise App',
      duration: '10 weeks',
      gradient: 'from-purple-600 via-violet-600 to-cyan-600',
      kind: 'logistics'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Yunay Digital delivered an exceptional solution for our business. Their development process was seamless and the final product exceeded our expectations in every way.',
      role: 'CEO'
    },
    {
      name: 'Michael Chen',
      company: 'E-Commerce Pro',
      content: 'Outstanding mobile app development! The app has received excellent reviews and significantly boosted our customer engagement and sales.',
      role: 'CTO'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Design Studio',
      content: 'The UI/UX design services were exceptional. They perfectly captured our brand vision and created an amazing user experience that drives results.',
      role: 'Creative Director'
    }
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Delivered' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' }
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Azure',
    'Flutter', 'React Native', 'PostgreSQL', 'MongoDB', 'Kubernetes',
    'TensorFlow', 'Solidity', 'GraphQL', 'Docker'
  ];

  return (
    <div className="min-h-screen bg-space-950 text-white overflow-x-clip">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Aurora backdrop */}
        <div className="absolute inset-0">
          <div className="aurora w-[36rem] h-[36rem] bg-violet-600/50 -top-40 -left-40" />
          <div className="aurora w-[32rem] h-[32rem] bg-fuchsia-600/40 top-1/3 -right-40" style={{ animationDelay: '3s' }} />
          <div className="aurora w-[28rem] h-[28rem] bg-cyan-500/30 -bottom-32 left-1/4" style={{ animationDelay: '6s' }} />
          <div className="absolute inset-0 bg-grid" />
        </div>

        {/* Floating accents */}
        <motion.div
          className="absolute top-28 left-[8%] hidden lg:block text-violet-400/40"
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Code size={56} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[8%] hidden lg:block text-fuchsia-400/40"
          animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Rocket size={48} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[18%] hidden lg:block text-cyan-400/40"
          animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Sparkles size={36} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-400" />
              </span>
              <span className="text-violet-100 text-sm font-medium">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            We build{' '}
            <span className="text-radiant">radiant</span>
            <br className="hidden sm:block" />
            {' '}digital products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-violet-200/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From AI and blockchain to web, mobile and cloud — we design and engineer
            technology that moves your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button
              onClick={() => handleNavigation('/contact')}
              disabled={navigationLoading === '/contact'}
              className="btn-radiant text-base disabled:opacity-60"
            >
              <Rocket size={18} />
              <span>{navigationLoading === '/contact' ? 'Loading...' : 'Start Your Project'}</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleNavigation('/works')}
              disabled={navigationLoading === '/works'}
              className="btn-ghost text-base disabled:opacity-60"
            >
              <span>{navigationLoading === '/works' ? 'Loading...' : 'View Our Work'}</span>
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="ring-radiant glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-7 text-center">
                <div className="text-3xl md:text-4xl font-bold text-radiant-static font-[var(--font-display)]">
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-violet-200/60 text-xs md:text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-violet-400/40 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-fuchsia-400" />
          </div>
        </motion.div>
      </section>

      {/* ================= TECH MARQUEE ================= */}
      <section className="relative py-10 border-y border-white/5 bg-space-900/60">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee-track gap-4 pr-4">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-violet-200/80 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 md:py-32">
        <div className="aurora w-96 h-96 bg-violet-600/25 top-20 -left-32" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionBadge icon={Zap} label="Why Choose Us" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              What makes us <span className="text-radiant">different</span>
            </h2>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <div className="glow-card p-8 h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-radiant flex items-center justify-center mb-6 shadow-[0_8px_30px_-8px_rgba(217,70,239,0.6)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-fuchsia-400 mb-2">
                      {feature.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-violet-200/60 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-24 md:py-32 bg-space-900/40">
        <div className="aurora w-96 h-96 bg-fuchsia-600/20 bottom-0 -right-32" style={{ animationDelay: '2s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionBadge icon={Sparkles} label="Our Services" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Comprehensive <span className="text-radiant">digital solutions</span>
            </h2>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end technology services tailored to your business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={(index % 3) * 0.1}>
                  <Link href={service.href} className="block h-full group">
                    <div className="glow-card p-8 h-full flex flex-col">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-2">
                        {service.subtitle}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-radiant-static transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-violet-200/60 text-sm leading-relaxed mb-6">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2.5 mb-6 mt-auto">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-1.5">
                            <CheckCircle size={13} className="text-fuchsia-400 flex-shrink-0" />
                            <span className="text-xs text-violet-200/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-fuchsia-400 group-hover:gap-3 transition-all">
                        Explore service <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="relative py-24 md:py-32">
        <div className="aurora w-96 h-96 bg-cyan-500/15 top-1/3 -left-32" style={{ animationDelay: '5s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionBadge icon={Award} label="Portfolio" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Our latest <span className="text-radiant">projects</span>
            </h2>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto">
              Explore our recent work and see how we&apos;ve helped businesses achieve their goals.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <FadeIn key={item.title} delay={(index % 2) * 0.12}>
                <div className="glow-card overflow-hidden group h-full flex flex-col">
                  <div className={`h-64 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                    {/* Texture & glow layers */}
                    <div className="absolute inset-0 bg-grid opacity-50" />
                    <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -bottom-20 -right-12 w-64 h-64 rounded-full bg-black/30 blur-3xl" />

                    {/* Device mockup + floating chips */}
                    <div className="absolute inset-0 flex items-center justify-center pt-4">
                      {coverMap[item.kind]}
                    </div>

                    {/* Bottom fade into card body */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-space-900/90 to-transparent" />

                    <span className="absolute top-4 right-4 z-30 text-xs font-semibold bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-radiant-static transition-colors">{item.title}</h3>
                      <span className="flex items-center gap-1 text-xs text-violet-300/70">
                        <Clock size={13} />
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-violet-200/60 text-sm leading-relaxed mb-5">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Link href="/works" className="btn-ghost">
              <span>View All Projects</span>
              <ArrowUpRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-24 md:py-32 bg-space-900/40">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionBadge icon={Star} label="Testimonials" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              What our <span className="text-radiant">clients say</span>
            </h2>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the people we&apos;ve built with.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.12}>
                <div className="glow-card p-8 h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-6 text-fuchsia-500/25" size={36} />
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-violet-100/80 leading-relaxed mb-8 flex-1">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-radiant flex items-center justify-center text-white font-bold text-sm shadow-[0_6px_20px_-6px_rgba(217,70,239,0.6)]">
                      {testimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-xs text-fuchsia-400 font-medium">{testimonial.role}</div>
                      <div className="text-xs text-violet-300/60">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA + NEWSLETTER ================= */}
      <section className="relative py-24 md:py-32">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative ring-radiant rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-radiant opacity-[0.14]" />
              <div className="aurora w-80 h-80 bg-violet-600/40 -top-32 -left-20" />
              <div className="aurora w-80 h-80 bg-cyan-500/25 -bottom-32 -right-20" style={{ animationDelay: '3s' }} />

              <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
                <SectionBadge icon={Send} label="Stay Updated" />
                <h2 className="text-3xl md:text-5xl font-bold mb-5">
                  Ready to build something{' '}
                  <span className="text-radiant">radiant?</span>
                </h2>
                <p className="text-lg text-violet-200/70 mb-10 max-w-2xl mx-auto">
                  Start a project with us — or subscribe for monthly insights on
                  technology trends, product design and digital growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                  <Link href="/contact" className="btn-radiant">
                    <Rocket size={18} />
                    <span>Get in Touch</span>
                  </Link>
                  <Link href="/services" className="btn-ghost">
                    <span>Explore Services</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <p className="text-violet-300/50 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={14} className="text-fuchsia-400" />
                  Join 1000+ subscribers getting monthly insights — sign up in the footer below
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
