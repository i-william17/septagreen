import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiShield, FiGlobe, FiUsers, FiAward, FiLinkedin, FiTwitter, FiGlobe as FiWebsite } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import will from '../../../assets/will.jpg';

export function LeadershipTeam() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const leadershipSectionRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      if (leadershipSectionRef.current) {
        const { left, top } = leadershipSectionRef.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.1), transparent 80%)`;

  const team = [
    {
      name: "William Odhiambo",
      role: "Founder & CEO",
      bio: "William Odhiambo is a tech enthusiast and problem-solver passionate about building solutions that make life easier for businesses and individuals. His experience has strengthened his skills in software development and cybersecurity while fueling his desire to create scalable, Africa-first solutions.",
      image: `${will}`, 
      social: {
        linkedin: "https://www.linkedin.com/in/william-odhiambo-481689265/",
        twitter: "https://twitter.com/talesofwilliam",
        website: "https://wwc-one.vercel.app/"
      },
      stats: [
        { value: "2+", label: "Years Experience" },
        { value: "5+", label: "Team Members Led" }
      ]
    },
  ];

  return (
    <section 
      ref={leadershipSectionRef}
      id="leadership-section"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background }}
      />

      {/* Animated Kente pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="kente-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="120" height="20" fill="#10B981" />
            <rect x="0" y="20" width="120" height="20" fill="#3B82F6" />
            <rect x="0" y="40" width="120" height="20" fill="#10B981" />
            <rect x="0" y="60" width="120" height="20" fill="#3B82F6" />
            <rect x="0" y="80" width="120" height="20" fill="#10B981" />
            <rect x="0" y="100" width="120" height="20" fill="#3B82F6" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#kente-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visionary <span className="text-[#10B981]">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The brilliant minds shaping Africa's cybersecurity future
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-[#10B981] font-medium">{member.role}</p>
                    </div>
                    
                    {/* Social links including website */}
                    <div className="flex gap-3 mt-4">
                      <motion.a 
                        href={member.social.linkedin}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#10B981] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiLinkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a 
                        href={member.social.twitter}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#3B82F6] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiTwitter className="w-4 h-4" />
                      </motion.a>
                      <motion.a 
                        href={member.social.website}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#10B981] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGlobe className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Profile content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {member.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100"
                      >
                        <div className="text-2xl font-bold text-[#10B981]">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 text-3xl text-[#3B82F6]/30 group-hover:text-[#3B82F6]/50 transition-colors"
                  animate={{ rotate: 360, y: [0, -5, 0] }}
                  transition={{ duration: 8 + index * 2, repeat: Infinity, ease: "linear" }}
                >
                  <FiShield />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
