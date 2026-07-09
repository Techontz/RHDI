import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Laptop,
  Cloud,
  Wifi,
  GraduationCap,
  Briefcase,
  DollarSign,
  Building2,
  Users,
  Globe,
  Quote,
  ArrowRight,
} from "lucide-react";

const partnerships = [
  {
    icon: Laptop,
    title: "Technology Equipment",
    text: "Donate computers, laptops, tablets, monitors, and digital devices that expand access to learning and technology.",
  },
  {
    icon: Cloud,
    title: "Software & Cloud Support",
    text: "Provide software licenses, cloud computing services, digital platforms, and technology infrastructure.",
  },
  {
    icon: Wifi,
    title: "Connectivity Solutions",
    text: "Support internet connectivity, networking equipment, and communication technologies for underserved communities.",
  },
  {
    icon: GraduationCap,
    title: "Digital Learning",
    text: "Partner in delivering educational technology, virtual learning platforms, and digital skills development programs.",
  },
  {
    icon: Users,
    title: "Capacity Building",
    text: "Support mentorship, technology leadership, and digital literacy initiatives that strengthen communities.",
  },
  {
    icon: DollarSign,
    title: "Financial Support",
    text: "Provide grants, sponsorships, and financial contributions that expand technology access and program delivery.",
  },
  {
    icon: Building2,
    title: "Corporate CSR",
    text: "Collaborate through Corporate Social Responsibility initiatives that create measurable social impact.",
  },
  {
    icon: Briefcase,
    title: "Employee Volunteers",
    text: "Engage your team through mentorship, professional expertise, volunteering, and skills-based service.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "Build long-term partnerships that strengthen digital inclusion and sustainable community transformation.",
  },
];

export default function TechnologyPartnershipsSection() {
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
                src="/technology-partnerships.jpg"
                alt="Technology Partnerships"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="h-1 w-24 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Partnership Opportunities
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Working together to expand technology access,
                  strengthen digital inclusion, and transform
                  communities across nations.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                PARTNERSHIP OPPORTUNITIES
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  The Technology Access Initiative invites corporations,
                  foundations, technology companies, educational
                  institutions, faith-based organizations, and
                  individual partners to collaborate in expanding
                  equitable access to technology and digital
                  opportunities for underserved communities.
                </p>

                <p>
                  Rehoboth Discipleship International (RHDI) believes
                  strategic partnerships are essential for bridging the
                  digital divide and empowering individuals, leaders,
                  and communities through technology, education, and
                  innovation.
                </p>

                <p>
                  Together, we can strengthen digital learning,
                  improve communication and collaboration, expand
                  access to technology resources, and positively impact
                  more than 1,500 direct beneficiaries across multiple
                  countries.
                </p>

              </div>

            </div>

          </div>

          {/* PARTNERSHIP OPPORTUNITIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Partnership Opportunities
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {partnerships.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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

          {/* WHY PARTNER */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Globe
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Why Partner With RHDI?
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Every partnership contributes to expanding digital
                inclusion, increasing access to technology, improving
                educational opportunities, strengthening leadership,
                and empowering underserved communities. By working
                together, we can create sustainable solutions that
                equip individuals with the knowledge, resources, and
                opportunities needed to thrive in an increasingly
                connected world.

              </p>

            </div>

          </div>

          {/* STATEMENT */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Partnership Statement
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <blockquote className="mt-10 text-2xl italic font-semibold leading-10 text-[#061C3F]">

                "We invite partners from around the world to join us
                in advancing digital inclusion and community
                transformation by investing in technology access,
                digital education, and sustainable solutions that
                empower individuals and communities to learn, connect,
                innovate, and thrive."

              </blockquote>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}