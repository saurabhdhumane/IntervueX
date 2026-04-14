import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-36 px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-dark-cta rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-24 text-center relative overflow-hidden">
          {/* Inner glow rings */}
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
            <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-indigo-600/20 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-cyan-500/12 blur-[90px]" />
          </div>

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Join 10,000+ candidates
            </div>

            {/* Headline */}
            <h2 className="heading-xl text-3xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance">
              Stop losing track.{' '}
              <span className="text-gradient">Master</span>{' '}
              your interviews.
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              IntervueX is free to start. Join thousands of high-performance candidates who
              are landing their dream roles with precision and confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-slate-900 font-display font-black text-base sm:text-lg px-10 py-4 sm:py-5 rounded-2xl shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2.5"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-5"
                />
                Get Started — Free
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/6 text-white border border-white/10 font-display font-bold text-base sm:text-lg px-10 py-4 sm:py-5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2.5"
              >
                <Smartphone size={18} className="text-white/70" />
                iOS Coming Soon
              </motion.button>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-slate-500 text-xs sm:text-sm font-medium">
              Free forever plan · No credit card required · Android 10+ &amp; iOS 15+
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
