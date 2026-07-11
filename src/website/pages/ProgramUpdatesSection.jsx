import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
  HeartHandshake,
  Laptop,
  Globe,
  Lightbulb,
} from "lucide-react";

export default function ProgramUpdates() {
  const programs = [
    {
      icon: Lightbulb,
      title: "Leadership Development",
      description:
        "RHDI has continued to conduct leadership seminars, mentorship sessions, and capacity-building initiatives designed to equip current and emerging leaders with practical skills, strategic thinking, and values-based leadership principles.",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description:
        "Our education and training programs continue to provide learning opportunities that enhance knowledge, develop practical skills, and promote personal and professional growth among participants from diverse communities.",
    },
    {
      icon: HeartHandshake,
      title: "Community Outreach",
      description:
        "Community engagement activities have expanded through seminars, workshops, and outreach initiatives that encourage collaboration, social responsibility, and sustainable community development.",
    },
    {
      icon: Laptop,
      title: "Digital Empowerment & Technology Access Initiative",
      description:
        "RHDI continues to promote digital inclusion by expanding access to technology resources, virtual learning opportunities, and communication platforms that strengthen education, training delivery, and community participation.",
    },
    {
      icon: Users,
      title: "Women, Youth & Family Development",
      description:
        "Programs focused on women, youth, and family development continue to empower participants through mentorship, leadership training, skills development, and initiatives that encourage active participation in community transformation.",
    },
    {
      icon: Globe,
      title: "Geographic Expansion",
      description:
        "RHDI currently serves and engages participants across multiple countries, strengthening international collaboration and extending opportunities for learning, leadership development, and community impact.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4" />
              Program Updates
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Strengthening Programs
              <span className="block text-[#C79A2B]">
                Expanding Our Impact
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) continues to expand its
              programs and strengthen its impact through leadership development,
              education and training, community outreach, and digital
              empowerment initiatives. Our commitment remains focused on
              equipping individuals, empowering communities, and creating
              sustainable opportunities for transformation across nations.
            </p>
          </motion.div>

          {/* Program Cards */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Current Program Focus
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
              {programs.map((program, index) => {
                const Icon = program.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#061C3F]">
                      {program.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {program.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Looking Ahead */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Looking Ahead
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                As we move forward, RHDI remains committed to strengthening
                partnerships, expanding program reach, increasing technology
                access, and developing innovative solutions that empower
                individuals and transform communities across nations.
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}