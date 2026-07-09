import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogDetails1 = () => {
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
              DISCIPLESHIP SEMINAR
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              BURUNDI 2024
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
                {/* Opening Greeting */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed italic">
                  Grace beyond all names be with me all.
                </p>

                {/* Main Message */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  The name of Christ Jesus is a very wonderful name. It gathers nations and nations. We were able to have a seminar of 250 people where other people added and made the number reach 328. We have been seeing God's hand in making Christians and believers true disciples of Jesus Christ.
                </p>

                {/* Response Section */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">THE RESPONSE</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    We have seen people agree with the doctrine of discipleship. We have seen how people confess in their mouths about the doctrine.
                  </p>
                </div>

                {/* Blessing to Burundi */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">A BLESSING TO BURUNDI</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    May God's grace and love be with you, the people of Burundi. When we have teachers, we first need you to start being disciples of Christ Jesus so that you can make others like you. Discipleship brings us into the position of being called Sons of God.
                  </p>
                </div>

                {/* Pride in the Seminar */}
                <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                  We have something to be proud of about the Burundi Seminar. God has glorified Himself.
                </p>
              </motion.div>

              {/* Right Column - Dr. Daniel's Message & Thanks */}
              <motion.div variants={fadeInUp} className="space-y-8 md:space-y-12 text-white">
                {/* Dr. Daniel's Teaching */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">DR. DANIEL'S MESSAGE</h2>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      That's why Dr. Daniel tells many people when he starts to teach, put aside your religious teachings and traditions and let's look at the instructions of the scriptures about the church.
                    </p>
                    
                    <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-yellow-500 mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-white italic">
                        "Put aside your religious teachings and traditions and let's look at the instructions of the scriptures about the church."
                      </p>
                      <p className="text-xs sm:text-sm text-white/70 mt-2">— Dr. Daniel</p>
                    </div>
                  </div>
                </div>

                {/* Future Meetings & Thanks */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">LOOKING AHEAD</h2>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      We believe that God who gathers us together will give us another very good time to meet for teaching.
                    </p>
                    
                    <div className="bg-green-700/30 p-4 rounded-lg mt-4">
                      <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                        Our thanks go to Pastor Justin who has agreed to be in this Family of discipleship.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Attendance Numbers Highlight */}
                <div className="flex flex-wrap gap-4 justify-start mt-4">
                  <div className="bg-yellow-600/30 p-3 rounded-lg text-center min-w-[100px]">
                    <span className="block text-2xl md:text-3xl font-bold text-white">250</span>
                    <span className="text-xs md:text-sm text-white/80">Initial</span>
                  </div>
                  <div className="bg-green-600/30 p-3 rounded-lg text-center min-w-[100px]">
                    <span className="block text-2xl md:text-3xl font-bold text-white">328</span>
                    <span className="text-xs md:text-sm text-white/80">Final</span>
                  </div>
                  <div className="bg-blue-600/30 p-3 rounded-lg text-center min-w-[100px]">
                    <span className="block text-2xl md:text-3xl font-bold text-white">+78</span>
                    <span className="text-xs md:text-sm text-white/80">Added</span>
                  </div>
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

export default BlogDetails1;