import { motion } from 'framer-motion';
import { FiShield, FiGlobe, FiUsers, FiAward } from 'react-icons/fi';
import cyber from '../../../assets/cyber.jpg';

export function CoreValues() {
  const values = [
    {
      icon: <FiShield className="w-8 h-8 text-[#10B981]" />,
      title: "Uncompromising Security",
      description: "We never cut corners in protecting what matters most"
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-[#3B82F6]" />,
      title: "African Innovation",
      description: "Solutions tailored for Africa's unique digital landscape"
    },
    {
      icon: <FiUsers className="w-8 h-8 text-[#10B981]" />,
      title: "Community First",
      description: "We grow by elevating those around us"
    },
    {
      icon: <FiAward className="w-8 h-8 text-[#3B82F6]" />,
      title: "Excellence as Standard",
      description: "Mediocrity has no place in our DNA"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0, x: Math.random() * 100 }}
            whileInView={{ opacity: 0.05, y: Math.random() * 200 - 100 }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            viewport={{ once: true }}
            className={`absolute text-3xl ${i % 2 === 0 ? 'text-[#10B981]' : 'text-[#3B82F6]'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 ? '•' : i % 2 === 0 ? '◦' : '∙'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left half - Values content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our <span className="text-[#10B981]">Core</span> Principles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
                  }}
                  className="relative bg-white p-6 rounded-lg border border-gray-100 hover:border-[#10B981]/30 transition-all"
                >
                  {/* Floating icon background */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-16 h-16 rounded-full opacity-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 5 + index * 2,
                      repeat: Infinity
                    }}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#10B981' : '#3B82F6'
                    }}
                  />
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center"
                      whileHover={{ 
                        rotate: 5,
                        backgroundColor: index % 2 === 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)'
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right half - Image with animations */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              {/* Replaced Next.js Image with regular img tag */}
              <img
                src={cyber}
                alt="African cybersecurity team working"
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              
              {/* Image overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
              
              {/* Floating stats */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
              </motion.div>
              
              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-[#3B82F6]">5+</div>
                <div className="text-xs text-gray-600">Clients Protected</div>
              </motion.div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-xl pointer-events-none"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              />
            </div>
            
            {/* Decorative floating elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#10B981]/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}