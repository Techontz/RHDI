import React from "react";
import { motion } from "framer-motion";
import {
  BookMarked,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutBook() {
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
              PAGE 04
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              About the Book
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Discover the vision and educational foundation behind
              <strong> Marriage Success (Ndoa Yenye Mafanikio)</strong>.
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
                  <BookMarked size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  About the Book
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  Marriage Success (Ndoa Yenye Mafanikio) is a comprehensive
                  work that presents marriage through an interdisciplinary
                  framework integrating psychology, education, and biblical
                  theology. Developed through extensive study, research, and
                  practical ministry experience, the book explores the deeper
                  foundations of successful marriages by combining scientific
                  understanding, psychological insight, educational principles,
                  and timeless biblical truth.
                </p>

                <p>
                  Rather than offering superficial advice, this book examines
                  the underlying dynamics that shape marital relationships,
                  including emotional development, communication, attachment,
                  conflict resolution, forgiveness, intimacy, family
                  leadership, and generational legacy. It is designed to help
                  readers understand not only the practical aspects of marriage,
                  but also the psychological, relational, and spiritual
                  principles that contribute to long-term marital health and
                  stability.
                </p>

                <p>
                  Through a unique combination of academic analysis, practical
                  application, and biblical reflection, Marriage Success
                  provides readers with a structured roadmap for building
                  resilient relationships, strengthening families, and
                  cultivating healthy communities. Whether used for personal
                  growth, premarital preparation, marriage enrichment,
                  counseling, leadership development, or academic study, the
                  book serves as both an educational resource and a practical
                  guide for lifelong transformation.
                </p>

                <p>
                  The official launch of this publication during the Marriage
                  Success Conference marks the beginning of a broader vision to
                  advance marriage education, family development, and community
                  transformation through research-informed learning, practical
                  training, and values-based leadership.
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
              {/* Book Information */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                  <BookOpen size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Book Information
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Book Title
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Marriage Success (Ndoa Yenye Mafanikio)
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Author
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Dr. Daniel
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Official Book Launch
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      October 24, 2026
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
                    to="/conference/why-this-conference"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: Why This Conference?
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/author"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: Meet the Author
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