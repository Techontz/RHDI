import React from "react";
import { motion } from "framer-motion";
import {
  Cross,
  HeartHandshake,
  Users,
  ShieldCheck,
  HandHeart,
  BookOpen,
  Globe,
  Lightbulb,
  Scale,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Cross,
    title: "Christian Foundation",
    text: "Founded upon Christian principles and values that affirm the dignity, worth, and God-given potential of every human being.",
  },
  {
    icon: Sparkles,
    title: "Faith In Action",
    text: "Faith is a transformative force that inspires integrity, purpose, compassion, hope, and meaningful service.",
  },
  {
    icon: Users,
    title: "Human Dignity",
    text: "Every individual possesses unique gifts, abilities, and the capacity to contribute positively to society.",
  },
  {
    icon: HandHeart,
    title: "Compassion & Love",
    text: "Serving people with dignity, respect, love, justice, and responsible stewardship in every community.",
  },
  {
    icon: ShieldCheck,
    title: "Servant Leadership",
    text: "Leadership is an act of service built upon humility, accountability, integrity, and excellence.",
  },
  {
    icon: Globe,
    title: "Unity & Collaboration",
    text: "Building trusted partnerships that strengthen communities and promote lasting transformation.",
  },
  {
    icon: BookOpen,
    title: "Discipleship",
    text: "Equipping individuals spiritually, intellectually, socially, and practically to become transformative leaders.",
  },
  {
    icon: Scale,
    title: "Integrity",
    text: "Conducting every program and partnership with honesty, ethical leadership, and accountability.",
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    text: "Creating opportunities that help people discover their purpose, maximize their potential, and serve others.",
  },
  {
    icon: HeartHandshake,
    title: "Transformation",
    text: "Promoting sustainable change that enables individuals, families, and communities to flourish.",
  },
];

export default function StatementOfFaithSection() {
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

            <div className="relative h-[450px] lg:h-auto overflow-hidden">

              <img
                src="/statement-of-faith.jpg"
                alt="Statement of Faith"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Statement of Faith
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Faith that inspires service, leadership, compassion,
                  and lasting transformation across communities and
                  nations.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                STATEMENT OF FAITH
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) is a
                  faith-based organization founded upon Christian
                  principles and values that affirm the dignity,
                  worth, and God-given potential of every human
                  being. We believe faith is not merely a personal
                  conviction but a transformative force that inspires
                  integrity, purpose, service, and hope.
                </p>

                <p>
                  We believe every person has been created with unique
                  gifts, abilities, and the capacity to contribute
                  meaningfully to society. Through discipleship,
                  education, leadership development, and community
                  engagement, we seek to equip individuals to discover
                  their potential and become positive agents of
                  transformation.
                </p>

                <p>
                  Our faith calls us to demonstrate compassion, love,
                  justice, responsible stewardship, and servant
                  leadership. We are committed to serving people with
                  dignity while promoting sustainable transformation
                  that strengthens individuals, families,
                  communities, and nations.
                </p>

                <p>
                  We value collaboration, unity, accountability,
                  integrity, and excellence, believing that meaningful
                  partnerships create greater opportunities for human
                  flourishing and lasting social impact.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Faith In Action.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Leadership Through Service.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transformation With Purpose.
                </h3>

              </div>

            </div>

          </div>

          {/* VALUES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Our Core Faith Values
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B] mb-6">

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

          {/* CTA */}

          <div className="bg-[#F8F8F8] px-8 py-16 text-center">

            <h3 className="text-4xl font-black uppercase text-[#061C3F]">
              Living Our Faith Through Service
            </h3>

            <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-gray-700">

              Our Statement of Faith reflects our conviction that
              faith should inspire action, service should demonstrate
              compassion, leadership should embody integrity, and
              communities should experience transformation that enables
              people to thrive spiritually, socially, educationally,
              and economically. Through every initiative, partnership,
              and act of service, RHDI remains committed to advancing
              God's love by empowering people, strengthening
              communities, and transforming nations.

            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}