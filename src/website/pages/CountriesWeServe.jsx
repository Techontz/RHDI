import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MapPinned,
  Users,
  Presentation,
  Laptop,
  CalendarDays,
  ShieldCheck,
  Target,
  Quote,
} from "lucide-react";

const countries = [
  "Tanzania",
  "Kenya",
  "Uganda",
  "Cameroon",
  "Liberia",
  "Sierra Leone",
  "Germany",
  "Burundi",
  "Democratic Republic of Congo",
  "South Sudan",
  "Nigeria",
  "United States",
  "India",
  "Pakistan",
  "Bangladesh",
  "Rwanda",
  "South Africa",
  "Australia",
  "Nepal",
];

const stats = [
  {
    icon: Presentation,
    value: "283+",
    label: "Physical Seminars",
  },
  {
    icon: Laptop,
    value: "392+",
    label: "Zoom Seminars",
  },
  {
    icon: Users,
    value: "20",
    label: "Country Representatives",
  },
  {
    icon: Globe,
    value: "19",
    label: "Countries Served",
  },
];

const highlights = [
  "Founded in 2018",
  "Registered in Vermont, USA in 2024",
  "20 Country Representatives",
  "392+ Zoom Seminars Conducted",
  "283+ Physical Seminars Conducted",
  "4,840+ Individuals Reached Through Programs",
];

export default function CountriesWeServeSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1700px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl"
        >

          {/* HERO */}

          <div className="grid lg:grid-cols-2">

            <div className="relative h-[550px] overflow-hidden">

              <img
                src="/countries-we-serve.jpg"
                alt="Countries We Serve"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent"/>

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6"/>

                <h3 className="text-4xl font-black uppercase">
                  Countries We Serve
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Expanding impact across nations through leadership,
                  education, discipleship, technology, and community
                  transformation.
                </p>

              </div>

            </div>

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 bg-[#C79A2B] rounded-full mb-8"/>

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                GLOBAL REACH
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10"/>

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  Rehoboth Discipleship International (RHDI) serves
                  communities across Africa, Asia, Australia, Europe,
                  and the United States through education, leadership
                  development, discipleship, digital empowerment, and
                  community engagement initiatives.
                </p>

                <p>
                  Our growing international presence reflects our
                  commitment to building transformed, empowered, and
                  connected communities through collaboration,
                  learning, innovation, and sustainable development.
                </p>

                <p>
                  Through strategic partnerships and dedicated country
                  representatives, we continue expanding opportunities
                  that strengthen leaders, inspire communities, and
                  create lasting impact across nations.
                </p>

              </div>

            </div>

          </div>

          {/* COUNTRIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Countries We Serve
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {countries.map((country)=>(
                <div
                  key={country}
                  className="flex items-center gap-4 rounded-xl border border-[#C79A2B]/20 bg-white/5 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C79A2B]">
                    <MapPinned size={22} className="text-white"/>
                  </div>

                  <span className="font-semibold text-white">
                    {country}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* STATS */}

          <div className="bg-[#F8F8F8] py-20">

            <div className="grid lg:grid-cols-4">

              {stats.map((item)=>{

                const Icon=item.icon;

                return(
                  <div
                    key={item.label}
                    className="border-r last:border-r-0 border-gray-300 p-10 text-center"
                  >

                    <Icon
                      size={48}
                      className="mx-auto text-[#C79A2B]"
                    />

                    <div className="mt-5 text-5xl font-black text-[#061C3F]">
                      {item.value}
                    </div>

                    <div className="mt-2 uppercase font-semibold text-gray-600">
                      {item.label}
                    </div>

                  </div>
                )

              })}

            </div>

          </div>

          {/* INTERNATIONAL ENGAGEMENT */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Globe
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                International Engagement
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Through seminars, virtual learning platforms,
                leadership development programs, community outreach,
                and strategic partnerships, RHDI continues to
                strengthen international relationships and expand
                opportunities that positively impact individuals,
                organizations, and communities across multiple
                countries.

              </p>

            </div>

          </div>

          {/* HIGHLIGHTS */}

          <div className="bg-[#061C3F] px-8 py-20">

            <div className="max-w-6xl mx-auto">

              <h3 className="text-center text-4xl font-black uppercase text-white">
                Organizational Highlights
              </h3>

              <div className="mx-auto mt-5 mb-12 w-28 h-1 bg-[#C79A2B]"/>

              <div className="grid gap-6 md:grid-cols-2">

                {highlights.map((item)=>(
                  <div
                    key={item}
                    className="rounded-xl border border-[#C79A2B]/20 bg-white/5 p-6 text-white"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* VISION */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Quote
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Our Vision For Global Impact
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]"/>

              <p className="mt-10 text-lg leading-9 text-gray-700">

                We envision communities across nations equipped with
                knowledge, leadership capacity, technology access, and
                opportunities that inspire hope, encourage
                collaboration, and contribute to long-term social,
                educational, spiritual, and community transformation.

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}