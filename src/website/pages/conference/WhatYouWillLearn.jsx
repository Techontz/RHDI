import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  "The Biblical and Scientific Foundations of Marriage",
  "The Psychology of Healthy Relationships",
  "Attachment Theory and Emotional Connection",
  "Effective Communication and Conflict Resolution",
  "Emotional Intelligence in Marriage and Family Life",
  "Trust, Commitment, and Lifelong Partnership",
  "Forgiveness, Healing, and Relationship Restoration",
  "Family Leadership and Shared Vision",
  "Building Resilient Marriages in a Changing World",
  "Practical Strategies for Strengthening Family Relationships",
  "Creating a Lasting Legacy for Future Generations",
  "Lessons from the Official Book Marriage Success (Ndoa Yenye Mafanikio)",
];

export default function WhatYouWillLearn() {
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
              PAGE 06
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              What You Will Learn
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Explore the practical knowledge, research, and biblical principles
              that will strengthen marriages, families, and future generations.
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
                  <GraduationCap size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  What You Will Learn
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  The Marriage Success Conference has been carefully designed to
                  provide participants with knowledge that is academically
                  sound, practically applicable, and spiritually grounded.
                  Through the integration of psychology, education, and biblical
                  wisdom, participants will gain a deeper understanding of the
                  principles that build healthy, resilient, and purpose-driven
                  marriages.
                </p>

                <p className="font-semibold text-[#061C3F]">
                  During this conference, you will explore:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <CheckCircle2
                        className="mt-1 text-[#C79A2B] flex-shrink-0"
                        size={20}
                      />

                      <p className="leading-7 text-slate-700">{topic}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Every session is designed to provide practical insights,
                  research-informed principles, and transformational learning
                  experiences that participants can immediately apply within
                  their marriages, families, ministries, workplaces, and
                  communities. The goal is not only to inspire, but also to
                  equip every participant with the knowledge, skills, and
                  perspective necessary to cultivate healthy relationships and
                  lasting family success.
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
              {/* Learning Outcomes */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                  <GraduationCap size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Learning Outcomes
                </p>

                <div className="mt-8 space-y-5 text-slate-200">
                  <p>✓ Practical Marriage Education</p>
                  <p>✓ Psychology-Based Relationship Skills</p>
                  <p>✓ Biblical Wisdom for Families</p>
                  <p>✓ Leadership & Communication Skills</p>
                  <p>✓ Lasting Personal Transformation</p>
                </div>
              </div>

              {/* Navigation */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <h4 className="mb-6 text-xl font-bold text-[#061C3F]">
                  Continue Reading
                </h4>

                <div className="space-y-4">
                  <Link
                    to="/conference/author"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: Meet the Author
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/program"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: Conference Program
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