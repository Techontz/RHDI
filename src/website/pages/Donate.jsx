import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronRight, Shield, Globe, Users, ExternalLink } from 'lucide-react';

// Background image
import DonateBackground from "../../assets/donate/donate-bg.jpg";

const Donate = () => {
  // PayPal donation link
  const paypalDonationLink = "https://www.paypal.com/donate/?hosted_button_id=WEUK8NKDYNL2E";

  // Open PayPal in new tab
  const handleDonate = () => {
    window.open(paypalDonationLink, '_blank', 'noopener noreferrer');
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={DonateBackground} 
          alt="Donate Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay kusomeka text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Modern Graphics */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Crosses */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            <div className="w-16 h-16 relative">
              <div className="absolute w-1 h-16 bg-white/20 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-16 h-1 bg-white/20 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              DONATE
            </span>
            <span className="text-white"> TO </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              SUPPORT
            </span>
          </motion.h1>

          {/* Support Message */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-3xl md:text-4xl text-white font-light mb-4">
              Support Our Mission:
            </p>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-semibold">
              Donate Today And Help Make True Disciples Of Christ Jesus!
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Donating is a tangible way to partner with the ministry and participate in the impact 
              God is making through RHDI.world. Contributions are used prayerfully and responsibly 
              to further the mission.
            </p>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Thank you for your willingness to support Christian ministry and stand with RHDI.world 
              in sharing faith, hope, and love. Your partnership makes a lasting difference.
            </p>
          </motion.div>

          {/* Stats/Impact Cards */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Countries Reached</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-300">Disciples Made</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-300">To Ministry</div>
            </div>
          </motion.div>

          {/* PayPal Donation Info */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <img 
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
              alt="PayPal" 
              className="h-8"
            />
            <span className="text-gray-300">Secure donations via PayPal</span>
          </motion.div>

          {/* DONATE NOW Button - PayPal Link */}
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDonate}
              className="group relative px-16 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-2xl rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 fill-current" />
                DONATE NOW
                <ExternalLink className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            {/* Trust Message */}
            <p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Secure donations processed with love and integrity via PayPal
            </p>
          </motion.div>

          {/* Decorative Bottom Line */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-3 mt-16"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="w-2 h-2 bg-yellow-400 rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-30">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Donate;