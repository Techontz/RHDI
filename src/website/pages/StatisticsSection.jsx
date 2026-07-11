import { motion } from "framer-motion";
import {
  Presentation,
  Users,
  Globe,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      number: "392+",
      title: "Virtual Seminars and Training Sessions Conducted",
      icon: Presentation,
    },
    {
      number: "283+",
      title: "Physical Seminars, Workshops, and Community Events Organized",
      icon: Briefcase,
    },
    {
      number: "4,840+",
      title: "Individuals Trained and Equipped",
      icon: Users,
    },
    {
      number: "20",
      title: "Country Representatives Serving Across Different Nations",
      icon: Globe,
    },
    {
      number: "18",
      title: "Countries Reached Through Programs and Partnerships",
      icon: Globe,
    },
    {
      number: "Thousands",
      title: "Community Members Benefiting from Educational and Empowerment Initiatives",
      icon: HeartHandshake,
    },
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Leadership Development",
      description:
        "Equipping emerging and established leaders with practical skills, values-based leadership principles, and strategic capacity-building opportunities.",
    },
    {
      icon: Presentation,
      title: "Education & Training",
      description:
        "Providing learning opportunities that strengthen knowledge, skills development, and lifelong learning across diverse communities.",
    },
    {
      icon: HeartHandshake,
      title: "Community Outreach",
      description:
        "Supporting communities through humanitarian initiatives, engagement programs, and activities that promote social well-being and sustainable development.",
    },
    {
      icon: Laptop,
      title: "Digital Empowerment & Technology Access",
      description:
        "Expanding access to digital tools, online learning, communication technologies, and virtual collaboration opportunities for underserved communities.",
    },
    {
      icon: Users,
      title: "Women, Youth, and Family Development",
      description:
        "Strengthening families and empowering women and young people through mentorship, training, leadership opportunities, and community support initiatives.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* HERO */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4" />
              Statistics
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Measuring
              <span className="block text-[#C79A2B]">
                Lasting Transformation
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              At Rehoboth Discipleship International (RHDI), we believe that
              measurable impact demonstrates meaningful transformation. Through
              our leadership development, education, discipleship, and community
              empowerment initiatives, we continue to reach individuals and
              communities across multiple nations.
            </p>
          </motion.div>

          {/* STATS */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Our Impact at a Glance
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-2xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-8 text-5xl font-bold text-[#C79A2B]">
                      {item.number}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-700">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* IMPACT AREAS */}

          <section className="mt-32">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Areas of Impact
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#061C3F]">
                        {area.title}
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Closing Section */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Impact
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                At RHDI, every statistic represents transformed lives,
                strengthened communities, and renewed opportunities for
                individuals to reach their full potential and positively impact
                society.
              </p>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}