import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogDetails2 = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Design Only, No Image */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 md:mb-4">
              SEMINAR DISCIPLESHIP
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              IN UGANDA 2024
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container - Dark Blue Background (#1b252f) */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="max-w-6xl mx-auto"
          >
            {/* Two Column Grid - Stack on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Left Column - Main Content */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                {/* Opening Statement */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-medium">
                  Discipleship work continues.
                </p>

                {/* Importance of Discipleship */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Again I always tell people that without discipleship we cannot have a strong leadership in the church or have a strong church. And Jesus knowing this began to teach his disciples. He let them know the secrets of the kingdom and in the kingdom Jesus was known as the king. Without Jesus to teach them, they would not have known all that.
                </p>

                {/* Jesus as Teacher */}
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm sm:text-base md:text-lg text-white italic">
                    "Without Jesus to teach them, they would not have known all that."
                  </p>
                </div>

                {/* Honor and Glory */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">HONOR AND GLORY</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    Honor and glory belong to him, the Father of lights.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Seminar Experience & Thanks */}
              <motion.div variants={fadeInUp} className="space-y-8 md:space-y-12 text-white">
                {/* Seminar Response */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">SEMINAR RESPONSE</h2>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      Our seminar went very well where people's response was there where we saw an increase and people changed their minds we witnessed. That is the teaching of discipleship.
                    </p>
                    
                    <div className="bg-green-700/30 p-4 rounded-lg mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                        They make you realize what you deserve to do in serving God and serving other people.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Thanks */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">SPECIAL THANKS</h2>
                  
                  <div className="bg-blue-600/30 p-5 rounded-lg border border-white/20">
                    <p className="text-sm sm:text-base md:text-lg text-white">
                      Our sincere thanks also go to our pastor{' '}
                      <span className="font-bold text-yellow-400">DR. KABMBI EMMANUEL</span>.
                    </p>
                  </div>
                </div>

                {/* Key Message Box */}
                <div className="bg-purple-700/30 p-5 rounded-lg">
                  <p className="text-sm sm:text-base md:text-lg text-white text-center font-semibold">
                    "Without discipleship we cannot have a strong leadership in the church"
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Navigation */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-between items-center mt-12 pt-6 border-t border-white/20"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300 text-sm sm:text-base"
                onClick={() => navigate('/blog')}
              >
                ← Back to Blog
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md text-sm sm:text-base"
                onClick={() => navigate('/contact')}
              >
                Partner With Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails2;