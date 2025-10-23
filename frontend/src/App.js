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


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading all resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
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
      </Routes>
    </Router>
  );
};

export default App;
