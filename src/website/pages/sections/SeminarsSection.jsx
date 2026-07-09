import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Video,
  MapPin,
  Coffee,
  ChevronRight,
} from "lucide-react";

import ZoomSeminarsImg from "../../../assets/seminars/zoom-seminar.webp";
import PhysicalSeminarsImg from "../../../assets/seminars/physical_seminar.webp";
import LunchSeminarsImg from "../../../assets/seminars/lunch-seminar.webp";

const seminars = [
  {
    id: 1,
    title: "ZOOM SEMINARS",
    description:
      "Conducting online seminars that equip believers through biblical teaching, leadership training and interactive discipleship sessions.",
    image: ZoomSeminarsImg,
    icon: Video,
    color: "bg-[#0C4A8A]",
    path: "/seminars/zoom",
  },
  {
    id: 2,
    title: "PHYSICAL SEMINARS",
    description:
      "Hosting transformational seminars in different countries to strengthen churches, leaders and communities through practical ministry.",
    image: PhysicalSeminarsImg,
    icon: MapPin,
    color: "bg-[#D4A017]",
    path: "/seminars/physical",
  },
  {
    id: 3,
    title: "LUNCH AFTER SEMINARS",
    description:
      "Building fellowship after every seminar by creating opportunities for networking, mentorship and lasting Christian relationships.",
    image: LunchSeminarsImg,
    icon: Coffee,
    color: "bg-[#0C4A8A]",
    path: "/seminars/lunch",
  },
];

const SeminarsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-14">

      <div className="max-w-[1750px] mx-auto px-8">

        {/* Heading */}

        <div className="flex items-center justify-center mb-10">

          <div className="h-[2px] bg-[#d4a017] flex-1 max-w-sm" />

          <h2 className="mx-8 text-3xl font-bold uppercase text-[#001a3d]">
            Seminars & Network
          </h2>

          <div className="h-[2px] bg-[#d4a017] flex-1 max-w-sm" />

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {seminars.map((seminar, index) => {

            const Icon = seminar.icon;

            return (

              <motion.div
                key={seminar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(seminar.path)}
                className="
                  cursor-pointer
                  bg-white
                  rounded-xl
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  group
                "
              >

                {/* Image */}

                <div className="relative">

                  <img
                    src={seminar.image}
                    alt={seminar.title}
                    className="
                      h-44
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Floating Icon */}

                  <div
                    className={`
                      absolute
                      -bottom-8
                      left-1/2
                      -translate-x-1/2
                      w-16
                      h-16
                      rounded-full
                      ${seminar.color}
                      flex
                      items-center
                      justify-center
                      border-[5px]
                      border-white
                      shadow-xl
                    `}
                  >
                    <Icon
                      size={26}
                      className="text-white"
                    />
                  </div>

                </div>

                {/* Body */}

                <div className="pt-10 pb-6 px-5 text-center">

                  <h3
                    className="
                      text-[22px]
                      font-extrabold
                      uppercase
                      text-[#001a3d]
                      leading-tight
                    "
                  >
                    {seminar.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-gray-600
                      text-[15px]
                      leading-7
                    "
                  >
                    {seminar.description}
                  </p>

                  <button
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[#0C4A8A]
                      font-bold
                      uppercase
                      tracking-wide
                      group-hover:text-[#d4a017]
                      transition
                    "
                  >
                    Learn More

                    <ChevronRight
                      size={18}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
};

export default SeminarsSection;