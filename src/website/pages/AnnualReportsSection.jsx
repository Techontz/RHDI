import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  TrendingUp,
  GraduationCap,
  BarChart3,
  Landmark,
  Handshake,
  ArrowRight,
  ShieldCheck,
  Globe,
  Users,
  Presentation,
  Briefcase,
} from "lucide-react";

export default function AnnualReports() {
  const reportSections = [
    {
      icon: FileText,
      title: "Purpose of the Annual Report",
      description:
        "The Annual Report serves to communicate our mission, highlight program accomplishments, demonstrate measurable impact, and share our vision for future growth and sustainability.",
    },
    {
      icon: TrendingUp,
      title: "Organizational Growth",
      description:
        "Continued expansion of programs, increased participation across multiple countries, and strengthened engagement through both virtual and in-person initiatives.",
    },
    {
      icon: GraduationCap,
      title: "Program Achievements",
      description:
        "Implementation of leadership development, education and training, community outreach, digital empowerment, and family development initiatives that have positively impacted individuals and communities.",
    },
    {
      icon: Landmark,
      title: "Financial Stewardship",
      description:
        "RHDI is committed to responsible management of resources, maintaining financial integrity, promoting accountability, and ensuring that all contributions are used to maximize program impact and community benefit.",
    },
    {
      icon: Handshake,
      title: "Partnerships and Collaboration",
      description:
        "The organization continues to pursue strategic partnerships with individuals, organizations, foundations, corporations, and technology partners who share our vision of empowering communities and creating sustainable change.",
    },
  ];

  const impactStats = [
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
      title: "Program activities and engagement across 18 countries worldwide",
      icon: Globe,
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
              Annual Reports
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Transparency &
              <span className="block text-[#C79A2B]">
                Organizational Impact
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              The Annual Report of Rehoboth Discipleship International (RHDI)
              provides a comprehensive overview of our activities,
              achievements, program outcomes, and organizational growth
              throughout the year. It reflects our commitment to transparency,
              accountability, and responsible stewardship as we work to equip
              leaders, empower communities, and transform nations.
            </p>
          </motion.div>

          {/* Report Sections */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Annual Report Highlights
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
              {reportSections.map((item, index) => {
                const Icon = item.icon;

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
                      {item.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Impact Statistics */}

          <section className="mt-32">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Impact Statistics
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-8 text-5xl font-bold text-[#C79A2B]">
                      {stat.number}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-700">
                      {stat.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Looking Forward */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Looking Forward
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                RHDI remains committed to expanding its programs, increasing
                technology access, strengthening organizational capacity, and
                developing innovative initiatives that respond to the evolving
                needs of communities around the world.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="space-y-8">
                <div>
                  <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                    <ShieldCheck className="h-7 w-7 text-[#C79A2B]" />
                    Our Commitment
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-gray-200">
                    We remain dedicated to transparency, accountability,
                    excellence, and continuous improvement as we work together
                    with our partners and supporters to create lasting and
                    meaningful transformation.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                    Theme
                  </h4>

                  <p className="mt-4 text-3xl font-bold leading-tight">
                    Equipping Leaders. Empowering Communities. Transforming
                    Nations.
                  </p>

                  <div className="my-8 h-px bg-white/10" />

                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                    Tagline
                  </h4>

                  <p className="mt-4 text-xl leading-9 text-gray-200">
                    Transforming Lives Through Discipleship, Education,
                    Leadership Development, and Community Empowerment.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}