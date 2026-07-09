import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Landmark,
  Lock,
  FileCheck,
  Download,
  ArrowRight,
  FileText,
} from "lucide-react";

const governanceAreas = [
  {
    icon: ShieldCheck,
    title: "Integrity & Accountability",
    text: "Our governance framework promotes ethical leadership, transparency, accountability, and responsible stewardship in every aspect of our work.",
  },
  {
    icon: Scale,
    title: "Policies & Compliance",
    text: "Comprehensive policies guide organizational operations while ensuring compliance with applicable laws, regulations, and best practices.",
  },
  {
    icon: Landmark,
    title: "Governance Framework",
    text: "Strong governance structures support effective decision-making, organizational oversight, strategic leadership, and long-term sustainability.",
  },
  {
    icon: Lock,
    title: "Safeguarding & Data Protection",
    text: "We are committed to protecting the dignity, privacy, and well-being of our partners, beneficiaries, volunteers, donors, and stakeholders.",
  },
];

export default function PoliciesGovernanceSection() {
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
                src="/policies-governance.jpg"
                alt="Policies & Governance"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Policies & Governance
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Building trust through integrity, accountability,
                  transparency, and responsible leadership.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                POLICIES & GOVERNANCE
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) is committed
                  to maintaining the highest standards of integrity,
                  accountability, transparency, and ethical leadership
                  in every aspect of our mission and organizational
                  operations.
                </p>

                <p>
                  Our policies and governance framework provide the
                  foundation for responsible stewardship, effective
                  decision-making, financial accountability,
                  safeguarding, data protection, and sustainable
                  organizational excellence.
                </p>

                <p>
                  These documents outline the principles, standards,
                  and procedures that guide our relationships with
                  partners, donors, beneficiaries, volunteers, and
                  stakeholders while ensuring trust, compliance, and
                  long-term impact.

                </p>

              </div>

            </div>

          </div>

          {/* GOVERNANCE AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Governance Framework
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {governanceAreas.map((item) => {

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

                <FileCheck
                  size={80}
                  className="mx-auto text-[#C79A2B]"
                />

                <h3 className="mt-8 text-4xl font-black text-white">
                  Download Policies & Governance
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">

                  Download our Policies & Governance document to
                  learn more about the standards, governance
                  framework, operational procedures, safeguarding
                  practices, financial accountability, and ethical
                  principles that guide Rehoboth Discipleship
                  International.

                </p>

                <a
                  href="/policies-governance.pdf"
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