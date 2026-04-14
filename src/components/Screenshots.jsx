import { motion } from 'framer-motion';

const screenshots = [
  {
    img: '/assets/calendar.png',
    title: 'Monthly Planner',
    desc: 'A holistic view of your career trajectory.',
    accent: 'from-indigo-500/15 to-indigo-600/5',
    tag: 'Calendar',
  },
  {
    img: '/assets/reminders.png',
    title: 'Smart Alerts',
    desc: 'Intelligent notifications that adapt to you.',
    accent: 'from-cyan-500/15 to-cyan-600/5',
    tag: 'Reminders',
  },
  {
    img: '/assets/notes.png',
    title: 'Detailed Vault',
    desc: 'Secure job preparation and interview notes.',
    accent: 'from-violet-500/15 to-violet-600/5',
    tag: 'Notes',
  },
  {
    img: '/assets/dashboard.png',
    title: 'Global Dashboard',
    desc: 'Your command center for every application.',
    accent: 'from-emerald-500/15 to-emerald-600/5',
    tag: 'Dashboard',
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 sm:py-36 bg-white overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-[1px] divider-subtle" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <span className="section-badge">Visual Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-5 text-balance"
          >
            Crafted for{' '}
            <span className="text-gradient">Precision.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            An interface designed to minimize friction and maximize focus throughout your
            entire job search journey.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {screenshots.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.75,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative flex flex-col"
            >
              {/* Screen frame */}
              <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border-[6px] sm:border-[8px] border-slate-900 shadow-xl group-hover:shadow-2xl transition-all duration-700 bg-slate-900">
                {/* Tag  */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase">
                  {item.tag}
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

                <div className="aspect-[9/19] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-5 px-1">
                <h3 className="heading-md text-sm sm:text-base text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
