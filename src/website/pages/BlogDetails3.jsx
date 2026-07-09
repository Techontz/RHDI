import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogDetails3 = () => {
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
              DISCIPLESHIP BOOKS
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              DISTRIBUTED IN INDIA
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
                {/* India Seminar Experience */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  We had a very good time in India when we had a discipleship seminar and later we distributed tools such as books to help you study, and make them have sources to reach others.
                </p>

                {/* RHDI's Role */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">RHDI'S MISSION</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    In fact, RHDI has been the source of making leaders see first the importance of reaching out to others and making them true disciples of Jesus. And another thing is to receive the revelation of God's Word which is clear and its truth.
                  </p>
                </div>

                {/* Challenge in Teaching */}
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm sm:text-base md:text-lg text-white italic">
                    Many leaders have been teaching their traditions rather than teaching the true revelation of the Word of God.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Message to India & Call to Action */}
              <motion.div variants={fadeInUp} className="space-y-8 md:space-y-12 text-white">
                {/* Message to India */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">MESSAGE TO INDIA</h2>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      Actually India, we have seen your response, we say God bless you and we are ready to serve you.
                    </p>
                    
                    <div className="bg-green-700/30 p-5 rounded-lg border border-white/20 mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                        Pastor David, you are a servant whom God has called you to be the main leaven in your country INDIA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools Distribution */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">DISCIPLESHIP TOOLS</h2>
                  
                  <div className="bg-blue-600/30 p-5 rounded-lg">
                    <p className="text-sm sm:text-base md:text-lg text-white text-center font-semibold mb-3">
                      Tools are the right of all our classes.
                    </p>
                    <div className="flex justify-center gap-4 mt-3">
                      <span className="text-3xl">📚</span>
                      <span className="text-3xl">📖</span>
                      <span className="text-3xl">📓</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-purple-700/30 p-5 rounded-lg">
                  <p className="text-sm sm:text-base md:text-lg text-white text-center font-bold">
                    Invite RHDI in your area so that we can make the nations to be true disciples of Christ Jesus.
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
                Invite RHDI
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails3;