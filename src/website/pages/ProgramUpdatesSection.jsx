import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  HandHeart,
  Laptop,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const updates = [
  {
    icon: Briefcase,
    title: "Leadership Development",
    text: "Leadership seminars, mentorship sessions, and capacity-building initiatives continue to equip current and emerging leaders with practical skills, strategic thinking, and values-based leadership principles.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    text: "Learning opportunities continue to strengthen knowledge, practical skills, and lifelong learning for participants from diverse communities and backgrounds.",
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    text: "Community engagement continues to grow through seminars, workshops, volunteer initiatives, and outreach activities that promote collaboration and sustainable development.",
  },
  {
    icon: Laptop,
    title: "Digital Empowerment",
    text: "Technology access, digital learning, virtual collaboration, and communication platforms continue to expand opportunities for education and community participation.",
  },
  {
    icon: Users,
    title: "Women, Youth & Families",
    text: "Programs continue to strengthen women, young people, and families through mentorship, leadership development, life skills, and community engagement.",
  },
  {
    icon: Globe,
    title: "Geographic Expansion",
    text: "RHDI continues to engage participants across multiple countries, strengthening international collaboration and extending opportunities for transformational impact.",
  },
];

export default function ProgramUpdatesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1700px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl"
        >

          {/* HERO */}

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/program-updates.jpg"
                alt="Program Updates"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Program Updates
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Growing our impact through innovation, collaboration,
                  and expanding opportunities that strengthen
                  communities across nations.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                PROGRAM UPDATES
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) continues
                  to expand its programs and strengthen its impact
                  through leadership development, education and
                  training, community outreach, and digital
                  empowerment initiatives.
                </p>

                <p>
                  Our commitment remains focused on equipping
                  individuals, empowering communities, and creating
                  sustainable opportunities that promote learning,
                  leadership, innovation, and transformational service.
                </p>

                <p>
                  Through strategic partnerships, expanded outreach,
                  and continuous program development, we are extending
                  our reach while responding to the evolving needs of
                  communities across multiple nations.
                </p>

              </div>

            </div>

          </div>

          {/* UPDATES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Current Program Highlights
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {updates.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8 backdrop-blur-sm"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B]">

                      <Icon
                        size={30}
                        className="text-white"
                      />

                    </div>

                    <h4 className="text-xl font-bold uppercase text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-7 text-gray-300">
                      {item.text}
                    </p>

                    <ArrowRight className="mt-6 text-[#C79A2B]" />

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* LOOKING AHEAD */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <TrendingUp
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Looking Ahead
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                As we continue to grow, RHDI remains committed to
                strengthening strategic partnerships, expanding
                program reach, increasing access to technology,
                enhancing leadership development, and delivering
                innovative solutions that empower individuals,
                strengthen communities, and create sustainable
                transformation across nations. Guided by faith,
                collaboration, and excellence, we look forward to
                building new opportunities that inspire hope and
                lasting impact for future generations.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}