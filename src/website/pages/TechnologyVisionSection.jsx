import { motion } from "framer-motion";
import {
  Sparkles,
  Laptop,
  Globe,
  Wifi,
  Monitor,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";

export default function TechnologyInitiativeVision() {
  const visionPoints = [
    {
      icon: Monitor,
      title: "Technology Access",
      description:
        "Through this initiative, Rehoboth Discipleship International (RHDI) seeks to bridge the digital divide by expanding access to computers, internet connectivity, software resources, and digital education. We believe that technology is a powerful instrument for education, leadership development, communication, and community transformation.",
    },
    {
      icon: Globe,
      title: "Digitally Empowered Communities",
      description:
        "Our vision is to create digitally empowered communities where people can learn, collaborate, innovate, and participate fully in social, educational, and economic opportunities regardless of their geographical location or financial circumstances.",
    },
    {
      icon: GraduationCap,
      title: "Leadership & Sustainable Development",
      description:
        "By investing in technology access and digital empowerment, RHDI aims to equip the next generation of leaders, strengthen communities, and promote sustainable development across nations.",
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
              Technology Initiative
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Vision of the
              <span className="block text-[#C79A2B]">
                Technology Initiative
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              The Technology Access Initiative envisions a future where
              individuals, leaders, and communities have equitable access to
              technology, digital tools, and learning opportunities that empower
              them to thrive in an increasingly connected world.
            </p>
          </motion.div>

          {/* Vision Cards */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Our Vision
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-8">
              {visionPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-6 rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#061C3F]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-lg leading-9 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Vision Statement */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Vision Statement
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7] text-white">
                “To build transformed and digitally empowered communities by
                expanding equitable access to technology, fostering digital
                literacy, and creating opportunities for learning, leadership,
                and sustainable development across nations.”
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}