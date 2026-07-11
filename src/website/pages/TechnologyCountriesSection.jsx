import { motion } from "framer-motion";
import {
  Sparkles,
  Globe,
  MapPinned,
  Users,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CountriesServed() {
  const countries = [
    "United States",
    "Tanzania",
    "Kenya",
    "Uganda",
    "Cameroon",
    "Liberia",
    "Sierra Leone",
    "South Sudan",
    "Democratic Republic of Congo",
    "Rwanda",
    "Burundi",
    "Nigeria",
    "South Africa",
    "Germany",
    "India",
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Australia",
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
              Technology Initiative
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Countries
              <span className="block text-[#C79A2B]">
                Served
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              The Technology Access Initiative currently serves and engages
              communities across multiple countries through leadership
              development programs, digital learning initiatives, virtual
              training platforms, and technology empowerment activities. Through
              strategic collaboration and cross-border engagement, Rehoboth
              Discipleship International (RHDI) is committed to expanding
              equitable access to technology and creating opportunities for
              learning, communication, and community transformation.
            </p>
          </motion.div>

          {/* Countries */}

          <section className="mt-28">
            <div className="text-center">
              <MapPinned className="mx-auto h-14 w-14 text-[#C79A2B]" />

              <h2 className="mt-6 text-4xl font-bold text-[#061C3F]">
                Countries Currently Served
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
                The initiative presently reaches individuals and communities in
                the following countries:
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <p className="text-lg font-medium text-gray-700">
                    {country}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-32 max-w-5xl text-center"
          >
            <Laptop className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Digital Impact Across Nations
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Across these countries, the Technology Access Initiative supports
              digital education, leadership training, virtual collaboration, and
              community empowerment by promoting access to technology resources
              and digital learning opportunities. The initiative continues to
              expand its reach by building partnerships and strengthening
              networks that enable individuals and communities to participate
              effectively in an increasingly connected world.
            </p>
          </motion.section>

          {/* Statement */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Countries Served Statement
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7] text-white">
                “To expand access to technology and digital opportunities across
                nations by equipping individuals and communities with the tools,
                knowledge, and connectivity needed to learn, lead, collaborate,
                and thrive in the digital age.”
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}