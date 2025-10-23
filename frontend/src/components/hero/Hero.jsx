import { FiArrowRight } from 'react-icons/fi';
import Lottie from "lottie-react";
import animationData from "../../assets/xFEZfxYXvY.json"; // Make sure this JSON is in the correct folder
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const phrases = ["Digital Reality", "Innovative Solutions", "Business Growth", "Future Technology"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    const typeWriter = () => {
      if (isTyping) {
        if (text.length < phrases[currentPhraseIndex].length) {
          timeout = setTimeout(() => {
            setText(phrases[currentPhraseIndex].substring(0, text.length + 1));
          }, 100);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      } else {
        if (text.length > 0) {
          timeout = setTimeout(() => {
            setText(text.substring(0, text.length - 1));
          }, 50);
        } else {
          setIsTyping(true);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    timeout = setTimeout(typeWriter, isTyping ? 100 : 50);

    return () => clearTimeout(timeout);
  }, [text, isTyping, currentPhraseIndex, phrases]);

  return (
    <section className="min-h-[100vh] bg-white text-[#024414] overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#024414]/5"></div>

        {/* Animated blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00B51D] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#00B51D] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#024414] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#024414] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 z-10 relative">
            {/* Heading with typing animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight"
            >
              Transforming <span className="text-[#024414]">Ideas</span> Into <br className="hidden sm:block" />
              <span className="text-[#00B51D] relative inline-block mt-2">
                {text}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-[#00B51D] origin-left"
                />
                <span className="absolute inset-0 bg-[#00B51D]/10 rounded-lg -z-10" />
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed"
            >
              We deliver <span className="font-semibold text-[#024414]">cutting-edge solutions</span> tailored to your business needs. Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                staggerChildren: 0.1
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(2, 68, 20, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-[#024414] text-white hover:bg-[#013310] px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center justify-center shadow-lg group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-[#00B51D] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(2, 68, 20, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden border-2 border-[#024414] text-[#024414] hover:bg-[#024414]/5 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all shadow-lg group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-[#00B51D] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 text-sm"
            >
              {/* Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`}
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-medium">Trusted by our valued clients</span>
              </div>

              <div className="h-6 w-px bg-gray-300" />

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">5.0 </span>
              </div>
            </motion.div>
          </div>

          {/* Lottie Animation Section */}
          <div className="lg:w-1/2 flex justify-center z-10 mt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#00B51D] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#024414] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-[500px] h-[550px]">
                  <Lottie animationData={animationData} loop={true} className="rounded-lg" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Keyframe animations for blobs */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
