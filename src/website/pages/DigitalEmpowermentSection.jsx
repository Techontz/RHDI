import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  MonitorSmartphone,
  GraduationCap,
  Cpu,
  Users,
  Briefcase,
  Globe,
  ShieldCheck,
  Building2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    icon: Laptop,
    title: "Digital Literacy",
    text: "Building foundational digital skills that enable individuals to confidently use modern technology.",
  },
  {
    icon: GraduationCap,
    title: "Virtual Learning",
    text: "Providing online education and virtual learning opportunities for lifelong development.",
  },
  {
    icon: MonitorSmartphone,
    title: "ICT Training",
    text: "Equipping learners with practical Information and Communication Technology skills.",
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    text: "Developing innovative leaders who leverage technology to solve community challenges.",
  },
  {
    icon: Users,
    title: "Online Collaboration",
    text: "Strengthening communication, teamwork, and collaboration through digital platforms.",
  },
  {
    icon: Briefcase,
    title: "Digital Entrepreneurship",
    text: "Helping entrepreneurs utilize technology to build sustainable businesses and opportunities.",
  },
  {
    icon: Globe,
    title: "Community Technology",
    text: "Promoting technology-driven solutions that improve education, services, and community development.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Safety",
    text: "Encouraging responsible digital citizenship, online safety, and ethical technology use.",
  },
  {
    icon: Cpu,
    title: "Digital Inclusion",
    text: "Expanding equitable access to digital learning resources and emerging technologies.",
  },
  {
    icon: Building2,
    title: "Capacity Building",
    text: "Strengthening digital capabilities for individuals, institutions, and community organizations.",
  },
];

export default function DigitalEmpowermentSection() {
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
                src="/4.jpeg"
                alt="Digital Empowerment"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/85 via-[#061C3F]/45 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md text-white">
                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Digital Empowerment
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Equipping individuals and communities with digital
                  knowledge, technology, and innovation for sustainable
                  transformation.
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">
              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                DIGITAL EMPOWERMENT
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), we
                  believe digital empowerment is essential for creating
                  inclusive opportunities, bridging knowledge gaps, and
                  enabling individuals and communities to participate
                  effectively in an increasingly digital world.
                </p>

                <p>
                  Through digital literacy training, virtual learning,
                  technology-based education, and capacity-building
                  initiatives, we equip individuals, leaders, and
                  communities with the knowledge, skills, and resources
                  needed to learn, innovate, communicate, and thrive in
                  the twenty-first century.
                </p>

                <p>
                  Our approach promotes innovation, accessibility,
                  lifelong learning, and inclusive participation,
                  ensuring that people can confidently engage with
                  digital technologies and seize opportunities in the
                  global digital economy.
                </p>

                <p>
                  Through this program, RHDI remains committed to
                  reducing digital inequalities, strengthening digital
                  capacities, empowering communities through technology,
                  and fostering sustainable transformation across
                  nations.
                </p>

              </div>

              <div className="mt-12">
                <h3 className="text-3xl font-black text-[#061C3F]">
                  Empowering People Through Technology.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Connecting Communities.
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
                Digital Empowerment Initiatives
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B] mb-6">
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

          {/* CTA */}

          <div className="bg-[#F8F8F8] px-8 py-16 text-center">

            <h3 className="text-4xl font-black uppercase text-[#061C3F]">
              Building A Digitally Inclusive Future
            </h3>

            <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-gray-700">
              By combining technology, education, innovation, and
              community partnerships, RHDI empowers individuals and
              organizations to embrace digital transformation, unlock
              new opportunities, and contribute meaningfully to a more
              connected, resilient, and prosperous world.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}