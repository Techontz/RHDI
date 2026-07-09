import React from "react";
import {
  PhoneCall,
  Globe,
  Mail,
  MapPin,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function ContactAdmissions() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-[#061C3F] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2">

            <BookOpen className="w-4 h-4 text-[#C79A2B]" />

            RHDI School of Theology & Biblical Studies

          </div>

          <h1 className="mt-8 text-5xl font-black">
            Contact Admissions
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            We are here to guide you through every step of your admission
            journey and help you become part of the RHDI global learning
            community.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* Contact Admissions */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

          <div className="flex items-center gap-4 mb-8">

            <div className="rounded-2xl bg-[#061C3F]/10 p-4">

              <PhoneCall className="w-8 h-8 text-[#C79A2B]" />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#061C3F]">
                Contact Admissions
              </h2>

              <p className="mt-2 text-slate-500">
                Our Admissions Office is ready to assist you.
              </p>

            </div>

          </div>

          <div className="space-y-6 text-slate-700 leading-9">

            <p>
              We are delighted that you are considering the RHDI School
              of Theology & Biblical Studies as part of your academic and
              spiritual journey. Our Admissions Office is available to
              provide guidance, answer your questions, and assist you
              throughout the application and enrollment process.
            </p>

            <p>
              Whether you are seeking information about academic
              programs, admission requirements, scholarships, tuition,
              or student services, our team is committed to providing
              timely support and professional assistance.
            </p>

            <p>
              Prospective students are encouraged to contact the
              Admissions Office for personalized guidance and to begin
              their journey toward Christ-centered theological education
              and transformational leadership.
            </p>

          </div>

        </section>

        {/* Contact Information */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

          <h2 className="text-3xl font-bold text-[#061C3F] mb-10">
            Admissions Office
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border bg-slate-50 p-6">

              <h3 className="text-xl font-bold text-[#061C3F] mb-4">
                Institution
              </h3>

              <p className="leading-8">
                Rehoboth Discipleship International (RHDI)
                <br />
                School of Theology & Biblical Studies
              </p>

            </div>

            <div className="rounded-2xl border bg-slate-50 p-6 flex gap-4">

              <Globe className="w-7 h-7 text-[#C79A2B]" />

              <div>

                <h3 className="font-bold text-[#061C3F]">
                  Website
                </h3>

                <p className="mt-2">
                  www.rhdi.world
                </p>

              </div>

            </div>

            <div className="rounded-2xl border bg-slate-50 p-6 flex gap-4">

              <Mail className="w-7 h-7 text-[#C79A2B]" />

              <div>

                <h3 className="font-bold text-[#061C3F]">
                  Email
                </h3>

                <p className="mt-2">
                  admissions@rhdi.world
                </p>

              </div>

            </div>

            <div className="rounded-2xl border bg-slate-50 p-6 flex gap-4">

              <PhoneCall className="w-7 h-7 text-[#C79A2B]" />

              <div>

                <h3 className="font-bold text-[#061C3F]">
                  Phone
                </h3>

                <p className="mt-2">
                  +1 (802) 355-5243
                </p>

              </div>

            </div>

            <div className="rounded-2xl border bg-slate-50 p-6 flex gap-4 md:col-span-2">

              <MapPin className="w-7 h-7 text-[#C79A2B]" />

              <div>

                <h3 className="font-bold text-[#061C3F]">
                  Location
                </h3>

                <p className="mt-2">
                  Vermont, United States of America
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Closing Message */}

        <section className="rounded-3xl bg-[#061C3F] text-white p-10">

          <div className="flex items-start gap-5">

            <ArrowRight className="w-10 h-10 text-[#C79A2B] shrink-0 mt-1" />

            <div>

              <h2 className="text-3xl font-bold mb-6">
                We Look Forward to Welcoming You
              </h2>

              <p className="leading-9 text-slate-200">

                We look forward to welcoming you to the RHDI School of
                Theology & Biblical Studies, where biblical truth,
                academic excellence, servant leadership, and spiritual
                formation come together to equip leaders for global
                impact.

              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}