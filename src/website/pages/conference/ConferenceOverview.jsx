import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConferenceOverview() {
  return (
    <section className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <div className="relative overflow-hidden bg-[#061C3F]">

        <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F] via-[#0A2957] to-[#061C3F]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="max-w-4xl"
          >

            <span className="inline-flex rounded-full bg-[#C79A2B] px-5 py-2 text-sm font-bold text-[#061C3F]">
              PAGE 02
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-black text-white leading-tight">
              Conference Overview
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-9">
              Discover the vision, purpose, and educational foundation behind
              the Marriage Success Conference & Official Book Launch.
            </p>

          </motion.div>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-200">

              <div className="flex items-center gap-4 mb-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061C3F] text-white">
                  <BookOpen size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Conference Overview
                </h2>

              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">

                <p>
                  The Marriage Success Conference & Official Book Launch is a premier educational conference designed to explore marriage from a comprehensive perspective that integrates psychology, education, and biblical wisdom. Rather than focusing on inspiration alone, this conference provides participants with research-informed knowledge, practical relationship strategies, and timeless principles that address the realities of modern marriage and family life.
                </p>

                <p>
                  At the heart of this conference is the official launch of Marriage Success (Ndoa Yenye Mafanikio) by Dr. Daniel—a comprehensive work developed through theological reflection, psychological understanding, educational principles, and relationship studies. The book presents an interdisciplinary approach to marriage, helping readers understand not only what strengthens a marriage, but also why healthy relationships flourish and how they can be intentionally developed and sustained.
                </p>

                <p>
                  Throughout this four-hour learning experience, participants will gain deeper insight into communication, emotional intelligence, conflict resolution, trust, commitment, family leadership, spiritual growth, and the scientific foundations of healthy relationships. Every session is designed to provide practical tools that participants can immediately apply within their marriages, families, ministries, and communities.
                </p>

                <p>
                  Whether you are married, engaged, preparing for marriage, serving in ministry, counseling families, or leading within your community, this conference offers a unique opportunity to develop the knowledge, skills, and perspective needed to build stronger relationships, healthier families, and a lasting legacy for future generations.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Sidebar */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="sticky top-28 space-y-8">

              {/* Theme */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">

                <p className="uppercase tracking-[0.25em] text-sm text-[#C79A2B]">
                  Conference Theme
                </p>

                <h3 className="mt-6 text-3xl font-black leading-tight">
                  Building Strong Marriages.
                  <br />
                  Empowering Families.
                  <br />
                  Transforming Generations.
                </h3>

              </div>

              {/* Navigation */}

              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-lg">

                <h4 className="text-xl font-bold text-[#061C3F] mb-6">
                  Continue Reading
                </h4>

                <div className="space-y-4">

                  <Link
                    to="/conference"
                    className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50 transition"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous Page
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/why-this-conference"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white hover:bg-[#0A2957] transition"
                  >
                    <span className="font-semibold">
                      Next Page
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