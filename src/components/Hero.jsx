import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const socialProofAvatars = [
  'https://i.pravatar.cc/48?img=1',
  'https://i.pravatar.cc/48?img=5',
  'https://i.pravatar.cc/48?img=12',
  'https://i.pravatar.cc/48?img=22',
  'https://i.pravatar.cc/48?img=33',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background mesh orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[100px]" />
        <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute top-0 right-[30%] w-[250px] h-[250px] rounded-full bg-violet-400/8 blur-[80px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 sm:pt-36 sm:pb-28 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
          {/* ── Left Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <span className="section-badge">
                <Sparkles size={12} className="text-indigo-500" />
                Now with Smart Interview Reminders
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="heading-xl text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] text-slate-900 mb-5 sm:mb-6 text-balance"
            >
              Track Interviews.{' '}
              <span className="text-gradient">Get&nbsp;Hired</span>{' '}
              Faster.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-500 mb-9 sm:mb-11 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              IntervueX is the personal CRM for your job search — manage applications,
              set smart reminders, and keep detailed notes in one beautiful place.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/#cta"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base py-4 px-8 rounded-2xl justify-center animate-pulse-glow"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-5"
                />
                Download Free
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-base py-4 px-8 rounded-2xl justify-center group"
              >
                Explore Features
                <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-2.5">
                {socialProofAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`User ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start gap-0.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-slate-700">
                  Rated 4.9/5 <span className="text-slate-400 font-normal">by 10,000+ job seekers</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Phone Mockup ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-8 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-[50px] blur-[50px]" />

            {/* Phone frame */}
            <div className="phone-frame relative z-10 animate-float">
              <img
                src="/assets/hero.png"
                alt="IntervueX App Dashboard"
                className="w-full block"
              />
            </div>

            {/* Floating card — interviews */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 sm:-left-12 bottom-16 z-20 floating-card px-4 py-3 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-indigo-300">
                4
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Today</p>
                <p className="font-bold text-slate-800 text-sm leading-tight mt-0.5">Interviews Ahead</p>
              </div>
            </motion.div>

            {/* Floating card — reminder */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 sm:-right-10 top-20 z-20 floating-card px-4 py-3 hidden sm:flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">
                🔔
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Reminder</p>
                <p className="font-bold text-slate-800 text-xs leading-tight mt-0.5">Google · 3:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
