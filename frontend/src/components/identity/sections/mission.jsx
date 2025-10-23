import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import img from '../../../assets/ident.jpg';

export function MissionStatement() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const missionSectionRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      if (missionSectionRef.current) {
        const { left, top } = missionSectionRef.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)`;

  return (
    <motion.section 
      ref={missionSectionRef}
      id="mission-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
      }}
    >
      {/* Kente cloth animated background - more subtle on mobile */}
      <div className="absolute inset-0 opacity-5 lg:opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute h-1 ${i % 4 === 0 ? 'bg-[#10B981]' : i % 3 === 0 ? 'bg-[#3B82F6]' : 'bg-yellow-500'} ${i % 2 === 0 ? 'w-16' : 'w-24'}`}
            style={{
              top: `${i * 5}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient highlight - desktop only */}
      <motion.div 
        className="absolute inset-0 opacity-0 lg:opacity-20 pointer-events-none"
        style={{ background }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 mt-32 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Enhanced Image Section - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:block w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
              {/* Replaced Next.js Image with regular img tag */}
              <img
                src={img}
                alt="African cybersecurity team"
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-[#10B981] text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-xl">🛡️</span>
                Since 2025
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white opacity-0 hover:opacity-30 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#3B82F6] opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity
              }}
            />
          </motion.div>

          {/* Text Content - full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto lg:mx-0 mb-6 flex items-center justify-center"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.path
                  d="M20,20 L180,20 L180,180 L20,180 Z"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
                <motion.path
                  d="M50,50 L150,50 L150,150 L50,150 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </svg>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Guardians of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Digital Africa</span>
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At <span className="font-semibold text-gray-800">SeptaGreen</span>, we fuse cutting-edge cybersecurity with deep African expertise to protect your digital future.
            </motion.p>

            {/* Tags - centered on mobile */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {['Cybersecurity', 'AI Protection', 'Data Sovereignty'].map((tag, i) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-black rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200 hover:border-[#10B981]/30 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button - centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white rounded-lg font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                Discover Our Approach
              </motion.button>
            </motion.div>

            {/* Animated Cultural pattern divider - mobile optimized */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-1.5 sm:space-x-2 mt-10 lg:mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 rounded-full ${i % 3 === 0 ? 'bg-[#10B981] w-6 sm:w-8' : i % 2 === 0 ? 'bg-[#3B82F6] w-3 sm:w-4' : 'bg-gray-900 w-1.5 sm:w-2'}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
                  viewport={{ once: true }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}