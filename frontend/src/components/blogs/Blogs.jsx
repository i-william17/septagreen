import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import one from '../../assets/sec1.jpg';
import two from '../../assets/sec2.jpg';
import three from '../../assets/sec3.jpg';

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Securing Africa's Digital Future",
      excerpt: "How cybersecurity innovations are transforming business across the continent and what you need to know to stay protected.",
      category: "Cybersecurity",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: `${one}`
    },
    {
      id: 2,
      title: "AI in African Cybersecurity",
      excerpt: "Exploring how machine learning is being leveraged to combat unique digital threats in African markets.",
      category: "Artificial Intelligence",
      date: "April 28, 2025",
      readTime: "7 min read",
      image: `${two}`
    },
    {
      id: 3,
      title: "Fintech Protection Strategies",
      excerpt: "Best practices for securing mobile payment platforms in high-growth African economies.",
      category: "Fintech",
      date: "March 10, 2023",
      readTime: "4 min read",
      image: `${three}`
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-1 ${
              i % 4 === 0 ? 'bg-[#10B981]' : i % 3 === 0 ? 'bg-[#3B82F6]' : 'bg-yellow-500'
            }`}
            style={{
              top: `${i * 8}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & <span className="text-[#10B981]">Knowledge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest perspectives on African cybersecurity and digital innovation
          </p>
        </motion.div>

        {/* Blog articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring'
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Article image */}
              <motion.div
                className="relative h-60 rounded-xl overflow-hidden mb-6 shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-green-500 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {article.category}
                </motion.div>
              </motion.div>

              {/* Article content */}
              <div className="px-2">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-5">{article.excerpt}</p>

                <motion.a
                  href="#"
                  className="inline-flex items-center text-[#10B981] font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read more <FiArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>

              {/* Decorative circle element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#3B82F6]/10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="px-8 py-3 bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <FiArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Animated cultural divider */}
        <motion.div
          className="flex justify-center space-x-2 pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 rounded-full ${
                i % 3 === 0
                  ? 'bg-[#10B981] w-8'
                  : i % 2 === 0
                  ? 'bg-[#3B82F6] w-4'
                  : 'bg-gray-900 w-2'
              }`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
