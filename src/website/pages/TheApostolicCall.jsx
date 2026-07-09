import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/confession/the-apostolic-cal.webp";

const TheApostolicCall = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const calls = [
    {
      number: 1,
      title: "A call into discipleship",
      content: [
        "preach the gospel to call in disciples",
        "Matthew 16:24-25 – let him deny himself, take up his cross and follow me, whoever loses his life for My sake will find it",
        "John 8:31-32 – If you abide in My word you are My disciples indeed (allow the Word of God to shape you). You shall know the truth and the truth will make you free. There is a freedom to receive revelation.",
        "John 15:7-8 – If you abide in me and My word abides in you, you shall ask and receive. You begin to hear from the Lord."
      ]
    },
    {
      number: 2,
      title: "A call into transformation",
      content: [
        "a lifestyle of change and transformation",
        "we need to be willing to change and God will change us",
        "2 Corinthians 3:16-18 – the veil is taken away when one turns to the Lord. we are being transformed into the same image from glory to glory, by the Spirit of the Lord. the Holy Spirit reveals the LORD to us and we are changed. we will become like Him, when we see Him as He is. changed into a completely new substance (a whole new creation).",
        "Romans 12:2 – Do not conform to this world, but be transformed by the renewing of your mind. That you may prove the good, acceptable and perfect will of God",
        "Matthew 17:1-2 – Jesus was transfigured (transformed) on the mountain. Jesus was changed into another substance before His disciples. As the Word of God is unveiled to us, we can see Jesus. Our minds are renewed and we are transformed.",
        "1 Corinthians 15:49 – we shall bear the image of the heavenly Man",
        "Romans 1:17 – a call from faith to faith",
        "Psalm 84:5-7 – a call from strength to strength",
        "2 Corinthians 3:18 – glory to glory",
        "John 1:16 – grace upon grace (grace for grace), grace transforms us",
        "2 Peter 3:18 – we are to grow in the grace and knowledge of our Lord and Saviour"
      ]
    },
    {
      number: 3,
      title: "A call to reach nations",
      content: [
        "Romans 1:5 – through Him we have received grace and apostleship for obedience to the faith among all nations",
        "Genesis 22:18 – in you and in your seed all the families of the earth (all nations) shall be blessed",
        "we are part of the fulfilment of the promise made to Abraham",
        "Romans 1:1-3 – Paul, called an apostle (He knew the call of God). Paul was separated to the gospel of God.",
        "Romans 2:16 – Paul called the gospel 'my gospel'",
        "The gospel was promised in the Holy Scriptures (Gal 3:8 – Abraham knew the gospel)",
        "Gospel is concerning His Son Jesus Christ",
        "Romans 15:16 – a minister of Jesus Christ to the nations"
      ]
    },
    {
      number: 4,
      title: "A call to obtain and fill the earth with the knowledge of the glory",
      content: [
        "2 Thessalonians 2:13-14 – God chose you for salvation from the beginning, saved to obtain the glory",
        "1 Samuel 2:8 – God raises up people from the ash heap and sets them among princes to inherit the throne of Glory",
        "Exodus 34:5-7 – he proclaimed the name of Yahweh, a call into the name of Jesus. The glory is mercy, grace, long-suffering, goodness, truth, forgiveness, no compromise, faithfulness.",
        "The apostolic call is to obtain the glory of our Lord Jesus Christ. A people who do not compromise on the truth.",
        "John 1:14 – glory full of grace and truth, revealed through the Word who became flesh",
        "Habakkuk 2:14 – the knowledge of the glory of Yahweh covering the earth",
        "Isaiah 40:5 – glory shall be revealed and all flesh shall see it together",
        "Ephesians 5:26-27 – a call to be part of the glorious church, which is the bride"
      ]
    },
    {
      number: 5,
      title: "A call to be a sending community, part of an apostolic company",
      content: [
        "a band of disciples formed around apostles",
        "a sending community",
        "discipleship and training centres, living for the Great Commission",
        "apostolic companies are patterns (a pattern people), every member contributing",
        "How to contribute to the apostolic company:",
        "i) By ministering the gift given by grace – 1 Peter 4:10-11 – as each one has received a gift, minister it to one another as good stewards of the manifold grace of God, that God may get the glory",
        "ii) Financially – Acts 4:32-35 – they had all things in common, no one among them lacked. we can contribute financially into the apostolic call",
        "iii) In love – Ephesians 4:16 – the body edifying itself in love",
        "iv) Imparting grace through our conversation – Ephesians 4:29 – speak what is good for necessary edification that it may impart grace to the hearers – Decide not to let your flesh dictate to you",
        "v) Through prayer – Philippians 1:19 – through prayer we can supply the Spirit of Jesus Christ – we pray for every mission and the Lord will supply the Spirit of Jesus Christ"
      ]
    },
    {
      number: 6,
      title: "A call to preach and teach Jesus the Messiah, the only foundation",
      content: [
        "be disciplined to teach and preach Jesus",
        "Acts 17:6-7 – they turned the world upside down, saying there is another king – Jesus",
        "We are to be faithful to preach that Jesus is the Messiah, the King (Col 1:28, Eph 3:8)"
      ]
    },
    {
      number: 7,
      title: "A call to fellowship in the sufferings of Messiah",
      content: [
        "Philippians 3:10-11 – that I might know Him, the power of His resurrection and fellowship of His sufferings",
        "we are called to suffer for Jesus, share and participate in the sufferings of Messiah",
        "no longer trusting in ourselves, but relying on Him (dead to our own will and alive to the will of God)",
        "2 Corinthians 13:4 – a call to lay down our lives for the brethren (our ministry comes out of the power of the resurrection)"
      ]
    },
    {
      number: 8,
      title: "A call to rule and reign with the Messiah in His kingdom",
      content: [
        "Luke 12:32 – it is Your Father's good pleasure to give you the kingdom",
        "Ephesians 2:6 – we have been raised up and made to sit together with Christ in the heavenly places",
        "Revelation 5:10 – he has made us to be kings and priests and we shall reign on the earth",
        "Revelation 3:21 – he who overcomes will sit down with Me on My throne (on the throne of God)"
      ]
    },
    {
      number: 9,
      title: "A call to be prepared for the coming of the Messiah",
      content: [
        "a call to be ready, prepared",
        "a call to be equipped",
        "1 Thessalonians 5:23 – your spirit, soul and body being preserved blameless at the coming",
        "1 Corinthians 11:26 – proclaiming the Lord's death until He comes at the Lord's Table"
      ]
    },
    {
      number: 10,
      title: "A call to be bold and to not fear death",
      content: [
        "Acts 4:29 – they prayed for boldness to speak the Word in the face of persecution",
        "They were filled with the Holy Spirit and spoke the word with boldness (freedom of speech, with cheerful courage)",
        "Ephesians 3:12 – in whom we have boldness and access with confidence through the faith of Him",
        "Revelation 12:11 – we overcome by the blood of the Lamb, the word of our testimony (the testimony of Jesus), and by not loving our lives to death"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Only - Full Image Without Zoom/Crop */}
      <div className="w-full">
        <img
          src={HeaderImage}
          alt="The Apostolic Call"
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
                THE
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD700] mt-2">
                APOSTOLIC CALL
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
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                In Christ we are always moving forward. Hebrews 6:1 – Let us go on to perfection. 
                Philippians 3:14 – pressing on toward the upward call in Christ Jesus. 
                Psalm 24:3 – ascending to the hill of the LORD.
              </p>
              <p className="text-white/90 text-sm sm:text-base mt-3">
                We need to grow in our commitment and understanding of the call.
              </p>
              <div className="w-20 h-0.5 bg-[#FFD700] mx-auto rounded-full mt-4"></div>
            </motion.div>

            {/* The 10 Calls */}
            <div className="space-y-4 md:space-y-5">
              {calls.map((call) => (
                <motion.div
                  key={call.number}
                  variants={fadeInUp}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-[#FFD700] p-5 md:p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FFD700]/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#FFD700] font-bold text-sm">{call.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-[#FFD700] mb-3">
                        {call.title}
                      </h3>
                      <div className="space-y-2">
                        {call.content.map((text, i) => (
                          <p key={i} className="text-sm sm:text-base text-white/90 leading-relaxed">
                            {text.startsWith('-') ? text : text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing Scripture */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 bg-white/5 p-5 md:p-6 rounded-lg border-l-4 border-[#FFD700]"
            >
              <p className="text-sm sm:text-base text-white/90 italic mb-2 text-center">
                "I press toward the goal for the prize of the upward call of God in Christ Jesus."
              </p>
              <p className="text-xs text-[#FFD700] font-semibold text-center">
                - Philippians 3:14
              </p>
            </motion.div>

            {/* Scripture Highlight Box */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="bg-white/10 p-4 md:p-5 rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-sm md:text-base text-white font-bold italic text-center">
                  "You did not choose Me, but I chose you and appointed you that you should go and bear fruit, and that your fruit should remain, that whatever you ask the Father in My name He may give you."
                </p>
                <p className="text-xs text-[#FFD700] mt-2 text-center">John 15:16</p>
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

export default TheApostolicCall;