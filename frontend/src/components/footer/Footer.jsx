import { 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin, 
  FiMail, FiPhone, FiMapPin, FiArrowUp, FiSend 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <footer className="relative bg-white text-gray-800 pt-20 pb-16 overflow-hidden border-t border-gray-200">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#00B51D]/10 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-[#00B51D]/10 blur-xl"></div>
        
        {/* Wave Divider */}
        <svg 
          className="absolute top-0 left-0 w-full h-20 text-[#024414]"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-[#00B51D] hover:bg-[#00a51a] text-white p-3 rounded-full shadow-lg z-50 transition-all flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Logo + Description */}
          <motion.div variants={fadeIn} className="space-y-6 lg:col-span-2">
            <div className="flex items-center">
              <img 
                src="/nobg.png" 
                alt="Logo" 
                className="mr-3 w-[175px] h-[175px]"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We transform businesses through innovative digital solutions that drive growth and create lasting impact.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <FiFacebook size={22} />, name: "Facebook" },
                { icon: <FiTwitter size={22} />, name: "Twitter" },
                { icon: <FiInstagram size={22} />, name: "Instagram" },
                { icon: <FiLinkedin size={22} />, name: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeIn}
                  href="#"
                  className="text-gray-500 hover:text-[#00B51D] hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
              <span className="w-3 h-3 bg-[#00B51D] rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Case Studies", "Team", "Contact"].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-600 hover:text-[#00B51D] transition-colors flex items-center text-lg">
                    <span className="w-2 h-2 bg-[#00B51D] rounded-full mr-3"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
              <span className="w-3 h-3 bg-[#00B51D] rounded-full mr-2"></span>
              Services
            </h3>
            <ul className="space-y-4">
              {["Web Development", "Mobile Apps", "Vulnerability Assessment", "Penetration Testing", "Security Monitoring", "AI Integration"].map((service, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-600 hover:text-[#00B51D] transition-colors flex items-center text-lg">
                    <span className="w-2 h-2 bg-[#00B51D] rounded-full mr-3"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeIn} className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
              <span className="w-3 h-3 bg-[#00B51D] rounded-full mr-2"></span>
              Newsletter
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              >
                <div className="flex items-center">
                  <FiMail className="mr-2" />
                  Thank you for subscribing!
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B51D] text-gray-800 placeholder-gray-500"
                    required
                  />
                  <FiMail className="absolute right-3 top-3.5 text-gray-500" />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#00B51D] hover:bg-[#00a51a] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Subscribe <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <FiMapPin className="text-[#00B51D] mr-3 flex-shrink-0" />
                <span className="text-gray-600">Kenya</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-[#00B51D] mr-3" />
                <span className="text-gray-600">(+254) 711-160437</span>
              </div>
              <div className="flex items-center">
                <FiMail className="text-[#00B51D] mr-3" />
                <span className="text-gray-600">info@septagreen.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 text-center md:text-left"
        >
          <p className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} SeptaGreen. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-gray-500 hover:text-[#00B51D] text-sm md:text-base transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-t border-gray-300 my-12 origin-left"
        ></motion.div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full text-[#024414]"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="currentColor"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="currentColor"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
