import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/about/construction-header.webp"; // You'll need to add this image

const ConstructionOfWorshipBuildings = () => {
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
          alt="Construction of Worship Buildings"
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
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] leading-tight">
                CONSTRUCTION
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFD700] mt-2">
                OF WORSHIP
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] mt-2">
                BUILDINGS
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#FFD700]/80 mt-4 font-semibold">
                (CHURCHES)
              </p>
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
              
              {/* Left Column - First two paragraphs */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  We assist in the construction of places of worship, such as churches, in various parts of the world. This work is essential for enabling the ministry of Christ to spread globally. When nations are made disciples, they need a place to gather and worship God.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Rehoboth Discipleship International is committed to collecting donations and partnering with other ministries to facilitate the construction of these worship buildings. It is a truly blessed endeavor to support pastors for the glory of God.
                </p>
              </motion.div>

              {/* Right Column - Third paragraph */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  In many regions, especially in rural areas, communities often lack the necessary resources to build places of worship. When we discipline individuals in Christ, it is equally important that they have a designated space to worship.
                </p>

                {/* Simple Call to Action Box - Using only provided content */}
                <div className="bg-white/10 p-6 md:p-8 rounded-lg border-l-4 border-[#FFD700] mt-6">
                  <p className="text-base md:text-lg text-white font-bold uppercase text-center">
                    PARTNER WITH US TO BUILD CHURCHES FOR THE GLORY OF GOD
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Simple CTA Button Section */}
            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/donate-to-support')}
                className="bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-lg inline-block"
              >
                Support a Church Building
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionOfWorshipBuildings;