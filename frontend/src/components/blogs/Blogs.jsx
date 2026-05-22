import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { images } from '../../data/siteContent';

export const articles = [
  {
    id: 1,
    title: "Securing Africa's Digital Future",
    excerpt:
      'How cybersecurity innovation is changing risk management for African businesses, startups, and institutions.',
    category: 'Cybersecurity',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image: images.secOne,
  },
  {
    id: 2,
    title: 'AI in African Cybersecurity',
    excerpt:
      'How AI-assisted systems introduce new exposure points and what teams should review before shipping.',
    category: 'Artificial Intelligence',
    date: 'April 28, 2026',
    readTime: '7 min read',
    image: images.secTwo,
  },
  {
    id: 3,
    title: 'Fintech Protection Strategies',
    excerpt:
      'Best practices for securing mobile payment platforms, customer accounts, APIs, and fraud-sensitive workflows.',
    category: 'Fintech',
    date: 'March 10, 2026',
    readTime: '4 min read',
    image: images.secThree,
  },
];

export default function BlogSection({ compact = false }) {
  return (
    <section className="relative overflow-hidden bg-[#f3f7f6] py-20 text-[#20232e] dark:bg-[#050608] dark:text-white md:py-28">
      <div className="sg-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">Insights</p>
            <h2 className="sg-section-title mt-4 font-black">Security intelligence you can use.</h2>
          </div>
          <p className="sg-body-large text-gray-600 dark:text-white/60">
            More than a blog list, this layer positions SeptaGreen as a thinking partner across cyber risk, AI, fintech, and secure digital growth.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group bg-white dark:bg-white/5"
            >
              <div className="relative h-64 overflow-hidden bg-[#20232e]">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#0068B8] px-3 py-1 text-xs font-bold text-white">
                  {article.category}
                </div>
              </div>
              <div className="border-x border-b border-gray-200 p-6 dark:border-white/10">
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock /> {article.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#20232e] dark:text-white">{article.title}</h3>
                <p className="mt-3 min-h-24 leading-relaxed text-gray-600 dark:text-white/60">{article.excerpt}</p>
                <Link to="/insights" className="sg-link-line mt-6 inline-flex items-center font-bold text-[#20232e] dark:text-[#0068B8]">
                  Read insight <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {!compact && (
          <div className="mt-20 grid overflow-hidden bg-[#20232e] text-white lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 md:p-10">
              <p className="sg-kicker font-bold text-[#0068B8]">Get in touch</p>
              <h3 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Need to know where your defenses stand?
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Reach out for a focused security conversation. SeptaGreen will help identify the right assessment path for your systems, team, and risk profile.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#0068B8] px-6 py-4 font-bold text-white transition hover:bg-white">
                Contact us <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative min-h-[360px]">
              <img src={images.client} alt="SeptaGreen team conversation" className="h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#20232e] via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
