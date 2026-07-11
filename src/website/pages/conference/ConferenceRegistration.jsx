import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  Globe,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ConferenceRegistration() {
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
              PAGE 10
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Registration
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              Register for the Marriage Success Conference & Official Book
              Launch.
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
                  <UserPlus size={28} />
                </div>

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Register for the Marriage Success Conference & Official Book
                  Launch
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-9 text-slate-600">
                <p>
                  Take the next step toward strengthening your marriage,
                  enriching your family, and investing in lifelong learning. We
                  warmly invite you to reserve your place at this unique
                  educational conference, where psychology, education, and
                  biblical wisdom come together to provide practical insights
                  for building healthy, resilient, and purpose-driven
                  relationships.
                </p>

                <p>
                  Participation is completely FREE, but advance registration is
                  recommended to help us provide a well-organized and meaningful
                  conference experience for every participant.
                </p>

                <h3 className="text-2xl font-black text-[#061C3F]">
                  Conference Information
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Event:</strong>
                    <br />
                    Marriage Success Conference & Official Book Launch
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Date:</strong>
                    <br />
                    October 24, 2026
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Time:</strong>
                    <br />
                    3:30 PM – 7:30 PM (4 Hours)
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Venue:</strong>
                    <br />
                    To Be Announced
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Admission:</strong>
                    <br />
                    FREE
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <strong>Organizer:</strong>
                    <br />
                    Rehoboth Discipleship International (RHDI)
                  </div>
                </div>

                <h3 className="pt-4 text-2xl font-black text-[#061C3F]">
                  Complete Your Registration
                </h3>

                <p>Please provide the following information:</p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                    "City / Country",
                    "Church / Organization (Optional)",
                    "Marital Status",
                    "Occupation (Optional)",
                  ].map((field) => (
                    <div
                      key={field}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium"
                    >
                      • {field}
                    </div>
                  ))}
                </div>

                <h3 className="pt-4 text-2xl font-black text-[#061C3F]">
                  Registration Confirmation
                </h3>

                <p>
                  Once your registration has been successfully submitted, you
                  will receive a confirmation message with additional event
                  information and important conference updates.
                </p>

                <h3 className="pt-4 text-2xl font-black text-[#061C3F]">
                  Need Assistance?
                </h3>

                <p>
                  If you have any questions regarding registration or the
                  conference, please contact us:
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                  <h4 className="text-xl font-bold text-[#061C3F]">
                    Rehoboth Discipleship International (RHDI)
                  </h4>

                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-[#C79A2B]" />
                    <span>www.rhdi.world</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#C79A2B]" />
                    <span>info@rhdi.world</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#C79A2B]" />
                    <span>+1 (802) 355-5243</span>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                  <h3 className="text-3xl font-black">
                    Register Today
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-200">
                    Reserve your place and join us for an inspiring conference
                    dedicated to strengthening marriages, empowering families,
                    and transforming generations through knowledge, wisdom, and
                    practical application.
                  </p>

                  <button className="mt-8 rounded-xl bg-[#C79A2B] px-8 py-4 text-lg font-bold text-[#061C3F] transition hover:opacity-90">
                    Register Now
                  </button>
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
              <div className="rounded-3xl bg-[#061C3F] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Conference Information
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="text-[#C79A2B]" size={20} />
                    <div>
                      <p className="text-sm text-slate-400">Date</p>
                      <p className="font-bold">October 24, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock3 className="text-[#C79A2B]" size={20} />
                    <div>
                      <p className="text-sm text-slate-400">Time</p>
                      <p className="font-bold">
                        3:30 PM – 7:30 PM (4 Hours)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#C79A2B]" size={20} />
                    <div>
                      <p className="text-sm text-slate-400">Venue</p>
                      <p className="font-bold">To Be Announced</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="text-[#C79A2B]" size={20} />
                    <div>
                      <p className="text-sm text-slate-400">Admission</p>
                      <p className="font-bold">FREE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <h4 className="mb-6 text-xl font-bold text-[#061C3F]">
                  Continue Reading
                </h4>

                <Link
                  to="/conference/faq"
                  className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-[#061C3F]">
                    Previous: Frequently Asked Questions
                  </span>

                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}