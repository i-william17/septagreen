import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiCrosshair, FiLayers, FiShield } from 'react-icons/fi';
import img from '../../../assets/ident.jpg';

export function MissionStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f5efe3] pt-40 text-[#20232e] dark:bg-[#20232e] dark:text-white md:pt-48">
      <div className="absolute inset-0 sg-grid-pattern opacity-50 dark:opacity-15" />
      <div className="sg-shell-wide relative z-10 grid min-h-[86vh] gap-12 border-t border-[#20232e]/15 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end dark:border-white/10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="sg-display max-w-6xl">
            African cybersecurity, designed with discipline.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#5d6568] dark:text-white/70 md:text-2xl">
            SeptaGreen exists for organizations that need secure digital growth without theatre. We combine product engineering, offensive testing, and operational clarity so teams know what to fix, why it matters, and how to keep improving.
          </p>
          <Link
            to="/request-assessment"
            className="sg-button sg-button-primary mt-9 dark:border-[#0068B8] dark:bg-[#0068B8] dark:text-white dark:hover:bg-transparent dark:hover:text-[#0068B8]"
          >
            Request an assessment <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden border border-[#20232e]/15 bg-[#151718] dark:border-white/10">
            <img src={img} alt="SeptaGreen security identity" className="h-[520px] w-full object-cover opacity-[0.76]" />
            <div className="absolute inset-0 bg-[#151718]/30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [FiShield, 'Security'],
                  [FiCrosshair, 'Clarity'],
                  [FiLayers, 'Delivery'],
                ].map(([Icon, label]) => (
                  <div key={label} className="border border-white/15 bg-[#151718]/60 p-4 backdrop-blur">
                    <Icon className="h-5 w-5 text-[#0068B8]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-[#20232e]/15 bg-[#fffdf8] dark:border-white/10 dark:bg-white/5">
        <div className="sg-shell grid gap-0 py-0 md:grid-cols-3">
          {[
            ['Build securely', 'Product interfaces, APIs, and platforms are treated as security surfaces from day one.'],
            ['Test realistically', 'Assessment work focuses on credible attack paths, not inflated reports.'],
            ['Report clearly', 'Findings are written for the people who have to fund, fix, and verify the work.'],
          ].map(([title, body]) => (
            <div key={title} className="flex gap-4 border-b border-[#20232e]/10 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/10">
              <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-[#20232e] dark:text-[#00B51D]" />
              <div>
                <h2 className="text-lg font-black">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5d6568] dark:text-white/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
