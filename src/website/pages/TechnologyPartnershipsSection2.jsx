import { motion } from "framer-motion";
import {
  Sparkles,
  Laptop,
  Cpu,
  Wifi,
  ShieldCheck,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function TechnologyPartnerships() {
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
              Technology Partnerships
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Advancing Through
              <span className="block text-[#C79A2B]">
                Technology Partnerships
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) believes that technology
              is a powerful catalyst for education, leadership development,
              communication, and community transformation. Through our
              Technology Partnerships program, we collaborate with technology
              companies, foundations, innovators, and strategic partners to
              expand access to digital resources and create opportunities that
              empower individuals and communities across nations.
            </p>
          </motion.div>

          {/* Section 1 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <Laptop className="h-14 w-14 text-[#C79A2B]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Our technology initiatives focus on increasing access to
              computers, laptops, tablets, software solutions, internet
              connectivity, digital learning platforms, virtual training tools,
              and communication technologies that strengthen education,
              leadership development, and community engagement. We also work to
              build digital capacity by providing training and support that
              enable communities to effectively use technology for sustainable
              development.
            </p>
          </motion.section>

          {/* Section 2 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <Cpu className="h-14 w-14 text-[#C79A2B]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Technology partners play a critical role in helping RHDI bridge
              the digital divide, expand learning opportunities, improve program
              delivery, and create innovative solutions that reach underserved
              communities. Through equipment donations, software support,
              digital infrastructure investments, capacity-building initiatives,
              and strategic collaboration, our partners help create lasting and
              measurable impact.
            </p>
          </motion.section>

          {/* Section 3 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <ShieldCheck className="h-14 w-14 text-[#C79A2B]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              At RHDI, we are committed to responsible stewardship,
              transparency, accountability, and sustainable implementation of
              technology initiatives that empower people and strengthen
              communities for generations to come.
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
                Technology Partnerships
              </div>

              <p className="mt-8 text-2xl font-semibold leading-10">
                Together, we can leverage technology to equip leaders, empower
                communities, and transform nations through innovation and
                digital inclusion.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <HeartHandshake className="mb-5 h-10 w-10 text-[#C79A2B]" />

                <h3 className="text-3xl font-bold">
                  Rehoboth Discipleship International (RHDI)
                </h3>

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