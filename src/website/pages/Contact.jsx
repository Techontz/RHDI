import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, User, Send, Building, Globe, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobilePhone: '',
    message: ''
  });

  // State for form errors
  const [errors, setErrors] = useState({});
  
  // State for submission status
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        mobilePhone: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);

    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Premium Header Section */}
      <section className="relative overflow-hidden bg-[#061C3F] py-20 md:py-24">

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
            Contact
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Contact Us
          </h1>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

        </motion.div>

      </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            You can contact us by filling out the form below and submit or you can use 
            the contact details on the right side of the screen.
          </motion.p>

          {/* Status Message */}
          {submitStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.success 
                  ? 'bg-[#061C3F]/10 text-[#061C3F] border-[#061C3F]/20' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}
            >
              {submitStatus.success ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p>{submitStatus.message}</p>
            </motion.div>
          )}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C3F] focus:border-transparent transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </motion.div>

                {/* Email Address */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C3F] focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </motion.div>

                {/* Mobile Phone */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">Mobile Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="mobilePhone"
                      value={formData.mobilePhone}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile phone number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C3F] focus:border-transparent transition-all"
                    />
                  </div>
                </motion.div>

                {/* Message - New Field */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      rows="5"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C3F] focus:border-transparent transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum 10 characters
                  </p>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={fadeInUp} className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#061C3F] hover:bg-[#082a5a] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-lg ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Head Office Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#061C3F]/10 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 text-[#061C3F]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Head Office Address:</h3>
                </div>
                
                <div className="space-y-4">
                  {/* USA Address */}
                  <div className="pl-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">USA Address:</p>
                        <p className="text-gray-600">378 Lime Kinl Rd</p>
                        <p className="text-gray-600">#428 South Burlington VT 05403</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="pl-2 pt-2 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Email Address:</p>
                        <p className="text-gray-600">info@rhdi.world</p>
                        <p className="text-gray-600">rhdiworld@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="pl-2 pt-2 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Phone Number:</p>
                        <p className="text-gray-600">+1-802-355-5243</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-[#061C3F]" />
                  <h3 className="text-lg font-bold text-gray-800">Office Hours</h3>
                </div>
                <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 mb-4">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-500">We typically respond within 24 hours during business days.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;