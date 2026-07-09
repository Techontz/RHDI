import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Monitor,
  Tablet,
  Wifi,
  Cloud,
  Globe,
 GraduationCap,
  Users,
  Network,
  Handshake,
  ArrowRight,
  Target,
} from "lucide-react";

const initiatives = [
  {
    icon: Laptop,
    title: "Technology Resources",
    text: "Expanding access to essential technology resources for learning, leadership, and community development.",
  },
  {
    icon: Monitor,
    title: "Digital Devices",
    text: "Providing computers, laptops, tablets, and other digital devices to underserved communities.",
  },
  {
    icon: GraduationCap,
    title: "Virtual Learning",
    text: "Supporting online education and digital learning opportunities through accessible technology.",
  },
  {
    icon: Network,
    title: "Communication Platforms",
    text: "Strengthening collaboration through reliable digital communication and online platforms.",
  },
  {
    icon: Wifi,
    title: "Internet Connectivity",
    text: "Improving internet access and connectivity to bridge digital inequalities.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Providing software licenses, cloud-based services, and digital productivity tools.",
  },
  {
    icon: Tablet,
    title: "Digital Skills",
    text: "Building technology confidence through practical digital skills and capacity-building initiatives.",
  },
  {
    icon: Users,
    title: "Community Access",
    text: "Expanding technology access for underserved communities and vulnerable populations.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "Collaborating with partners to expand technology access and sustainable innovation.",
  },
  {
    icon: Globe,
    title: "Innovation Networks",
    text: "Creating long-term partnerships that foster technology-enabled community transformation.",
  },
];

export default function TBFqTqF17fRvSXDh7U8k5mVFxjqkKrWUXm() {
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

            <div className="relative h-[450px] lg:h-auto overflow-hidden">
              <img
                src="/technology-access.jpg"
                alt="Technology Access Initiative"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/85 via-[#061C3F]/45 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">
                <div className="h-1 w-24 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Technology Access Initiative
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Expanding access to technology resources that empower learning,
                  leadership, innovation, and community transformation.
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">
              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                TECHNOLOGY ACCESS INITIATIVE
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we believe
                  access to technology is a fundamental catalyst for education,
                  leadership development, communication, innovation, and
                  community transformation.
                </p>

                <p>
                  Through strategic partnerships, technology donations,
                  digital infrastructure support, and capacity-building
                  initiatives, we expand access to digital devices,
                  learning platforms, communication technologies, and
                  technology resources that empower people to learn,
                  collaborate, and thrive.
                </p>

                <p>
                  Our approach emphasizes accessibility, inclusion,
                  innovation, accountability, and sustainability to ensure
                  technology becomes a powerful tool for education,
                  leadership development, and community advancement.
                </p>

                <p>
                  Through this initiative, RHDI remains committed to reducing
                  digital inequalities, expanding opportunities for learning,
                  empowering communities through technology, and fostering
                  sustainable transformation across nations.
                </p>

              </div>

              <div className="mt-12">
                <h3 className="text-3xl font-black text-[#061C3F]">
                  Bridging the Digital Divide.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Expanding Opportunities.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Transforming Nations.
                </h3>
              </div>
            </div>
          </div>

          {/* INITIATIVES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">
              <h3 className="text-4xl font-black uppercase text-white">
                Technology Access Initiatives
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {initiatives.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm"
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

          {/* TARGET IMPACT */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-6xl mx-auto text-center">

              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#061C3F]">
                  <Target className="text-[#C79A2B]" size={42} />
                </div>
              </div>

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Target Impact
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <div className="mt-10 text-7xl font-black text-[#061C3F]">
                1,500+
              </div>

              <div className="mt-3 text-2xl font-bold uppercase text-[#C79A2B]">
                Individuals Empowered
              </div>

              <p className="mx-auto mt-8 max-w-5xl text-lg leading-9 text-gray-700">
                Our goal is to directly benefit more than 1,500 individuals
                through expanded access to technology resources, digital
                learning opportunities, improved connectivity, and
                technology-enabled community development initiatives that
                create lasting social impact.
              </p>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}