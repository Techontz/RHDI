import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Globe,
  Wifi,
  GraduationCap,
  Users,
  Lightbulb,
  Quote,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Laptop,
    title: "Technology Access",
    text: "Expanding equitable access to computers, digital devices, software, and technology resources that support education and community development.",
  },
  {
    icon: Wifi,
    title: "Digital Connectivity",
    text: "Improving internet connectivity and digital infrastructure that enables learning, collaboration, and communication.",
  },
  {
    icon: GraduationCap,
    title: "Digital Learning",
    text: "Creating opportunities for lifelong learning through digital literacy, online education, and technology-enabled training.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    text: "Strengthening individuals, leaders, and communities by equipping them with digital skills and practical technology solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Encouraging creativity, innovation, and responsible technology use that contributes to sustainable community transformation.",
  },
  {
    icon: Globe,
    title: "Global Opportunity",
    text: "Building digitally connected communities where everyone can participate in educational, social, and economic opportunities regardless of location.",
  },
];

export default function TechnologyVisionSection() {
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

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/technology-vision.jpg"
                alt="Vision of the Technology Initiative"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Vision of the Technology Initiative
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Building digitally empowered communities where
                  technology creates opportunities for learning,
                  leadership, innovation, and sustainable development.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                OUR VISION
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  The Technology Access Initiative envisions a future
                  where individuals, leaders, and communities have
                  equitable access to technology, digital tools, and
                  learning opportunities that empower them to thrive in
                  an increasingly connected world.
                </p>

                <p>
                  Through this initiative, Rehoboth Discipleship
                  International (RHDI) seeks to bridge the digital
                  divide by expanding access to computers, internet
                  connectivity, software resources, and digital
                  education.
                </p>

                <p>
                  We believe technology is a powerful instrument for
                  education, leadership development, communication,
                  innovation, and sustainable community
                  transformation.
                </p>

                <p>
                  By investing in technology access and digital
                  empowerment, we seek to equip the next generation of
                  leaders, strengthen communities, and expand
                  opportunities for learning and collaboration across
                  nations.
                </p>

              </div>

            </div>

          </div>

          {/* VISION PILLARS */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Our Vision Pillars
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {pillars.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
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

          {/* VISION STATEMENT */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Vision Statement
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <blockquote className="mt-10 text-2xl leading-10 font-semibold text-[#061C3F] italic">

                "To build transformed and digitally empowered
                communities by expanding equitable access to
                technology, fostering digital literacy, and creating
                opportunities for learning, leadership, and
                sustainable development across nations."

              </blockquote>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}