import React from "react";
import {
  BookOpen,
  BookMarked,
  LibraryBig,
  FileText,
  GraduationCap,
} from "lucide-react";

export default function StudentResources() {
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
            Student Resources
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Essential academic resources, policies, learning tools,
            advising services, and institutional support for every student.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* 1. Academic Catalog */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <BookMarked className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Catalog
            </h2>

            <p className="mt-2 text-slate-500">
              Your official guide to academic programs, policies, and institutional information.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Academic Catalog is the official guide of the RHDI School of Theology &
            Biblical Studies, providing comprehensive information about academic
            programs, curriculum, course descriptions, admission requirements,
            academic policies, graduation requirements, and student services. It
            serves as the primary reference for prospective and enrolled students,
            faculty members, and academic partners.
          </p>

          <p>
            The catalog is published annually and reflects the School's commitment
            to academic excellence, biblical integrity, institutional transparency,
            and continuous improvement. Students are encouraged to consult the
            Academic Catalog throughout their academic journey to remain informed
            about program requirements, academic regulations, and institutional
            policies.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Official Academic Guide
            </h3>

            <p className="leading-8 text-slate-200">
              Students should regularly consult the Academic Catalog to remain
              informed about curriculum updates, academic regulations,
              graduation requirements, and institutional policies.
            </p>

          </div>

        </div>

        </section>

        {/* 2. Student Handbook */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <BookOpen className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Student Handbook
            </h2>

            <p className="mt-2 text-slate-500">
              A practical guide to student life, policies, and responsibilities.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Student Handbook is an essential guide designed to support
            students throughout their academic journey at the RHDI School of
            Theology & Biblical Studies. It provides important information on
            academic policies, student responsibilities, institutional
            expectations, codes of conduct, learning procedures, graduation
            requirements, and student support services.
          </p>

          <p>
            The handbook serves as a practical resource to help students
            understand their rights and responsibilities while promoting
            academic excellence, spiritual growth, ethical conduct, and
            Christ-centered leadership. All students are encouraged to review
            the Student Handbook regularly to ensure compliance with
            institutional policies and to make the most of the educational
            opportunities and resources available throughout their program of
            study.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Student Success
            </h3>

            <p className="leading-8 text-slate-200">
              The Student Handbook promotes responsible learning,
              institutional integrity, spiritual formation, and successful
              participation in every aspect of student life.
            </p>

          </div>

        </div>

        </section>

        {/* 3. Digital Library */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <LibraryBig className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Digital Library
            </h2>

            <p className="mt-2 text-slate-500">
              Access theological learning resources anytime, anywhere.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Digital Library of the RHDI School of Theology & Biblical
            Studies provides students with convenient access to a growing
            collection of academic and theological learning resources.
            Through our digital platform, students can access recommended
            textbooks, scholarly publications, research materials, course
            notes, recorded lectures, and other educational resources that
            support biblical studies, theological research, leadership
            development, and ministry preparation.
          </p>

          <p>
            The Digital Library is designed to promote independent learning,
            academic excellence, and lifelong scholarship by providing
            reliable resources that enhance classroom instruction,
            theological reflection, and practical ministry. Students are
            encouraged to utilize the library throughout their academic
            journey to strengthen their knowledge, research skills, and
            spiritual growth.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Available Resources
            </h3>

            <p className="leading-8 text-slate-200">
              Access textbooks, scholarly publications, recorded lectures,
              research materials, course notes, and other digital resources
              that support academic excellence and ministry preparation.
            </p>

          </div>

        </div>

        </section>

        {/* 4. Forms */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <FileText className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Forms
            </h2>

            <p className="mt-2 text-slate-500">
              Academic and administrative forms for student services.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies provides a variety
            of academic and administrative forms to support students
            throughout their educational journey. These forms are designed
            to ensure efficient communication, accurate record-keeping, and
            timely processing of academic and student service requests.
          </p>

          <p>
            Students may access forms for admissions, course registration,
            scholarship applications, academic advising, transcript
            requests, graduation applications, leave of absence, program
            changes, and other academic or administrative services. All
            forms are available through the School's online platform and
            should be completed and submitted in accordance with the
            published institutional policies and deadlines.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Student Services
            </h3>

            <p className="leading-8 text-slate-200">
              Forms support admissions, registration, scholarships,
              transcripts, graduation, academic advising, program changes,
              and many other institutional services.
            </p>

          </div>

        </div>

        </section>

        {/* 5. Academic Advising */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Advising
            </h2>

            <p className="mt-2 text-slate-500">
              Personalized guidance for academic, ministry, and professional success.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            supporting every student's academic, spiritual, and professional
            development through personalized academic advising. Our academic
            advisors work closely with students to provide guidance on
            program planning, course selection, academic progress,
            graduation requirements, and career or ministry pathways.
          </p>

          <p>
            Academic advising is designed to help students achieve their
            educational goals while ensuring successful progression through
            their chosen program of study. Through ongoing support,
            mentoring, and academic guidance, advisors encourage students
            to make informed decisions, overcome academic challenges, and
            maximize their potential for leadership, ministry, and lifelong
            learning.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Advising Commitment
            </h3>

            <p className="leading-8 text-slate-200">
              Every student receives academic guidance, mentorship, and
              personalized support to successfully complete their studies
              and prepare for effective Christian leadership and ministry.
            </p>

          </div>

        </div>

        </section>

      </div>

    </main>
  );
}