import React from "react";
import { motion } from "framer-motion";
import {
  FileBarChart,
  TrendingUp,
  BarChart3,
  Users,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";

const reportHighlights = [
  {
    icon: TrendingUp,
    title: "Organizational Growth",
    text: "Discover how RHDI expanded its reach, strengthened partnerships, and increased community engagement throughout the year.",
  },
  {
    icon: BarChart3,
    title: "Programs & Impact",
    text: "Explore leadership development, education, humanitarian service, digital empowerment, and community transformation initiatives.",
  },
  {
    icon: Users,
    title: "Communities Served",
    text: "See the lives, families, leaders, and communities positively impacted through our programs across multiple nations.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    text: "Review our commitment to responsible stewardship, transparency, financial integrity, and measurable outcomes.",
  },
];

export default function AnnualReportDownloadSection() {
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

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/annual-report-cover.jpg"
                alt="Annual Report"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Annual Report
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  A transparent overview of our annual progress,
                  achievements, stewardship, and transformational
                  impact across communities and nations.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                ANNUAL REPORT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Our Annual Report provides a comprehensive summary
                  of the progress, achievements, and impact of
                  Rehoboth Discipleship International (RHDI)
                  throughout the year. It highlights how our
                  leadership development, education, humanitarian
                  service, digital empowerment, and community outreach
                  initiatives continue to strengthen lives and
                  communities.
                </p>

                <p>
                  The report reflects our commitment to transparency,
                  accountability, responsible stewardship, and
                  measurable impact while demonstrating how resources,
                  partnerships, and collaborative efforts contribute
                  to sustainable transformation across nations.
                </p>

                <p>
                  Whether you are a partner, donor, volunteer,
                  supporter, or stakeholder, our Annual Report offers
                  valuable insight into our accomplishments, key
                  milestones, strategic priorities, and vision for the
                  future.

                </p>

              </div>

            </div>

          </div>

          {/* HIGHLIGHTS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Report Highlights
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {reportHighlights.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B]">

                      <Icon
                        size={30}
                        className="text-white"
                      />

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

          {/* PDF */}

          <div className="bg-white px-8 py-24">

            <div className="max-w-4xl mx-auto">

              <div className="rounded-3xl border border-[#C79A2B] bg-[#061C3F] p-12 text-center shadow-2xl">

                <FileBarChart
                  size={80}
                  className="mx-auto text-[#C79A2B]"
                />

                <h3 className="mt-8 text-4xl font-black text-white">
                  Download Annual Report
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">

                  Download the complete Annual Report to explore our
                  key milestones, impact statistics, program updates,
                  financial stewardship, partnerships, and strategic
                  priorities for the future.

                </p>

                <a
                  href="/annual-report.pdf"
                  download
                  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#C79A2B] px-8 py-4 text-lg font-bold text-white transition hover:opacity-90"
                >

                  <Download size={22} />

                  Download PDF

                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}