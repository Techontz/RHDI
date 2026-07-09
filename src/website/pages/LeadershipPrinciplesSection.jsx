import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Eye,
  Scale,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  HandHeart,
  Crown,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    title: "Servant Leadership",
    text: "Leadership begins with serving others, empowering people, and creating opportunities for growth and transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Honesty, transparency, ethical conduct, and accountability are the foundation of trustworthy leadership.",
  },
  {
    icon: Eye,
    title: "Vision & Purpose",
    text: "Effective leaders inspire hope, pursue meaningful goals, and mobilize people toward lasting impact.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    text: "Great leaders remain teachable, value wisdom, and continually grow in knowledge and character.",
  },
  {
    icon: Scale,
    title: "Responsibility",
    text: "Leadership requires faithful stewardship of people, opportunities, resources, and influence.",
  },
  {
    icon: Users,
    title: "Empowering Others",
    text: "True leaders mentor, encourage, and equip others to realize their potential and succeed.",
  },
  {
    icon: HandHeart,
    title: "Humility",
    text: "Humility enables leaders to listen, collaborate, value others, and lead with compassion.",
  },
  {
    icon: Target,
    title: "Transformation",
    text: "Leadership should create lasting positive change that strengthens individuals, communities, and nations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Visionary leaders embrace creativity and adapt to new challenges while remaining faithful to core values.",
  },
  {
    icon: Crown,
    title: "Character",
    text: "Leadership is ultimately measured by character, faithfulness, compassion, and the legacy left in others.",
  },
];

const scriptures = [
  "Proverbs 11:14",
  "Matthew 20:26–28",
  "Luke 12:48",
  "Romans 12:8",
  "Philippians 2:3–5",
  "1 Timothy 4:12",
  "1 Peter 5:2–3",
];

export default function LeadershipPrinciplesSection() {
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
                src="/leadership-principles.jpg"
                alt="Leadership Principles"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Leadership Principles
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Developing leaders who serve with integrity, lead with
                  vision, and transform communities through faithful
                  stewardship.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                LEADERSHIP PRINCIPLES
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe leadership is both a privilege and a
                  responsibility. Leadership is demonstrated through
                  character, service, integrity, and the positive
                  influence that transforms the lives of others.
                </p>

                <p>
                  Our leadership philosophy is founded upon servant
                  leadership. We believe effective leaders place the
                  needs of others above personal interests, using their
                  influence to mentor, empower, and develop people for
                  meaningful service.
                </p>

                <p>
                  We affirm that integrity, vision, humility, continuous
                  learning, and responsible stewardship are essential
                  qualities of transformational leadership. These
                  principles guide leaders in making ethical decisions,
                  inspiring collaboration, and pursuing sustainable
                  impact.
                </p>

                <p>
                  Through leadership development, mentorship,
                  education, and community engagement, RHDI equips
                  leaders of character, competence, and compassion who
                  are prepared to strengthen communities and influence
                  nations for generations to come.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Serve With Integrity.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Lead With Vision.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Empower Others.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Transform Communities.
                </h3>

              </div>

            </div>

          </div>

          {/* PRINCIPLES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Leadership Principles
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B] mb-6">
                      <Icon size={30} className="text-white" />
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

          {/* SCRIPTURE */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-6xl mx-auto text-center">

              <h3 className="text-4xl font-black uppercase text-[#061C3F]">
                Biblical References
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                {scriptures.map((verse) => (
                  <div
                    key={verse}
                    className="rounded-full border border-[#C79A2B] bg-white px-8 py-4 text-lg font-bold text-[#061C3F]"
                  >
                    {verse}
                  </div>
                ))}

              </div>

              <p className="max-w-5xl mx-auto mt-12 text-lg leading-9 text-gray-700">
                Our leadership principles are rooted in Scripture and
                guide every aspect of our ministry. We are committed to
                raising leaders who demonstrate integrity, humility,
                servant-heartedness, responsible stewardship, and a
                lifelong commitment to developing others. Through these
                biblical principles, we seek to inspire leaders who
                create lasting transformation in families, communities,
                and nations.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}