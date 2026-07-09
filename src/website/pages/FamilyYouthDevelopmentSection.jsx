import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Laptop,
  Briefcase,
  HandHeart,
  Brain,
  Trophy,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    icon: Home,
    title: "Family Strengthening",
    text: "Supporting healthy families through education, guidance, and community-based support programs.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    text: "Developing confident young leaders through mentorship, leadership training, and personal growth opportunities.",
  },
  {
    icon: Heart,
    title: "Life Skills",
    text: "Equipping young people with practical life skills that foster resilience, responsibility, and confidence.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Promoting lifelong learning through educational opportunities and capacity-building initiatives.",
  },
  {
    icon: BookOpen,
    title: "Character Development",
    text: "Nurturing integrity, positive values, servant leadership, and responsible citizenship.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    text: "Preparing youth and families with essential technology and digital skills for today's world.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    text: "Supporting entrepreneurship, employability, career readiness, and economic empowerment.",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    text: "Encouraging volunteerism, civic responsibility, and meaningful community engagement.",
  },
  {
    icon: Brain,
    title: "Mental Well-Being",
    text: "Promoting emotional well-being, resilience, and healthy decision-making for individuals and families.",
  },
  {
    icon: Trophy,
    title: "Emerging Leaders",
    text: "Preparing the next generation of leaders to serve with excellence and transform communities.",
  },
];

export default function FamilyYouthDevelopmentSection() {
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
                src="/family-youth.jpg"
                alt="Family & Youth Development"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/85 via-[#061C3F]/45 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Family & Youth Development
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Building stronger families and empowering the next generation
                  to lead with purpose, character, and confidence.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                FAMILY & YOUTH DEVELOPMENT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we believe
                  strong families and empowered young people are essential
                  for building healthy communities and shaping a better future
                  for nations.
                </p>

                <p>
                  Through education, mentorship, leadership development,
                  life skills training, community engagement, and
                  capacity-building initiatives, we equip families and young
                  people to overcome challenges, discover their potential,
                  and become agents of lasting positive change.
                </p>

                <p>
                  Our approach promotes inclusion, collaboration,
                  empowerment, and lifelong learning, ensuring that
                  families and youth are prepared to embrace opportunities,
                  navigate challenges, and contribute meaningfully to
                  sustainable community transformation.
                </p>

                <p>
                  Through this program, RHDI remains committed to
                  strengthening families, empowering young people,
                  developing future leaders, and fostering sustainable
                  transformation across communities and nations.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Empowering Families.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Inspiring Youth.
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
                Family & Youth Development Initiatives
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
              Investing In Families. Empowering The Next Generation.
            </h3>

            <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-gray-700">
              By strengthening families, mentoring young people,
              promoting leadership, and providing lifelong learning
              opportunities, RHDI is preparing a generation of confident,
              compassionate, and responsible leaders who will transform
              their communities and shape a brighter future for nations.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}