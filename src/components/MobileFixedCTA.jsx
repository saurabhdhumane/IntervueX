import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function MobileFixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-5 left-4 right-4 z-[60] md:hidden mobile-safe-bottom"
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/8 p-3.5 pl-4 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
            {/* Logo + text */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-400/30 shrink-0">
                <span className="text-white font-black text-xs font-display">IX</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm font-display">IntervueX</p>
                <p className="text-slate-400 text-[10px] font-medium">Free on Google Play</p>
              </div>
            </div>

            {/* CTA button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-indigo-500/30 flex items-center gap-1.5 shrink-0"
            >
              <Download size={12} />
              Download
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
