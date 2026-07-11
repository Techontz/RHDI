import { motion } from "framer-motion";
import {
  Sparkles,
  Handshake,
  Globe,
  Users,
  HeartHandshake,
  GraduationCap,
  Laptop,
  ArrowRight,
} from "lucide-react";

export default function BecomeAPartner() {
  const partnershipAreas = [
    {
      icon: GraduationCap,
      title: "Leadership Development",
      description:
        "Supporting leadership training, mentorship, and capacity-building initiatives that equip current and emerging leaders.",
    },
    {
      icon: Laptop,
      title: "Digital Empowerment",
      description:
        "Expanding access to technology, digital learning opportunities, and innovation that strengthen communities.",
    },
    {
      icon: HeartHandshake,
      title: "Community Transformation",
      description:
        "Helping provide educational resources, humanitarian support, and outreach initiatives that inspire sustainable transformation.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background Effects */}
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
              Become A Partner
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Join Our
              <span className="block text-[#C79A2B]">
                Global Mission
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              At Rehoboth Discipleship International (RHDI), we believe that
              meaningful transformation happens through strategic partnerships.
              We invite individuals, churches, businesses, foundations, and
              organizations to join us in equipping leaders, empowering
              communities, and transforming nations through discipleship,
              education, leadership development, digital empowerment, and
              humanitarian initiatives.
            </p>
          </motion.div>

          {/* Partnership Vision */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-5xl text-center"
          >
            <Handshake className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Why Partner With RHDI?
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              By becoming a partner, you become part of a global movement
              committed to creating lasting impact and expanding opportunities
              for individuals and communities across different nations. Your
              partnership helps provide training, technology access,
              educational resources, leadership development programs, and
              community outreach initiatives that inspire hope and sustainable
              transformation.
            </p>
          </motion.section>

          {/* Focus Areas */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Partnership Impact
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

          {/* Call to Action */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Become A Partner
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                Together, we can build stronger communities, develop future
                leaders, promote innovation, and create opportunities that
                empower people to reach their God-given potential.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <p className="text-2xl font-semibold leading-10 text-white">
                Partner with us today and become part of a shared vision to
                transform lives and impact generations.
              </p>

              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
                <Globe className="mb-5 h-10 w-10 text-[#C79A2B]" />

                <h3 className="text-3xl font-bold">RHDI.world</h3>

                <p className="mt-5 text-xl leading-9 text-gray-200">
                  Equipping Leaders. Empowering Communities. Transforming
                  Nations.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}