import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiCrosshair, FiLayers, FiShield } from 'react-icons/fi';
import img from '../../../assets/ident.jpg';
import { useSitePreferences } from '../../../context/SitePreferences';

export function MissionStatement() {
  const { text } = useSitePreferences();
  const c = text.identity;

  return (
    <section className="relative overflow-hidden bg-[#f7faf8] pt-40 text-[#20232e] dark:bg-[#20232e] dark:text-white md:pt-48">
      <div className="absolute inset-0 sg-grid-pattern opacity-35 dark:opacity-15" />
      <div className="sg-shell relative z-10 grid min-h-[86vh] gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">{c.missionKicker}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.96] md:text-7xl lg:text-8xl">
            {c.missionTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-white/70 md:text-2xl">
            {c.missionBody}
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center rounded-full bg-[#20232e] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#20232e] dark:bg-[#0068B8] dark:text-white dark:hover:bg-white"
          >
            {c.missionCta} <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden border border-[#cfd9d2] bg-[#20232e] dark:border-white/10">
            <img src={img} alt="SeptaGreen security identity" className="h-[520px] w-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-[#20232e]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [FiShield, 'Security'],
                  [FiCrosshair, 'Clarity'],
                  [FiLayers, 'Delivery'],
                ].map(([Icon, label]) => (
                  <div key={label} className="border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <Icon className="h-5 w-5 text-[#0068B8]" />
                    <p className="mt-3 text-sm font-bold uppercase text-white/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-[#cfd9d2] bg-white dark:border-white/10 dark:bg-white/5">
        <div className="sg-shell grid gap-5 py-8 md:grid-cols-3">
          {c.signals.map(([title, body]) => (
            <div key={title} className="flex gap-4">
              <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-[#20232e] dark:text-[#00B51D]" />
              <div>
                <h2 className="text-lg font-black">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-white/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
