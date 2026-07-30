import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import clientImage from '../../assets/client.jpg';
import secOneImage from '../../assets/sec1.jpg';
import secTwoImage from '../../assets/sec2.jpg';
import secThreeImage from '../../assets/sec3.jpg';

export default function BlogSection({ compact = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="sg-section sg-section-muted text-[#20232e] dark:bg-[#050608] dark:text-white">
      <div className="sg-shell">
        <div className="grid gap-8 border-y border-[#20232e]/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end dark:border-white/10">
          <div>
            <h2 className="sg-section-title font-black">Security intelligence you can use.</h2>
          </div>
          <p className="sg-body-large text-[#5d6568] dark:text-white/60">
            More than a blog list, this layer positions SeptaGreen as a thinking partner across cyber risk, AI, fintech, and secure digital growth.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {[
            {
              id: 1,
              title: "Securing Africa's Digital Future",
              excerpt:
                'How cybersecurity innovation is changing risk management for African businesses, startups, and institutions.',
              date: 'May 15, 2026',
              readTime: '5 min read',
              image: secOneImage,
            },
            {
              id: 2,
              title: 'AI in African Cybersecurity',
              excerpt:
                'How AI-assisted systems introduce new exposure points and what teams should review before shipping.',
              date: 'April 28, 2026',
              readTime: '7 min read',
              image: secTwoImage,
            },
            {
              id: 3,
              title: 'Fintech Protection Strategies',
              excerpt:
                'Best practices for securing mobile payment platforms, customer accounts, APIs, and fraud-sensitive workflows.',
              date: 'March 10, 2026',
              readTime: '4 min read',
              image: secThreeImage,
            },
          ].map((article, index) => (
            <motion.article
              key={article.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="sg-card group overflow-hidden dark:bg-white/5"
            >
              <div className="sg-media relative h-64 border-0 bg-[#151718]">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-xs text-[#5d6568] dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock /> {article.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#20232e] dark:text-white">{article.title}</h3>
                <p className="mt-3 min-h-24 leading-relaxed text-[#5d6568] dark:text-white/60">{article.excerpt}</p>
                <Link to="/insights" className="sg-link-line mt-6 inline-flex items-center font-bold text-[#20232e] dark:text-[#0068B8]">
                  Read insight <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {!compact && (
          <div className="mt-20 grid overflow-hidden border border-[#20232e]/20 bg-[#151718] text-white lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 md:p-10">
              <h3 className="sg-heading text-4xl md:text-6xl">
                Need to know where your defenses stand?
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Reach out for a focused security conversation. SeptaGreen will help identify the right assessment path for your systems, team, and risk profile.
              </p>
              <Link to="/contact" className="sg-button sg-button-brand mt-8">
                Contact us <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative min-h-[360px]">
              <img src={clientImage} alt="SeptaGreen team conversation" className="h-full w-full object-cover opacity-[0.78]" />
              <div className="absolute inset-0 bg-[#151718]/22" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
