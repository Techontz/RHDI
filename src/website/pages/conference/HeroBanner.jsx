import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  ArrowRight,
} from "lucide-react";

export default function HeroConferencePage() {
  return (
    <section className="bg-slate-50">

      {/* Hero */}

      <div className="relative h-[520px] overflow-hidden">

        <img
          src="/marriage1.jpeg"
          alt="Marriage Success Conference"
          className="absolute inset-0 h-full w-full object-cover"
        />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F] via-[#061C3F]/95 to-[#061C3F]/75" />

        <div className="relative z-10 flex h-full items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              className="max-w-3xl"
            >

              <span className="inline-flex rounded-full bg-[#C79A2B] px-5 py-2 text-sm font-bold text-[#061C3F]">
                UPCOMING EVENT
              </span>

              <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight text-white">
                Marriage Success
                <span className="block text-[#C79A2B]">
                  Conference
                </span>
              </h1>

              <p className="mt-6 text-xl leading-9 text-slate-200">
                Official Book Launch featuring research-informed,
                educational, psychological and Biblical principles for
                building successful marriages and stronger families.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="rounded-xl bg-[#C79A2B] px-8 py-4 font-bold text-[#061C3F] hover:opacity-90">
                  Register Now
                </button>

                <button className="rounded-xl border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-[#061C3F] transition">
                  Learn More
                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Left */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black text-[#061C3F]">
              Marriage Success Conference &
              Official Book Launch
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Join us for an exceptional learning experience that explores
              the science, psychology, educational principles and biblical
              foundations of successful marriages.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              This conference is designed to equip individuals, couples,
              church leaders, counselors, educators and family advocates
              with evidence-informed knowledge and practical strategies
              for building healthy, resilient and purpose-driven
              relationships.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              The event also marks the official launch of
              <strong> Marriage Success (Ndoa Yenye Mafanikio)</strong>,
              a groundbreaking book by Dr. Daniel integrating psychology,
              education and biblical wisdom into one practical guide for
              stronger marriages and healthier families.
            </p>

            {/* Theme */}

            <div className="mt-14 rounded-3xl bg-[#061C3F] p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-[#C79A2B]">
                Conference Theme
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white">
                Building Strong Marriages.
                <br />
                Empowering Families.
                <br />
                Transforming Generations.
              </h3>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">

              <h3 className="text-2xl font-black text-[#061C3F]">
                Event Details
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="rounded-xl bg-[#061C3F] p-3 text-white">
                    <CalendarDays size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Date
                    </p>

                    <h4 className="font-bold text-[#061C3F]">
                      October 24, 2026
                    </h4>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="rounded-xl bg-[#C79A2B] p-3 text-[#061C3F]">
                    <Clock3 size={22} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Time
                    </p>

                    <h4 className="font-bold text-[#061C3F]">
                      3:30 PM – 7:30 PM
                    </h4>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="rounded-xl bg-[#061C3F] p-3 text-white">
                    <MapPin size={22} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Venue
                    </p>

                    <h4 className="font-bold text-[#061C3F]">
                      To Be Announced
                    </h4>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="rounded-xl bg-[#C79A2B] p-3 text-[#061C3F]">
                    <Ticket size={22} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Admission
                    </p>

                    <h4 className="font-bold text-[#061C3F]">
                      FREE
                    </h4>

                  </div>

                </div>

              </div>

              <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-[#061C3F] py-4 font-bold text-white hover:bg-[#0B2D63] transition">
                Register Now
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}