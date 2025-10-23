import React, { useState } from 'react';
import { FiX, FiAlertCircle, FiCheck, FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({
  onClose,
  onSwitchToSignup,
  onSubmit,
  isSubmitting,
  submitSuccess,
  onForgotPassword
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [shake, setShake] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
            <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    rotate: shake ? [0, -2, 2, -2, 2, 0] : 0
                }}
                exit={{ y: -20, opacity: 0, scale: 0.95 }}
                transition={{ 
                    type: 'spring', 
                    damping: 20, 
                    stiffness: 300
                }}
                className="relative bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden border border-gray-200"
            >
                {/* Header with original green colors */}
                <div className="flex justify-between items-center bg-[#024414] p-5">
                    <div className="flex items-center space-x-3">
                        <FiUser className="text-white text-xl" />
                        <h3 className="text-xl font-semibold text-white">Login to Your Septa-Account</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-[#00B51D] transition-colors p-1 rounded-full"
                        disabled={isSubmitting}
                    >
                        <FiX size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`block w-full pl-10 pr-3 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                disabled={isSubmitting}
                                placeholder="Enter your email address"
                            />
                        </div>
                        {errors.email && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm flex items-center mt-1"
                            >
                                <FiAlertCircle className="mr-1" /> {errors.email}
                            </motion.p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            {onForgotPassword && (
                                <button
                                    type="button"
                                    onClick={onForgotPassword}
                                    className="text-xs text-[#00B51D] hover:underline font-medium"
                                    disabled={isSubmitting}
                                >
                                    Forgot password?
                                </button>
                            )}
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`block w-full pl-10 pr-10 py-2.5 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                disabled={isSubmitting}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                            >
                                {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                            </button>
                        </div>
                        {errors.password && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm flex items-center mt-1"
                            >
                                <FiAlertCircle className="mr-1" /> {errors.password}
                            </motion.p>
                        )}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-[#00B51D] focus:ring-[#00B51D] border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <AnimatePresence mode="wait">
                        {submitSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative"
                            >
                                <div className="flex items-center justify-center">
                                    <FiCheck className="mr-2" />
                                    Login successful!
                                </div>
                            </motion.div>
                        ) : (
                            <motion.button
                                key="submit"
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full ${isSubmitting ? 'bg-[#024414]/90' : 'bg-[#024414]'} text-white py-2.5 px-4 rounded-lg hover:bg-[#013310] transition-colors font-medium flex items-center justify-center`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </motion.button>
                        )}
                    </AnimatePresence>

                    {/* Sign Up Link */}
                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={onSwitchToSignup}
                                className="font-medium text-[#00B51D] hover:underline"
                                disabled={isSubmitting}
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default LoginModal;