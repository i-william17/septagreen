import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiClock, FiLock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { useSitePreferences } from '../../context/SitePreferences';

const TopBar = () => {
  const { text } = useSitePreferences();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showLoginModal || showSignupModal ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLoginModal, showSignupModal]);

  const handleAuthSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowLoginModal(false);
        setShowSignupModal(false);
        setIsSubmitting(false);
        setSubmitSuccess(false);
      }, 1500);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="hidden border-b border-white/10 bg-[#20232e] text-xs text-white/70 md:block">
        <div className="sg-shell flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <FiClock className="text-[#00B51D]" /> {text.topbar.hours}
            </span>
            <a href="tel:+254711160437" className="flex items-center gap-2 transition hover:text-white">
              <FiPhone className="text-[#00B51D]" /> (+254) 711-160437
            </a>
            <a href="mailto:info@septagreen.com" className="flex items-center gap-2 transition hover:text-white">
              <FiMail className="text-[#00B51D]" /> info@septagreen.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setShowLoginModal(true)} className="flex items-center gap-1 transition hover:text-white">
              <FiUser /> {text.topbar.login}
            </button>
            <button type="button" onClick={() => setShowSignupModal(true)} className="flex items-center gap-1 transition hover:text-white">
              <FiLock /> {text.topbar.signup}
            </button>
            <div className="flex items-center gap-2 text-white/60">
              {[
                [FaFacebook, 'https://www.facebook.com'],
                [FaTwitter, 'https://www.twitter.com'],
                [FaLinkedin, 'https://www.linkedin.com'],
                [FaInstagram, 'https://www.instagram.com'],
                [FaTiktok, 'https://www.tiktok.com'],
              ].map(([Icon, href], index) => (
                <a key={index} href={href} aria-label={`SeptaGreen social profile ${index + 1}`} className="transition hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onSwitchToSignup={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
            onSubmit={handleAuthSubmit}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            text={text.auth}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSignupModal && (
          <SignupModal
            onClose={() => setShowSignupModal(false)}
            onSwitchToLogin={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
            onSubmit={handleAuthSubmit}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            text={text.auth}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;
