import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MidSection from "./components/hero/Mid-section";
import Testimonials from "./components/testimonial/Testimonial";
import Blogs from "./components/blogs/Blogs";
import Loader from "./components/loader/Loader";
import Clients from "./components/identity/sections/clients";
import Identity from "./components/identity/Identity";
import ServicePage from "./components/pages/ServicePage";
import SolutionPage from "./components/pages/SolutionPage";
import ContactPage from "./components/pages/ContactPage";
import RequestAssessmentPage from "./components/pages/RequestAssessmentPage";
import InsightsPage from "./components/pages/InsightsPage";
import UtilityPage from "./components/pages/UtilityPage";
import { SitePreferencesProvider } from "./context/SitePreferences";

const HomePage = () => (
  <>
    <Header />
    <Welcome />
    <MidSection />
    <Clients />
    <Hero />
    <Testimonials />
    <Blogs />
    <Footer />
  </>
);

function useScrollReveal(pathname) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(
      document.querySelectorAll([
        'main > section:not(:first-child)',
        '.sg-section',
        '.sg-card',
        '.sg-card-dark',
        '.sg-media',
      ].join(','))
    ).filter((element) => !element.closest('nav') && !element.closest('.fixed'));

    if (prefersReducedMotion) {
      targets.forEach((element) => element.classList.add('sg-scroll-visible'));
      return undefined;
    }

    targets.forEach((element, index) => {
      element.classList.add('sg-scroll-reveal');
      element.style.setProperty('--sg-reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sg-scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.14,
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);
}

const PageTransition = ({ children, pathname, shouldReduceMotion }) => {
  useScrollReveal(pathname);

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              clipPath: 'inset(0 0 0 100%)',
              opacity: 0.98,
            }
      }
      animate={{
        clipPath: 'inset(0 0 0 0%)',
        opacity: 1,
      }}
      exit={
        shouldReduceMotion
          ? undefined
          : {
              clipPath: 'inset(0 100% 0 0%)',
              opacity: 0.98,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.62,
        ease: [0.83, 0, 0.17, 1],
      }}
      className="sg-page-transition"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition
        key={location.pathname}
        pathname={location.pathname}
        shouldReduceMotion={shouldReduceMotion}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-assessment" element={<RequestAssessmentPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<UtilityPage type="careers" />} />
          <Route path="/careers/:slug" element={<UtilityPage type="careers" />} />
          <Route path="/chat-support" element={<UtilityPage type="chat-support" />} />
          <Route path="/shop" element={<UtilityPage type="shop" />} />
          <Route path="/developerx" element={<UtilityPage type="developerx" />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading all resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <SitePreferencesProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </SitePreferencesProvider>
  );
};

export default App;
