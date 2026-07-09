import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  ShieldCheck,
  Laptop,
  Home,
  HandHeart,
  Quote,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: Users,
    title: "Community Engagement",
    text: "Promoting participation, collaboration, and community-led initiatives that strengthen relationships and encourage collective responsibility.",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    text: "Expanding access to learning, mentorship, training, and personal development opportunities that empower individuals and families.",
  },
  {
    icon: ShieldCheck,
    title: "Leadership & Capacity Building",
    text: "Equipping community and emerging leaders with the knowledge, skills, and values needed to create sustainable positive change.",
  },
  {
    icon: Laptop,
    title: "Digital Inclusion",
    text: "Increasing access to technology, digital learning, and communication tools that strengthen education and community engagement.",
  },
  {
    icon: Home,
    title: "Family & Youth Development",
    text: "Supporting programs that strengthen families while equipping young people through mentorship, leadership development, and positive values.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Service",
    text: "Encouraging compassion-driven initiatives that restore hope, support vulnerable communities, and uphold human dignity.",
  },
];

export default function CommunityCareSection() {
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

            <div className="relative h-[550px] overflow-hidden">

              <img
                src="/community-care.jpg"
                alt="Community Care & Humanitarian Support"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/60 to-transparent"/>

              <div className="absolute bottom-12 left-10 max-w-lg text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6"/>

                <h3 className="text-4xl font-black uppercase">
                  Community Care &
                  Humanitarian Support
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Serving people. Strengthening communities.
                  Restoring hope.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8"/>

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                COMMUNITY CARE
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10"/>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) believes
                  sustainable transformation begins by caring for
                  people and strengthening communities.
                </p>

                <p>
                  Our commitment extends beyond education and
                  leadership development to promoting human dignity,
                  compassion, and practical support that improves the
                  well-being of individuals, families, and
                  communities.
                </p>

                <p>
                  Through community-focused initiatives and
                  humanitarian engagement, we create opportunities
                  that inspire hope, strengthen resilience, encourage
                  participation, and contribute to sustainable
                  development across nations.
                </p>

              </div>

            </div>

          </div>

          {/* FOCUS AREAS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Our Areas Of Focus
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {focusAreas.map((item)=>{

                const Icon=item.icon;

                return(

                  <motion.div
                    key={item.title}
                    whileHover={{y:-8}}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-8"
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

                    <ArrowRight className="mt-6 text-[#C79A2B]"/>

                  </motion.div>

                )

              })}

            </div>

          </div>

          {/* OUR COMMITMENT */}

          <div className="bg-[#F8F8F8] px-8 py-24">

            <div className="max-w-5xl mx-auto text-center">

              <HeartHandshake
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Our Commitment
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

              <p className="mt-10 text-lg leading-9 text-gray-700">

                We are committed to serving people with compassion,
                integrity, and excellence while working collaboratively
                with communities, partners, and volunteers to create
                lasting impact, restore hope, strengthen resilience,
                and expand opportunities that improve lives across
                nations.

              </p>

              <div className="mt-14">

                <blockquote className="text-4xl font-black leading-tight text-[#061C3F]">

                  Serving People.

                  <span className="block mt-4 text-[#C79A2B]">
                    Strengthening Communities.
                  </span>

                  <span className="block mt-4">
                    Restoring Hope.
                  </span>

                </blockquote>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}