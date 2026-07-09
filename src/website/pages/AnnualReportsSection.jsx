import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  TrendingUp,
  Award,
  BarChart3,
  Landmark,
  Handshake,
  Compass,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Organizational Growth",
    text: "Continued expansion of programs, increased participation across multiple countries, and stronger engagement through both virtual and in-person initiatives.",
  },
  {
    icon: Award,
    title: "Program Achievements",
    text: "Successful implementation of leadership development, education and training, community outreach, digital empowerment, and family development initiatives.",
  },
  {
    icon: BarChart3,
    title: "Impact Statistics",
    text: "392+ virtual seminars, 283+ physical events, 4,840+ individuals trained, 20 country representatives, and engagement across 18 countries.",
  },
  {
    icon: Landmark,
    title: "Financial Stewardship",
    text: "Responsible resource management, financial integrity, transparency, and accountability that maximize program impact and community benefit.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Expanding collaboration with individuals, organizations, foundations, corporations, and technology partners committed to sustainable transformation.",
  },
  {
    icon: Compass,
    title: "Looking Forward",
    text: "Strengthening organizational capacity, expanding program reach, increasing technology access, and developing innovative solutions for future impact.",
  },
];

const impactStats = [
  {
    value: "392+",
    label: "Virtual Seminars",
  },
  {
    value: "283+",
    label: "Physical Events",
  },
  {
    value: "4,840+",
    label: "People Trained",
  },
  {
    value: "20",
    label: "Country Representatives",
  },
  {
    value: "18",
    label: "Countries Reached",
  },
];

export default function AnnualReportsSection() {
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

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/annual-report.jpg"
                alt="Annual Report"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Annual Reports
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Demonstrating transparency, accountability,
                  measurable impact, and responsible stewardship as we
                  empower communities across nations.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                ANNUAL REPORTS
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  The Annual Report of Rehoboth Discipleship
                  International (RHDI) provides a comprehensive
                  overview of our activities, achievements, program
                  outcomes, and organizational growth throughout the
                  year. It reflects our commitment to transparency,
                  accountability, and responsible stewardship.
                </p>

                <p>
                  Each report communicates our mission, celebrates
                  program accomplishments, demonstrates measurable
                  impact, and shares our vision for future growth and
                  sustainability as we continue equipping leaders,
                  empowering communities, and transforming nations.
                </p>

                <p>
                  Through responsible governance, strategic
                  partnerships, and faithful stewardship of resources,
                  we remain committed to maximizing every opportunity
                  to create lasting transformation for individuals,
                  families, and communities around the world.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Equipping Leaders.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Empowering Communities.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Nations.
                </h3>

              </div>

            </div>

          </div>

          {/* REPORT HIGHLIGHTS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Annual Report Highlights
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {highlights.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8 backdrop-blur-sm"
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

          {/* IMPACT */}

          <div className="bg-white px-8 py-20">

            <div className="text-center mb-16">

              <h3 className="text-4xl font-black uppercase text-[#061C3F]">
                Annual Impact Snapshot
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-5">

              {impactStats.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 p-8 text-center shadow-lg"
                >

                  <div className="text-5xl font-black text-[#061C3F]">
                    {item.value}
                  </div>

                  <div className="mt-4 font-bold uppercase text-[#C79A2B]">
                    {item.label}
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* COMMITMENT */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <ShieldCheck
                className="mx-auto text-[#C79A2B]"
                size={70}
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Our Commitment
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                We remain dedicated to transparency, accountability,
                excellence, and continuous improvement as we work
                together with our partners, supporters, volunteers,
                and communities to create lasting transformation.
                Guided by our mission and values, we will continue
                expanding opportunities for leadership development,
                education, digital empowerment, humanitarian service,
                and community engagement across nations.

              </p>

              <div className="mt-12">

                <h4 className="text-3xl font-black text-[#061C3F]">
                  Transforming Lives Through Discipleship,
                </h4>

                <h4 className="text-3xl font-black text-[#C79A2B] mt-2">
                  Education, Leadership Development,
                </h4>

                <h4 className="text-3xl font-black text-[#061C3F] mt-2">
                  and Community Empowerment.
                </h4>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}