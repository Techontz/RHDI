import { motion } from "framer-motion";
import {
  Sparkles,
  Handshake,
  Building2,
  Laptop,
  Cloud,
  Wifi,
  Monitor,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PartnershipOpportunities() {
  const opportunities = [
    {
      icon: Laptop,
      title: "Technology Equipment Donations",
      description:
        "(Computers, Laptops, Tablets, Monitors, and Digital Devices)",
    },
    {
      icon: Monitor,
      title: "Software Donations and Licensing Support",
      description: "",
    },
    {
      icon: Cloud,
      title: "Cloud Computing and Digital Infrastructure Support",
      description: "",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity and Networking Solutions",
      description: "",
    },
    {
      icon: BookOpen,
      title: "Educational Technology and Digital Learning Platforms",
      description: "",
    },
    {
      icon: GraduationCap,
      title: "Capacity Building and Digital Skills Training Programs",
      description: "",
    },
    {
      icon: DollarSign,
      title: "Financial Contributions and Grant Funding",
      description: "",
    },
    {
      icon: HeartHandshake,
      title: "Corporate Social Responsibility (CSR) Partnerships",
      description: "",
    },
    {
      icon: Users,
      title: "Employee Volunteer and Mentorship Programs",
      description: "",
    },
    {
      icon: Building2,
      title: "Strategic and Long-Term Institutional Partnerships",
      description: "",
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
              Technology Initiative
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Partnership
              <span className="block text-[#C79A2B]">
                Opportunities
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              The Technology Access Initiative invites corporations,
              foundations, technology companies, educational institutions,
              faith-based organizations, and individual partners to collaborate
              in expanding equitable access to technology and digital
              opportunities for underserved communities around the world.
            </p>
          </motion.div>

          {/* Introduction */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-5xl text-center"
          >
            <Handshake className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Working Together for Greater Impact
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) believes that strategic
              partnerships are essential for bridging the digital divide and
              empowering individuals, leaders, and communities through
              technology, education, and innovation. Through collaborative
              engagement, partners have the opportunity to make a meaningful and
              sustainable impact across multiple countries and communities.
            </p>
          </motion.section>

          {/* Partnership Opportunities */}

          <section className="mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">
                Partnership Opportunities
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {opportunities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-all group-hover:bg-[#C79A2B]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#061C3F]">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="mt-3 text-lg leading-8 text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Impact */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-28 max-w-5xl text-center"
          >
            <CheckCircle2 className="mx-auto h-14 w-14 text-[#C79A2B]" />

            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">
              Partnership Impact
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Through these partnerships, RHDI seeks to strengthen digital
              learning opportunities, improve communication and collaboration,
              expand access to technology resources, and empower more than
              1,500 direct beneficiaries across multiple countries.
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
                Partnership Opportunities Statement
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7] text-white">
                “We invite partners from around the world to join us in
                advancing digital inclusion and community transformation by
                investing in technology access, digital education, and
                sustainable solutions that empower individuals and communities
                to learn, connect, innovate, and thrive.”
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}