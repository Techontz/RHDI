import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  Briefcase,
  Laptop,
  HeartHandshake,
  Users,
  Globe,
  TrendingUp,
  Quote,
  ArrowRight,
} from "lucide-react";

const opportunities = [
  {
    icon: Briefcase,
    title: "Corporate Giving",
    text: "Support leadership development, education, humanitarian service, and community transformation through financial contributions and sponsorships.",
  },
  {
    icon: Laptop,
    title: "Technology Donations",
    text: "Donate computers, laptops, software, digital devices, and technology resources that expand access to learning and innovation.",
  },
  {
    icon: Users,
    title: "Employee Engagement",
    text: "Empower employees to serve through volunteering, mentorship, skills-based service, and community outreach initiatives.",
  },
  {
    icon: Handshake,
    title: "Strategic Collaboration",
    text: "Develop long-term partnerships that combine expertise, innovation, and shared values to maximize community impact.",
  },
  {
    icon: HeartHandshake,
    title: "Community Investment",
    text: "Invest in programs that strengthen families, develop leaders, empower youth, and improve the well-being of communities.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    text: "Join an international network of organizations working together to create sustainable solutions across multiple countries.",
  },
];

export default function CorporatePartnershipsSection() {
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
                src="/corporate-partnerships.jpg"
                alt="Corporate Partnerships"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Corporate Partnerships
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Creating sustainable social impact through strategic
                  collaboration, innovation, and shared purpose.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                CORPORATE PARTNERSHIPS
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) believes
                  businesses and corporations play a vital role in
                  creating sustainable social impact. Through our
                  Corporate Partnerships Program, we collaborate with
                  organizations that share our commitment to leadership
                  development, education, digital empowerment,
                  humanitarian service, and community transformation.
                </p>

                <p>
                  We provide opportunities for companies to invest in
                  initiatives that equip leaders, strengthen
                  communities, expand access to technology, and create
                  measurable, long-term impact across nations.
                </p>

                <p>
                  Every partnership is built on shared values,
                  innovation, accountability, transparency, and a
                  commitment to creating lasting positive change for
                  individuals, families, and communities.
                </p>

              </div>

            </div>

          </div>

          {/* OPPORTUNITIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Partnership Opportunities
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {opportunities.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
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

          {/* WHY PARTNER */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <TrendingUp
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Why Corporate Partners Choose RHDI
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Corporate partners become part of a global movement
                that develops future leaders, expands educational
                opportunities, strengthens communities, promotes
                digital inclusion, and creates measurable social
                impact. Together, we build sustainable solutions that
                benefit both present and future generations while
                advancing responsible corporate citizenship.

              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <blockquote className="mt-10 text-2xl italic font-semibold leading-10 text-[#061C3F]">

                "Together, we can build stronger communities,
                empower future generations, and create lasting
                change across nations. Partner with us today."

              </blockquote>

              <div className="mt-14">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Rehoboth Discipleship International
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