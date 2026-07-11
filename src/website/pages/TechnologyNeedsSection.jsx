import { motion } from "framer-motion";
import {
  Sparkles,
  Monitor,
  Laptop,
  Tablet,
  Printer,
  Presentation,
  Camera,
  Video,
  Layers,
  Shield,
  Cloud,
  Wifi,
  Server,
  BatteryCharging,
  Wrench,
  GraduationCap,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function CurrentNeeds() {
  const categories = [
    {
      title: "Technology Equipment",
      icon: Monitor,
      items: [
        "Desktop Computers",
        "Laptop Computers",
        "Tablets and iPads",
        "Computer Monitors",
        "Printers and Scanners",
        "Projectors and Presentation Equipment",
        "Webcams and Digital Cameras",
        "Audio and Video Conferencing Equipment",
      ],
    },
    {
      title: "Software and Digital Resources",
      icon: Layers,
      items: [
        "Operating Systems and Productivity Software",
        "Educational and Training Platforms",
        "Video Conferencing Licenses (Zoom and similar platforms)",
        "Learning Management Systems (LMS)",
        "Cybersecurity and Data Protection Solutions",
        "Cloud Storage and Cloud Computing Credits",
      ],
    },
    {
      title: "Connectivity and Infrastructure",
      icon: Wifi,
      items: [
        "Internet Connectivity Support",
        "Networking Equipment and Accessories",
        "Data Storage Solutions",
        "Power Backup Systems and Accessories",
        "Technology Maintenance and Technical Support Services",
      ],
    },
    {
      title: "Capacity Building Needs",
      icon: GraduationCap,
      items: [
        "Digital Skills Training Programs",
        "Technology Leadership Development",
        "Digital Literacy Training for Communities",
        "Technical Support and Mentorship Programs",
        "Training Resources and Educational Materials",
      ],
    },
  ];

  const iconMap = {
    "Desktop Computers": Monitor,
    "Laptop Computers": Laptop,
    "Tablets and iPads": Tablet,
    "Computer Monitors": Monitor,
    "Printers and Scanners": Printer,
    "Projectors and Presentation Equipment": Presentation,
    "Webcams and Digital Cameras": Camera,
    "Audio and Video Conferencing Equipment": Video,
    "Operating Systems and Productivity Software": Layers,
    "Educational and Training Platforms": BookOpen,
    "Video Conferencing Licenses (Zoom and similar platforms)": Video,
    "Learning Management Systems (LMS)": BookOpen,
    "Cybersecurity and Data Protection Solutions": Shield,
    "Cloud Storage and Cloud Computing Credits": Cloud,
    "Internet Connectivity Support": Wifi,
    "Networking Equipment and Accessories": Wifi,
    "Data Storage Solutions": Server,
    "Power Backup Systems and Accessories": BatteryCharging,
    "Technology Maintenance and Technical Support Services": Wrench,
    "Digital Skills Training Programs": GraduationCap,
    "Technology Leadership Development": Users,
    "Digital Literacy Training for Communities": BookOpen,
    "Technical Support and Mentorship Programs": Users,
    "Training Resources and Educational Materials": BookOpen,
  };

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
              Current Needs
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Technology
              <span className="block text-[#C79A2B]">
                Current Needs
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              To effectively implement the Technology Access Initiative and
              expand its impact across communities and nations, Rehoboth
              Discipleship International (RHDI) is seeking strategic support and
              resources in the following areas:
            </p>
          </motion.div>

          {/* Categories */}

          <section className="mt-28 space-y-12">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white">
                      <CategoryIcon className="h-8 w-8" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-[#061C3F]">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {category.items.map((item) => {
                      const Icon = iconMap[item] || Monitor;

                      return (
                        <div
                          key={item}
                          className="group flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition-all hover:-translate-y-1 hover:border-[#C79A2B]/30 hover:shadow-lg"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061C3F] text-white group-hover:bg-[#C79A2B]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <p className="text-lg text-gray-700">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </section>

          {/* Closing */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Our Goal
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                Through these resources, RHDI aims to strengthen digital
                learning opportunities, improve communication and collaboration,
                enhance program delivery, and expand access to technology for
                underserved communities.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Target Reach
                </h3>

                <p className="mt-4 text-4xl font-bold">
                  1,500+ Direct Beneficiaries across multiple countries.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}