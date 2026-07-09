import React from "react";
import { motion } from "framer-motion";
import {
  Presentation,
  Users,
  GraduationCap,
  Globe,
  HandHeart,
  Briefcase,
  Laptop,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "392+",
    title: "Virtual Seminars",
    subtitle: "Training sessions conducted worldwide",
  },
  {
    value: "283+",
    title: "Physical Events",
    subtitle: "Seminars, workshops & community events",
  },
  {
    value: "4,840+",
    title: "People Trained",
    subtitle: "Individuals equipped through our programs",
  },
  {
    value: "20",
    title: "Country Representatives",
    subtitle: "Serving across multiple nations",
  },
  {
    value: "18",
    title: "Countries Reached",
    subtitle: "Through partnerships and initiatives",
  },
  {
    value: "Thousands",
    title: "Lives Impacted",
    subtitle: "Communities empowered and transformed",
  },
];

const impactAreas = [
  {
    icon: Briefcase,
    title: "Leadership Development",
    text: "Equipping emerging and established leaders with values-based leadership, practical skills, and strategic capacity-building opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    text: "Providing quality learning opportunities that promote knowledge, lifelong learning, and practical skills development.",
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    text: "Serving communities through humanitarian initiatives, engagement programs, and sustainable development activities.",
  },
  {
    icon: Laptop,
    title: "Digital Empowerment",
    text: "Expanding access to digital tools, technology, virtual learning, and communication opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Women, Youth & Family",
    text: "Empowering women, strengthening families, and preparing young people to become future leaders.",
  },
];

export default function StatisticsSection() {
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
                src="/statistics.jpg"
                alt="RHDI Impact"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="h-1 w-24 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Our Impact
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Every number represents transformed lives,
                  strengthened communities, and new opportunities for
                  lasting change.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                STATISTICS
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe measurable impact demonstrates meaningful
                  transformation. Through leadership development,
                  education, discipleship, digital empowerment, and
                  community engagement, we continue to serve people
                  across multiple nations.
                </p>

                <p>
                  Every seminar conducted, every leader developed,
                  every family strengthened, and every partnership
                  established contributes to a larger vision of
                  empowering communities and creating sustainable
                  transformation.
                </p>

                <p>
                  These statistics reflect the collective commitment
                  of our volunteers, partners, leaders, and community
                  members working together to inspire hope, strengthen
                  lives, and expand opportunities for future
                  generations.
                </p>

              </div>

            </div>

          </div>

          {/* IMPACT NUMBERS */}

          <div className="bg-[#061C3F] px-8 py-20">

            <div className="text-center mb-16">

              <h3 className="text-4xl font-black uppercase text-white">
                Our Impact At A Glance
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-10 text-center backdrop-blur-sm"
                >

                  <div className="text-6xl font-black text-[#C79A2B]">
                    {item.value}
                  </div>

                  <h4 className="mt-5 text-2xl font-bold uppercase text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-7 text-gray-300">
                    {item.subtitle}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* IMPACT AREAS */}

          <div className="bg-white px-8 py-20">

            <div className="text-center mb-16">

              <h3 className="text-4xl font-black uppercase text-[#061C3F]">
                Areas Of Impact
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 lg:grid-cols-5">

              {impactAreas.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-gray-200 p-8 shadow-lg"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#061C3F]">

                      <Icon
                        size={30}
                        className="text-[#C79A2B]"
                      />

                    </div>

                    <h4 className="text-xl font-bold uppercase text-[#061C3F]">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-7 text-gray-600">
                      {item.text}
                    </p>

                    <ArrowRight className="mt-6 text-[#C79A2B]" />

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* CTA */}

          <div className="bg-[#F8F8F8] px-8 py-20 text-center">

            <Presentation
              className="mx-auto text-[#C79A2B]"
              size={70}
            />

            <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
              Every Number Represents A Life Changed
            </h3>

            <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-gray-700">
              Behind every statistic is a person whose life has been
              impacted, a family that has been strengthened, a leader
              who has been equipped, or a community that has gained
              new opportunities. These milestones inspire us to
              continue expanding our reach, deepening our impact, and
              fulfilling our mission of empowering individuals,
              developing leaders, strengthening communities, and
              transforming nations.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}