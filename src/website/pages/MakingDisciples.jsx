import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/confession/disciples-header.webp";

const MakingDisciples = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "The Foundation of Discipleship",
      verses: [
        {
          reference: "Ecclesiastes 12:13-14",
          text: "Fear God and keep His commandments, for this is man's all. God will bring every work into judgment (everything will be tested). All else is vanity."
        },
        {
          reference: "Matthew 28:18-20",
          text: "All authority has been given to me in heaven and on earth. Go, therefore, make disciples of all nations, baptising and teaching them. I am with you till the end of the age. God will back us as we fulfil the Great Commission."
        }
      ]
    },
    {
      title: "The Hebrew Word for Disciple - 'Limmud'",
      content: [
        {
          reference: "Isaiah 8:16",
          text: "'Limmud' – Hebrew word for disciple. V.16 – (Rev 19:10) bind up the testimony, The testimony of Jesus is to be bound in us. Seal the law among my disciples. The Word of God is to be sealed in us."
        },
        {
          reference: "Isaiah 54:13",
          text: "All your children shall be taught (discipled) by Yahweh. Great shall be the peace of your children."
        },
        {
          reference: "Isaiah 50:4",
          text: "The LORD has given me the tongue of the learned (limmud – disciple). Able to speak the word of God in season. He awakens my ear to hear (ears are open to the word of God). Disciples learn to hear God speak."
        }
      ]
    },
    {
      title: "Jesus Made Disciples – He is Our Example",
      content: [
        "Luke 10:1-2 – 70 disciples sent out by Jesus",
        "120 disciples in the upper room",
        "500 saw Jesus alive from the dead",
        "Luke 6:12-13 – Jesus chose 12 to be trained as apostles from among his disciples",
        "We are all called to be disciples",
        "Jesus gave Himself to the task of discipleship"
      ]
    },
    {
      title: "Disciple – Greek word 'Mathetes'",
      content: [
        "1. a learner (one who gives themselves to learn), humble and submitted",
        "2. one who follows another's teaching",
        "3. seen to be a disciple by abiding (living) in the word (they love the word)",
        "4. one who sticks like glue (adheres) to the teacher (they go wherever the teacher goes and follow their lifestyle)",
        "5. One who imitates the teacher"
      ],
      note: "Discipleship is joining yourself to a teacher. You learn from them, are taught their ways, manner of life and their doctrine. (Based on commitment)"
    }
  ];

  const disciplesInActs = [
    {
      title: "Peter and the apostles of Jesus made disciples",
      verses: [
        "Acts 6:1 – the number of disciples was multiplying",
        "the 12 summoned the multitude of the disciples",
        "7 were chosen",
        "The word of God spread and the number of disciples greatly multiplied"
      ]
    },
    {
      title: "Acts 8:4",
      verses: [
        "those who were scattered in persecution, went everywhere preaching the word",
        "they had been discipled by the apostles in Jerusalem",
        "the fruit of discipleship is that disciples are raised who can preach the word of God (Acts 11:19)"
      ]
    },
    {
      title: "Paul and Barnabas (ascension gift apostles) also made disciples",
      verses: [
        "Acts 14:14 – Paul and Barnabas were apostles",
        "Acts 14:19-22 – Paul had just been stoned and left for dead. Some disciples gathered around him and Paul got up. They had preached the gospel and made many disciples. They returned and strengthened the souls of the disciples, exhorting them to continue in the faith, through many tribulations.",
        "Disciples need to be taught the pure word of God."
      ]
    },
    {
      title: "The local churches that the apostles established made disciples",
      verses: [
        "Acts 16:1-3 – a certain disciple named Timothy was there, he was well spoken of. The church had continued in making disciples. The local church is meant to be making disciples.",
        "Paul wanted Timothy to come with him to train him in ministry"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="Making Disciples"
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
                MAKING
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                DISCIPLES
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
            {/* Foundation Section */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  The Foundation of Discipleship
                </h3>
                {sections[0].verses.map((verse, idx) => (
                  <div key={idx} className="mb-3 last:mb-0">
                    <p className="text-[#FFD700] text-sm font-semibold">{verse.reference}</p>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{verse.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Limmud Section */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  The Hebrew Word for Disciple - 'Limmud'
                </h3>
                {sections[1].content.map((item, idx) => (
                  <div key={idx} className="mb-3 last:mb-0">
                    <p className="text-[#FFD700] text-sm font-semibold">{item.reference}</p>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Jesus Our Example */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  Jesus Made Disciples – He is Our Example
                </h3>
                <div className="space-y-1">
                  {sections[2].content.map((item, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mathetes Section */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  Disciple – Greek word 'Mathetes'
                </h3>
                <div className="space-y-1 mb-3">
                  {sections[3].content.map((item, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-white/80 italic border-t border-white/10 pt-3">
                  {sections[3].note}
                </p>
              </div>
            </motion.div>

            {/* Disciples in Acts */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  Disciples in the Book of Acts
                </h3>
                {disciplesInActs.map((section, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <h4 className="text-sm font-bold text-white mb-2">{section.title}</h4>
                    <div className="space-y-1">
                      {section.verses.map((verse, vIdx) => (
                        <p key={vIdx} className="text-sm sm:text-base text-white/90 leading-relaxed">
                          {verse}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Great Commission */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  The Great Apostleship (Commission)
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3">
                  Romans 1:5 – through Christ we have received grace and apostleship for obedience to the faith among all nations for His name. People within every nationality made obedient to the faith.
                </p>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  We must first be disciples ourselves. We must then open our lives to the brethren, so that they may learn from us. Jesus was available to His disciples. Paul had a number of people with him so that they would learn the ministry. Disciples need to allow themselves to be corrected.
                </p>
              </div>
            </motion.div>

            {/* Discipleship Principles */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  Discipleship Principles
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3">
                  Matthew 10:24-25 – a disciple is not above his teacher (a true disciple needs to be submitted, be willing to put themselves under). Discipleship challenges us.
                </p>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3">
                  2 Timothy 3:10 – you have carefully followed my doctrine, manner of life, purpose, faith, long-suffering, love, perseverance. As disciples we need to be careful not to bring any other doctrine. Teach the doctrine of the Word of God that you have learned from your teacher.
                </p>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Paul gave Timothy an inheritance by imparting his lifestyle as an example for Timothy to follow. We need to have a manner of life that others can follow. Follow and continue in the same purpose. Discipleship is for all believers.
                </p>
              </div>
            </motion.div>

            {/* How We Disciple */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                  How do we disciple?
                </h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    <span className="text-[#FFD700] font-semibold mr-2">1.</span> preach the gospel (Mark 16:15)
                  </p>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    <span className="text-[#FFD700] font-semibold mr-2">2.</span> baptise those who believe (Mark 16:16)
                  </p>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    <span className="text-[#FFD700] font-semibold mr-2">3.</span> teach those who are baptised (Matt 28:19-20)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scripture Highlight Box */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-sm md:text-base text-white font-bold italic text-center">
                  "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you."
                </p>
                <p className="text-xs text-[#FFD700] mt-2 text-center">Matthew 28:19-20</p>
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
                Back to Home
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MakingDisciples;