import { motion } from 'framer-motion';
import { FiCode, FiFlag, FiRepeat, FiShield } from 'react-icons/fi';
import founder from '../../../assets/home.jpg';
import client from '../../../assets/client.jpg';
import award from '../../../assets/award.jpg';
import expand from '../../../assets/expand.jpg';
import { useSitePreferences } from '../../../context/SitePreferences';

const visuals = [
  { image: founder, icon: FiFlag },
  { image: client, icon: FiShield },
  { image: award, icon: FiCode },
  { image: expand, icon: FiRepeat },
];

export function CompanyTimeline() {
  const { text } = useSitePreferences();

  return (
    <section className="relative overflow-hidden bg-[#f7faf8] py-20 text-[#20232e] dark:bg-[#20232e] dark:text-white md:py-28">
      <div className="sg-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">{text.identity.timelineKicker}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{text.identity.timelineTitle}</h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-white/60">
            {text.identity.timelineBody}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {text.identity.milestones.map(([year, title, description], index) => {
            const visual = visuals[index];
            const Icon = visual.icon;

            return (
              <motion.article
                key={`${year}-${title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-70px' }}
                className="group overflow-hidden border border-[#d6ded8] bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative h-64 overflow-hidden bg-[#20232e]">
                  <img src={visual.image} alt={title} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-3 bg-[#0068B8] px-4 py-2 font-black text-white">
                    <Icon className="h-5 w-5" />
                    {year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{title}</h3>
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
