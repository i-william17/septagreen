import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi'; // Import avatar icon

const testimonials = [
  {
    name: 'Dr. Nia Muthoni',
    role: 'CTO, KopaTech',
    content:
      'SeptaGreen has been instrumental in fortifying our systems. Their proactive threat detection saved us from potential breaches before they escalated.',
    image: '/assets/clients/client1.jpg', // kept for data structure consistency
    highlight: 'Reduced fraud incidents by 78%',
  },
  {
    name: 'David Mwangi',
    role: 'Founder, eShamba',
    content:
      'We were losing sleep over data security until we partnered with SeptaGreen. Now we focus on growth while they keep us safe.',
    image: '/assets/clients/client2.jpg',
    highlight: 'Zero data breaches in 12 months',
  },
  {
    name: 'Grace Atieno',
    role: 'CEO, TrueHealth Africa',
    content:
      'SeptaGreen brought a rare mix of professionalism and cultural understanding. They helped us navigate complex cybersecurity challenges unique to African healthcare.',
    image: '/assets/clients/client3.jpg',
    highlight: 'Full compliance in under 3 months',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const section = document.getElementById('testimonials-section');
    if (!section) return;

    const handleMouseMove = ({ clientX, clientY }) => {
      const { left, top } = section.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`
    radial-gradient(600px circle at ${mouseX}px ${mouseY}px,
    rgba(16, 185, 129, 0.15),
    transparent 80%)
  `;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextTestimonial();
      if (e.key === 'ArrowLeft') prevTestimonial();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="testimonials-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Subtle African Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="african-pattern"
            patternUnits="userSpaceOnUse"
            width="60"
            height="60"
          >
            <path d="M0 30h60M30 0v60" stroke="#10B981" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#african-pattern)" />
      </svg>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-10 relative z-10 max-w-3xl mx-auto"
            >
              <blockquote className="text-lg md:text-xl text-gray-600 italic mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="flex flex-col items-center">
                {/* Uniform Avatar Icon */}
                <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-50 mb-4">
                  <FiUser className="text-green-600 text-4xl" />
                </div>

                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-gray-500 mb-3">{testimonials[activeIndex].role}</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonials[activeIndex].highlight}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.button
            aria-label="Previous Testimonial"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-green-100 transition-colors z-20"
          >
            <FiChevronLeft className="text-green-600 text-2xl" />
          </motion.button>

          <motion.button
            aria-label="Next Testimonial"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-green-100 transition-colors z-20"
          >
            <FiChevronRight className="text-green-600 text-2xl" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-green-500 scale-125' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
