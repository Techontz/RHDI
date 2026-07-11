import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const attendees = [
  "Married Couples",
  "Engaged Couples",
  "Individuals Preparing for Marriage",
  "Newly Married Couples",
  "Pastors and Church Leaders",
  "Marriage and Family Counselors",
  "Christian Leaders and Ministry Workers",
  "Teachers and Educators",
  "Psychologists and Mental Health Professionals",
  "Social Workers and Community Development Practitioners",
  "Family Ministry Leaders",
  "Youth Leaders and Mentors",
  "Parents and Guardians",
  "Students of Theology, Psychology, and Family Studies",
  "Anyone Passionate About Building Healthy Relationships and Strong Families",
];

const reasons = [
  "Expand your understanding of marriage through psychology, education, and biblical wisdom.",
  "Learn practical strategies for building healthy and resilient relationships.",
  "Discover evidence-informed approaches to communication, trust, and conflict resolution.",
  "Participate in the official launch of Marriage Success (Ndoa Yenye Mafanikio).",
  "Connect with individuals who share a commitment to strengthening marriages and families.",
  "Receive a Certificate of Participation upon successful completion of the conference.",
];

export default function WhoShouldAttend() {
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
              PAGE 08
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Who Should Attend?
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Discover who will benefit from the Marriage Success Conference &
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
                  <Users size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Who Should Attend?
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  The Marriage Success Conference & Official Book Launch is
                  designed for individuals who are committed to building
                  stronger marriages, healthier families, and thriving
                  communities. Whether you are seeking personal growth,
                  professional development, or practical tools for
                  strengthening relationships, this conference offers valuable
                  insights for participants from diverse backgrounds.
                </p>

                <h3 className="text-2xl font-black text-[#061C3F]">
                  This Conference Is Recommended For:
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {attendees.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-1 flex-shrink-0 text-[#C79A2B]"
                      />

                      <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Regardless of your stage in life or professional background,
                  this conference will provide practical knowledge,
                  research-informed insights, and biblically grounded
                  principles to help you strengthen relationships, develop
                  healthy family systems, and become a positive influence
                  within your home, church, workplace, and community.
                </p>

                <h3 className="pt-4 text-2xl font-black text-[#061C3F]">
                  Why You Should Attend
                </h3>

                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-1 flex-shrink-0 text-[#C79A2B]"
                      />

                      <p className="leading-7 text-slate-700">{reason}</p>
                    </div>
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
              {/* Host */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C79A2B] text-[#061C3F]">
                  <HeartHandshake size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Hosted By
                </p>

                <h3 className="mt-6 text-3xl font-black leading-tight">
                  Rehoboth Discipleship International (RHDI)
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Committed to leadership development, education, family
                  transformation, and community impact through biblical values,
                  practical learning, and lifelong discipleship.
                </p>
              </div>

              {/* Navigation */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <h4 className="mb-6 text-xl font-bold text-[#061C3F]">
                  Continue Reading
                </h4>

                <div className="space-y-4">
                  <Link
                    to="/conference/program"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: Conference Program
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/faq"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white transition hover:bg-[#0A2957]"
                  >
                    <span className="font-semibold">
                      Next: Frequently Asked Questions
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