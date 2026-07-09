import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Boxes,
  GraduationCap,
  Target,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Technology Equipment",
    items: [
      "Desktop Computers",
      "Laptop Computers",
      "Tablets & iPads",
      "Computer Monitors",
      "Printers & Scanners",
      "Projectors & Presentation Equipment",
      "Webcams & Digital Cameras",
      "Audio & Video Conferencing Equipment",
    ],
  },
  {
    icon: Laptop,
    title: "Software & Digital Resources",
    items: [
      "Operating Systems",
      "Productivity Software",
      "Educational Platforms",
      "Video Conferencing Licenses",
      "Learning Management Systems (LMS)",
      "Cybersecurity Solutions",
      "Cloud Storage",
      "Cloud Computing Credits",
    ],
  },
  {
    icon: Boxes,
    title: "Connectivity & Infrastructure",
    items: [
      "Internet Connectivity",
      "Networking Equipment",
      "Data Storage Solutions",
      "Power Backup Systems",
      "Technical Support",
      "Technology Maintenance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    items: [
      "Digital Skills Training",
      "Technology Leadership",
      "Digital Literacy Programs",
      "Technical Mentorship",
      "Educational Resources",
      "Training Materials",
    ],
  },
];

export default function TechnologyNeedsSection() {
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
                src="/technology-needs.jpg"
                alt="Current Technology Needs"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Current Technology Needs
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Partner with us to expand digital access, strengthen
                  learning opportunities, and empower communities
                  through technology.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                CURRENT NEEDS
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  To effectively implement the Technology Access
                  Initiative and expand its impact across communities
                  and nations, Rehoboth Discipleship International
                  (RHDI) is seeking strategic support and resources in
                  key technology and capacity-building areas.
                </p>

                <p>
                  These resources will strengthen digital learning,
                  improve communication and collaboration, enhance
                  program delivery, and expand equitable access to
                  technology for underserved communities.
                </p>

                <p>
                  Every contribution helps create opportunities for
                  education, leadership development, innovation, and
                  sustainable transformation through technology.
                </p>

              </div>

            </div>

          </div>

          {/* RESOURCE CATEGORIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Priority Resource Needs
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

              {categories.map((category, index) => {

                const Icon = category.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8"
                  >

                    <div className="flex items-center gap-5 mb-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B]">

                        <Icon
                          size={30}
                          className="text-white"
                        />

                      </div>

                      <h3 className="text-2xl font-bold text-white uppercase">
                        {category.title}
                      </h3>

                    </div>

                    <div className="space-y-4">

                      {category.items.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <ArrowRight
                            size={18}
                            className="text-[#C79A2B] mt-1"
                          />

                          <span className="text-gray-300">
                            {item}
                          </span>

                        </div>

                      ))}

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* TARGET REACH */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <div className="flex justify-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#061C3F]">

                  <Target
                    size={42}
                    className="text-[#C79A2B]"
                  />

                </div>

              </div>

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Target Reach
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <div className="mt-10 text-7xl font-black text-[#061C3F]">
                1,500+
              </div>

              <div className="mt-3 text-2xl font-bold uppercase text-[#C79A2B]">
                Direct Beneficiaries
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-700 max-w-4xl mx-auto">

                Through these strategic technology investments, RHDI
                aims to directly benefit more than 1,500 individuals
                across multiple countries by expanding access to
                technology, strengthening digital learning, improving
                communication, and creating sustainable opportunities
                for education, leadership development, and community
                transformation.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}