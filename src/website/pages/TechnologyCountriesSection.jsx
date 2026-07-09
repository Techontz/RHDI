import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MapPinned,
  Users,
  Laptop,
  Quote,
  ArrowRight,
} from "lucide-react";

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

export default function TechnologyCountriesSection() {
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

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/technology-countries.jpg"
                alt="Countries Served"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Countries Served
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Connecting people across nations through technology,
                  digital learning, leadership development, and
                  community transformation.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block h-1 w-24 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                COUNTRIES SERVED
              </h2>

              <div className="mt-6 mb-10 h-1 w-28 bg-[#C79A2B]" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  The Technology Access Initiative currently serves and
                  engages communities across multiple countries through
                  leadership development, digital learning initiatives,
                  virtual training platforms, and technology
                  empowerment activities.
                </p>

                <p>
                  Through strategic collaboration and cross-border
                  partnerships, Rehoboth Discipleship International
                  (RHDI) is expanding equitable access to technology,
                  creating opportunities for education,
                  communication, innovation, and sustainable
                  community transformation.
                </p>

                <p>
                  As our global network continues to grow, we remain
                  committed to ensuring individuals and communities
                  can confidently participate in an increasingly
                  connected digital world.
                </p>

              </div>

            </div>

          </div>

          {/* COUNTRIES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Current Countries Served
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {countries.map((country, index) => (

                <motion.div
                  key={country}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 rounded-xl border border-[#C79A2B]/20 bg-white/5 p-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C79A2B]">

                    <MapPinned
                      size={22}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <div className="font-bold text-white">
                      {country}
                    </div>

                    <div className="text-sm text-gray-400">
                      Active Engagement
                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* GLOBAL IMPACT */}

          <div className="bg-white px-8 py-20">

            <div className="max-w-5xl mx-auto text-center">

              <Globe
                size={70}
                className="mx-auto text-[#C79A2B]"
              />

              <h3 className="mt-8 text-4xl font-black uppercase text-[#061C3F]">
                Global Technology Impact
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <p className="mt-10 text-lg leading-9 text-gray-700">

                Across these countries, the Technology Access
                Initiative supports digital education, leadership
                training, virtual collaboration, and community
                empowerment by promoting access to technology
                resources and digital learning opportunities. Through
                strategic partnerships and expanding international
                networks, RHDI continues to create pathways that
                enable individuals and communities to learn, connect,
                innovate, and thrive.

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
                Countries Served Statement
              </h3>

              <div className="mx-auto mt-5 h-1 w-28 bg-[#C79A2B]" />

              <blockquote className="mt-10 text-2xl leading-10 italic font-semibold text-[#061C3F]">

                "To expand access to technology and digital
                opportunities across nations by equipping individuals
                and communities with the tools, knowledge, and
                connectivity needed to learn, lead, collaborate, and
                thrive in the digital age."

              </blockquote>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}