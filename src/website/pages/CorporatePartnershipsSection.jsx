import { motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  Handshake,
  Briefcase,
  Laptop,
  HeartHandshake,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function CorporatePartnerships() {
  const partnershipAreas = [
    {
      icon: Briefcase,
      title: "Corporate Investment",
      description:
        "Financial contributions, sponsorship opportunities, and strategic investments that strengthen leadership development, education, and community transformation initiatives.",
    },
    {
      icon: Laptop,
      title: "Technology & Innovation",
      description:
        "Technology donations, digital empowerment initiatives, and innovation partnerships that expand equitable access to technology and digital learning opportunities.",
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description:
        "Employee volunteer initiatives, mentorship programs, capacity-building activities, and collaborative partnerships that create sustainable community impact.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4" />
              Corporate Partnerships
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Building Strategic
              <span className="block text-[#C79A2B]">
                Corporate Partnerships
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) believes that businesses
              and corporations play a vital role in creating sustainable social
              impact. Through our Corporate Partnerships program, we collaborate
              with companies that share our commitment to leadership
              development, education, community transformation, digital
              empowerment, and humanitarian service.
            </p>
          </motion.div>

          {/* Introduction */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-5xl text-center"
          >
            <Building2 className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Creating Sustainable Social Impact
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              We provide opportunities for corporations to invest in initiatives
              that equip leaders, empower communities, expand access to
              technology, and create meaningful change across nations. Our
              partnerships are built on shared values, innovation,
              accountability, and long-term impact.
            </p>
          </motion.section>

          {/* Partnership Areas */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Ways Corporations Can Partner
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {partnershipAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#061C3F]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Support */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-28 max-w-5xl text-center"
          >
            <Handshake className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Why Partner With RHDI?
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Corporate partners can support RHDI through financial
              contributions, technology donations, employee engagement
              initiatives, capacity-building programs, sponsorship
              opportunities, and strategic collaborations that strengthen
              communities and improve lives.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              By partnering with RHDI, corporations become part of a global
              movement that is transforming lives, developing future leaders,
              and creating sustainable solutions that generate measurable social
              impact.
            </p>
          </motion.section>

          {/* CTA */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Partner With Us
              </div>

              <p className="mt-8 text-2xl font-semibold leading-10 text-white">
                Together, we can build stronger communities, empower future
                generations, and create lasting change across nations.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <HeartHandshake className="mb-5 h-10 w-10 text-[#C79A2B]" />

                <h3 className="text-3xl font-bold">
                  Partner with us today.
                </h3>

                <div className="mt-8 space-y-3">
                  <p className="text-xl font-semibold">
                    Rehoboth Discipleship International (RHDI)
                  </p>

                  <p className="text-lg text-gray-200">
                    Equipping Leaders. Empowering Communities. Transforming
                    Nations.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}