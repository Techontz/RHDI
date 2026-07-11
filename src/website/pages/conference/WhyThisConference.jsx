import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyThisConference() {
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
              PAGE 03
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Why This Conference?
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Understanding why marriage education matters and why investing in
              healthy relationships creates lasting generational impact.
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
                  <Lightbulb size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Why This Conference?
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  Marriage is one of the most influential institutions in
                  society, yet it continues to face unprecedented challenges in
                  today’s rapidly changing world. Relationship conflicts,
                  emotional disconnection, communication breakdown, family
                  instability, financial pressures, and the growing influence of
                  modern culture have placed increasing demands on couples and
                  families.
                </p>

                <p>
                  The Marriage Success Conference was established to respond to
                  these challenges through a comprehensive approach that
                  integrates psychology, education, and biblical wisdom. Rather
                  than offering temporary motivation, this conference is
                  designed to provide participants with practical knowledge,
                  evidence-informed principles, and life-changing strategies
                  that strengthen relationships, promote emotional well-being,
                  and cultivate healthy family environments.
                </p>

                <p>
                  This conference is founded on the belief that strong marriages
                  create strong families, strong families build healthy
                  communities, and healthy communities contribute to the
                  transformation of nations. By investing in marriage education,
                  personal growth, and family development, participants will be
                  equipped to build relationships characterized by commitment,
                  trust, effective communication, emotional maturity, spiritual
                  growth, and lasting purpose.
                </p>

                <p>
                  Whether you are seeking to strengthen your own marriage,
                  prepare for future family life, support others through
                  counseling or ministry, or develop healthier relationships
                  within your community, this conference offers an exceptional
                  opportunity to gain knowledge that can create lifelong impact.
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
              {/* Commitment */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                  <ShieldCheck size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Our Commitment
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-200">
                  To provide every participant with a learning experience that
                  is intellectually enriching, practically applicable,
                  spiritually grounded, and personally transformative.
                </p>
              </div>

              {/* Navigation */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <h4 className="mb-6 text-xl font-bold text-[#061C3F]">
                  Continue Reading
                </h4>

                <div className="space-y-4">
                  <Link
                    to="/conference/overview"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: Conference Overview
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/about-book"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: About the Book
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