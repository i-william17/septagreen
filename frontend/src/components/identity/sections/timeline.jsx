import { motion, useReducedMotion } from 'framer-motion';
import { FiCode, FiFlag, FiRepeat, FiShield } from 'react-icons/fi';
import founder from '../../../assets/home.jpg';
import client from '../../../assets/client.jpg';
import award from '../../../assets/award.jpg';
import expand from '../../../assets/expand.jpg';

const visuals = [
  { image: founder, icon: FiFlag },
  { image: client, icon: FiShield },
  { image: award, icon: FiCode },
  { image: expand, icon: FiRepeat },
];

export function CompanyTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="sg-section sg-section-muted text-[#20232e] dark:bg-[#20232e] dark:text-white">
      <div className="sg-shell">
        <div className="grid gap-8 border-y border-[#20232e]/15 py-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end dark:border-white/10">
          <div>
            <h2 className="sg-section-title">A grounded roadmap, not borrowed hype.</h2>
          </div>
          <p className="text-xl leading-relaxed text-[#5d6568] dark:text-white/60">
            The site should communicate momentum without pretending to be larger than it is. This timeline keeps the story credible and current.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            ['2025', 'Foundation in Kenya', 'SeptaGreen starts with a combined focus on secure software delivery, penetration testing, and practical cyber advisory for African teams.'],
            ['2026', 'Assessment-first delivery', 'The public service model is sharpened around red team simulation, application security, cloud review, and managed visibility.'],
            ['Next', 'Developer enablement', 'DeveloperX expands the brand into secure builder support: standards, checklists, product reviews, and security-minded engineering practice.'],
            ['Scale', 'Continuous improvement', 'SeptaGreen grows toward recurring monitoring, retesting, reporting, and long-term security partnership for clients.'],
          ].map(([year, title, description], index) => {
            const visual = visuals[index];
            const Icon = visual.icon;

            return (
              <motion.article
                key={`${year}-${title}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-70px' }}
                className="sg-card group overflow-hidden dark:bg-white/5"
              >
                <div className="sg-media relative h-64 border-0 bg-[#151718]">
                  <img src={visual.image} alt={title} className="h-full w-full object-cover opacity-[0.78] transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#151718]/24" />
                  <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/20 bg-[#0068B8] px-4 py-2 font-black text-white">
                    <Icon className="h-5 w-5" />
                    {year}
                  </div>
                </div>
                <div className="p-6">
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
