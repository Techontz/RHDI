import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  GraduationCap,
  Laptop,
  HandHeart,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const stories = [
  {
    icon: Users,
    title: "Leadership Transformation",
    text: "Through leadership seminars and mentorship programs, emerging leaders have gained confidence, strengthened strategic thinking, and developed the ability to serve others with integrity, vision, and purpose.",
  },
  {
    icon: GraduationCap,
    title: "Educational Growth",
    text: "Participants have acquired practical knowledge, professional skills, and lifelong learning opportunities that have expanded their potential and strengthened their contribution to society.",
  },
  {
    icon: Laptop,
    title: "Digital Empowerment",
    text: "Individuals and community groups have benefited from digital learning opportunities, technology access, and virtual collaboration that broaden learning and communication.",
  },
  {
    icon: HandHeart,
    title: "Community Transformation",
    text: "Community outreach initiatives have inspired hope, strengthened partnerships, encouraged volunteerism, and fostered sustainable community development.",
  },
  {
    icon: HeartHandshake,
    title: "Women, Youth & Families",
    text: "Women, young people, and families have experienced personal growth, leadership development, increased confidence, and greater participation in community transformation.",
  },
];

export default function StoriesTransformationSection() {
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
                src="/stories-of-transformation.jpg"
                alt="Stories of Transformation"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Stories of Transformation
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Every life transformed is a testimony of hope,
                  opportunity, and the lasting impact of service.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                STORIES OF TRANSFORMATION
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe true impact is measured by transformed lives
                  and strengthened communities. Through discipleship,
                  leadership development, education, and community
                  empowerment initiatives, we have witnessed
                  individuals discover their potential, develop new
                  skills, and become agents of positive change.
                </p>

                <p>
                  Every leadership seminar, educational opportunity,
                  mentorship relationship, community outreach
                  initiative, and partnership contributes to stories
                  of growth, resilience, and hope. These stories
                  reflect the power of faith, collaboration, and
                  purposeful service in transforming lives.
                </p>

                <p>
                  Although every journey is unique, they all share a
                  common thread—the empowerment of individuals to
                  strengthen families, inspire communities, and create
                  lasting positive impact for future generations.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Restoring Hope.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Empowering People.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Communities.
                </h3>

              </div>

            </div>

          </div>

          {/* STORIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Transformation In Action
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {stories.map((story, index) => {
                const Icon = story.icon;

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
                      {story.title}
                    </h4>

                    <p className="mt-4 leading-7 text-gray-300">
                      {story.text}
                    </p>

                    <ArrowRight className="mt-6 text-[#C79A2B]" />

                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* CONTINUING STORY */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Sparkles
                className="mx-auto text-[#C79A2B]"
                size={70}
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Our Continuing Story
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Every training session, mentorship opportunity,
                community initiative, and strategic partnership
                represents another chapter in our journey of
                transformation. These stories continue to inspire our
                commitment to equipping leaders, empowering
                communities, strengthening families, and transforming
                nations. As our impact grows, so does our dedication
                to creating opportunities that enable individuals to
                discover their purpose, serve others with excellence,
                and contribute meaningfully to a more hopeful and
                flourishing future.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}