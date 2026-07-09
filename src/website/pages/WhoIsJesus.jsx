import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/confession/jesus-header.webp";

const WhoIsJesus = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const points = [
    {
      number: 1,
      title: "Jesus was no ordinary man",
      text: "Even though Jesus was a man, He was no ordinary man. He was \"the firstborn over all creation\" and \"the image of the invisible God\" Colossians 1:15. The apostle Paul said that this Jesus was \"the Lord from heaven.\" 1Corinthians 15:47.",
    },
    {
      number: 2,
      title: "Jesus is God in a man",
      text: "There is a great mystery to be revealed in Jesus. The fact that He was conceived supernaturally by the Holy Spirit, lived a life of perfect relationship with God, and was always obedient to God demonstrates to us that He was of a different nature from normal humans. Jesus is God in a Man! \"And without controversy, great is the mystery of godliness: God was manifested in the flesh.\" 1Timothy3:16 The mystery is that God became a Man! This is what it means to call Jesus \"the Son of God\". Jesus came to reveal who God is. Understanding who Jesus is means understanding who God is!",
    },
    {
      number: 3,
      title: "If you see Jesus, you see God!",
      text: "If you have seen Jesus for who He is, you have seen God! Jesus said to one of His disciples, Philip, \"Have I been with you so long, and yet you have not known Me Philip? He who has seen Me has seen the Father…\" John14:9",
    },
    {
      number: 4,
      title: "God became a man to take away sins",
      text: "The apostle John also says that \"He [God] was manifested to take away our sins, and in Him there is no sin.\" 1John 3:5 God became a Man in order to take away our sins. He did this by offering Himself up as a sacrifice on the Cross. He decided to take our sin, rebellion, hurt, hate, pain, guilt and shame upon Himself and bear the punishment we deserved. He died in our place. \"God demonstrates His own love towards us, in that while we were still sinners, Christ died for us.\" Romans 5:8",
    },
    {
      number: 5,
      title: "Jesus destroyed the power of death by rising from the dead!",
      text: "But Jesus not only died, He rose from the dead, showing us His victory over death because He could not remain a dead man. Death only conquers those who sin for \"the wages of sin is death\" Romans 6:23, but Jesus had no sin in Him. Three days later He came back up and was seated at God's right hand being in charge of everything. He has \"abolished death and brought life and immortality to light through the gospel.\" 2Timothy 1:10",
    },
    {
      number: 6,
      title: "It is time to change the way you think about Jesus!",
      text: "God now \"commands all men everywhere to repent [change their minds], because He has appointed a day on which He will judge the world in righteousness by the Man whom He has ordained. He has given assurance of this to all by raising Him from the dead.\" Acts17:30-31",
    },
    {
      number: 7,
      title: "It is time to know the truth about who Jesus is and believe in Him",
      text: "Many people have all kinds of thoughts on who Jesus is. The truth is that He is God in the flesh and that He is also the King who now reigns over all: He is seated at God's right hand. He truly came into the world and was seen, heard and touched (1John1:1). John said that if you believe that Jesus is the Christ [King], the Son of God [God in the flesh] then you will have LIFE in His name.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop - Same as other pages */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="Who Is Jesus"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container - Dark Blue Background (#1b252f) - Same as other pages */}
      <div style={{ backgroundColor: '#1b252f' }} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Title Section - Inside Main Content Container - Same style as other pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-8 md:mb-12"
          >
            <div className="w-full text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFD700] leading-tight">
                WHO IS
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                JESUS?
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
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-5xl mx-auto"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-3">
                THE TRUTH CONCERNING JESUS
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
            </motion.div>

            {/* Points Grid */}
            <div className="space-y-4 md:space-y-6">
              {points.map((point) => (
                <motion.div
                  key={point.number}
                  variants={fadeInUp}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700]"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Number Section */}
                    <div className="bg-[#FFD700]/20 p-4 md:p-5 flex items-center justify-start md:w-20">
                      <span className="text-2xl md:text-3xl font-bold text-[#FFD700]">{point.number}</span>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-5 md:p-6 flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scripture Highlight Box - Same style as Discipleship page */}
            <motion.div variants={fadeInUp} className="mt-10">
              <div className="bg-white/10 p-5 md:p-7 rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-base md:text-lg text-white font-bold italic text-center">
                  "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life."
                </p>
                <p className="text-sm text-[#FFD700] mt-2 text-center">John 3:16</p>
              </div>
            </motion.div>

            {/* Final Call to Action */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                If you want real life, you need Jesus!
              </h3>
              <p className="text-base md:text-lg text-white/80 mb-5">
                Believe in Him and receive LIFE in His name.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold rounded-lg transition-all duration-300 text-base inline-block"
              >
               Back Home
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsJesus;