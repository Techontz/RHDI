import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Heart, Users, Globe, BookOpen, Church, ArrowRight, Mail, Phone, Target, Award, TrendingUp } from 'lucide-react';

const BecomePartner = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          >
            Become a Partner
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <Handshake className="w-16 h-16 text-green-700" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Partner with Us to Make True Disciples of Christ Jesus!
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          {/* Main Content with Animation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Introduction Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Rehoboth Discipleship International, we believe that making true disciples of Christ Jesus 
                is the solution to the problem faced by today's world. We are committed to teaching the correct 
                teachings to leaders and working hard for it. As a non-profit organization, we are always looking 
                for partners who share our vision and are willing to join us in making a difference in the lives 
                of people.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that partnerships are essential in achieving our mission. By partnering with us, 
                you will be joining a community of like-minded individuals who are passionate about making 
                true disciples of Christ Jesus. Your partnership will help us to reach more leaders, conduct 
                more seminars, and distribute more Bibles and Christian books.
              </p>
            </motion.div>

            {/* Partnership Types */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ways to Partner With Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Financial Support */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:scale-105 duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Financial Support</h4>
                  <p className="text-gray-600 text-center">
                    Help us fund seminars, training programs, and resource distribution through monthly or one-time donations.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Make an Impact
                    </span>
                  </div>
                </div>

                {/* In-Kind Donations */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:scale-105 duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="w-8 h-8 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">In-Kind Donations</h4>
                  <p className="text-gray-600 text-center">
                    Donate Bibles, Christian books, teaching materials, or other resources that support our mission.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Share Resources
                    </span>
                  </div>
                </div>

                {/* Volunteer Partnership */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:scale-105 duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Volunteer</h4>
                  <p className="text-gray-600 text-center">
                    Offer your time, skills, and expertise to help organize events, train leaders, or manage resources.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Get Involved
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits of Partnership */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl shadow-xl p-8 text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Partner Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Exclusive Events</p>
                    <p className="text-green-100">Access to special partner-only seminars and gatherings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Regular Updates</p>
                    <p className="text-green-100">Receive exclusive updates on our mission and impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Direct Impact</p>
                    <p className="text-green-100">See how your partnership directly helps make disciples</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Global Network</p>
                    <p className="text-green-100">Connect with like-minded partners worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Partnering with Rehoboth Discipleship International is an excellent opportunity for you to make a 
                difference in the world and live out your calling to make disciples of Christ Jesus. Please visit 
                our website to learn more about how you can become our partner and join us in this mission.
              </p>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                <p className="text-xl md:text-2xl text-green-800 font-bold mb-4">
                  Together, we can make a difference and make true disciples of Christ Jesus!
                </p>
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
                  Become a Partner Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <Mail className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Email Us</h4>
                <p className="text-gray-600">info@rhdil.world</p>
                <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <Phone className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Call Us</h4>
                <p className="text-gray-600">+1-802-355-5243</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-6pm</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;