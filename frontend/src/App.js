import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import InsightsPage from "./components/pages/InsightsPage";
import UtilityPage from "./components/pages/UtilityPage";
import { SitePreferencesProvider } from "./context/SitePreferences";


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
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/identity" element={<Identity />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<UtilityPage type="careers" />} />
          <Route path="/careers/:slug" element={<UtilityPage type="careers" />} />
          <Route path="/chat-support" element={<UtilityPage type="chat-support" />} />
          <Route path="/shop" element={<UtilityPage type="shop" />} />
          <Route path="/developerx" element={<UtilityPage type="developerx" />} />
        </Routes>
      </Router>
    </SitePreferencesProvider>
  );
};

export default App;
