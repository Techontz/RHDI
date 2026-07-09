import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe, HandHeart, Church, ArrowRight, Mail, Phone } from 'lucide-react';

const BecomeAVolunteer = () => {
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
            Become a Volunteer
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Become a Volunteer and Help Make True Disciples of Christ Jesus!
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
            {/* Introduction */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Rehoboth Discipleship International, we are a non-profit organization dedicated to 
                teaching the correct teachings of Christ Jesus to leaders while working hard for it. 
                We believe that true discipleship is the solution to the problem faced by today's world. 
                While we are not a church with regular Sunday worship, we have been in contact with many 
                servants of God across the world to share the great call to make all people true disciples 
                of Christ Jesus.
              </p>

              {/* Bible Verse Card */}
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-6">
                <p className="text-xl md:text-2xl text-gray-800 italic font-serif mb-2">
                  "Every plant that my heavenly Father has not planted will be pulled up by the roots."
                </p>
                <p className="text-gray-600 font-semibold">— Matthew 15:13</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                This is why we are committed to teaching the correct doctrine to ensure that everyone in 
                the church agrees to be a true disciple of Christ Jesus and not just a partner in the church.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl shadow-xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-10 h-10 text-green-200" />
                <h3 className="text-2xl md:text-3xl font-bold">How You Can Help</h3>
              </div>
              <p className="text-lg text-green-50 leading-relaxed mb-6">
                If you are touched in any way to help this work, we welcome you to become a volunteer. 
                We believe that every small effort counts, and you can help in any way you are touched 
                by what God has said to you. If you share our vision of making leaders into true disciples 
                of Christ Jesus, we ask for your cooperation.
              </p>
            </motion.div>

            {/* Ways to Help Grid */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ways You Can Contribute</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 - Resource Sharing */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-7 h-7 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Share Resources</h4>
                  <p className="text-gray-600">
                    If you have access to partners who distribute the Bible, various Christian books, 
                    or any other materials that can help in this mission, please do not hesitate to 
                    share them with us.
                  </p>
                </div>

                {/* Card 2 - Seminar Support */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Church className="w-7 h-7 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Support Seminars</h4>
                  <p className="text-gray-600">
                    We use these materials to conduct various seminars for pastors and church leaders. 
                    Your contributions help equip church leaders worldwide.
                  </p>
                </div>

                {/* Card 3 - Spread the Word */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Spread the Word</h4>
                  <p className="text-gray-600">
                    Help us reach more servants of God by sharing our mission with your network and 
                    church community.
                  </p>
                </div>

                {/* Card 4 - Prayer Support */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <HandHeart className="w-7 h-7 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Prayer Support</h4>
                  <p className="text-gray-600">
                    Join us in prayer for the success of our mission to make true disciples of 
                    Christ Jesus across the world.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
            >
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
                Join us today in making a difference in the world by becoming a volunteer at 
                Rehoboth Discipleship International.
              </p>
              <p className="text-lg text-green-700 font-bold">
                Let us work together to make true disciples of Christ Jesus!
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Ready to Volunteer?</h4>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="text-gray-800 font-semibold">info@rhdil.world</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us at</p>
                    <p className="text-gray-800 font-semibold">+1-802-355-5243</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAVolunteer;