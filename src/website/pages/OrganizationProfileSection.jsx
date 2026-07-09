import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  Download,
  Users,
  Globe,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const profileHighlights = [
  {
    icon: Building2,
    title: "Who We Are",
    text: "Learn about the history, identity, mission, vision, and values that guide Rehoboth Discipleship International.",
  },
  {
    icon: Users,
    title: "Programs",
    text: "Explore our leadership development, education, humanitarian, digital empowerment, and community initiatives.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    text: "Discover how RHDI is strengthening communities and expanding opportunities across multiple nations.",
  },
  {
    icon: BookOpen,
    title: "Partnership Opportunities",
    text: "Find out how individuals, churches, organizations, corporations, and foundations can partner with RHDI.",
  },
];

export default function OrganizationProfileSection() {
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
                src="/organization-profile.jpg"
                alt="Organization Profile"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Organization Profile
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Discover who we are, what we do, and how we are
                  equipping leaders, empowering communities, and
                  transforming nations.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                ORGANIZATION PROFILE
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) is a
                  faith-based, community-focused international
                  nonprofit organization dedicated to equipping
                  leaders, empowering communities, and transforming
                  nations through discipleship, education, leadership
                  development, humanitarian service, and digital
                  empowerment.
                </p>

                <p>
                  Our Organization Profile provides a comprehensive
                  overview of who we are, our mission and vision,
                  governance, strategic programs, organizational
                  values, and our commitment to creating sustainable
                  impact across communities worldwide.
                </p>

                <p>
                  Whether you are a potential partner, donor,
                  volunteer, supporter, or community member, the
                  profile offers valuable insight into our work,
                  priorities, and long-term vision for transforming
                  lives through faith, education, leadership, and
                  service.
                </p>

              </div>

            </div>

          </div>

          {/* HIGHLIGHTS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                What's Inside?
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {profileHighlights.map((item) => {

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

                <FileText
                  size={80}
                  className="mx-auto text-[#C79A2B]"
                />

                <h3 className="mt-8 text-4xl font-black text-white">
                  Download Organization Profile
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">

                  Download the complete Organization Profile to learn
                  more about our mission, programs, leadership,
                  governance, strategic priorities, and partnership
                  opportunities.

                </p>

                <a
                  href="/organization-profile.pdf"
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