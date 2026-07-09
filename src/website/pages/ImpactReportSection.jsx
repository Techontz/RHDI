import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  HeartHandshake,
  Users,
  Globe,
  Target,
  Download,
  ArrowRight,
} from "lucide-react";

const impactHighlights = [
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    text: "Explore the measurable results achieved through leadership development, education, humanitarian service, digital empowerment, and community engagement initiatives.",
  },
  {
    icon: HeartHandshake,
    title: "Stories of Transformation",
    text: "Read inspiring examples of how individuals, families, leaders, and communities have experienced positive and lasting change.",
  },
  {
    icon: Users,
    title: "Communities Reached",
    text: "See how our programs continue to strengthen communities and expand opportunities across multiple countries.",
  },
  {
    icon: Globe,
    title: "Strategic Impact",
    text: "Understand how partnerships, innovation, and sustainable development initiatives contribute to long-term community transformation.",
  },
];

export default function ImpactReportSection() {
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
                src="/impact-report.jpg"
                alt="Impact Report"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Impact Report
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Measuring transformation through evidence, outcomes,
                  and the lives changed across the communities we serve.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                IMPACT REPORT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Our Impact Report showcases the measurable outcomes,
                  stories of transformation, and lasting change
                  generated through the work of Rehoboth Discipleship
                  International (RHDI). It demonstrates how our
                  programs continue to equip leaders, empower
                  communities, and create sustainable impact across
                  the nations we serve.
                </p>

                <p>
                  The report reflects our commitment to
                  accountability, transparency, and evidence-based
                  impact by presenting program achievements,
                  beneficiary reach, strategic progress, and
                  measurable outcomes that illustrate the difference
                  made through collaborative action.
                </p>

                <p>
                  Whether you are a partner, donor, volunteer,
                  supporter, or stakeholder, the Impact Report
                  provides meaningful insight into the lives
                  transformed, communities strengthened, and future
                  opportunities for sustainable development.

                </p>

              </div>

            </div>

          </div>

          {/* HIGHLIGHTS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                What's Inside The Report
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {impactHighlights.map((item) => {

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

          {/* PDF DOWNLOAD */}

          <div className="bg-white px-8 py-24">

            <div className="max-w-4xl mx-auto">

              <div className="rounded-3xl border border-[#C79A2B] bg-[#061C3F] p-12 text-center shadow-2xl">

                <BarChart3
                  size={80}
                  className="mx-auto text-[#C79A2B]"
                />

                <h3 className="mt-8 text-4xl font-black text-white">
                  Download Impact Report
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">

                  Download the complete Impact Report to explore our
                  measurable outcomes, stories of transformation,
                  beneficiary reach, program achievements, and the
                  lasting impact created through our partnerships and
                  community initiatives.

                </p>

                <a
                  href="/impact-report.pdf"
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