import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  HeartHandshake,
  GraduationCap,
  Laptop,
  Users,
  HandHeart,
  BarChart3,
  Globe,
  Quote,
  ArrowRight,
} from "lucide-react";

const partnershipAreas = [
  {
    icon: GraduationCap,
    title: "Education & Leadership",
    text: "Support leadership development, education, mentorship, and lifelong learning initiatives that empower individuals and communities.",
  },
  {
    icon: Laptop,
    title: "Digital Inclusion",
    text: "Expand equitable access to technology, digital learning opportunities, and innovation that bridge the digital divide.",
  },
  {
    icon: HandHeart,
    title: "Community Transformation",
    text: "Invest in humanitarian initiatives, family strengthening, youth empowerment, and sustainable community development.",
  },
  {
    icon: Users,
    title: "Capacity Building",
    text: "Strengthen organizations, leaders, volunteers, and communities through training, mentorship, and practical skills development.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    text: "Support initiatives with clear outcomes, transparent reporting, accountability, and long-term community transformation.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    text: "Join an international network of foundations and partners committed to creating sustainable impact across multiple nations.",
  },
];

export default function FoundationsPartnershipsSection() {
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
                src="/foundations-partnerships.jpg"
                alt="Foundations Partnerships"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Foundations Partnerships
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Advancing sustainable transformation through strategic
                  collaboration with charitable foundations and
                  philanthropic partners.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                FOUNDATIONS PARTNERSHIPS
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) partners
                  with charitable foundations, grant-making
                  organizations, and philanthropic institutions that
                  share our commitment to sustainable community
                  transformation and human development.
                </p>

                <p>
                  Together, we invest in leadership development,
                  education, digital inclusion, humanitarian service,
                  youth and family empowerment, and capacity-building
                  initiatives that create measurable, long-term impact.
                </p>

                <p>
                  Through transparent stewardship, shared vision, and
                  collaborative innovation, we work with foundation
                  partners to strengthen communities, develop future
                  leaders, and expand opportunities for generations to
                  come.
                </p>

              </div>

            </div>

          </div>

          {/* PARTNERSHIP AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Areas of Partnership
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

          {/* WHY FOUNDATIONS PARTNER */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Landmark
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Why Foundations Partner With RHDI
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Our foundation partners support programs that respond
                to real community needs while promoting leadership,
                education, technology access, and sustainable
                development. Through transparent governance,
                accountability, measurable outcomes, and strategic
                collaboration, every investment contributes to lasting
                transformation that extends across communities,
                generations, and nations.

              </p>

            </div>

          </div>

          {/* PARTNERSHIP STATEMENT */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <blockquote className="mt-10 text-2xl italic font-semibold leading-10 text-[#061C3F]">

                "Together, we can invest in purpose, transform lives,
                strengthen communities, and create lasting impact for
                generations to come."

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