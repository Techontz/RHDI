import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images
import HeaderImage from "../../assets/about/discipleship-header.webp"; // You'll need to add this image

const Discipleship = () => {
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
          alt="Discipleship Ministry"
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
            <div className="w-full">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center text-[#FFD700]">
                DISCIPLESHIP
              </h1>
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
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Discipleship at RHDI is designed to fulfil our Purpose: Glorify God by loving Him and those He Created through making disciples. Our Discipleship Proposition Believing that disciple-making is the foundational mandate of the Great Commission Given by our Lord Jesus Christ in Matthew 28:19, and based upon our church's Mission to glorify God in making disciples, we propose that discipleship be Incorporated, taught, and practised in every area of the ministry, creating a culture of Discipleship at Grace RHDI.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  A "disciple" is one who follows the teaching; May we follow the teaching of the New Testament on this subject. Our Discipleship Purpose Passage is 2 Timothy 2:2 And the things that thou hast heard of me among many Witnesses, the same commit thou to faithful men and women, who Shall be able to teach others also.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Our Definition of Discipleship Discipleship is an intentional relationship in order to lead individuals to a deeper, Accountable relationship with Christ and equip them to carry out the Great Commission. Discipleship is simply a life-touching life.
                </p>

                <div className="bg-white/10 p-4 md:p-6 rounded-lg border-l-4 border-[#FFD700] my-4">
                  <p className="text-base md:text-lg text-white font-bold uppercase">
                    DISCIPLESHIP IS NOT "ONE OF THE THINGS" THE CHURCH IS SUPPOSED TO DO, IT IS "THE" THING THE CHURCH IS COMMANDED TO DO.
                  </p>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Jesus knew he only had a 3 year window to build into his ragtag team, everything they needed in order to be trusted with the kingdom. 3 years to teach them everything they needed to know, 3 years to give them hands-on training and experience, 3 years to develop spiritual disciplines and 3 years to turn them into LEADERS.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  He could not waste his time; he had to maximize every moment. Everything he did with them was purposeful and moved them closer to the leadership goal. Jesus' message to the church was to stay focused on the primary task of making disciples who, in turn, would make other disciples. Every church believes that it makes disciples, and it probably does to some degree. The question is, "How effective are we at intentionally and strategically creating leaders who, in turn, create ongoing disciples?" Jesus did it in three years.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Of course, we typically do not take the same 24/7 approach Jesus did, so our discipleship process may take longer. But if a sceptic were to walk into your church tomorrow, what process do you have for him or her that would move them forward in their walk, such that they could be ready to leave your church to help start a new church within a few years?
                </p>
              </motion.div>

              {/* Right Column */}
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Jesus never intended that his disciples would stay together as one cosy, close-knit family. He expected that they would embrace a mission that would lead them through the world, spreading the message and making disciples as they went. The goal of discipleship is to equip people so that they can go and reproduce elsewhere. Not that we kick people out of church once they reach a certain stage, but we expect that a good number of the people we train will have a sense of calling to plant churches or take the mission abroad… if we have done discipleship well.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white font-semibold italic">
                  "The mark of a great church is not its seating capacity, but its sending capacity."
                </p>

                <div className="mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Our Discipleship Program:</h2>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Monday to Tuesday Evening: Discipleship in teaching and fellowship</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Wednesday Evening: Discipleship in focus</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Thursday Evening: Discipleship in action via The Exchange evangelism Training Other Discipleship Opportunities</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Lady's and Men's groups</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Small group home studies Future Cross Training Opportunities</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• What Christians Believe</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Great Doctrines of the Bible</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">• Balancing the Christian Life</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">WHAT DISCIPLESHIP IS NOT…</h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-2">
                    – just conveying information – just a 10-week program that is accomplished and then you're done. Many discipleship series are only an introduction to the Christian faith and only last for 10 weeks. Others have a series of guides covering many topics. You will want to evaluate the ultimate goal of the series.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    – just for the spiritual elite – EVERYONE needs to be discipled Many longer term "discipleship" programs are designed for the keener believer. The average person doesn't survive for more than a couple of weeks. I regrettably did this to some people in my past.
                  </p>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">OUR APPROACH TO DISCIPLESHIP</h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    A worship service is a wonderful time and there is no question about the power of the spoken word to impact lives. Large group teaching has its definite biblical role to play. Effective discipleship, however, does not happen in a large group setting. There are simply too many people at different stages of life to move them all one step forward. Jesus understood this. He taught large crowds about the kingdom of God, but Rehoboth Discipleship International he left to a small group approach.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">PRIORITY: TEACHING AND SHEPHERDING</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    We have said that discipleship is not just conveying information. However, conveying information is a "part" of the discipleship process. We are to Teach people to obey everything Jesus commanded us. The curriculum provided is the "CONTENT" we believe every disciple needs to understand.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    The goal of the small group though, is that we do much more than just "teach". We WALK WITH PEOPLE through life, helping them to become like Christ. Understanding how to follow Christ involves having a community of people who will model godly behaviour, encourage personal outreach, speak wisdom into your life, hold you accountable, encourage you and help bear your burdens. This is so important that we believe it helps to have someone with shepherding gifts to help facilitate this dynamic within the group. Teachers, by nature, want people to understand truths and community building can often get pushed to the side.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    Shepherds by nature want to build community and will often not get through the content that people need to understand. Having both a Teacher and a Shepherd in each group helps maintain a healthy balance and frees up each leader from having to think in two directions. A healthy tension will always exist as to which emphases get how much time and it may vary from week to week.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">APPRENTICING</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    This model requires that we keep creating more people equipped to teach and shepherd. One of the ways we do this is by constantly placing an apprentice teacher and apprentice shepherd alongside a more seasoned teacher and shepherd.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">THE END GOAL</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    If we do our job well, after a few years of discipleship, people should be equipped and motivated to go and impact the world. Instead of building a larger and larger local church, we expect to keep sending some of our most equipped people away to plant churches or to go to the mission field. The challenge is to constantly maintain the big picture of why we are really here.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discipleship;