import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/one.jpg";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-white overflow-hidden">
        {/* Cinematic Background Layers with African Textile Patterns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={image}
            alt="Digital security landscape"
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/80 via-transparent to-gray-950/60" />

          {/* African Kente Cloth Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.random() * 10 - 5],
                  y: [0, Math.random() * 10 - 5],
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className={`absolute h-1 ${
                  i % 4 === 0
                    ? "bg-[#10B981]"
                    : i % 3 === 0
                    ? "bg-[#3B82F6]"
                    : "bg-yellow-500"
                } ${i % 2 === 0 ? "w-16" : "w-24"}`}
                style={{
                  top: `${i * 5}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 10 - 5}deg)`,
                }}
              />
            ))}
          </div>
        </motion.div>



        {/* Main Content */}
        <div className="relative z-10 h-screen flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="w-full max-w-6xl"
          >


            {/* Text content */}
            <div className="relative z-10 h-screen flex flex-col justify-center pl-8 md:pl-16 lg:pl-24">
              <div className="max-w-2xl space-y-6">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-wide leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Welcome to <span className="text-[#10B981]">SeptaGreen</span>
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl font-medium text-gray-700 tracking-wide"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Digital Security,{" "}
                  <span className="text-[#3B82F6] font-semibold">
                    African Precision.
                  </span>
                </motion.h2>

                {/* Animated Divider */}
                <motion.div
                  className="flex space-x-2 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-1 ${
                        i % 3 === 0
                          ? "bg-[#10B981] w-8"
                          : i % 2 === 0
                          ? "bg-[#3B82F6] w-4"
                          : "bg-gray-900 w-2"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                    />
                  ))}
                </motion.div>

                {/* African proverb */}
                <motion.div
                  className="mt-12 text-gray-500 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  <motion.p
                    animate={{
                      x: [0, 5, 0],
                      textShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 5px rgba(16,185,129,0.3)",
                        "0 0 0px rgba(16,185,129,0)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    "Wisdom is like a baobab tree - no individual can
                    embrace it alone."
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global animations */}
        <style>{`
          @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-flow {
            background-size: 200% 200%;
            animation: gradient-flow 8s ease infinite;
          }

          @keyframes kente-wave {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(2deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          .kente-animate {
            animation: kente-wave 5s ease-in-out infinite;
          }

          @keyframes adinkra-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .adinkra-spin {
            animation: adinkra-spin 20s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
