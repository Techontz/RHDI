import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Monitor,
  Cloud,
  Wifi,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Globe,
  Quote,
  ArrowRight,
} from "lucide-react";

const partnershipAreas = [
  {
    icon: Monitor,
    title: "Technology Equipment",
    text: "Support communities through donations of computers, laptops, tablets, monitors, projectors, and other digital devices that expand access to education and technology.",
  },
  {
    icon: Cloud,
    title: "Cloud & Software",
    text: "Provide cloud infrastructure, software licenses, productivity tools, cybersecurity solutions, and digital platforms that strengthen learning and collaboration.",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    text: "Improve internet access, networking infrastructure, and communication technologies that enable communities to participate in the digital economy.",
  },
  {
    icon: GraduationCap,
    title: "Digital Learning",
    text: "Collaborate in delivering online education, virtual training, learning management systems, and digital literacy initiatives.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    text: "Develop innovative technology solutions that enhance leadership development, education, community engagement, and sustainable development.",
  },
  {
    icon: ShieldCheck,
    title: "Capacity Building",
    text: "Support technical training, mentorship, digital skills development, and technology adoption that empower individuals and organizations.",
  },
];

export default function TechnologyPartnershipsSection2() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1700px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl"
        >

          {/* HERO */}

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/technology-partnerships.jpg"
                alt="Technology Partnerships"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Technology Partnerships
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Collaborating with technology leaders to expand digital
                  inclusion, strengthen education, and transform
                  communities through innovation.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                TECHNOLOGY PARTNERSHIPS
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) believes
                  technology is a powerful catalyst for education,
                  leadership development, communication, and community
                  transformation. Through our Technology Partnerships
                  Program, we collaborate with technology companies,
                  innovators, foundations, and strategic partners to
                  expand digital opportunities across nations.
                </p>

                <p>
                  Together we work to increase access to computers,
                  software, internet connectivity, digital learning
                  platforms, virtual training tools, and communication
                  technologies that strengthen education, leadership,
                  and community engagement.
                </p>

                <p>
                  Through innovation, technical expertise, and shared
                  vision, our technology partners help bridge the
                  digital divide and create sustainable solutions that
                  empower underserved communities for generations to
                  come.
                </p>

              </div>

            </div>

          </div>

          {/* PARTNERSHIP AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Technology Partnership Opportunities
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {partnershipAreas.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8 backdrop-blur-sm"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B]">

                      <Icon size={30} className="text-white" />

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

          {/* WHY PARTNER */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Laptop
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Why Technology Partners Choose RHDI
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Technology partners help create meaningful and measurable
                impact by expanding access to digital tools, improving
                educational opportunities, strengthening leadership
                development, enhancing program delivery, and supporting
                innovation that transforms communities. Through
                responsible stewardship, transparency, and long-term
                collaboration, every technology investment contributes
                to sustainable development and digital inclusion.

              </p>

            </div>

          </div>

          {/* CLOSING */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <blockquote className="mt-10 text-2xl italic font-semibold leading-10 text-[#061C3F]">

                "Together, we can leverage technology to equip
                leaders, empower communities, and transform nations
                through innovation, digital inclusion, and sustainable
                collaboration."

              </blockquote>

              <div className="mt-14">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Rehoboth Discipleship International (RHDI)
                </h3>

                <h4 className="mt-4 text-2xl font-bold text-[#C79A2B]">
                  Equipping Leaders. Empowering Communities.
                  Transforming Nations.
                </h4>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}