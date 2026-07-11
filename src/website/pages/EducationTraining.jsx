import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Laptop,
  Briefcase,
  Lightbulb,
  UserRound,
  Mic,
  Building2,
  Award,
  Quote,
  ArrowRight,
} from "lucide-react";

const trainingAreas = [
  {
    icon: GraduationCap,
    title: "Leadership Development",
    text: "Equip current and emerging leaders with practical leadership, strategic thinking, and professional development skills.",
  },
  {
    icon: BookOpen,
    title: "Discipleship Education",
    text: "Strengthen biblical understanding, spiritual growth, servant leadership, and values-based living.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    text: "Develop technology skills, digital confidence, and practical competencies for today's connected world.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    text: "Build business knowledge, innovation, financial literacy, and entrepreneurial leadership.",
  },
  {
    icon: Users,
    title: "Community Capacity",
    text: "Strengthen individuals and organizations through community-based learning and capacity-building initiatives.",
  },
  {
    icon: Lightbulb,
    title: "Personal Development",
    text: "Promote life skills, critical thinking, personal growth, and lifelong learning opportunities.",
  },
  {
    icon: UserRound,
    title: "Youth Leadership",
    text: "Prepare young leaders with confidence, character, mentorship, and practical leadership experience.",
  },
  {
    icon: Mic,
    title: "Communication Skills",
    text: "Improve public speaking, communication, collaboration, and presentation abilities.",
  },
  {
    icon: Building2,
    title: "Organizational Development",
    text: "Support governance, institutional capacity, strategic planning, and organizational excellence.",
  },
  {
    icon: Award,
    title: "Lifelong Learning",
    text: "Encourage continuous education, professional development, and knowledge sharing across communities.",
  },
];

export default function EducationTrainingSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1700px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl"
        >

          {/* HERO */}

          <div className="grid lg:grid-cols-2">

            <div className="relative h-[520px] lg:h-auto overflow-hidden">

              <img
                src="/2.jpeg"
                alt="Education & Training"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/60 to-transparent"/>

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 bg-[#C79A2B] rounded-full mb-6"/>

                <h3 className="text-4xl font-black uppercase">
                  Education & Training
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Expanding knowledge, building capacity, and preparing
                  individuals to lead, serve, and transform their
                  communities.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 bg-[#C79A2B] rounded-full mb-8"/>

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                EDUCATION & TRAINING
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10"/>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe education and training are powerful
                  instruments for empowering individuals, developing
                  leaders, strengthening communities, and promoting
                  sustainable transformation across nations.
                </p>

                <p>
                  Through workshops, seminars, virtual learning,
                  mentorship, and capacity-building initiatives, we
                  provide accessible, innovative, and practical
                  learning opportunities that equip people with the
                  knowledge, skills, and competencies needed to thrive
                  in an increasingly interconnected world.
                </p>

                <p>
                  Our commitment is to develop confident leaders,
                  lifelong learners, and resilient communities by
                  creating learning environments that inspire
                  innovation, collaboration, service, and excellence.

                </p>

              </div>

            </div>

          </div>

          {/* TRAINING AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Areas of Training
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {trainingAreas.map((item)=>{

                const Icon = item.icon;

                return(

                  <motion.div
                    key={item.title}
                    whileHover={{y:-8}}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B] mb-6">

                      <Icon size={30} className="text-white"/>

                    </div>

                    <h4 className="text-white font-bold uppercase text-lg">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-gray-300 leading-7">
                      {item.text}
                    </p>

                    <ArrowRight className="mt-6 text-[#C79A2B]"/>

                  </motion.div>

                )

              })}

            </div>

          </div>

          {/* APPROACH */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Our Learning Approach
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Our approach emphasizes practical learning,
                collaboration, innovation, mentorship, and inclusive
                participation to ensure individuals and communities
                are equipped to address today's challenges while
                embracing future opportunities. Through lifelong
                learning and continuous capacity building, we seek to
                cultivate leaders who create sustainable
                transformation within their families, organizations,
                and communities.

              </p>

            </div>

          </div>

          {/* TAGLINE */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <blockquote className="text-4xl font-black leading-tight text-[#061C3F]">

                Educating Minds.

                <span className="block mt-4 text-[#C79A2B]">
                  Building Capacity.
                </span>

                <span className="block mt-4">
                  Transforming Nations.
                </span>

              </blockquote>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}