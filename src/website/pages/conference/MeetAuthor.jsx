import React from "react";
import { motion } from "framer-motion";
import {
  User,
  ArrowLeft,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MeetAuthor() {
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
              PAGE 05
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Meet the Author
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Meet the visionary leader, educator, author, and conference
              speaker behind <strong>Marriage Success (Ndoa Yenye Mafanikio)</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061C3F] text-white">
                  <User size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Meet the Author
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  Dr. Daniel is the Founder and President of Rehoboth
                  Discipleship International (RHDI), a faith-based nonprofit
                  organization committed to leadership development, education,
                  community transformation, and humanitarian service. Through
                  his teaching, research, and leadership, he has dedicated his
                  work to equipping individuals, strengthening families, and
                  empowering communities with knowledge that creates lasting
                  impact.
                </p>

                <p>
                  As an author, educator, conference speaker, and leadership
                  trainer, Dr. Daniel integrates psychology, education, and
                  biblical theology to address contemporary challenges affecting
                  marriages, families, leadership, and society. His approach
                  combines academic research with practical application,
                  enabling individuals and organizations to develop healthy
                  relationships, resilient leadership, and sustainable
                  community transformation.
                </p>

                <p>
                  His latest publication, Marriage Success (Ndoa Yenye
                  Mafanikio), reflects years of study, research, and ministry
                  experience. The book presents a comprehensive framework for
                  understanding marriage through scientific inquiry,
                  psychological principles, educational insight, and biblical
                  truth, providing readers with practical strategies for
                  building healthy, resilient, and purpose-driven
                  relationships.
                </p>

                <p>
                  Through the Marriage Success Conference, Dr. Daniel seeks to
                  inspire a new generation of individuals, couples, church
                  leaders, counselors, educators, and community leaders to
                  strengthen marriages, empower families, and contribute to the
                  transformation of future generations through knowledge,
                  wisdom, and purposeful leadership.
                </p>
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
              {/* Speaker Card */}

              <div className="overflow-hidden rounded-3xl bg-[#061C3F] text-white shadow-xl">
              <img
                src="/drdaniel.jpeg"
                alt="Dr. Daniel"
                className="h-80 w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                    <Award size={28} />
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                    Speaker
                  </p>

                  <h3 className="mt-5 text-3xl font-black">
                    Dr. Daniel
                  </h3>

                  <div className="mt-6 space-y-4 text-slate-200 leading-7">
                    <p>
                      <strong>Founder & President</strong>
                    </p>

                    <p>
                      Rehoboth Discipleship International (RHDI)
                    </p>

                    <p>
                      Author of <strong>Marriage Success</strong>
                    </p>

                    <p>
                      International Speaker • Educator • Leadership Trainer •
                      Author
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
                    to="/conference/about-book"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: About the Book
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/what-you-will-learn"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: What You Will Learn
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