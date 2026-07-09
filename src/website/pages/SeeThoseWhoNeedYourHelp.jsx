import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/about/help-header.webp"; // You'll need to add this image

const SeeThoseWhoNeedYourHelp = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop - Same as Discipleship */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="See Those Who Need Your Help"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container - Dark Blue Background (#1b252f) - Same as Discipleship */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Title Section - Inside Main Content Container - Same style as Discipleship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-6 md:mb-8"
          >
            <div className="w-full">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-[#FFD700] leading-tight">
                SEE THOSE
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#FFD700] mt-2">
                WHO NEED YOUR HELP
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
            {/* Two Column Grid - Stack on mobile - Same as Discipleship */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Left Column */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Rehoboth Discipleship International is dedicated to supporting the most vulnerable communities worldwide, with a special focus on Vermont. We aim to assist the homeless and those who have lost their parents to war, as well as serve orphans and widows. We believe that by doing so, we are contributing to the mission of making disciples of all nations for Christ Jesus.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  War is one of the significant challenges faced by humanity, causing suffering and hardship. We consistently hear about conflicts between nations, and while violence is alarming, it also reminds us of the importance of our mission. There is still hope for us to help people become true disciples of Christ.
                </p>

                {/* Scripture Highlight Box - Same style as Discipleship */}
                <div className="bg-white/10 p-4 md:p-6 rounded-lg border-l-4 border-[#FFD700] my-4">
                  <p className="text-base md:text-lg text-white font-bold italic">
                    "Pure and genuine religion in the sight of God the Father means caring for orphans and widows in their distress and refusing to let the world corrupt you."
                  </p>
                  <p className="text-sm text-[#FFD700] mt-2">James 1:27 (NLT)</p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Have you ever wondered about the lives of widows and orphans? Or how do those struggling with addiction cope? Jesus came for everyone, including imperfect and troubled individuals, so that he can transform them. This journey of transformation is a vital part of helping them become true disciples of Christ.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white font-semibold italic">
                  "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'"
                </p>
                <p className="text-sm text-[#FFD700] -mt-2">Matthew 25:40</p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Every day, we encounter individuals who are hurting, lost, and in need of compassion. Your willingness to see their need and respond with love can be the difference between despair and hope, between darkness and light.
                </p>

                {/* Ways to Help Section */}
                <div className="mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">WAYS YOU CAN HELP:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-xl">•</span>
                      <p className="text-sm sm:text-base text-white/90">Financial support for food, shelter, and medical care</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-xl">•</span>
                      <p className="text-sm sm:text-base text-white/90">Sponsor a child's education and daily needs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-xl">•</span>
                      <p className="text-sm sm:text-base text-white/90">Volunteer your time and skills in our outreach programs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-xl">•</span>
                      <p className="text-sm sm:text-base text-white/90">Donate clothing, blankets, and essential supplies</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-xl">•</span>
                      <p className="text-sm sm:text-base text-white/90">Pray for those who are suffering and for our ministry teams</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Section - Full width below columns */}
            <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
              <div className="bg-white/10 p-8 md:p-12 rounded-lg border-2 border-[#FFD700]/30 text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFD700] mb-4">
                  BE THE ANSWER TO SOMEONE'S PRAYER
                </h3>
                <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-8">
                  Your generosity can bring hope, healing, and the love of Christ to those who need it most. Together, we can make a difference in the lives of the vulnerable and show them that they are not forgotten.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/donate-to-support')}
                    className="bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
                  >
                    Donate Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    className="bg-transparent border-2 border-[#FFD700] hover:bg-[#FFD700]/10 text-[#FFD700] font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
                  >
                    Back Home
                  </motion.button>
                </div>

                <p className="text-white/60 text-sm mt-6">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeeThoseWhoNeedYourHelp;