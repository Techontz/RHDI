import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DrDanielImage from "../../assets/drdaniel/drdaniel2.jpeg";

const MeetDrDaniel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Modern Colorful Header */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-gradient-x"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Wave effect at bottom of header */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* Header content - empty but with subtle shine */}
        <div className="relative py-20 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Optional small decorative element - unaweza kuondoa kama hutaki text yoyote */}
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></div>
                  <div className="w-2 h-2 bg-orange-300 rounded-full animate-ping delay-700"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Original Design - yako haijabadilishwa */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Modern Graphics - Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-300 rounded-full filter blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rotate-12 transform origin-top-right"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 -rotate-12 transform origin-bottom-left"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              {/* Title with modern underline */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Meet Dr Daniel K Boniface
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </div>

              {/* Content Cards with glass effect */}
              <div className="space-y-4">
                {/* Family Info */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    He is the father of 1 daughter named <span className="text-yellow-300 font-semibold">Beatrice Daniel Boniface</span>, and his wife <span className="text-yellow-300 font-semibold">Rahab Ernest Daniel</span>. His wife has already passed away.
                  </p>
                </motion.div>

                {/* Ministry Commission */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    Dr. Daniel K. Boniface was commissioned into ministry in <span className="text-yellow-300 font-semibold">2002</span> and was ordained as a teacher in <span className="text-yellow-300 font-semibold">2006</span>.
                  </p>
                </motion.div>

                {/* Founder & Director */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    He is the <span className="text-yellow-300 font-semibold">Founder and Director</span> of Rehoboth Discipleship International, based in the USA, and training and discipling the Nation for Christ. Dr. Daniel is committed to helping Church Leaders with making Disciples, equipping and Training effective Ministers and leaders, raising Sons, and building the true Church and true Disciples.
                  </p>
                </motion.div>

                {/* Education */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    He holds a <span className="text-yellow-300 font-semibold">Bachelor's Degree in Theology (BTh)</span>, <span className="text-yellow-300 font-semibold">Master's Degree in Christian Business Administration (MB)</span>, <span className="text-yellow-300 font-semibold">Doctorate in Ministry (DM)</span>, and Candidate for <span className="text-yellow-300 font-semibold">Doctorate in Philosophy of Religion (PhD)</span> from Maranatha Mission Bible College in the US.
                  </p>
                </motion.div>

                {/* Teaching Experience */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    He has also been a teacher at <span className="text-yellow-300 font-semibold">Maranatha Mission Bible College for 14 years</span> now.
                  </p>
                </motion.div>

                {/* Full-time Ministry */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    He started full-time with Rehoboth Discipleship International in <span className="text-yellow-300 font-semibold">2018</span>, Leading Equip to Serve groups and training men and women individually. He loves the relationships that come from learning about Jesus together.
                  </p>
                </motion.div>

                {/* Legacy */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-white/90">
                    Dr. Daniel today has been a great blessing to many people; he has been a good teacher, and he has found spiritual sons for spiritual grandchildren. <span className="text-yellow-300 font-semibold">Discipleship is life.</span>
                  </p>
                </motion.div>
              </div>

              {/* Scripture - Highlighted Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30"
              >
                <p className="text-lg text-white font-medium italic">
                  <span className="text-yellow-400 font-bold">John 15:8</span> Herein is my Father glorified, that ye bear much fruit; so shall ye be my disciples.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with modern frame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={DrDanielImage} 
                    alt="Dr. Daniel K. Boniface" 
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Modern overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-2xl">🙏</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-20">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default MeetDrDaniel;