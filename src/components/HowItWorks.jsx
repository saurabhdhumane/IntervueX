import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Import Your Data',
    description:
      'Scan your emails or manually add interview details in seconds with our smart input tool. No friction, no bloat.',
    checks: ['Email scanning', 'Manual entry', 'Bulk import'],
    color: 'from-indigo-500 to-indigo-600',
    glow: 'shadow-indigo-300',
  },
  {
    number: '02',
    title: 'Sync & Set',
    description:
      'Connect your calendar and let IntervueX intelligently schedule reminders and your prep checklist automatically.',
    checks: ['Google Calendar', 'Outlook sync', 'Smart Reminders'],
    color: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-300',
  },
  {
    number: '03',
    title: 'Execute & Refine',
    description:
      'Ace your interviews, log feedback, and move through the pipeline with total clarity and confidence.',
    checks: ['Feedback logging', 'Pipeline tracking', 'Offer management'],
    color: 'from-violet-500 to-violet-600',
    glow: 'shadow-violet-300',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-36 bg-alt relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-x-0 top-0 h-[1px] divider-subtle" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] divider-subtle" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 mb-16 sm:mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="section-badge">The Process</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 text-balance"
            >
              Simple Workflow.{' '}
              <span className="text-gradient">Powerful Results.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-sm text-center lg:text-left self-end"
          >
            Designed to fit seamlessly into your existing job search routine — without adding
            time or overhead.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-[1px] bg-gradient-to-r from-indigo-200 via-cyan-200 to-violet-200" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-300"
            >
              {/* Step number circle */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl mb-7 shadow-lg ${step.glow}`}
              >
                {step.number}
              </div>

              <h3 className="heading-md text-xl text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{step.description}</p>

              {/* Checklist */}
              <ul className="flex flex-col gap-2">
                {step.checks.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mobile vertical connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-3 left-8 w-[1px] h-6 bg-gradient-to-b from-slate-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
