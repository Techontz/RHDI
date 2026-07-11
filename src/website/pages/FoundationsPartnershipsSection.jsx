import { motion } from "framer-motion";
import {
  Sparkles,
  Landmark,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function FoundationsPartnerships() {
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
              Foundations Partnerships
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Building Strategic
              <span className="block text-[#C79A2B]">
                Foundations Partnerships
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) partners with
              charitable foundations, grant-making organizations, and
              philanthropic institutions that are committed to creating
              sustainable and transformational impact in communities around the
              world. Through our Foundations Partnerships program, we work
              together to invest in initiatives that equip leaders, expand
              educational opportunities, strengthen communities, promote
              digital inclusion, and advance humanitarian and faith-based
              development.
            </p>
          </motion.div>

          {/* Section 1 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <Landmark className="h-14 w-14 text-[#C79A2B]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Our foundation partners help support programs that address real
              community needs through leadership development, education and
              training, technology access, youth and family empowerment,
              community outreach, and capacity-building initiatives. By
              combining resources, expertise, and a shared vision, we create
              opportunities that empower individuals and communities to reach
              their full potential.
            </p>
          </motion.section>

          {/* Section 2 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <ShieldCheck className="h-14 w-14 text-[#C79A2B]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              RHDI is committed to building transparent, accountable, and
              long-term partnerships that produce measurable outcomes and
              lasting transformation. We believe that strategic collaboration
              with foundations can generate innovative solutions, strengthen
              local leadership, and create sustainable impact that extends
              across generations and nations.
            </p>
          </motion.section>

          {/* Section 3 */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-14"
          >
            <Handshake className="h-14 w-14 text-[#C79A2B]" />

            <p className="text-lg leading-9 text-gray-600">
              By partnering with RHDI, foundations become part of a global
              movement dedicated to empowering people, transforming communities,
              and building a future marked by hope, opportunity, and positive
              change.
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
                Foundations Partnership
              </div>

              <p className="mt-8 text-2xl font-semibold leading-10">
                Together, we can invest in purpose, transform lives, and create
                lasting impact for generations to come.
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