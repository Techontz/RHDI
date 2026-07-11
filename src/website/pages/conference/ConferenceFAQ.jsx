import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Phone,
  Globe,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "1. Is there an admission fee?",
    answer:
      "No. Admission is completely FREE. However, advance registration is encouraged to help us prepare an excellent conference experience for all participants.",
  },
  {
    question: "2. Who can attend this conference?",
    answer:
      "The conference is open to married couples, engaged couples, individuals preparing for marriage, pastors, counselors, educators, students, community leaders, and anyone interested in strengthening marriages and families.",
  },
  {
    question: "3. What language will be used during the conference?",
    answer:
      "The primary language of the conference will be announced before the event. Translation support may be provided when available.",
  },
  {
    question: "4. Will participants receive a certificate?",
    answer:
      "Yes. Every registered participant who attends the conference will receive an official Certificate of Participation.",
  },
  {
    question: "5. Will the book be available during the conference?",
    answer:
      "Yes. Participants will have the opportunity to purchase Marriage Success (Ndoa Yenye Mafanikio) during the official book launch session.",
  },
  {
    question: "6. Can I register on the day of the conference?",
    answer:
      "Yes, subject to seating availability. However, advance registration is strongly recommended.",
  },
  {
    question: "7. Will refreshments be provided?",
    answer:
      "Any information regarding refreshments will be communicated before the conference.",
  },
  {
    question: "8. Can churches or organizations register as a group?",
    answer:
      "Yes. Churches, ministries, educational institutions, and organizations are welcome to register groups of participants.",
  },
  {
    question: "9. How can I contact the organizers?",
    answer:
      "For additional information, please contact:",
  },
  {
    question: "10. How do I secure my place?",
    answer:
      "Simply click the Register Now button and complete the online registration form. You will receive confirmation once your registration has been successfully submitted.",
  },
];

export default function ConferenceFAQ() {
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
              PAGE 09
            </span>

            <h1 className="mt-6 text-5xl font-black text-white leading-tight lg:text-6xl">
              Frequently Asked Questions (FAQs)
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Below are answers to some of the most common questions about the
              Marriage Success Conference & Official Book Launch.
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
                  <HelpCircle size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-xl font-bold text-[#061C3F]">
                      {faq.question}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                    {index === 8 && (
                      <div className="mt-6 space-y-4 rounded-2xl bg-white p-6 border border-slate-200">
                        <h4 className="font-bold text-[#061C3F]">
                          Rehoboth Discipleship International (RHDI)
                        </h4>

                        <div className="flex items-center gap-3">
                          <Globe
                            className="text-[#C79A2B]"
                            size={20}
                          />
                          <span>www.rhdi.world</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail
                            className="text-[#C79A2B]"
                            size={20}
                          />
                          <span>info@rhdi.world</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone
                            className="text-[#C79A2B]"
                            size={20}
                          />
                          <span>+1 (802) 355-5243</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Need More Information */}

                <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                  <h3 className="text-2xl font-black">
                    Need more information?
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-200">
                    Our team will be happy to assist you and answer any
                    additional questions regarding the conference.
                  </p>
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
              {/* Contact Card */}

              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Conference Contact
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase text-slate-400">
                      Organization
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      Rehoboth Discipleship International (RHDI)
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase text-slate-400">
                      Website
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      www.rhdi.world
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      info@rhdi.world
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      +1 (802) 355-5243
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
                    to="/conference/who-should-attend"
                    className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50 transition"
                  >
                    <span className="font-semibold text-[#061C3F]">
                      Previous: Who Should Attend?
                    </span>

                    <ArrowLeft size={18} />
                  </Link>

                  <Link
                    to="/conference/register"
                    className="flex items-center justify-between rounded-xl bg-[#061C3F] p-4 text-white hover:bg-[#0A2957] transition"
                  >
                    <span className="font-semibold">
                      Next: Registration
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