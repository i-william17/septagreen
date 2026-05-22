import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiShield } from 'react-icons/fi';
import { serviceGroups, services, solutions } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

export default function Hero() {
  const { text } = useSitePreferences();
  const featured = services.slice(0, 3);

  return (
    <section className="bg-[#20232e] py-20 text-white md:py-28">
      <div className="sg-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">{text.services.kicker}</p>
            <h2 className="sg-section-title mt-4 font-black">
              {text.services.title}
            </h2>
          </div>
          <p className="sg-body-large text-white/70">
            {text.services.body}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="group overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative h-72 overflow-hidden bg-[#20232e]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#00B51D] px-3 py-1 text-xs font-bold text-white">
                  0{index + 1}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#0068B8]">{service.category}</p>
                <h3 className="mt-3 text-3xl font-black">{service.title}</h3>
                <p className="mt-4 min-h-24 leading-relaxed text-white/60">{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="sg-link-line mt-7 inline-flex items-center font-bold text-white">
                  {text.services.learnMore} <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">{text.services.discover}</p>
            <h3 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{text.services.discoverTitle}</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5 }}
                className="border border-white/10 p-5"
              >
                <FiShield className="h-7 w-7 text-[#0068B8]" />
                <h4 className="mt-6 text-2xl font-bold">{group.heading}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{group.description}</p>
                <div className="mt-5 space-y-2">
                  {group.links.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    return (
                      service && (
                        <Link key={slug} to={`/services/${slug}`} className="flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
                          <FiCheck className="text-[#00B51D]" /> {service.shortTitle}
                        </Link>
                      )
                    );
                  })}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5 }}
              className="border border-[#00B51D]/40 bg-[#00B51D]/10 p-5 md:col-span-2"
            >
              <p className="sg-kicker font-bold text-[#0068B8]">{text.nav.solutions}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {solutions.map((solution) => (
                  <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="group block border-t border-white/15 pt-4">
                    <h4 className="text-xl font-bold transition group-hover:text-[#0068B8]">{solution.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{solution.summary}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
