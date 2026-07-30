import { motion, useReducedMotion } from 'framer-motion';
import { FiActivity, FiCompass, FiLock, FiUsers } from 'react-icons/fi';
import cyber from '../../../assets/cyber.jpg';

const icons = [FiLock, FiActivity, FiCompass, FiUsers];

export function CoreValues() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="sg-section sg-section-surface text-[#20232e] dark:bg-[#050608] dark:text-white">
      <div className="sg-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="sg-section-title">What guides the work.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5d6568] dark:text-white/60">
            The brand should feel rigorous, local, and calm under pressure. These principles keep the visual identity and delivery model aligned.
          </p>

          <div className="sg-media mt-8 h-72 dark:border-white/10">
            <img src={cyber} alt="Security workbench" className="h-full w-full object-cover opacity-[0.86]" />
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ['Integrity over theatre', 'We keep findings precise, reproducible, and useful. No inflated risk language where clear evidence is enough.'],
            ['Measured execution', 'Security work has to respect uptime, business context, engineering capacity, and the realities of growing teams.'],
            ['Africa-aware design', 'The operating environment matters: payments, mobile-first users, local infrastructure, and regional compliance pressures.'],
            ['Partnership mindset', 'We work close to the teams responsible for fixes so security becomes a repeatable habit, not a one-off report.'],
          ].map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-70px' }}
                className="grid gap-5 border border-[#20232e]/15 bg-[#faf6ee] p-6 transition hover:border-[#20232e]/[0.35] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00B51D] md:grid-cols-[4rem_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center text-[#0068B8] dark:text-[#00B51D]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#5d6568] dark:text-white/60">{description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
