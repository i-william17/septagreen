import { motion } from 'framer-motion';
import { FiActivity, FiCompass, FiLock, FiUsers } from 'react-icons/fi';
import cyber from '../../../assets/cyber.jpg';
import { useSitePreferences } from '../../../context/SitePreferences';

const icons = [FiLock, FiActivity, FiCompass, FiUsers];

export function CoreValues() {
  const { text } = useSitePreferences();

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#20232e] dark:bg-[#050608] dark:text-white md:py-28">
      <div className="sg-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">{text.identity.valuesKicker}</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{text.identity.valuesTitle}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-white/60">
            {text.identity.valuesBody}
          </p>

          <div className="mt-8 overflow-hidden border border-[#cfd9d2] dark:border-white/10">
            <img src={cyber} alt="Security workbench" className="h-72 w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-4">
          {text.identity.values.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-70px' }}
                className="grid gap-5 border border-[#d6ded8] bg-[#f7faf8] p-6 transition hover:-translate-y-1 hover:border-[#20232e] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00B51D] md:grid-cols-[4rem_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-[#20232e] text-white dark:bg-[#0068B8] dark:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0068B8] dark:text-[#0068B8]">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600 dark:text-white/60">{description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
