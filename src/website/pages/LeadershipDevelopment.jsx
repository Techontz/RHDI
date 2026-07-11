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
    title: "Personal Leadership Development",
  },
  {
    icon: BookOpen,
    title: "Servant Leadership Principles",
  },
  {
    icon: Award,
    title: "Character and Integrity Building",
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning and Vision Development",
  },
  {
    icon: Users,
    title: "Team Building and Collaboration",
  },
  {
    icon: Mic,
    title: "Communication and Public Speaking Skills",
  },
  {
    icon: UserRound,
    title: "Mentorship and Coaching Programs",
  },
  {
    icon: Building2,
    title: "Community Transformation Leadership",
  },
  {
    icon: Briefcase,
    title: "Organizational Leadership and Governance",
  },
  {
    icon: GraduationCap,
    title: "Emerging Leaders and Youth Leadership Development",
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
                src="/11.jpeg"
                alt="Education & Training"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/60 to-transparent"/>

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 bg-[#C79A2B] rounded-full mb-6"/>

                <h3 className="text-4xl font-black uppercase">
                 Leadership Development
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                At Rehoboth Discipleship International (RHDI), we believe that effective leadership is the foundation of transformed communities and sustainable development.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 bg-[#C79A2B] rounded-full mb-8"/>

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
               LEADERSHIP DEVELOPMENT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10"/>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                At Rehoboth Discipleship International (RHDI), we believe that effective leadership is the foundation of transformed communities and sustainable development. Our Leadership Development Program is designed to equip individuals, emerging leaders, church leaders, community leaders, and organizational teams with the knowledge, skills, values, and practical tools necessary to lead with integrity, excellence, and servant-hearted commitment.
                </p>

                <p>
                Through seminars, workshops, mentoring, coaching, and virtual training programs, we provide leadership education that strengthens personal growth, strategic thinking, decision-making, communication, team building, and community impact. We seek to raise leaders who are committed to serving others, empowering communities, and creating positive transformation across nations.
                </p>

              </div>

            </div>

          </div>

          {/* TRAINING AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
              Our leadership initiatives focus on:
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

              Through our Leadership Development Program, RHDI is committed to equipping leaders who inspire change, strengthen institutions, and contribute to the holistic transformation of individuals, families, communities, and nations.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}