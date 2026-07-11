import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    image: "/11.jpeg",
    icon: Users,
    color: "bg-[#0A4A8B]",
    link: "/programs/leadership-development",
  },
  {
    title: "EDUCATION &\nTRAINING",
    description:
      "Promoting lifelong learning through seminars, workshops, and virtual platforms.",
    image: "/2.jpeg",
    icon: BookOpen,
    color: "bg-[#D9A11C]",
    link: "/programs/education-training",
  },
  {
    title: "COMMUNITY\nOUTREACH",
    description:
      "Strengthening communities through outreach, collaboration and sustainable initiatives.",
    image: "/3.jpeg",
    icon: UsersRound,
    color: "bg-[#0A4A8B]",
    link: "/programs/community-outreach",
  },
  {
    title: "DIGITAL\nEMPOWERMENT",
    description:
      "Expanding access to digital learning, virtual communication, and technology tools.",
    image: "/4.jpeg",
    icon: Monitor,
    color: "bg-[#0A4A8B]",
    link: "/programs/digital-empowerment",
  },
  {
    title: "TECHNOLOGY\nACCESS",
    description:
      "Providing technology resources that support education, training, and development.",
    image: "/5.jpeg",
    icon: Wifi,
    color: "bg-[#0A4A8B]",
    link: "/programs/technology-access-initiative",
  },
];

export default function CoreProgramsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1550px] mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6">

            <div className="flex-1 h-[2px] bg-[#D4B15C]" />

            <h2 className="text-center text-4xl lg:text-5xl font-black tracking-wide uppercase text-[#11224E] whitespace-nowrap">
              OUR CORE PROGRAM AREAS
            </h2>

            <div className="flex-1 h-[2px] bg-[#D4B15C]" />

          </div>
        </motion.div>

        {/* Cards */}

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible flex flex-col"
              >
                {/* Floating Icon */}

                <div
                  className={`
                    ${item.color}
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -top-10
                    w-20
                    h-20
                    rounded-full
                    border-[6px]
                    border-white
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    z-20
                  `}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Image */}

                <div className="pt-12 px-6">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-col flex-1 px-7 pt-8 pb-8 text-center">

                  <h3 className="text-[28px] leading-tight font-extrabold uppercase text-[#11224E] whitespace-pre-line">
                    {item.title}
                  </h3>

                  <div className="w-16 h-[3px] bg-[#D4B15C] rounded-full mx-auto my-5" />

                  <p className="text-[17px] leading-8 text-gray-600 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-8">
                  <Link
                      to={item.link}
                      className={`
                        inline-flex
                        items-center
                        justify-center
                        ${item.color}
                        text-white
                        font-semibold
                        text-sm
                        uppercase
                        tracking-wider
                        px-6
                        py-3
                        rounded-full
                        hover:opacity-90
                        transition
                      `}
                    >
                      Learn More
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}