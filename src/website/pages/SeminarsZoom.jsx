import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import image
import ZoomSeminarImage from "../../assets/seminars/zoom-seminar.webp";

const SeminarsZoom = () => {
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
              src={ZoomSeminarImage} 
              alt="Zoom Seminars" 
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
                ZOOM SEMINARS
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
                    This is part of the seminars that we have done through zoom where we have been collaborating with loved ones from outside Africa. and the results of these seminars have been very great with great responses from various places. through these seminars, we have been inviting people from different parts of the country and all regions of Tanzania.
                  </p>
                  
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    where we collaborate with various types of servants to bring consistency in making pastors and leaders true disciples of Jesus Christ.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mt-8">
                    <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium">
                      Have you been touched by this work, if yes, come and share this work together to make leaders true disciples of Christ Jesus?
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md text-base sm:text-lg"
                      onClick={() => navigate('/contact')}
                    >
                      Partner With Us
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

export default SeminarsZoom;