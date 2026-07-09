import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const MissionStatement = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ===========================
          MAIN SECTION
      ============================ */}

      <section
        className="py-14 md:py-20"
        style={{
          background:
            "linear-gradient(180deg,#07182C 0%, #0A2240 45%, #07182C 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* ===========================
              PAGE TITLE
          ============================ */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">

              <div className="w-14 h-[2px] bg-[#C89B3C]" />

              <span
                className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold"
              >
                Rehoboth Discipleship International
              </span>

              <div className="w-14 h-[2px] bg-[#C89B3C]" />

            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
              Mission &
            </h1>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#D6B25E] mt-2">
              Vision
            </h2>

            <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Building transformed leaders, empowering communities, and
              advancing the Kingdom of God through discipleship,
              leadership development, education, technology,
              and sustainable community engagement.
            </p>
          </motion.div>

          {/* ===========================
              MISSION + VISION GRID
          ============================ */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >

            {/* =====================================================
                MISSION CARD
                (Continue in Part 1B)
            ====================================================== */}

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-[#D6B25E]/30 bg-white/5 backdrop-blur-md p-8 lg:p-10 shadow-2xl"
            >

<div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 flex items-center justify-center border border-[#D6B25E]/30">
                  <span className="text-2xl">✝</span>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#D6B25E] text-sm">
                    Our Calling
                  </p>

                  <h2 className="text-4xl font-bold text-white mt-1">
                    Mission
                  </h2>
                </div>
              </div>

              <div className="space-y-6">

                <p className="text-gray-300 leading-8 text-lg">
                  Rehoboth Discipleship International (RHDI) is a faith
                  ministry established by the Lord Jesus Christ to minister
                  discipleship and apostolic leadership to all nations,
                  particularly developing nations. We are committed to raising
                  leaders, providing transformational training, and making
                  discipleship resources freely available to everyone.
                </p>

                <p className="text-gray-300 leading-8 text-lg">
                  Our mission is to equip pastors, church leaders, ministries,
                  and communities through biblical teaching, leadership
                  development, education, technology, conferences, seminars,
                  and practical training that produces lasting spiritual and
                  community transformation.
                </p>

                <p className="text-gray-300 leading-8 text-lg">
                  Through partnerships with churches, ministries, educational
                  institutions, and community organizations across the world,
                  we continue to strengthen leaders, mentor emerging servants,
                  and establish disciples who impact their nations for Christ.
                </p>

                <div className="border-l-4 border-[#D6B25E] bg-[#D6B25E]/10 rounded-xl p-6">

                  <h3 className="text-[#D6B25E] text-xl font-bold mb-4">
                    OUR MISSION
                  </h3>

                  <p className="text-white text-lg leading-8 font-medium">
                    To disciple nations by equipping leaders, empowering
                    communities, strengthening churches, and providing
                    transformational education, leadership development,
                    technology access, and practical ministry resources that
                    inspire sustainable spiritual and social impact.
                  </p>

                </div>

                <div className="border border-[#D6B25E]/20 rounded-xl bg-white/5 p-6">

                  <p className="text-white text-xl font-semibold italic leading-8">
                    "Go therefore and make disciples of all nations,
                    baptizing them in the name of the Father and of the Son
                    and of the Holy Spirit."
                  </p>

                  <p className="mt-4 text-[#D6B25E] font-semibold">
                    — Matthew 28:19
                  </p>

                </div>

              </div>

            </motion.div>

            {/* =====================================================
                VISION CARD
                (Continue in Part 1C)
            ====================================================== */}

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-[#D6B25E]/30 bg-white/5 backdrop-blur-md p-8 lg:p-10 shadow-2xl"
            >
                            <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 flex items-center justify-center border border-[#D6B25E]/30">
                  <span className="text-2xl">🌍</span>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#D6B25E] text-sm">
                    Our Future
                  </p>

                  <h2 className="text-4xl font-bold text-white mt-1">
                    Vision
                  </h2>
                </div>
              </div>

              <div className="space-y-6">

                <p className="text-gray-300 leading-8 text-lg">
                  We envision transformed communities where spiritual growth,
                  education, servant leadership, and innovation work together
                  to create lasting change. Through discipleship and strategic
                  partnerships, we desire to see lives restored, leaders raised,
                  and nations impacted for the glory of God.
                </p>

                <div className="border-l-4 border-[#D6B25E] bg-[#D6B25E]/10 rounded-xl p-6">

                  <h3 className="text-[#D6B25E] text-xl font-bold mb-4">
                    OUR VISION
                  </h3>

                  <p className="text-white text-lg leading-8 font-medium">
                    To build transformed, empowered, and connected communities
                    across nations through discipleship, education, leadership
                    development, technology access, and sustainable community
                    engagement.
                  </p>

                </div>

                <p className="text-gray-300 leading-8 text-lg">
                  Our vision is to see individuals, families, churches, and
                  communities equipped with knowledge, values, resources, and
                  opportunities that inspire hope, strengthen leadership,
                  encourage collaboration, and contribute to long-term social,
                  educational, and spiritual transformation.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">

                  <div className="rounded-xl border border-[#D6B25E]/25 bg-white/5 p-5">
                    <h4 className="text-[#D6B25E] font-bold text-lg mb-2">
                      Empower
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Equipping individuals with biblical values,
                      leadership skills, and practical knowledge.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D6B25E]/25 bg-white/5 p-5">
                    <h4 className="text-[#D6B25E] font-bold text-lg mb-2">
                      Transform
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Bringing lasting spiritual, educational,
                      and community transformation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D6B25E]/25 bg-white/5 p-5">
                    <h4 className="text-[#D6B25E] font-bold text-lg mb-2">
                      Connect
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Building strong partnerships between churches,
                      leaders, organizations, and communities.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D6B25E]/25 bg-white/5 p-5">
                    <h4 className="text-[#D6B25E] font-bold text-lg mb-2">
                      Sustain
                    </h4>
                    <p className="text-gray-300 text-sm leading-7">
                      Creating long-term impact through discipleship,
                      education, innovation, and servant leadership.
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ==========================================
              WHAT WE BELIEVE SECTION
              (Continue in Part 2A)
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-14">

              <p className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm">
                Foundation Of Faith
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
                What We Believe
              </h2>

              <div className="w-28 h-1 bg-[#D6B25E] mx-auto rounded-full mt-6" />

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* ============================
                  GOD
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">✝</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  GOD
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe there is one true God who eternally exists as
                  three persons: the Father, the Son, and the Holy Spirit.
                  God is holy, sovereign, all-powerful, all-knowing,
                  ever-present, and unchanging. He is the Creator and
                  Sustainer of all things, revealing His perfect love,
                  righteousness, justice, and mercy to humanity.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  Genesis 1:1 • Deuteronomy 6:4 • Isaiah 45:5 •
                  Matthew 3:16–17 • Romans 1:20
                </p>
              </motion.div>

              {/* ============================
                  JESUS CHRIST
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">👑</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  JESUS CHRIST
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe Jesus Christ is the eternal Son of God who became
                  fully man while remaining fully God. He lived a sinless life,
                  died on the cross for the sins of humanity, rose again on the
                  third day, ascended into heaven, and will return in glory as
                  King of Kings and Lord of Lords.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  Isaiah 9:6 • John 1:1–14 • Philippians 2:6–11 •
                  Hebrews 4:15 • 1 Corinthians 15:3–6
                </p>
              </motion.div>

              {/* ============================
                  HOLY SPIRIT
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">🕊</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  THE HOLY SPIRIT
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe the Holy Spirit is fully God and works in the
                  hearts of believers by convicting, guiding, comforting,
                  empowering, and equipping them for holy living, effective
                  ministry, and faithful witness to the Gospel throughout the
                  world.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  John 14:16–17 • John 16:7–8 • Acts 1:8 •
                  2 Corinthians 3:17 • Ephesians 1:13
                </p>
              </motion.div>
                            {/* ============================
                  US
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">👥</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  US
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe every person is created in the image of God with
                  inherent value and purpose. Although humanity has fallen into
                  sin and become separated from God, His love provides
                  redemption through Jesus Christ. Every individual is invited
                  into a restored relationship with God through faith in Him.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  Genesis 1:26–27 • Romans 3:23 • John 1:12–13 • Romans 10:9
                </p>
              </motion.div>

              {/* ============================
                  SALVATION
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">❤️</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  SALVATION
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe salvation is God's free gift made available
                  through Jesus Christ alone. It cannot be earned by works,
                  religious rituals, or personal effort. Through repentance,
                  faith, and acceptance of Christ, believers receive forgiveness,
                  new life, and the promise of eternal fellowship with God.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  Ephesians 2:8–9 • John 14:6 • Acts 4:12 • Romans 10:9 •
                  Acts 2:38
                </p>
              </motion.div>

              {/* ============================
                  ETERNITY
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">✨</span>
                </div>

                <h3 className="text-2xl font-bold text-[#D6B25E] mb-5">
                  ETERNITY
                </h3>

                <p className="text-gray-300 leading-8">
                  We believe every person will live eternally. Those who trust
                  in Jesus Christ will enjoy everlasting life in the presence
                  of God, while those who reject Him remain separated from Him.
                  Our eternal hope is founded on Christ's resurrection and His
                  promise of a new heaven and a new earth.
                </p>

                <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                <p className="text-sm italic text-[#D6B25E]/80 leading-7">
                  John 3:16 • Romans 6:23 • John 5:24 • Revelation 20:15 •
                  Revelation 21:1–4
                </p>
              </motion.div>
                            {/* ============================
                  MARRIAGE
              ============================ */}
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-3 rounded-2xl border border-[#D6B25E]/20 bg-white/5 backdrop-blur-md p-8 md:p-10 hover:border-[#D6B25E] hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">

                  <div className="w-16 h-16 rounded-full bg-[#D6B25E]/15 border border-[#D6B25E]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">💍</span>
                  </div>

                  <div className="flex-1">

                    <h3 className="text-3xl font-bold text-[#D6B25E] mb-5">
                      MARRIAGE
                    </h3>

                    <p className="text-gray-300 text-lg leading-9">
                      We believe that marriage is God's sacred covenant between
                      one man and one woman, established by Him as the
                      foundation of the family. Marriage is designed to reflect
                      Christ's love for His Church through faithfulness,
                      commitment, mutual respect, sacrificial love, and lifelong
                      partnership. It provides companionship, strengthens the
                      family, nurtures future generations, and glorifies God in
                      every aspect of life.
                    </p>

                    <div className="w-full h-px bg-[#D6B25E]/20 my-6" />

                    <p className="text-[#D6B25E]/80 italic leading-7">
                      Genesis 1:27 • Genesis 2:24 • Matthew 19:4–6 •
                      Ephesians 5:31–33
                    </p>

                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ==========================================
              CLOSING SCRIPTURE
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="max-w-5xl mx-auto rounded-3xl border border-[#D6B25E]/30 bg-gradient-to-r from-[#0A2240] via-[#102C4F] to-[#0A2240] p-10 md:p-14 text-center">

              <h2 className="text-4xl md:text-5xl font-bold text-[#D6B25E] mb-8">
                Our Commitment
              </h2>

              <p className="text-gray-300 text-lg md:text-xl leading-9">
                We are committed to fulfilling the Great Commission by making
                disciples, equipping leaders, strengthening churches, serving
                communities, and advancing the Kingdom of God through biblical
                teaching, servant leadership, education, technology, and
                compassionate outreach across the nations.
              </p>

              <div className="w-32 h-1 bg-[#D6B25E] rounded-full mx-auto my-10" />

              <p className="text-white italic text-2xl leading-10">
                "Go therefore and make disciples of all nations..."
              </p>

              <p className="text-[#D6B25E] font-semibold mt-4 text-lg">
                Matthew 28:19–20
              </p>

            </div>
          </motion.div>
          </div>
      </section>
    </div>
  );
};

export default MissionStatement;