import { motion } from 'framer-motion';
import { Target, Bell, Calendar, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Interview Tracking',
    description: 'Your personal CRM for your career journey. Track every application from wishlist to finalized offer in one clear view.',
    icon: Target,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    accentBorder: 'hover:border-indigo-200',
    badge: 'Most Used',
  },
  {
    title: 'Smart Reminders',
    description: 'Focus on prep, not timing. Get precision alerts for every mock and real interview call before it happens.',
    icon: Bell,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    accentBorder: 'hover:border-cyan-200',
  },
  {
    title: 'Calendar Sync',
    description: 'Visualize patterns across your schedule. Seamlessly sync with Google Calendar & Outlook for zero friction.',
    icon: Calendar,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    accentBorder: 'hover:border-violet-200',
  },
  {
    title: 'AES-256 Encrypted',
    description: 'Your sensitive career data is protected by military-grade AES-256-GCM encryption. We prioritize your privacy above all.',
    icon: ShieldCheck,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentBorder: 'hover:border-emerald-200',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-36 bg-white relative overflow-hidden">
      {/* subtle bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] divider-subtle" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="section-badge">Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6 text-balance"
          >
            Engineered for{' '}
            <span className="text-gradient">Organization.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Stop juggling spreadsheets and sticky notes. IntervueX centralizes your entire
            job search into one focused, high-performance workspace.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`card-premium p-7 sm:p-8 relative ${feature.accentBorder}`}
              >
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold tracking-wide">
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`icon-box ${feature.iconBg} mb-6`}>
                  <Icon size={22} className={feature.iconColor} strokeWidth={2} />
                </div>

                <h3 className="heading-md text-lg text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: '10k+', label: 'Active Users' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '95%', label: 'Interview Prep Rate' },
          ].map((stat, i) => (
            <div key={i} className="stat-chip text-center">
              <span className="heading-md text-xl sm:text-2xl text-slate-900">{stat.value}</span>
              <span className="text-[11px] text-slate-500 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
