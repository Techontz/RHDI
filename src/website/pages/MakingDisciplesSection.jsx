import React from "react";
import { motion } from "framer-motion";
import {
  Cross,
  BookOpen,
  Heart,
  Users,
  ShieldCheck,
  HandHeart,
  GraduationCap,
  Globe,
  Lightbulb,
  Church,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Cross,
    title: "Growing in Faith",
    text: "Deepening our relationship with God through prayer, Scripture, worship, and faithful obedience.",
  },
  {
    icon: Heart,
    title: "Character Formation",
    text: "Developing integrity, humility, compassion, wisdom, and Christ-like character in everyday life.",
  },
  {
    icon: ShieldCheck,
    title: "Servant Leadership",
    text: "Preparing leaders who serve with humility, accountability, excellence, and responsibility.",
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    text: "Equipping individuals with knowledge, skills, and confidence to influence society positively.",
  },
  {
    icon: Users,
    title: "Mentorship",
    text: "Encouraging disciples to invest in others through teaching, encouragement, and personal example.",
  },
  {
    icon: BookOpen,
    title: "Biblical Learning",
    text: "Building strong spiritual foundations through continuous learning and biblical discipleship.",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    text: "Living out faith by serving communities with compassion, justice, and practical love.",
  },
  {
    icon: Globe,
    title: "Community Transformation",
    text: "Empowering disciples to become catalysts for sustainable transformation in society.",
  },
  {
    icon: Church,
    title: "Faith Communities",
    text: "Creating environments where people grow together in faith, fellowship, and mutual encouragement.",
  },
  {
    icon: Lightbulb,
    title: "Purpose & Calling",
    text: "Helping individuals discover their God-given gifts and use them to impact future generations.",
  },
];

const scriptures = [
  "Matthew 28:19–20",
  "2 Timothy 2:2",
  "Ephesians 4:11–13",
];

export default function MakingDisciplesSection() {
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

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/making-disciples.jpg"
                alt="Making Disciples"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="h-1 w-24 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Making Disciples
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Raising generations of disciples who lead with faith,
                  integrity, compassion, and servant leadership.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 bg-[#C79A2B] rounded-full mb-8"></span>

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                MAKING DISCIPLES
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10"></div>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI),
                  making disciples is at the heart of our mission
                  and identity. We believe discipleship is a lifelong
                  journey of spiritual growth, personal transformation,
                  leadership development, and purposeful service.
                </p>

                <p>
                  Discipleship is more than the transmission of
                  knowledge. It is a transformational process that
                  nurtures the whole person—spiritually,
                  intellectually, emotionally, socially, and
                  practically—equipping individuals to grow in faith,
                  develop godly character, and positively influence
                  their communities.
                </p>

                <p>
                  Through mentorship, education, leadership training,
                  community engagement, and practical service, we
                  prepare disciples who invest in others, multiply
                  impact, and become responsible leaders committed to
                  justice, compassion, integrity, and hope.
                </p>

                <p>
                  Our vision extends beyond individual transformation.
                  We seek to cultivate leaders who strengthen families,
                  empower communities, and influence nations through
                  values-centered leadership and sustainable
                  development.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Equipping People.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Developing Leaders.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Communities.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Impacting Nations.
                </h3>

              </div>

            </div>

          </div>

          {/* DISCIPLESHIP PILLARS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Our Discipleship Pillars
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {pillars.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm"
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

          {/* BIBLICAL FOUNDATION */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <h3 className="text-4xl font-black uppercase text-[#061C3F]">
                Biblical Foundation
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                {scriptures.map((verse) => (

                  <div
                    key={verse}
                    className="rounded-full border border-[#C79A2B] bg-white px-8 py-4 text-lg font-bold text-[#061C3F]"
                  >
                    {verse}
                  </div>

                ))}

              </div>

              <p className="mt-12 text-lg leading-9 text-gray-700">

                Our discipleship ministry is rooted in Christ's Great
                Commission to make disciples of all nations and to
                equip believers for works of service. Through biblical
                teaching, mentorship, servant leadership, and
                community engagement, RHDI is committed to raising
                generations who faithfully live out the Gospel while
                transforming families, communities, and nations.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}