import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Users,
  GraduationCap,
  Laptop,
  HandHeart,
  Globe,
  ArrowRight,
  Quote,
} from "lucide-react";

const partnershipBenefits = [
  {
    icon: Users,
    title: "Develop Leaders",
    text: "Support leadership development programs that equip current and emerging leaders with character, vision, and practical skills.",
  },
  {
    icon: GraduationCap,
    title: "Expand Education",
    text: "Help provide education, training, mentorship, and lifelong learning opportunities that empower individuals to thrive.",
  },
  {
    icon: Laptop,
    title: "Increase Technology Access",
    text: "Contribute to digital inclusion by expanding access to technology, online learning, and communication resources.",
  },
  {
    icon: HandHeart,
    title: "Strengthen Communities",
    text: "Support humanitarian service, community outreach, and sustainable development initiatives that improve lives.",
  },
  {
    icon: Globe,
    title: "Create Global Impact",
    text: "Join a growing international network committed to empowering communities and transforming nations.",
  },
  {
    icon: Handshake,
    title: "Build Lasting Partnerships",
    text: "Collaborate with RHDI through meaningful partnerships that produce measurable and sustainable impact.",
  },
];

export default function BecomePartnerSection() {
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
                src="/become-a-partner.jpg"
                alt="Become A Partner"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Become A Partner
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Together we can equip leaders, empower communities,
                  and transform nations through faith, collaboration,
                  and purposeful action.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                BECOME A PARTNER
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe meaningful transformation happens through
                  strategic partnerships. We invite individuals,
                  churches, businesses, foundations, educational
                  institutions, and organizations to join us in
                  equipping leaders, empowering communities, and
                  transforming nations.
                </p>

                <p>
                  By becoming a partner, you become part of a global
                  movement committed to expanding opportunities
                  through discipleship, education, leadership
                  development, digital empowerment, humanitarian
                  service, and community transformation.
                </p>

                <p>
                  Together we can strengthen communities, develop
                  future leaders, promote innovation, and create
                  sustainable opportunities that empower people to
                  discover and fulfill their God-given potential.
                </p>

              </div>

            </div>

          </div>

          {/* WHY PARTNER */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Why Partner With RHDI?
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {partnershipBenefits.map((item) => {
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

          {/* CALL TO ACTION */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Handshake
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Join Our Global Mission
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Your partnership helps provide leadership training,
                educational resources, technology access, mentorship,
                humanitarian support, and community development
                initiatives that inspire hope and create lasting
                transformation. Together, we can build stronger
                communities and expand opportunities for generations
                to come.

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

                "Partner with us today and become part of a shared
                vision to transform lives, strengthen communities,
                and impact generations through faith, education,
                leadership, and compassionate service."

              </blockquote>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  RHDI.world
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