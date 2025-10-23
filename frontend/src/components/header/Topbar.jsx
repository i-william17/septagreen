import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiClock, FiUser, FiLock } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const TopBar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (showLoginModal || showSignupModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showLoginModal, showSignupModal]);

    const handleAuthSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            await new Promise((res) => setTimeout(res, 1500));
            setSubmitSuccess(true);
            setTimeout(() => {
                setShowLoginModal(false);
                setShowSignupModal(false);
                setIsSubmitting(false);
                setSubmitSuccess(false);
            }, 2000);
        } catch {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="bg-[#024414] text-white text-sm rounded-b-lg shadow-md w-full z-50">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2">
                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-2 sm:gap-x-4 gap-y-1 w-full md:w-auto">
                            <div className="flex items-center bg-[#013310]/30 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                                <FiClock className="mr-1 sm:mr-2 text-[#00B51D]" size={14} />
                                <span className="text-xs sm:text-sm">Mon-Fri: 9AM-5PM</span>
                            </div>
                            <div className="flex items-center bg-[#013310]/30 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                                <FiPhone className="mr-1 sm:mr-2 text-[#00B51D]" size={14} />
                                <span className="text-xs sm:text-sm">(+254) 711-160437</span>
                            </div>
                        </div>

                        {/* Auth and Social */}
                        <div className="flex items-center gap-1 sm:gap-3 w-full md:w-auto justify-between md:justify-normal">
                            {/* Auth Buttons - Stacked on small screens */}
                            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 bg-[#013310]/30 px-2 sm:px-3 py-1 rounded-full">
                                <button
                                    onClick={() => setShowLoginModal(true)}
                                    className="flex items-center hover:text-[#00B51D] transition-colors text-xs sm:text-sm whitespace-nowrap"
                                >
                                    <FiUser className="mr-1" size={12} /> Login
                                </button>
                                <span className="text-gray-400 hidden sm:inline">|</span>
                                <button
                                    onClick={() => setShowSignupModal(true)}
                                    className="flex items-center hover:text-[#00B51D] transition-colors text-xs sm:text-sm whitespace-nowrap"
                                >
                                    <FiLock className="mr-1" size={12} /> Sign Up
                                </button>
                            </div>

                            {/* Social Icons - Adjust spacing and size for mobile */}
                            <div className="flex items-center gap-1 sm:gap-2">
                                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30"
                                        aria-label={`Social media icon ${idx}`}
                                    >
                                        <Icon size={10} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
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
                    />
                )}
            </AnimatePresence>

        </>
    );
};

export default TopBar;