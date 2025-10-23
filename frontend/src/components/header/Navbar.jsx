import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import TopBar from './Topbar';
import { FiSearch, FiX, FiMenu, FiHome, FiInfo, FiBriefcase, FiMessageSquare, FiShoppingBag, FiCode, FiShield, FiGlobe, FiShoppingCart, FiServer } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };
  
  const toggleServices = () => setServicesOpen((prev) => !prev);

  // Initialize animations and scroll listener
  useEffect(() => {
    // GSAP Animations
    gsap.from('.logo, .nav-links li, .search-container', {
      duration: 1,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  // Check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'py-2 bg-black/95 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}
    `}>
      <TopBar />
      <div className="container mx-auto px-6 flex justify-between items-center h-16 mt-4 z-100">
        {/* Logo with image - inverted on scroll */}
        <div className="flex items-center z-100">
          <Link to="/" className="logo flex items-center">
            <img
              src="/nobg.png"
              alt="Logo"
              width={200}
              height={200}
              className={`mr-3 transition-all duration-300 ${
                isScrolled ? 'filter invert brightness-0' : ''
              }`}
            />
          </Link>
        </div>

        {/* Desktop Nav Links with React Router */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link 
              to="/" 
              className={`transition-colors font-medium flex items-center ${
                isScrolled 
                  ? `text-white hover:text-[#00B51D] ${isActiveRoute('/') ? 'text-[#00B51D]' : ''}`
                  : `text-black hover:text-[#00B51D] ${isActiveRoute('/') ? 'text-[#00B51D]' : ''}`
              }`}
            >
              <FiHome className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link 
              to="/identity" 
              className={`transition-colors font-medium flex items-center ${
                isScrolled 
                  ? `text-white hover:text-[#00B51D] ${isActiveRoute('/identity') ? 'text-[#00B51D]' : ''}`
                  : `text-black hover:text-[#00B51D] ${isActiveRoute('/identity') ? 'text-[#00B51D]' : ''}`
              }`}
            >
              <FiInfo className="mr-1" /> Identity
            </Link>
          </li>

          {/* Mega Dropdown */}
          <li className="relative group">
            <button className={`transition-colors font-medium flex items-center ${
              isScrolled 
                ? 'text-white hover:text-[#00B51D]' 
                : 'text-black hover:text-[#00B51D]'
            }`}>
              <FiBriefcase className="mr-1" /> Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 top-full mt-2 w-[600px] rounded-lg shadow-xl p-6 hidden group-hover:grid grid-cols-2 gap-6 transition-all duration-300 border ${
              isScrolled ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
            }`}>
              <div>
                <h4 className={`text-lg font-semibold mb-4 flex items-center ${
                  isScrolled ? 'text-[#00B51D]' : 'text-[#024414]'
                }`}>
                  <FiGlobe className="mr-2" /> Web Solutions
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/web-development" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ecommerce" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/seo" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      SEO Optimization
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-4 flex items-center ${
                  isScrolled ? 'text-[#00B51D]' : 'text-[#024414]'
                }`}>
                  <FiShield className="mr-2" /> Cybersecurity
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/vulnerability-assessment" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Vulnerability Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/penetration-testing" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Penetration Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/security-monitoring" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Security Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/cloud-security" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Cloud Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="relative group">
            <button className={`transition-colors font-medium flex items-center ${
              isScrolled 
                ? 'text-white hover:text-[#00B51D]' 
                : 'text-black hover:text-[#00B51D]'
            }`}>
              <FiServer className="mr-1" /> Careers
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 top-full mt-2 w-[600px] rounded-lg shadow-xl p-6 hidden group-hover:grid grid-cols-2 gap-6 transition-all duration-300 border ${
              isScrolled ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
            }`}>
              <div>
                <h4 className={`text-lg font-semibold mb-4 flex items-center ${
                  isScrolled ? 'text-[#00B51D]' : 'text-[#024414]'
                }`}>
                  Join Us
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/careers/septa-crew" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Septa-Crew
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers/septa-squad" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Septa-Squad
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers/septa-club" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Septa-Club
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers/septa-cyberacademy" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Septa-CyberAcademy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-4 flex items-center ${
                  isScrolled ? 'text-[#00B51D]' : 'text-[#024414]'
                }`}>
                  Our Team
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/careers/departments" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers/structure" className={`hover:text-[#00B51D] flex items-center ${
                      isScrolled ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Our Structure
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          
          <li>
            <Link 
              to="/chat-support" 
              className={`transition-colors font-medium flex items-center ${
                isScrolled 
                  ? `text-white hover:text-[#00B51D] ${isActiveRoute('/chat-support') ? 'text-[#00B51D]' : ''}`
                  : `text-black hover:text-[#00B51D] ${isActiveRoute('/chat-support') ? 'text-[#00B51D]' : ''}`
              }`}
            >
              <FiMessageSquare className="mr-1" /> Talk to Xempi
            </Link>
          </li>
          
          <li>
            <Link 
              to="/shop" 
              className={`transition-colors font-medium flex items-center ${
                isScrolled 
                  ? `text-white hover:text-[#00B51D] ${isActiveRoute('/shop') ? 'text-[#00B51D]' : ''}`
                  : `text-black hover:text-[#00B51D] ${isActiveRoute('/shop') ? 'text-[#00B51D]' : ''}`
              }`}
            >
              <FiShoppingBag className="mr-1" /> Shop
            </Link>
          </li>
          
          <li>
            <Link 
              to="/developerx" 
              className={`transition-colors font-medium flex items-center ${
                isScrolled 
                  ? `text-white hover:text-[#00B51D] ${isActiveRoute('/developerx') ? 'text-[#00B51D]' : ''}`
                  : `text-black hover:text-[#00B51D] ${isActiveRoute('/developerx') ? 'text-[#00B51D]' : ''}`
              }`}
            >
              <FiCode className="mr-1" /> DeveloperX 2.0
            </Link>
          </li>
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <button
              onClick={toggleSearch}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'
              }`}
              aria-label="Search"
            >
              {isSearchActive ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>
            <div className={`
              absolute right-0 top-full mt-2 w-64 shadow-lg rounded-lg overflow-hidden
              transition-all duration-300 transform origin-top border
              ${isSearchActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
              ${isScrolled ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
            `}>
              <input
                type="text"
                placeholder="Search..."
                className={`w-full p-3 focus:outline-none ${
                  isScrolled ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-50 text-black'
                }`}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with React Router */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 pt-6 px-4
          transition-all duration-500 ease-in-out transform overflow-hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          bg-gray-900
        `}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseMenu}
          className="absolute top-4 right-4 text-gray-300 hover:text-[#00B51D] text-3xl"
          aria-label="Close menu"
        >
          &times;
        </button>

        <div className="container mx-auto pt-12">
          <ul className="flex flex-col gap-4 py-4">
            <li>
              <Link
                to="/"
                onClick={handleCloseMenu}
                className={`text-xl font-medium flex items-center ${
                  isActiveRoute('/') ? 'text-[#00B51D]' : 'text-white hover:text-[#00B51D]'
                }`}
              >
                <FiHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/identity"
                onClick={handleCloseMenu}
                className={`text-xl font-medium flex items-center ${
                  isActiveRoute('/identity') ? 'text-[#00B51D]' : 'text-white hover:text-[#00B51D]'
                }`}
              >
                <FiInfo className="mr-2" /> Identity
              </Link>
            </li>
            <li>
              <button
                onClick={toggleServices}
                className="w-full text-left text-xl font-medium text-white hover:text-[#00B51D] flex items-center justify-between"
              >
                <span className="flex items-center">
                  <FiBriefcase className="mr-2" /> Services
                </span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    servicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul
                className={`mt-2 pl-4 border-l-2 border-[#00B51D] space-y-2 transition-all duration-300 ${
                  servicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <li className="text-base font-medium text-gray-300">Web Solutions</li>
                <li>
                  <Link
                    to="/services/web-development"
                    onClick={handleCloseMenu}
                    className="text-base text-gray-400 hover:text-[#00B51D] flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ecommerce"
                    onClick={handleCloseMenu}
                    className="text-base text-gray-400 hover:text-[#00B51D] flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    E-Commerce
                  </Link>
                </li>
                <li className="text-base font-medium text-gray-300 mt-2">Cybersecurity</li>
                <li>
                  <Link
                    to="/services/vulnerability-assessment"
                    onClick={handleCloseMenu}
                    className="text-base text-gray-400 hover:text-[#00B51D] flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Vulnerability Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/penetration-testing"
                    onClick={handleCloseMenu}
                    className="text-base text-gray-400 hover:text-[#00B51D] flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Penetration Testing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/careers"
                onClick={handleCloseMenu}
                className={`text-xl font-medium flex items-center ${
                  isActiveRoute('/careers') ? 'text-[#00B51D]' : 'text-white hover:text-[#00B51D]'
                }`}
              >
                <FiServer className="mr-2" /> Careers
              </Link>
            </li>
            <li>
              <Link
                to="/chat-support"
                onClick={handleCloseMenu}
                className={`text-xl font-medium flex items-center ${
                  isActiveRoute('/chat-support') ? 'text-[#00B51D]' : 'text-white hover:text-[#00B51D]'
                }`}
              >
                <FiMessageSquare className="mr-2" /> Talk to Xempi
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={handleCloseMenu}
                className={`text-xl font-medium flex items-center ${
                  isActiveRoute('/shop') ? 'text-[#00B51D]' : 'text-white hover:text-[#00B51D]'
                }`}
              >
                <FiShoppingCart className="mr-2" /> Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;