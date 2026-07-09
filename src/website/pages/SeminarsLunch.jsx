import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import image
import LunchSeminarImage from "../../assets/seminars/lunch-seminar.webp";

const SeminarsLunch = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image with Title */}
      <div className="relative w-full overflow-hidden bg-black">
        <div className="relative w-full min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] xl:min-h-[60vh]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={LunchSeminarImage} 
              alt="Lunch After Seminars" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Title Overlay */}
          <div className="relative z-10 container mx-auto px-4 h-full min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] xl:min-h-[60vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                LUNCH AFTER SEMINARS
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10 md:p-12">
                <div className="space-y-6 text-gray-700">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    We have procedures in place for the seminars we do. We have been struggling to find aid to help especially in our Seminars. so that when we have a seminar of two or more days and a duration of more than three hours, continuing until eight, we have the habit of distributing food to the leaders, distributing the bible to each leader, distributing the books of the lessons we taught on those days in our seminars.
                  </p>
                  
                  {/* Distribution Items Highlight */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl mb-2">🍲</span>
                      <h3 className="font-semibold text-green-800">Food</h3>
                      <p className="text-sm text-gray-600">Distributed to leaders</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl mb-2">📖</span>
                      <h3 className="font-semibold text-green-800">Bibles</h3>
                      <p className="text-sm text-gray-600">To each leader</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl mb-2">📚</span>
                      <h3 className="font-semibold text-green-800">Lesson Books</h3>
                      <p className="text-sm text-gray-600">From seminars taught</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600 mt-6">
                    <p className="text-base sm:text-lg text-gray-800 font-medium">
                      We are seeking partners to help with these essential needs for our seminar participants.
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md text-base sm:text-lg"
                      onClick={() => navigate('/donate-to-support')}
                    >
                      Support This Work
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeminarsLunch;