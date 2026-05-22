import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield } from 'react-icons/fi';
import { brandStats, images } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

export default function Welcome() {
  const { text } = useSitePreferences();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], ['0%', '8%']);
  const titleY = useTransform(scrollYProgress, [0, 0.45], ['0%', '-10%']);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-[#20232e] dark:bg-[#050608] dark:text-white">
      <div className="absolute inset-0 sg-grid-pattern opacity-60 dark:opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#20232e]/15 dark:bg-white/10" />

      <div className="sg-shell relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-44 md:pb-14 md:pt-48">
        <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
          <motion.div style={{ y: titleY }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-7 inline-flex items-center gap-3 border border-[#20232e]/15 bg-[#f3f7f6] px-4 py-2 text-xs font-bold uppercase text-[#20232e]/70 dark:border-white/15 dark:bg-white/5 dark:text-white/75"
            >
              <FiShield className="text-[#00B51D]" />
              {text.home.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="sg-display max-w-5xl"
            >
              {text.home.title}
            </motion.h1>
            <p className="sg-body-large mt-8 max-w-2xl text-[#3c5164] dark:text-white/70">
              {text.home.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-[#20232e] bg-[#20232e] px-7 py-4 text-sm font-bold uppercase text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#20232e] dark:border-white dark:bg-white dark:text-[#20232e] dark:hover:bg-transparent dark:hover:text-white"
              >
                {text.home.primary} <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services/penetration-testing"
                className="inline-flex items-center justify-center border-2 border-[#0068B8] px-7 py-4 text-sm font-bold uppercase text-[#0068B8] transition hover:-translate-y-0.5 hover:bg-[#0068B8] hover:text-white"
              >
                {text.home.secondary}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="relative"
          >
            <div className="relative overflow-hidden bg-[#20232e]">
              <motion.img
                src={images.home}
                alt="Cybersecurity operations workspace"
                style={{ y: heroY, scale: 1.04 }}
                className="h-[520px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid border-t border-white/15 bg-[#20232e]/90 text-white backdrop-blur sm:grid-cols-3">
                {brandStats.map((stat) => (
                  <div key={stat.label} className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <p className="sg-heading text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden h-32 w-32 border-8 border-[#00B51D] lg:block" />
            <div className="absolute -bottom-4 -left-4 hidden h-32 w-32 border-8 border-[#0068B8] lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
