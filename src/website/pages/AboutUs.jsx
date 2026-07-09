import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Laptop,
  HeartHandshake,
  CalendarDays,
  ShieldCheck,
  Globe,
  UserRound,
  HandHeart,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Discipleship",
    text: "Building strong foundations of faith and character.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    text: "Equipping minds with knowledge and practical skills.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    text: "Raising leaders who inspire, serve and transform.",
  },
  {
    icon: Laptop,
    title: "Digital Empowerment",
    text: "Expanding access to technology and digital opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Humanitarian Service",
    text: "Serving communities with compassion and love.",
  },
];

const stats = [
  {
    icon: CalendarDays,
    value: "2018",
    label: "Founded",
  },
  {
    icon: ShieldCheck,
    value: "Vermont, USA",
    label: "Registered 2024",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Engaged",
  },
  {
    icon: UserRound,
    value: "20+",
    label: "Country Representatives",
  },
  {
    icon: HandHeart,
    value: "Thousands",
    label: "Lives Impacted",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1700px] mx-auto px-6">

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 bg-[#C79A2B] rounded-full mb-8"></span>

              <h2 className="text-5xl lg:text-6xl font-black text-[#061C3F] uppercase">
                WHO WE ARE
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-8"></div>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) is a
                  faith-based, community-focused international nonprofit
                  organization dedicated to empowering individuals,
                  developing leaders, strengthening communities, and
                  expanding opportunities through discipleship,
                  education, leadership development, digital
                  empowerment, and humanitarian service.
                </p>

                <p>
                  Founded in 2018 and officially registered in the
                  State of Vermont, USA in 2024, RHDI serves
                  communities across Africa and the United States
                  through programs that promote learning,
                  leadership, community engagement, and
                  sustainable transformation.
                </p>

                <p>
                  At RHDI, we believe that every individual possesses
                  inherent value, purpose, and potential. Through
                  collaborative partnerships and innovative
                  initiatives, we seek to equip people with
                  knowledge, skills, resources, and opportunities
                  that enable them to contribute positively to their
                  families, communities, and society.
                </p>

                <p>
                  Our work is guided by integrity, compassion,
                  servant leadership, responsible stewardship,
                  and a commitment to creating lasting impact
                  across nations.
                </p>

              </div>

              <div className="mt-10">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Equipping Leaders.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Empowering Communities.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Nations.
                </h3>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative min-h-[750px]">

              <img
                src="/1.jpeg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/20 to-transparent"></div>
            </div>
          </div>

          {/* Programs */}

          <div className="bg-[#061C3F]">

            <div className="grid lg:grid-cols-5">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="border-r border-[#C79A2B]/30 last:border-r-0 p-8 flex gap-5"
                  >
                    <Icon
                      size={42}
                      className="text-[#C79A2B] flex-shrink-0"
                    />

                    <div>

                      <h4 className="font-bold uppercase text-white">
                        {item.title}
                      </h4>

                      <p className="text-gray-300 mt-2 text-sm leading-6">
                        {item.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Statistics */}

          <div className="bg-[#F8F8F8]">

            <div className="grid lg:grid-cols-5">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="border-r border-gray-300 last:border-r-0 p-8 flex items-center gap-5"
                  >

                    <Icon
                      size={44}
                      className="text-[#C79A2B]"
                    />

                    <div>

                      <div className="text-3xl font-black text-[#061C3F]">
                        {item.value}
                      </div>

                      <div className="uppercase font-semibold text-gray-600 text-sm">
                        {item.label}
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}