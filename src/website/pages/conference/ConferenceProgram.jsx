import React from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  ArrowLeft,
  ArrowRight,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const schedule = [
  {
    time: "3:30 PM – 4:00 PM",
    title: "Registration, Welcome & Opening Session",
    description:
      "Participant registration, networking, conference opening, welcome remarks, and an introduction to the purpose and vision of the Marriage Success Conference.",
  },
  {
    time: "4:00 PM – 5:00 PM",
    title: "Session I: Foundations of Marriage Success",
    description:
      "Exploring the biblical, psychological, and educational foundations of healthy, resilient, and purpose-driven marriages.",
  },
  {
    time: "5:00 PM – 5:45 PM",
    title: "Session II: Building Healthy Relationships",
    description:
      "Understanding communication, emotional intelligence, trust, commitment, conflict resolution, and practical relationship strategies for lifelong success.",
  },
  {
    time: "5:45 PM – 6:15 PM",
    title: "Official Book Launch Ceremony",
    description:
      "Official launch of Marriage Success (Ndoa Yenye Mafanikio) by Dr. Daniel, including the unveiling ceremony, author’s remarks, and recognition of the significance of the publication.",
  },
  {
    time: "6:15 PM – 6:45 PM",
    title: "Interactive Questions & Answers",
    description:
      "Participants will have the opportunity to engage in discussion, ask questions, and receive practical guidance on marriage and family-related topics.",
  },
  {
    time: "6:45 PM – 7:15 PM",
    title: "Certificate Presentation & Closing Remarks",
    description:
      "Presentation of Certificates of Participation, appreciation to participants and guests, conference reflections, and the official closing ceremony.",
  },
  {
    time: "7:15 PM – 7:30 PM",
    title: "Networking & Fellowship",
    description:
      "An opportunity for participants to connect with one another, meet the author, interact with conference leaders, and conclude the event through fellowship.",
  },
];

export default function ConferenceProgram() {
  return (
    <section className="min-h-screen bg-slate-50">
      {/* Hero */}

      <div className="relative overflow-hidden bg-[#061C3F]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F] via-[#0A2957] to-[#061C3F]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full bg-[#C79A2B] px-5 py-2 text-sm font-bold text-[#061C3F]">
              PAGE 07
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Conference Program
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Explore the complete schedule for the Marriage Success Conference &
              Official Book Launch.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061C3F] text-white">
                  <CalendarClock size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Conference Program
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  The Marriage Success Conference & Official Book Launch is a
                  four-hour educational experience designed to provide
                  participants with progressive learning, practical engagement,
                  and meaningful reflection. Each session builds upon the
                  previous one, creating a comprehensive journey through the
                  psychological, educational, and biblical foundations of
                  successful marriage.
                </p>

                <h3 className="pt-2 text-2xl font-black text-[#061C3F]">
                  Conference Schedule
                </h3>

                <div className="space-y-6">
                  {schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <div className="inline-flex w-fit rounded-xl bg-[#061C3F] px-4 py-2 font-bold text-white">
                          {item.time}
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-[#061C3F]">
                            {item.title}
                          </h4>

                          <p className="mt-3 leading-8 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-28 space-y-8">
              {/* Conference Summary */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                  <Clock3 size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Conference Summary
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Conference Duration
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      4 Hours
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Admission
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      FREE
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Hosted by
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Rehoboth Discipleship International (RHDI)
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <h4 className="mb-6 text-xl font-bold text-[#061C3F]">
                  Continue Reading
                </h4>

                <div className="space-y-4">
                  <Link
                    to="/conference/what-you-will-learn"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: What You Will Learn
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/who-should-attend"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: Who Should Attend?
                    </span>

                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}