import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-[#061C3F] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2">
            <HelpCircle className="w-4 h-4 text-[#C79A2B]" />
            RHDI School of Theology & Biblical Studies
          </div>

          <h1 className="mt-8 text-5xl font-black">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Find answers to the most commonly asked questions about
            admissions, academic programs, online learning, graduation,
            and student life at RHDI School of Theology & Biblical Studies.
          </p>

        </div>

      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">

        {[
          {
            q: "1. Who can apply to the RHDI School of Theology & Biblical Studies?",
            a: "Our programs are open to pastors, church leaders, ministry workers, Christian educators, students, and individuals who desire to grow in biblical knowledge, leadership, and Christian ministry.",
          },
          {
            q: "2. Are the programs offered online?",
            a: "Yes. All programs are delivered through a flexible online learning model that includes live Zoom classes, independent study, and guided academic support.",
          },
          {
            q: "3. What academic programs do you offer?",
            a: "We offer Certificate, Diploma, Bachelor's Degree, Master's Degree, and Doctoral Degree programs in Theology & Biblical Studies.",
          },
          {
            q: "4. What are the admission requirements?",
            a: "Applicants must complete the application process and submit the required academic and supporting documents according to the admission guidelines of the School.",
          },
          {
            q: "5. How long does each program take to complete?",
            a: "Program duration varies depending on the academic level. Detailed information is available in the Academic Catalog and on each program page.",
          },
          {
            q: "6. Do you offer scholarships?",
            a: "Yes. Scholarship opportunities may be available for eligible students based on institutional policies and available funding.",
          },
          {
            q: "7. Will I receive an official certificate or degree?",
            a: "Yes. Students who successfully complete all academic and graduation requirements will receive the appropriate certificate or degree awarded by the RHDI School of Theology & Biblical Studies.",
          },
          {
            q: "8. How are students assessed?",
            a: "Students are assessed through assignments, quizzes, examinations, research projects, presentations, ministry practicum, and other academic activities.",
          },
          {
            q: "9. Can international students apply?",
            a: "Yes. We welcome students from all nations who meet the admission requirements and are committed to theological education and Christian leadership.",
          },
          {
            q: "10. How can I apply?",
            a: "You can apply online through the Admissions Office by completing the application form and submitting all required documents through the RHDI website.",
          },
        ].map((faq, index) => (
          <details
            key={index}
            className="group rounded-3xl border bg-white shadow-sm overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-8 list-none">

              <h2 className="text-xl font-bold text-[#061C3F]">
                {faq.q}
              </h2>

              <ChevronDown className="w-6 h-6 text-[#C79A2B] transition-transform group-open:rotate-180" />

            </summary>

            <div className="border-t bg-slate-50 px-8 py-6">

              <p className="leading-8 text-slate-700">
                {faq.a}
              </p>

            </div>

          </details>
        ))}

      </div>

    </main>
  );
}