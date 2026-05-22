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
import { services, solutions } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

const Footer = () => {
  const { text } = useSitePreferences();
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

  return (
    <footer className="relative overflow-hidden bg-[#20232e] text-white">
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-[#0068B8] p-3 text-white shadow-lg transition hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      )}

      <div className="border-b border-white/10 bg-[#20232e] py-10">
        <div className="sg-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">{text.footer.kicker}</p>
            <h2 className="sg-heading mt-3 text-3xl md:text-5xl">{text.footer.title}</h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center border-2 border-white bg-white px-6 py-4 text-sm font-bold uppercase text-[#20232e] transition hover:bg-transparent hover:text-white"
          >
            {text.nav.requestAssessment}
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="sg-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/septagreen-logo.png"
                alt="SeptaGreen"
                className="sg-brand-logo h-auto w-48 object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-md leading-relaxed text-white/60">
              {text.footer.summary}
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
            <h3 className="text-lg font-bold text-[#0068B8]">{text.footer.services}</h3>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
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
            <h3 className="text-lg font-bold text-[#0068B8]">{text.footer.company}</h3>

            <ul className="mt-5 space-y-3">
              {[
                ['/', text.nav.home],
                ['/identity', text.nav.identity],
                ['/insights', text.nav.insights],
                ['/contact', text.nav.contact],
                ['/careers', text.nav.careers],
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
            <h3 className="text-lg font-bold text-[#0068B8]">{text.footer.newsletter}</h3>

            <p className="mt-5 text-white/60">{text.footer.newsletterBody}</p>

            {isSubscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 border border-[#00B51D]/40 bg-[#00B51D]/10 p-4 text-sm"
              >
                {text.footer.subscribed}
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex border border-white/15 bg-white/5">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={text.footer.emailPlaceholder}
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40"
                  required
                />

                <button
                  type="submit"
                  className="bg-[#0068B8] px-4 text-white"
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} SeptaGreen. {text.footer.rights}
          </p>

          <div className="flex flex-wrap gap-4">
            {solutions.map((solution) => (
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