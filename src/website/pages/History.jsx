import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Globe,
  Users,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function History() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Rehoboth Discipleship International was founded with a vision to raise disciples, strengthen churches, and equip leaders to transform communities through biblical teaching and servant leadership.",
      icon: Calendar,
    },
    {
      year: "2020",
      title: "Expanding Across Nations",
      description:
        "The ministry began reaching new countries through leadership training, discipleship seminars, humanitarian outreach, and strategic partnerships with local churches.",
      icon: Globe,
    },
    {
      year: "2024",
      title: "Official Registration",
      description:
        "RHDI became officially registered in the State of Vermont, USA, strengthening its international structure and expanding opportunities for global collaboration.",
      icon: GraduationCap,
    },
    {
      year: "Today",
      title: "Global Impact",
      description:
        "Today RHDI serves thousands of people through leadership development, education, digital empowerment, humanitarian service, and discipleship across multiple nations.",
      icon: Users,
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#061C3F] text-white">

        <div className="absolute inset-0">

          <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#C79A2B]/20 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.8 }}
            className="max-w-3xl"
          >

            <span className="uppercase tracking-[4px] text-[#C79A2B] font-semibold">
              OUR STORY
            </span>

            <h1 className="text-6xl font-black mt-6 leading-tight">
              Our History
            </h1>

            <p className="text-xl text-gray-300 mt-8 leading-9">
              Rehoboth Discipleship International was established with one
              purpose—to make disciples, develop leaders, strengthen
              communities, and transform nations through Christ-centered
              education, compassion, and service.
            </p>

          </motion.div>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
          >

            <img
              src="/history-founder.jpg"
              alt="Founder"
              className="rounded-3xl shadow-2xl object-cover w-full h-[650px]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity:0, x:50 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
          >

            <span className="uppercase tracking-[3px] text-[#C79A2B] font-bold">
              A JOURNEY OF FAITH
            </span>

            <h2 className="text-5xl font-black text-[#061C3F] mt-4">
              From One Vision To Global Impact
            </h2>

            <div className="w-24 h-1 bg-[#C79A2B] mt-6 mb-8"></div>

            <p className="text-gray-700 leading-9 text-lg mb-6">
              What began as a passion for discipleship has grown into an
              international movement dedicated to equipping leaders and
              transforming communities through biblical teaching,
              education, technology, and humanitarian initiatives.
            </p>

            <p className="text-gray-700 leading-9 text-lg mb-6">
              Every milestone represents God's faithfulness and the
              commitment of countless partners, volunteers, churches,
              and community leaders who continue to advance the mission.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">

              <div className="bg-[#061C3F] text-white rounded-xl p-6 flex gap-4 items-center">

                <HeartHandshake className="text-[#C79A2B]" size={38} />

                <div>

                  <h3 className="font-bold text-3xl">15+</h3>

                  <p className="text-sm uppercase tracking-wider">
                    Countries Served
                  </p>

                </div>

              </div>

              <div className="bg-[#C79A2B] text-[#061C3F] rounded-xl p-6 flex gap-4 items-center">

                <Users size={38} />

                <div>

                  <h3 className="font-bold text-3xl">Thousands</h3>

                  <p className="text-sm uppercase tracking-wider">
                    Lives Reached
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TIMELINE */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[3px] text-[#C79A2B] font-bold">
              OUR JOURNEY
            </span>

            <h2 className="text-5xl font-black text-[#061C3F] mt-4">
              Timeline
            </h2>

          </div>

          <div className="relative">

            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#C79A2B]"></div>

            {timeline.map((item,index)=>{

              const Icon=item.icon;

              return(

              <motion.div

                key={index}

                initial={{opacity:0,y:40}}

                whileInView={{opacity:1,y:0}}

                viewport={{once:true}}

                transition={{delay:index*.15}}

                className="relative pl-28 mb-16"

              >

                <div className="absolute left-0 w-16 h-16 rounded-full bg-[#061C3F] flex items-center justify-center shadow-xl">

                  <Icon className="text-[#C79A2B]" />

                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">

                  <span className="text-[#C79A2B] font-black text-2xl">

                    {item.year}

                  </span>

                  <h3 className="text-3xl font-bold text-[#061C3F] mt-2">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-8 text-gray-700">

                    {item.description}

                  </p>

                  <button className="mt-6 flex items-center gap-2 text-[#061C3F] font-bold">

                    Learn More

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

              )

            })}

          </div>

        </div>

      </section>

    </main>
  );
}
