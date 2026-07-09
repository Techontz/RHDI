import React from "react";
import {
  BookOpen,
  ClipboardList,
  FileText,
  CreditCard,
  BadgeDollarSign,
  CalendarDays,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

export default function Admissions() {
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
            Admissions
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Begin your theological journey through a transparent,
            student-centered admissions process designed to prepare
            future Christian leaders for ministry and lifelong service.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* 1. Admission Requirements */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <ClipboardList className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Admission Requirements
            </h2>

            <p className="mt-2 text-slate-500">
              General admission requirements for prospective students.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies welcomes students
            from diverse backgrounds who demonstrate a commitment to
            Christian faith, academic growth, and servant leadership.
            Admission is based on the applicant's academic qualifications,
            personal integrity, and readiness to successfully pursue
            theological education.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              General Admission Requirements
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Completed Application Form",
                "Proof of Previous Academic Qualifications",
                "Valid Government-Issued Identification",
                "Recent Passport-Size Photograph",
                "Personal Statement or Statement of Purpose",
                "One or Two Character or Ministry References (where applicable)",
                "Basic English Language Proficiency",
                "Compliance with Institutional Admission Policies",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />
                  <span>{item}</span>
                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Admissions Review
            </h3>

            <p className="leading-8 text-slate-200">
              Additional admission requirements may apply depending on the
              academic program and level of study. All applications are
              reviewed by the Admissions Office to ensure applicants are
              prepared for academic success and Christ-centered leadership
              development.
            </p>

          </div>

        </div>

        </section>

        {/* 2. Application Process */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <FileText className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Application Process
            </h2>

            <p className="mt-2 text-slate-500">
              A simple, transparent, and student-friendly admissions process.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies has established a
            simple, transparent, and student-friendly admissions process to
            ensure that qualified applicants can begin their academic journey
            with confidence. Our Admissions Office is committed to providing
            guidance and support throughout every stage of the enrollment
            process.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Application Process
            </h3>

            <div className="space-y-4">

              {[
                "Complete and submit the online application form.",
                "Upload all required supporting documents.",
                "Pay the applicable application fee (if required).",
                "Admissions Office reviews the application.",
                "Qualified applicants receive an official admission decision.",
                "Accepted students complete course registration and orientation.",
                "Students receive access to the online learning platform and begin their studies.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />
                  <span>{item}</span>
                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Admissions Support
            </h3>

            <p className="leading-8 text-slate-200">
              Applicants are encouraged to submit complete and accurate
              information to facilitate timely processing. The Admissions
              Office is available to assist prospective students throughout
              the application and enrollment process.
            </p>

          </div>

        </div>

        </section>

        {/* 3. Tuition & Fees */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <CreditCard className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Tuition & Fees
            </h2>

            <p className="mt-2 text-slate-500">
              Affordable, transparent, and accessible theological education.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            providing high-quality theological education at an affordable
            and accessible cost. Our tuition structure is designed to
            support students from diverse backgrounds while maintaining
            academic excellence and a Christ-centered learning environment.
          </p>

          <p>
            Tuition and fees are determined according to the academic
            program, level of study, and course load. Students receive
            clear information regarding tuition, payment schedules, and
            applicable fees before enrollment. Flexible payment options
            may be available to assist students in managing their
            educational expenses.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Financial Transparency
            </h3>

            <p className="leading-8 text-slate-200">
              The School is committed to transparency, fairness, and
              responsible stewardship in all financial matters. Current
              tuition rates, fees, payment policies, and financial
              guidelines are published by the Admissions and Finance
              Office and are subject to periodic review.
            </p>

          </div>

        </div>

        </section>

        {/* 4. Scholarships */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <BadgeDollarSign className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Scholarships
            </h2>

            <p className="mt-2 text-slate-500">
              Expanding access to Christ-centered theological education through
              scholarship opportunities and financial support.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            expanding access to theological education by providing scholarship
            opportunities for qualified and deserving students. Through
            institutional support, donor partnerships, and scholarship
            initiatives, the School seeks to reduce financial barriers and
            empower students to pursue their academic and ministry calling.
          </p>

          <p>
            Scholarships may be awarded based on academic achievement,
            financial need, ministry involvement, leadership potential, or
            other criteria established by the School. Scholarship
            opportunities are subject to availability and are reviewed
            through a fair and transparent application process.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Scholarship Considerations
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Academic Achievement",
                "Financial Need",
                "Ministry Involvement",
                "Leadership Potential",
                "Institutional Scholarship Programs",
                "Donor-Supported Scholarships",
                "Merit-Based Awards",
                "Transparent Selection Process",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Financial Assistance
            </h3>

            <p className="leading-8 text-slate-200">
              We encourage prospective students to explore available
              scholarship opportunities and apply for financial assistance
              where eligible, ensuring that dedicated learners have access
              to Christ-centered, biblically grounded, and academically
              excellent theological education.
            </p>

          </div>

        </div>

        </section>

        {/* 5. Academic Calendar */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <CalendarDays className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Calendar
            </h2>

            <p className="mt-2 text-slate-500">
              Important academic dates, schedules, and milestones throughout
              each academic year.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies operates according
            to an official Academic Calendar that provides important dates
            and academic schedules for each academic year. The calendar is
            designed to ensure effective planning, timely course delivery,
            and a well-organized learning experience for all students and
            faculty.
          </p>

          <p>
            The Academic Calendar includes admission periods, registration
            dates, orientation sessions, semester start and end dates,
            examination periods, holidays, graduation dates, and other key
            academic activities. Students are expected to follow the
            published calendar and meet all academic deadlines throughout
            their program of study.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Academic Calendar Includes
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Admission Periods",
                "Registration Dates",
                "Orientation Sessions",
                "Semester Start & End Dates",
                "Examination Periods",
                "Academic Holidays",
                "Graduation Dates",
                "Key Academic Activities",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Annual Review
            </h3>

            <p className="leading-8 text-slate-200">
              The official Academic Calendar is reviewed annually and
              published by the Office of Academic Affairs to support
              academic excellence, effective program management, and
              student success.
            </p>

          </div>

        </div>

        </section>

        {/* 6. Registration */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <UserPlus className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Registration
            </h2>

            <p className="mt-2 text-slate-500">
              A smooth, efficient, and guided enrollment process for every
              admitted student.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The registration process at the RHDI School of Theology &
            Biblical Studies is designed to provide students with a smooth,
            efficient, and well-organized enrollment experience. After
            receiving official admission, students are required to complete
            course registration before the beginning of each academic term.
          </p>

          <p>
            During registration, students select their courses in
            consultation with the Academic Affairs Office or an assigned
            academic advisor to ensure that all program requirements are
            met. Students are encouraged to complete registration within
            the published deadlines to secure enrollment and gain timely
            access to course materials and the online learning platform.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Registration Process
            </h3>

            <div className="space-y-4">

              {[
                "Receive Official Admission",
                "Meet with Academic Advisor",
                "Select Required Courses",
                "Complete Registration",
                "Meet Published Deadlines",
                "Access Learning Platform",
                "Receive Course Materials",
                "Begin Academic Program",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Student Support
            </h3>

            <p className="leading-8 text-slate-200">
              The School is committed to providing accurate academic
              guidance, timely registration services, and ongoing support
              to help students successfully begin and progress through
              their theological education with confidence and excellence.
            </p>

          </div>

        </div>

        </section>

      </div>

    </main>
  );
}