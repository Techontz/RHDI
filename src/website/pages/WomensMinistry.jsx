import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/ministry/women-header.webp";

const WomensMinistry = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="Women's Ministry"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container - Dark Blue Background (#1b252f) */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Title Section - Inside Main Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-6 md:mb-8"
          >
            <div className="w-full text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFD700] leading-tight">
                WOMEN'S
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                MINISTRY
              </h2>
            </div>
          </motion.div>

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
                {/* Introduction Paragraph */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Rehoboth Discipleship International is a Christian ministry that supports local, national, or international women's groups—committed to supporting, empowering, and empowering women in their faith, personal growth, and service to others. They may focus on Bible studies, prayer, outreach, social justice, mentoring, or fellowship.
                </p>

                {/* Vulnerable Women Section */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Also, young people and vulnerable women are part of the work of our organization Rehoboth Discipleship International. We believe that widows, women who have been abandoned by their husbands, women who have been raped in war zones, girls who are traditionally circumcised, girls who are impregnated while in school and those living in vulnerable situations are part of this women's ministry for us. Because we believe that Christ needs to enrich them because he is the Father of widows and orphans.
                </p>

                {/* Scripture Highlight Box - Psalm 68:5 */}
                <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700] my-2">
                  <p className="text-sm md:text-base text-white font-bold italic">
                    "A father to the fatherless, a defender of widows, is God in his holy dwelling."
                  </p>
                  <p className="text-xs text-[#FFD700] mt-1">Psalm 68:5</p>
                </div>
              </motion.div>

              {/* Right Column - Common Purposes & How to Get Involved */}
              <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8 text-white">
                {/* Common Purposes Section */}
                <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]">
                  <h2 className="text-lg md:text-xl font-bold text-[#FFD700] mb-3 md:mb-4">COMMON PURPOSES</h2>
                  
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Spiritual Growth:</span> Bible studies, prayer groups, retreats, and discipleship.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Community:</span> Building supportive relationships among women.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Service:</span> Outreach, missions, and volunteer work.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Mentoring:</span> Supporting young women or new believers.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Advocacy:</span> Addressing issues such as poverty, violence, and education from a Christian perspective.
                    </p>
                  </div>
                </div>

                {/* How to Get Involved Section */}
                <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]">
                  <h2 className="text-lg md:text-xl font-bold text-[#FFD700] mb-3 md:mb-4">HOW TO GET INVOLVED</h2>
                  
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Local Church:</span> Many churches have their own women's ministries.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Online:</span> Join online Bible studies, social media, or social media groups.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Conferences and Retreats:</span> Attend events for spiritual renewal and connection.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Volunteer:</span> Many organizations need volunteers for outreach projects.
                    </p>
                  </div>
                </div>

                {/* Additional Scripture - Proverbs 31 */}
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-[#FFD700]">
                  <p className="text-sm text-white/90 italic">
                    "She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue."
                  </p>
                  <p className="text-xs text-[#FFD700] mt-1">Proverbs 31:25-26</p>
                </div>

                {/* Call to Action */}
                <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700] mt-4">
                  <p className="text-sm sm:text-base text-white/90 mb-4">
                    If you are looking for resources, ideas for starting a ministry, or information about a specific type of Christian training for women, let us know how we can help further!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="px-5 py-2 bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold rounded-lg transition-all duration-300 text-sm"
                  >
                    Contact Us Today
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/donate-to-support')}
                className="px-6 py-2.5 bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold rounded-lg transition-all duration-300 text-sm inline-block"
              >
                Support Women's Ministry
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Verse Section - Removed gradient background, now using dark blue with gold border */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-8 md:py-12 border-t border-[#FFD700]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700] inline-block">
              <p className="text-white/90 text-base md:text-lg italic">
                "She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue."
              </p>
              <p className="text-[#FFD700] text-sm mt-2">Proverbs 31:25-26</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WomensMinistry;