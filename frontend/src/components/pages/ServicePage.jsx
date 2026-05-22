import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getService, services } from '../../data/siteContent';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-white text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="relative min-h-[82vh] overflow-hidden bg-[#20232e] pt-40 text-white md:pt-48">
          <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#20232e] via-[#20232e]/90 to-black/80" />
          <div className="absolute inset-0 sg-grid-pattern opacity-35" />

          <div className="sg-shell relative z-10 pb-16">
            <p className="sg-kicker font-bold text-[#00B51D]">{service.category}</p>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="sg-display mt-5 max-w-6xl font-black"
            >
              {service.title}
            </motion.h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">{service.summary}</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="sg-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">Assessment scope</p>
              <h2 className="sg-section-title mt-4 font-black">Built for useful outcomes, not checkbox reports.</h2>
            </div>
            <div>
              <p className="text-2xl leading-relaxed text-gray-700 dark:text-white/70">{service.detail}</p>
              <div className="mt-10 grid gap-4">
                {service.bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-[#20232e]/15 py-4 text-xl font-bold text-[#20232e] dark:border-white/10 dark:text-white">
                    <FiCheckCircle className="text-[#0068B8]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-full bg-[#20232e] px-6 py-4 font-bold text-white transition hover:bg-[#20232e] dark:bg-[#0068B8] dark:text-white dark:hover:bg-white">
                Request this service <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-[#f3f7f6] py-20 dark:bg-[#050608] md:py-28">
            <div className="sg-shell">
              <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">Related services</p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="group border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#20232e] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#0068B8]">
                    <h3 className="text-2xl font-black text-[#20232e] dark:text-white">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-gray-600 dark:text-white/60">{item.summary}</p>
                    <span className="mt-6 inline-flex items-center font-bold text-[#20232e] group-hover:text-[#0068B8] dark:text-[#0068B8]">
                      Learn more <FiArrowRight className="ml-2" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
