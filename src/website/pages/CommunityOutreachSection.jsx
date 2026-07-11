import React from "react";
import { motion } from "framer-motion";
import {
  HandHeart,
  Users,
  HeartHandshake,
  Megaphone,
  HeartPulse,
  Home,
  GraduationCap,
  Briefcase,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    icon: Users,
    title: "Community Engagement",
    text: "Mobilizing communities through collaboration, participation, and local leadership.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Assistance",
    text: "Providing compassionate support to vulnerable individuals and families.",
  },
  {
    icon: Megaphone,
    title: "Education & Awareness",
    text: "Delivering programs that inspire learning, advocacy, and positive action.",
  },
  {
    icon: HeartPulse,
    title: "Health & Well-Being",
    text: "Promoting healthier communities through education and wellness initiatives.",
  },
  {
    icon: Home,
    title: "Family Support",
    text: "Strengthening families through care, guidance, and community-based services.",
  },
  {
    icon: GraduationCap,
    title: "Youth Development",
    text: "Equipping young people with leadership, life skills, and opportunities.",
  },
  {
    icon: Briefcase,
    title: "Capacity Building",
    text: "Developing practical skills that promote resilience and sustainable growth.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Service",
    text: "Connecting volunteers with meaningful opportunities to serve communities.",
  },
  {
    icon: Shield,
    title: "Emergency Response",
    text: "Supporting communities during crises through relief and recovery efforts.",
  },
  {
    icon: Globe,
    title: "Strategic Partnerships",
    text: "Working together with organizations to create lasting community transformation.",
  },
];

export default function CommunityOutreachSection() {
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
          <div className="grid lg:grid-cols-2">
            {/* LEFT IMAGE */}

            <div className="relative h-[450px] lg:h-auto overflow-hidden">
              <img
                src="/3.jpeg"
                alt="Community Outreach"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/80 via-[#061C3F]/45 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">
                <div className="h-1 w-24 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase leading-tight">
                  Community Outreach
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Building stronger communities through compassion,
                  collaboration, service, and sustainable development.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="bg-white p-12 lg:p-16">
              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                COMMUNITY OUTREACH
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">
                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe transformed communities are built through
                  compassion, collaboration, and active engagement.
                  Our Community Outreach Program serves individuals
                  and communities by addressing practical needs,
                  promoting human dignity, and empowering people to
                  achieve sustainable and positive change.
                </p>

                <p>
                  Through strategic partnerships, volunteer
                  engagement, humanitarian activities, and
                  community-based initiatives, we work alongside
                  local communities to strengthen resilience,
                  improve quality of life, and create opportunities
                  that enable individuals and families to thrive.
                </p>

                <p>
                  Our approach emphasizes inclusiveness,
                  empowerment, local participation, and sustainable
                  solutions that address both immediate needs and
                  long-term community development priorities.
                </p>

                <p>
                  Through this program, RHDI remains committed to
                  serving communities with compassion, empowering
                  vulnerable populations, strengthening families,
                  and fostering sustainable transformation across
                  communities and nations.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-3xl font-black text-[#061C3F]">
                  Serving Communities.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Empowering Lives.
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
                Community Outreach Initiatives
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
              {initiatives.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm transition-all"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B]">
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

          {/* BOTTOM CTA */}

          <div className="bg-[#F8F8F8] px-8 py-16 text-center">
            <h3 className="text-4xl font-black uppercase text-[#061C3F]">
              Together We Create Lasting Impact
            </h3>

            <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            <p className="mx-auto mt-8 max-w-5xl text-lg leading-9 text-gray-700">
              By combining compassion, community participation,
              strategic partnerships, and sustainable development,
              RHDI continues to strengthen communities, restore hope,
              and empower people to build a brighter future for
              generations to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}