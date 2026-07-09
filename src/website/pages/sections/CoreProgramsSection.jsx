import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  UsersRound,
  Monitor,
  Wifi,
} from "lucide-react";

const programs = [
  {
    title: "LEADERSHIP\nDEVELOPMENT",
    description:
      "Equipping leaders with practical skills, ethical values, and effective leadership principles.",
    image: "/1.jpg",
    icon: Users,
    color: "bg-[#0A4A8B]",
  },
  {
    title: "EDUCATION &\nTRAINING",
    description:
      "Promoting lifelong learning through seminars, workshops, and virtual platforms.",
    image: "/2.jpg",
    icon: BookOpen,
    color: "bg-[#D9A11C]",
  },
  {
    title: "COMMUNITY\nOUTREACH",
    description:
      "Strengthening communities through outreach, collaboration and sustainable initiatives.",
    image: "/3.jpg",
    icon: UsersRound,
    color: "bg-[#0A4A8B]",
  },
  {
    title: "DIGITAL\nEMPOWERMENT",
    description:
      "Expanding access to digital learning, virtual communication, and technology tools.",
    image: "/4.jpg",
    icon: Monitor,
    color: "bg-[#0A4A8B]",
  },
  {
    title: "TECHNOLOGY\nACCESS",
    description:
      "Providing technology resources that support education, training, and development.",
    image: "/5.jpg",
    icon: Wifi,
    color: "bg-[#0A4A8B]",
  },
];

const CoreProgramsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1500px] mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-14"
        >

          <div className="flex items-center gap-6">

            <div className="flex-1 h-[2px] bg-[#D4B15C]" />

            <h2 className="text-[42px] font-black text-[#0D1B3F] uppercase tracking-wide whitespace-nowrap">
              OUR CORE PROGRAM AREAS
            </h2>

            <div className="flex-1 h-[2px] bg-[#D4B15C]" />

          </div>

        </motion.div>

        {/* Cards */}

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">

          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{
                  duration:.5,
                  delay:index*.08
                }}
                whileHover={{
                  y:-8
                }}
                className="relative bg-white rounded-xl border border-[#ECECEC] shadow-sm hover:shadow-xl transition-all duration-300 overflow-visible pt-10"
              >


                

                  {/* Floating Icon */}

                  <div
                    className={`
                      ${item.color}
                      absolute
                      left-1/2
                      -translate-x-1/2
                      -top-10
                      z-20
                      w-20
                      h-20
                      rounded-full
                      border-[6px]
                      border-white
                      shadow-xl
                      flex
                      items-center
                      justify-center
                    `}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                {/* Image */}

                <div className="relative h-[220px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover duration-500 hover:scale-105"
                />
                </div>

                {/* Content */}

                <div className="pt-14 px-7 pb-9 text-center">

                  <h3 className="text-[30px] leading-[1.05] font-extrabold uppercase text-[#11224E] whitespace-pre-line">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-[2px] w-16 bg-[#D4B15C] mx-auto rounded-full" />

                  <p className="mt-5 text-[18px] leading-8 text-gray-700">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CoreProgramsSection;