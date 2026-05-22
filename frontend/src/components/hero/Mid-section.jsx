import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiCloud, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { images, processSteps, trustSignals } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

const icons = [FiAward, FiCloud, FiFileText];

export default function MidSection() {
  const { text } = useSitePreferences();

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#20232e] dark:bg-[#050608] dark:text-white md:py-28">
      <div className="absolute inset-0 sg-grid-pattern opacity-50" />
      <div className="sg-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">{text.mid.kicker}</p>
            <h2 className="sg-section-title mt-4 font-black">
              {text.mid.title}
            </h2>
          </div>
          <p className="sg-body-large text-gray-600 dark:text-white/60">
            {text.mid.body}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {trustSignals.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#00B51D] hover:shadow-xl hover:shadow-[#20232e]/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20232e] text-white">
                  <Icon className="h-5 w-5 text-[#0068B8]" />
                </div>
                <h3 className="sg-heading mt-10 text-2xl text-[#20232e] dark:text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-white/60">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[440px] overflow-hidden bg-[#20232e]"
          >
            <img src={images.cyber} alt="Security operations review" className="h-full w-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-[#20232e]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <p className="sg-kicker text-white/60">{text.mid.rhythmKicker}</p>
              <h3 className="sg-heading mt-3 text-3xl md:text-5xl">{text.mid.rhythmTitle}</h3>
            </div>
          </motion.div>

          <div className="border-y border-[#20232e] dark:border-white/20">
            {processSteps.map(([number, title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="grid gap-4 border-b border-[#20232e]/15 py-6 last:border-b-0 dark:border-white/10 md:grid-cols-[4rem_1fr]"
              >
                <span className="font-bold text-[#0068B8]">{number}</span>
                <div>
                  <h4 className="sg-heading text-2xl text-[#20232e] dark:text-white">{title}</h4>
                  <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/60">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Link to="/contact" className="sg-link-line mt-10 inline-flex items-center font-bold text-[#20232e] dark:text-[#0068B8]">
          {text.mid.consultant} <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
