import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/confession/apostles-header.webp";

const ApostlesToday = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "WHAT IS AN APOSTLE?",
      content: [
        "Gk \"apostolos\" – a sent one, a delegate (delegated authority), an ambassador",
        "E.g. ambassadors/governors of nations have all the authority of that nation invested in them",
        "Jesus sends apostles to represent the government, the kingdom of God, all the authority of God",
        "Apostolic revelation is all about being sent by the King of kings to manifest His kingdom authority in the earth"
      ]
    },
    {
      title: "Every apostle must be sent by someone",
      content: [
        "The 12 apostles were sent by Jesus, Jesus was sent by the Father",
        "John 20:21 – As the Father sent (apostello) Me (Jesus), so now I send you (apostles)",
        "Apostello – to send, set free"
      ]
    },
    {
      title: "Hebrews 3:1",
      content: [
        "Consider the Apostle and High Priest of our confession",
        "Mostly, Jesus has been preached as the High Priest",
        "He is the Redeemer, the One who was sacrificed for our sins so that we could be saved. Not many have considered or preached Jesus as the Apostle.",
        "Are you ready to consider Jesus as the Apostle?"
      ]
    },
    {
      title: "It is time for us to consider Jesus the Apostle",
      content: [
        "If we do not receive Jesus as the Apostle, we will not receive the One who sent Him; we miss out on a revelation of the Father.",
        "We will remain servants without a Father if we do not understand Jesus as the Apostle"
      ]
    },
    {
      title: "Confession of Jesus the Apostle",
      content: [
        "Sent with a purpose to build the House of God on the earth",
        "All things in heaven and on earth come together in Christ, the High Priest takes us into the heavenly realm, Apostle builds on the earth",
        "Matthew 16:18 – On this Rock I will build My Church – this was Jesus' main work as an apostle, to build the church",
        "Hebrews 3:3,6 – What is the house of God? We are the house of God, Christ is the Son of this house",
        "1 Timothy 3:15 – The House of God is the church of the Living God",
        "This is Jesus' work as an apostle, to build the house of God, the church"
      ]
    },
    {
      title: "How did Jesus do this building work?",
      content: [
        "He trained some apostles",
        "John 17:4 – Jesus finished the apostolic work on the earth of raising the apostles",
        "Jesus was ready to die because He had finished the apostolic work by training the 12 apostles",
        "Jesus was the Master Builder and could say to the Father the night before He died that He could send the apostles into the world just like Jesus was sent by the Father",
        "When Jesus ascended, He gave the five ministries to build the House of God (Ephesians 4:7-11)",
        "Ephesians 4:11-12 – He gave them to equip the saints, to do the work of ministry",
        "Ephesians 2:20 – Apostles are in there as part of the foundation",
        "Revelation 21:14 – The apostles are the foundation for the holy city",
        "1 Corinthians 3:11 – Jesus is the foundation of the church; this foundation is laid by the apostles",
        "Ephesians 2:21-22 – In Christ we are being fitted together, growing into a Holy Temple, to be a dwelling place for God in the Spirit",
        "The ministry of Jesus the Apostle continues in the earth, as he raises up apostles to be doing the work"
      ]
    },
    {
      title: "A look at apostles in the New Testament",
      content: [
        "Who decided there were no apostles today and that there were lots of pastors? What authority decided these things?",
        "26 people in New T are called apostles – Jesus appointed 12 – 1 was a failure",
        "Acts 1:20-25 – Matthias was 12th apostle",
        "Acts 13:1-2 – Paul and Barnabas separated for apostolic work",
        "V.3-4 – Holy Spirit sent Paul and Barnabas",
        "They were prophets (Barnabas) and teachers (Saul) before this",
        "Acts 14:4, 14 – Paul and Barnabas are called apostles",
        "Romans 16:7 – Andronicus and Junia are of note among the apostles – seems like a large group of apostles around",
        "Junia is a feminine name, probably a lady apostle in the early church",
        "1 Corinthians 4:6 – Apollos is included in Paul's writing on equal footing with Paul and Peter",
        "2 Corinthians 8:23 – messenger = Gk. Apostolos = apostles – Titus was an apostle",
        "Letters to Timothy and Titus were apostolic letters not pastoral, written to apostles",
        "Galatians 1:19, 1 Corinthians 9:5 – James and all brothers of Lord were apostles (Mark 6:3 shows 4 brothers of the Lord)",
        "Philippians 2:25 – Epaphroditus was an apostle (messenger = apostolos)",
        "1 Thessalonians 1:1, 2:6 – Paul, Silvanus and Timothy are all apostles",
        "26 apostles named in New Testament and others referred to",
        "Pastors = none named in New T",
        "Evangelists = 1, Philip Acts 21:8",
        "Prophets = Agabus, Silas, Judas (Acts 15:32)",
        "Teachers = Acts 13:1 – 5 men mentioned, certain prophets and teachers"
      ]
    }
  ];

  const tasks = [
    {
      number: 1,
      title: "What is the task of Apostle?",
      content: "To build the house of God, the church. 1 Corinthians 3:10-11 – apostle has master plan and lays foundation for it to be built upon and the foundation is only ever Jesus the Christ"
    },
    {
      number: 2,
      title: "What is the role of the Apostle?",
      content: "To represent and make known the Sender. If you are an apostle of Jesus Christ, you will talk about Jesus all the time. Apostles of Jesus Christ represent Jesus. All things must be judged by the Word; no horizontal, vertical, market place apostles because they are not in the Word. Who sent Jesus? Father (only about 10x God mentioned Father in Old T, in gospels alone over 100x God called Father). Jesus made known the Father! John 14:9 – If you have seen Jesus you have seen the Father. If you do not accept Jesus, you reject Father. Who sends apostles today? Jesus. So apostles preach Jesus and make Jesus known. Acts 5:42 – this is what the early apostles did on a daily basis. We are to teach and preach Jesus the Christ."
    },
    {
      number: 3,
      title: "What is the grace of an apostle?",
      content: "1. To be a father. The grace of an apostle is to be a father. 1 Corinthians 4:14 – Corinthians called Paul's 'beloved children'. V.15 – sons are begotten through the gospel. The relationship with an apostle is a relationship by revelation. Destiny of sons is to grow them up to be co-workers with you in the family business. Galatians 4:19 – Paul called believers his 'little children' but he is praying for them to grow up.\n\n2. To bring forth revelation. Colossians 1:26-27 – the revelation of the mystery is the inheritance of the saints. Apostles have grace to release the revelation of the mystery to the saints as their inheritance. We are to fulfil the Word, making known the mystery of Christ to the saints. Ephesians 3:2-8 – by grace he received revelation. Knowledge of the mystery given to holy apostles and prophets by the Spirit to give to the saints.\n\n3. Grace as a wise master builder. 1 Corinthians 3:10 – apostles are also never sectarian, they carry the burden to see the church be built properly. There are no denominational apostles. Brethren God joins to apostles become a pattern people.\n\n4. Grace to recognize the calling of others to ministry. True apostles make way for their sons. Role of ministry is to bring up ministers, to bring up the saints.\n\n5. True apostles love the whole church. There are no favourites. Apostles are to have a special relationship with each person individually."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop - Same as other pages */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="Apostles Today"
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
                APOSTLES
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                TODAY
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
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-3">
                WHAT IS AN APOSTLE?
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
            </motion.div>

            {/* Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-5 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-3">
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

            {/* Tasks of Apostle */}
            <motion.div variants={fadeInUp} className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-5 text-center">
                THE APOSTOLIC TASK AND ROLE
              </h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.number}
                    className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#FFD700]/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#FFD700] font-bold text-sm">{task.number}</span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-2">
                          {task.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed whitespace-pre-line">
                          {task.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Apostleship Section */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]"
            >
              <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-2">
                Apostleship – GK 'apostole'
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3">
                = commission, apostolate (what you are commissioned to do)
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                We call Matthew 28:18-20 – "The Great Commission". We should call it "The Great Apostleship". Our apostleship is to reach the nations.
              </p>
              <div className="mt-3 p-3 bg-white/10 rounded border-l-2 border-[#FFD700]">
                <p className="text-xs sm:text-sm text-white/80 italic">
                  "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you." - Matthew 28:19-20
                </p>
              </div>
            </motion.div>

            {/* Scripture Highlight Box */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-sm md:text-base text-white font-bold italic text-center">
                  "And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry, for the edifying of the body of Christ."
                </p>
                <p className="text-xs text-[#FFD700] mt-2 text-center">Ephesians 4:11-12</p>
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

export default ApostlesToday;