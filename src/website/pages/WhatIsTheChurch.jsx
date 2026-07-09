import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/confession/what-is-the-church.webp";

const WhatIsTheChurch = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "THE EKKLESIA",
      content: [
        "The Church:- S.C. 1577 'ekklesia': literally, a calling out [out from the origin]; secularly, an assembly of citizens (Acts 19: 32, 39,41);",
        "In Greek O.T. [Septuagint], the congregation of Israel, as in Acts 7:38, the 'congregation' in the wilderness; the Christian community of saints on earth or in heaven or both."
      ]
    },
    {
      title: "JESUS AND HIS BRETHREN = THE CHURCH",
      content: [
        "Heb 2:12 [quoting from Ps 22:22] '…I will declare Your name to My brethren; amid the assembly I will sing praise to You.' The writer to the Hebrews attributes this saying to the Lord Jesus, who calls the members of the church, 'My brethren,' and says He 'will sing praise to You, [Yahweh] amid the assembly, [church]'.",
        "The church is the called out ones, those who have been predestined to be conformed to the image of the Son, called, justified, and glorified, Rom 8:29-30. The church is those who do not stumble at His hard sayings (Jn 6:60), who know that eternal life is only found in the words of the Lord Jesus (Jn 6:68).",
        "Jn 5:24 'Most assuredly, I say to you, he who hears My word and believes in Him who sent Me has everlasting life, and shall not come into judgement, but has passed from death into life.'"
      ]
    },
    {
      title: "JESUS IS BUILDING THE CHURCH",
      content: [
        "In Matt.16:18 we have the first mention of the word 'church' [ekklesia]. 'And I also say to you that you are Peter, and on this rock I will build My church, and the gates of Hades shall not prevail against it.'",
        "Jesus commits to 'building the church'. He proclaims it will withstand the gates of hell. It will be built in the foundation of faith in Him: 'Thou art the Messiah, the Son of God.' Mt.16:16-17. This can only be known by a revelation from God, bringing faith to the believer."
      ]
    },
    {
      title: "BUILT ON THE ROCK",
      content: [
        "Jesus is the 'petra' rock on which the church is built.",
        "1 Cor.10:4 '…all drank the same spiritual drink. For they drank of that spiritual Rock that followed them, and that Rock was Christ.'",
        "Matt.7:24-27 'Therefore whoever hears these sayings of mind and does them, I will liken him to a wise man who built his house on the rock: and the rain descended, the floods came, and it did not fall, for it was founded on the rock. But everyone who hears these sayings of Mine, and does not do them, will be like a foolish man who built his house on the sand: and the rain descended, the floods came, and winds blew and beat on that house; and it fell. And great was it's fall.'"
      ]
    },
    {
      title: "JESUS IS THE FOUNDATION STONE AND THE CORNERSTONE",
      content: [
        "The church is the congregation of the Lord Jesus. The Lord Jesus is the builder of the church. He is the foundation, the tried stone, the precious cornerstone, a sure foundation.",
        "Isa.28:16 'Therefore thus says the Lord God: Behold, I lay in Zion a stone for a foundation, a tried stone, a precious cornerstone, a sure foundation,'",
        "Ps.118:22-23 'The stone which the builders rejected has become the chief cornerstone. This was the LORD's doing; it is marvelous in our eyes.' [quoted in 1Pet.2:7]."
      ]
    },
    {
      title: "JESUS IS THE APOSTLE [THE BUILDER]",
      content: [
        "He is the apostle 'who was faithful to Him who appointed Him,' [Heb.3:2]. Jesus the Messiah is the builder of God's house, the church.",
        "Heb.3:3 'For this One has been counted worthy of more glory than Moses, inasmuch as He who built the house has more honor than the house.' He is the Son over His house, 'whose house we are,' v.6.",
        "The same one who laid the foundation of the house of God will also finish it. Zech.4:9 'The hands of Zerubbabel have laid the foundation of this temple; his hands shall also finish it.' Zerubbabel is a type of Christ, used by God to rebuild the temple in Jerusalem after the Babylonian exile. This verse speaks prophetically of Jesus, as the apostle of God, building the church."
      ]
    },
    {
      title: "PETER, A FOUNDATION STONE",
      content: [
        "Peter is the 'petros' stone, who will be a foundation stone as an apostle. The church is built by Jesus on the foundation ministries of apostles and prophets which He has set in the church.",
        "Eph.2:20 'having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.'",
        "Every believer is called a living stone and is being built into the house of God, the church.",
        "1Pet.2:5 'you also, as living stones, are being built up a spiritual house, a holy priesthood to offer up spiritual sacrifices acceptable to God through Jesus Christ.'"
      ]
    },
    {
      title: "THE KEYS OF THE KINGDOM",
      content: [
        "In Matt.16:19 Jesus gives to Peter, a foundation apostle, the keys of the kingdom of heaven, 'And I will give you the keys of the kingdom of heaven, and whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.' Keys open doors that are locked; they also represent authority."
      ]
    }
  ];

  const peterFulfillment = [
    "Acts 2:14-41 records Peter preaching on the day of Pentecost. The result of this awesome anointed message is that 3000 Jews were saved.",
    "Acts 8:14-25 Peter and John went to Samaria, prayed for the believers and they were filled with the Holy Spirit.",
    "Acts 10:9-48 Peter went to the house of Cornelius, preached the gospel and the Holy Spirit fell on Gentile believers.",
    "Acts 3:6-9 Signs and wonders happening, a lame man healed.",
    "Acts 5:3-11 Peter speaks out judgement on the sin of Ananias and Sapphira.",
    "Acts 9:32-35 Peter heals a man who has been paralyzed for eight years.",
    "Acts 9:36-43 records the raising of Dorcas from death."
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="What Is The Church"
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
            className="max-w-6xl mx-auto mb-8 md:mb-12"
          >
            <div className="w-full text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFD700] leading-tight">
                WHAT IS
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                THE CHURCH?
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
            {/* Sections */}
            <div className="space-y-4 md:space-y-5">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6"
                >
                  <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.content.map((text, i) => (
                      <p key={i} className="text-sm sm:text-base text-white/90 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Peter's Commission Fulfillment */}
            <motion.div 
              variants={fadeInUp}
              className="mt-6 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6"
            >
              <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                A look at the fulfillment of Peter's commission
              </h3>
              <div className="space-y-2">
                {peterFulfillment.map((text, i) => (
                  <p key={i} className="text-sm sm:text-base text-white/90 leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Closing Scripture */}
            <motion.div 
              variants={fadeInUp}
              className="mt-6 bg-white/5 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]"
            >
              <p className="text-sm sm:text-base text-white/90 italic mb-2">
                "Now, therefore, you are no longer strangers and foreigners, but fellow citizens with the saints and members of the household of God, having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone."
              </p>
              <p className="text-xs text-[#FFD700] font-semibold">
                - Ephesians 2:19-20
              </p>
            </motion.div>

            {/* Scripture Highlight Box */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-sm md:text-base text-white font-bold italic text-center">
                  "For where two or three are gathered together in My name, I am there in the midst of them."
                </p>
                <p className="text-xs text-[#FFD700] mt-2 text-center">Matthew 18:20</p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-6 py-2.5 bg-[#FFD700] hover:bg-[#FFC000] text-[#1b252f] font-bold rounded-lg transition-all duration-300 text-sm inline-block"
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

export default WhatIsTheChurch;