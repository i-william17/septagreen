import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiArrowUp,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTwitter,
} from 'react-icons/fi';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 450);

    checkScroll();
    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#151718] text-white">
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 border border-white/15 bg-[#0068B8] p-3 text-white transition hover:-translate-y-1 hover:border-white/40"
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      )}

      <div className="border-b border-white/10 bg-[#151718] py-12">
        <div className="sg-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="sg-heading text-4xl md:text-6xl">Start with a focused assessment.</h2>
          </div>

          <Link
            to="/request-assessment"
            className="sg-button sg-button-light w-fit"
          >
            Request assessment
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="sg-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/septagreen-logo.png"
                alt="SeptaGreen"
                className="sg-brand-logo h-auto w-48 object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-md leading-relaxed text-white/60">
              Secure digital platforms, offensive security assessments, cloud hardening, and managed protection for modern African businesses.
            </p>

            <div className="mt-7 flex gap-4 text-white/50">
              {[
                [FiFacebook, 'https://www.facebook.com'],
                [FiTwitter, 'https://www.twitter.com'],
                [FiInstagram, 'https://www.instagram.com'],
                [FiLinkedin, 'https://www.linkedin.com'],
              ].map(([Icon, href], index) => (
                <a
                  key={index}
                  href={href}
                  className="transition hover:text-[#0068B8]"
                  aria-label={`Social profile ${index + 1}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#0068B8]">Services</h3>

            <ul className="mt-5 space-y-3">
              {[
                { slug: 'red-team', shortTitle: 'Red Team' },
                { slug: 'penetration-testing', shortTitle: 'Penetration Testing' },
                { slug: 'vulnerability-assessment', shortTitle: 'Vulnerability Assessment' },
                { slug: 'web-development', shortTitle: 'Web Development' },
                { slug: 'ecommerce-security', shortTitle: 'E-Commerce' },
                { slug: 'application-security', shortTitle: 'Application Security' },
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-white/60 transition hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#0068B8]">Company</h3>

            <ul className="mt-5 space-y-3">
              {[
                ['/', 'Home'],
                ['/identity', 'Identity'],
                ['/insights', 'Insights'],
                ['/contact', 'Contact'],
                ['/careers', 'Careers'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-white/60 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#0068B8]">Newsletter</h3>

            <p className="mt-5 text-white/60">Security notes, service updates, and practical guidance.</p>

            {isSubscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 border border-[#00B51D]/40 bg-[#00B51D]/10 p-4 text-sm"
              >
                Thank you for subscribing.
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex border border-white/15 bg-white/[0.04]">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus-visible:outline-[#0068B8]"
                  required
                />

                <button
                  type="submit"
                  className="border-l border-white/15 bg-[#0068B8] px-4 text-white transition hover:bg-transparent"
                  aria-label="Subscribe"
                >
                  <FiSend />
                </button>
              </form>
            )}

            <div className="mt-7 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-3">
                <FiMapPin className="text-[#0068B8]" />
                Kenya
              </p>

              <p className="flex items-center gap-3">
                <FiPhone className="text-[#0068B8]" />
                (+254) 711-160437
              </p>

              <p className="flex items-center gap-3">
                <FiMail className="text-[#0068B8]" />
                info@septagreen.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} SeptaGreen. All rights reserved.
            </p>
            <p>
              Developed by{' '}
              <a
                href="https://www.williamwritescode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#0068B8]"
              >
                William Writes Code
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { slug: 'security-awareness', title: 'Security Awareness' },
              { slug: 'phishing-simulation', title: 'Phishing Simulation' },
              { slug: 'ransomware-simulation', title: 'Ransomware Simulation' },
            ].map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="hover:text-[#0068B8]"
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
