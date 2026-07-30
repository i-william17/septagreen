import React, { useState, useEffect } from 'react';
import { FiX, FiAlertCircle, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SignupModal = ({ onClose, onSwitchToLogin, onSubmit, isSubmitting, submitSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false
    });

    useEffect(() => {
        if (formData.password) {
            setPasswordStrength({
                length: formData.password.length >= 8,
                uppercase: /[A-Z]/.test(formData.password),
                lowercase: /[a-z]/.test(formData.password),
                number: /[0-9]/.test(formData.password),
                specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
            });
        }
    }, [formData.password]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!Object.values(passwordStrength).every(Boolean)) {
            newErrors.password = 'Password does not meet requirements';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget && !isSubmitting) {
                    onClose();
                }
            }}
            className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-y-auto bg-[#151718]/[0.76] p-4 py-8 backdrop-blur-md"
        >
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto border border-[#20232e]/15 bg-[#fffdf8] dark:border-white/10 dark:bg-[#111418]"
            >
                <div className="flex justify-between items-center border-b border-white/10 bg-[#151718] p-4">
                    <h3 className="text-lg font-semibold text-white">Create a SeptaGreen account</h3>
                    <button
                        onClick={onClose}
                        className="border border-white/15 p-1 text-white transition-colors hover:text-[#00B51D]"
                        disabled={isSubmitting}
                    >
                        <FiX size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white/75">Full name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full border ${errors.name ? 'border-red-500' : 'border-[#20232e]/15'} bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0068B8] focus:outline-none focus:ring-2 focus:ring-[#0068B8]/10 dark:border-white/10 dark:bg-[#111418] dark:text-white`}
                            disabled={isSubmitting}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs flex items-center mt-1">
                                <FiAlertCircle className="mr-1" /> {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white/75">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#20232e]/15'} bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0068B8] focus:outline-none focus:ring-2 focus:ring-[#0068B8]/10 dark:border-white/10 dark:bg-[#111418] dark:text-white`}
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs flex items-center mt-1">
                                <FiAlertCircle className="mr-1" /> {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white/75">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full border ${errors.password ? 'border-red-500' : 'border-[#20232e]/15'} bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0068B8] focus:outline-none focus:ring-2 focus:ring-[#0068B8]/10 dark:border-white/10 dark:bg-[#111418] dark:text-white`}
                            disabled={isSubmitting}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs flex items-center mt-1">
                                <FiAlertCircle className="mr-1" /> {errors.password}
                            </p>
                        )}
                        
                        {formData.password && (
                            <div className="mt-2 space-y-1">
                                <p className="text-xs text-gray-600 dark:text-white/60">Password must contain:</p>
                                <ul className="text-xs space-y-1">
                                    <li className={`flex items-center ${passwordStrength.length ? 'text-green-600' : 'text-gray-400'}`}>
                                        <FiCheck className="mr-1" size={12} /> At least 8 characters
                                    </li>
                                    <li className={`flex items-center ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
                                        <FiCheck className="mr-1" size={12} /> One uppercase letter
                                    </li>
                                    <li className={`flex items-center ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
                                        <FiCheck className="mr-1" size={12} /> One lowercase letter
                                    </li>
                                    <li className={`flex items-center ${passwordStrength.number ? 'text-green-600' : 'text-gray-400'}`}>
                                        <FiCheck className="mr-1" size={12} /> One number
                                    </li>
                                    <li className={`flex items-center ${passwordStrength.specialChar ? 'text-green-600' : 'text-gray-400'}`}>
                                        <FiCheck className="mr-1" size={12} /> One special character
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white/75">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-[#20232e]/15'} bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0068B8] focus:outline-none focus:ring-2 focus:ring-[#0068B8]/10 dark:border-white/10 dark:bg-[#111418] dark:text-white`}
                            disabled={isSubmitting}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs flex items-center mt-1">
                                <FiAlertCircle className="mr-1" /> {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {submitSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative border border-green-400 bg-green-100 px-4 py-3 text-green-700"
                        >
                            <div className="flex items-center">
                                <FiCheck className="mr-2" />
                                Account created successfully.
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            type="submit"
                            className={`sg-button mt-2 flex w-full items-center justify-center px-4 py-2.5 font-medium text-white transition-colors hover:bg-[#20232e] ${isSubmitting ? 'bg-[#20232e]/80' : 'bg-[#20232e]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Sign up'
                            )}
                        </motion.button>
                    )}

                    <div className="text-center pt-2">
                        <button
                            type="button"
                            onClick={onSwitchToLogin}
                            className="text-sm text-[#00B51D] hover:underline font-medium"
                            disabled={isSubmitting}
                        >
                            Already have an account? Login
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default SignupModal;
