import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Globe,
  Users,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function History() {
  const timeline = [
    {
      year: "2018",
      icon: Calendar,
      title: "Foundation",
      description:
        "Rehoboth Discipleship International (RHDI) was founded in 2018 with a vision to equip individuals, develop leaders, and strengthen communities through faith-based and community-centered initiatives.",
    },
    {
      year: "Growth",
      icon: GraduationCap,
      title: "Leadership & Community Development",
      description:
        "The organization began by providing educational seminars, leadership development activities, discipleship programs, and community engagement opportunities designed to empower people and promote positive transformation.",
    },
    {
      year: "Digital Expansion",
      icon: Globe,
      title: "Global Reach",
      description:
        "As the organization’s activities expanded, RHDI increasingly utilized digital platforms to provide virtual learning opportunities, leadership training, and cross-border collaboration, enabling participants from different countries to connect, learn, and grow together.",
    },
    {
      year: "2024",
      icon: Users,
      title: "International Registration",
      description:
        "In recognition of its expanding mission and international engagement, Rehoboth Discipleship International was officially registered in the State of Vermont, USA in 2024.",
    },
    {
      year: "Today",
      icon: HeartHandshake,
      title: "Serving Nations",
      description:
        "Today, RHDI serves communities across Africa and the United States through programs that promote education, leadership development, digital empowerment, technology access, humanitarian service, and sustainable community transformation.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#C79A2B]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C79A2B]/5 blur-3xl" />
      </div>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C79A2B]/25 bg-[#C79A2B]/5 text-[#C79A2B] font-semibold tracking-[2px] uppercase text-sm">
              <Sparkles className="w-4 h-4" />
              Our History
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-8 leading-tight">
              A Journey of
              <span className="text-[#C79A2B]"> Faith, Leadership </span>
              & Transformation
            </h2>

            <div className="w-28 h-1 bg-[#C79A2B] rounded-full mx-auto mt-8 mb-10" />

            <p className="text-gray-600 text-lg leading-9 max-w-3xl mx-auto">
            RHDI continues to pursue its mission of equipping leaders, empowering communities, and transforming nations through strategic partnerships, responsible stewardship, and innovative approaches to community development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-24 max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#C79A2B] via-[#C79A2B]/40 to-transparent" />

            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative flex gap-8"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#C79A2B] flex items-center justify-center shadow-lg shadow-[#C79A2B]/25">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-[#C79A2B] font-bold tracking-wide uppercase">
                          {item.year}
                        </span>

                        <ArrowRight className="w-4 h-4 text-[#C79A2B]" />

                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-9 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-28"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-[#C79A2B]/20 bg-gradient-to-r from-[#C79A2B]/8 via-white to-[#C79A2B]/8 p-10 md:p-14">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#C79A2B]/10 blur-3xl" />

              <div className="relative max-w-4xl">
                <div className="inline-flex items-center gap-2 text-[#C79A2B] font-semibold uppercase tracking-[2px] mb-5">
                  <HeartHandshake className="w-5 h-5" />
                  Continuing the Mission
                </div>

                <p className="text-gray-700 text-lg leading-9">
                  Today, RHDI continues to pursue its mission of equipping
                  leaders, empowering communities, and transforming nations
                  through strategic partnerships, responsible stewardship, and
                  innovative approaches to education, discipleship, leadership
                  development, digital empowerment, humanitarian service, and
                  sustainable community transformation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}