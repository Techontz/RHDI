import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  Laptop,
  TrendingUp,
  Home,
  HeartPulse,
  Scale,
  Network,
  Crown,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    icon: Crown,
    title: "Leadership Development",
    text: "Equipping women with leadership skills, mentorship, and opportunities to lead with confidence and integrity.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Providing lifelong learning opportunities that promote personal growth and professional development.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    text: "Supporting women through business development, financial empowerment, and income-generating opportunities.",
  },
  {
    icon: Laptop,
    title: "Digital Skills",
    text: "Building digital literacy and technology skills that prepare women for today's digital economy.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Building",
    text: "Strengthening knowledge, confidence, and practical skills for sustainable success.",
  },
  {
    icon: Home,
    title: "Family Strengthening",
    text: "Promoting healthy families through education, support, and meaningful community engagement.",
  },
  {
    icon: HeartPulse,
    title: "Health & Well-Being",
    text: "Encouraging healthier lives through awareness, wellness education, and community initiatives.",
  },
  {
    icon: Scale,
    title: "Equal Opportunities",
    text: "Advocating for dignity, inclusion, participation, and equal opportunities for women and girls.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "Creating opportunities for collaboration, mentorship, and meaningful professional relationships.",
  },
  {
    icon: Users,
    title: "Emerging Leaders",
    text: "Preparing the next generation of women leaders to serve their communities with excellence.",
  },
];

export default function WomenEmpowermentSection() {
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

            <div className="relative h-[450px] lg:h-auto overflow-hidden">

              <img
                src="/7.jpeg"
                alt="Women's Empowerment"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/85 via-[#061C3F]/45 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Women's Empowerment
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Equipping women and girls with opportunities,
                  leadership, education, and skills to create lasting
                  transformation in families and communities.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                WOMEN'S EMPOWERMENT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we believe
                  empowering women is essential for building strong families,
                  resilient communities, and sustainable development across
                  nations.
                </p>

                <p>
                  Through education, leadership development, mentorship,
                  entrepreneurship initiatives, skills training, and
                  community engagement programs, we equip women and girls
                  with the knowledge, confidence, and opportunities to
                  realize their full potential.
                </p>

                <p>
                  Our approach promotes dignity, inclusion,
                  collaboration, and sustainable empowerment by creating
                  pathways for women to grow personally, lead
                  confidently, and contribute meaningfully to community
                  transformation.
                </p>

                <p>
                  Through this program, RHDI remains committed to
                  empowering women and girls, strengthening families,
                  promoting inclusive development, and fostering
                  sustainable transformation across nations.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Empowering Women.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Strengthening Families.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Nations.
                </h3>

              </div>

            </div>

          </div>

          {/* INITIATIVES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Women's Empowerment Initiatives
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {initiatives.map((item, index) => {
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

          {/* CTA */}

          <div className="bg-[#F8F8F8] px-8 py-16 text-center">

            <h3 className="text-4xl font-black uppercase text-[#061C3F]">
              Investing In Women, Building Stronger Communities
            </h3>

            <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-gray-700">
              By investing in education, leadership, entrepreneurship,
              mentorship, and meaningful partnerships, RHDI empowers
              women and girls to become catalysts for positive change,
              creating stronger families, thriving communities, and a
              more inclusive and sustainable future.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}