import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/ministry/children-header.webp";

const ChildrensMinistry = () => {
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
          alt="Children's Ministry"
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
                CHILDREN'S
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
                  Rehoboth Discipleship International is a ministry, non-profit organization, or network that provides resources, training, curriculum, events and support to those who work with children in churches, schools or communities. Our goals are to help children know and follow Jesus, grow spiritually, and develop strong moral character and become true disciples of Christ Jesus. because if the generation of children is strengthened then we get a better nation. In our view we believe that a human being who will be recognized by the world must have two big things: 1. Education 2. Religion.
                </p>

                {/* Education Section */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                  <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-1">1. EDUCATION:</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    teaches a child a better life by living with other people, discipline, humility, respect for parents also recognizing that you are a nation and an important person for the nation of tomorrow.
                  </p>
                </div>

                {/* Religion Section */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                  <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-1">2. RELIGION:</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    Now if you miss all those things in education then you will find them in Religion. because religion is part of education and brings Wisdom to our children. now it doesn't matter what religion. no religion allows violence, theft, rape, drug use, etc...
                  </p>
                </div>

                {/* Scripture Highlight Box */}
                <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700] my-2">
                  <p className="text-sm md:text-base text-white font-bold italic">
                    "Train up a child in the way he should go, and when he is old he will not depart from it."
                  </p>
                  <p className="text-xs text-[#FFD700] mt-1">Proverbs 22:6</p>
                </div>

                {/* Important Statement */}
                <p className="text-sm sm:text-base md:text-lg text-white font-semibold italic border-l-4 border-[#FFD700] pl-3">
                  A person who lacks education and lacks religion is just like an animal.
                </p>

                {/* Mission Statement */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Rehoboth Discipleship International is committed to helping our children to help their peers reach their destiny.
                </p>

                {/* Vulnerable Children Section */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  As we fulfill this responsibility, we also gather children living in vulnerable situations such as orphans, the disabled, war victims, etc… Rehoboth needs to show the love of Christ to the community around us
                </p>
              </motion.div>

              {/* Right Column - Common Purpose & How to Get Involved */}
              <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8 text-white">
                {/* Common Purpose Section */}
                <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]">
                  <h2 className="text-lg md:text-xl font-bold text-[#FFD700] mb-3 md:mb-4">COMMON PURPOSE</h2>
                  
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Bible Education:</span> Teaching children about the Bible and the Christian faith.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Discipleship:</span> Helping children grow as followers of Jesus.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Leadership Support:</span> Training, resources, and encouragement for children's ministry workers and volunteers.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Outreach:</span> Reaching children outside the church with the message of Christ.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Safety and Wellbeing:</span> Providing a safe, nurturing environment for children.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Sports:</span> All types of football, running, swimming, cultural games, scripture memorization etc…
                    </p>
                  </div>
                </div>

                {/* How to Get Involved Section */}
                <div className="bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]">
                  <h2 className="text-lg md:text-xl font-bold text-[#FFD700] mb-3 md:mb-4">HOW TO GET INVOLVED</h2>
                  
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Volunteer:</span> Ministry with a local church
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Attend Training:</span> We often have workshops and conferences online or in person.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Use Our Resources:</span> Implement our curriculum or tools in your children's ministry.
                    </p>
                    <p className="text-sm sm:text-base text-white/90">
                      <span className="font-semibold text-[#FFD700]">– Support Financially:</span> Donate to help reach more children.
                    </p>
                  </div>
                </div>

                {/* Additional Scripture */}
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-[#FFD700]">
                  <p className="text-sm text-white/90 italic">
                    "But Jesus said, 'Let the little children come to Me, and do not forbid them; for of such is the kingdom of heaven.'"
                  </p>
                  <p className="text-xs text-[#FFD700] mt-1">Matthew 19:14</p>
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
                Support Children's Ministry
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChildrensMinistry;