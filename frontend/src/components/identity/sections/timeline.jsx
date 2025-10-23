import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiShield, FiMap, FiAward, FiChevronDown } from 'react-icons/fi';
import founder from '../../../assets/home.jpg';
import client from '../../../assets/client.jpg';
import award from '../../../assets/award.jpg';
import expand from '../../../assets/expand.jpg';

export function CompanyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const milestones = [
    {
      year: "2025",
      title: "Founded in Kenya",
      description: "SeptaGreen was established in July 2025 to help African businesses strengthen their cybersecurity posture and digital resilience.",
      image: `${founder}`,
      icon: <FiGlobe className="w-5 h-5" />
    },
    {
      year: "2026",
      title: "First 30 Enterprise Clients",
      description: "Partnered with leading Kenyan banks and startups to provide penetration testing and cyber awareness programs.",
      image: `${client}`,
      icon: <FiShield className="w-5 h-5" />
    },
    {
      year: "2028",
      title: "Innovation Recognition",
      description: "Recognized as one of East Africa’s most promising cybersecurity startups for pioneering AI-driven threat detection.",
      image: `${award}`,
      icon: <FiAward className="w-5 h-5" />
    },
        {
      year: "2030",
      title: "Regional Expansion",
      description: "Expanded services to Uganda and Tanzania, offering managed security and digital forensics solutions.",
      image: `${expand}`,
      icon: <FiMap className="w-5 h-5" />
    },
  ];


  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#10B981]">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milestones that define our African cybersecurity excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline track */}
          <motion.div
            className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#10B981] to-[#3B82F6]"
              style={{ scaleY: scrollYProgress }}
            />
          </motion.div>

          <div className="space-y-28">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Year marker */}
                <motion.div
                  className="absolute left-1/2 top-0 w-14 h-14 rounded-full bg-white border-2 border-[#10B981] flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-7 z-10"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: '#10B981',
                    color: 'white'
                  }}
                  style={{ y }}
                >
                  <div className="text-[#10B981] group-hover:text-white">
                    {milestone.icon}
                  </div>
                </motion.div>

                {/* Content card */}
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Image panel - desktop only */}
                  <motion.div
                    className="hidden lg:block flex-1 relative h-64"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <div className={`absolute inset-0 rounded-xl overflow-hidden shadow-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      {/* Image with regular img tag */}
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="object-cover w-full h-full"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}
                  >
                    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <p className='text-[#10B981]'>{milestone.year}</p>

                      {/* Mobile image */}
                      <div className="mt-4 lg:hidden relative h-40 rounded-lg overflow-hidden border border-gray-200">
                        {/* Replaced Next.js Image with regular img tag */}
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="object-cover w-full h-full"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
            className="flex flex-col items-center text-[#10B981]"
          >
            <FiChevronDown className="w-6 h-6" />
            <span className="text-xs mt-1">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}