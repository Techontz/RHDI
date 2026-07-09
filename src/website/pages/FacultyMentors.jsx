import React from "react";
import {
  Users,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function FacultyMentors() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-[#061C3F] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2">

            <Users className="w-4 h-4 text-[#C79A2B]" />

            RHDI School of Theology & Biblical Studies

          </div>

          <h1 className="mt-8 text-5xl font-black">
            Faculty & Mentors
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Dedicated Christian educators, ministry leaders, scholars,
            and mentors committed to academic excellence, biblical truth,
            servant leadership, and spiritual formation.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* 1. Faculty Introduction */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Users className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Faculty Introduction
            </h2>

            <p className="mt-2 text-slate-500">
              Dedicated Christian educators, ministry leaders, scholars, and mentors.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The faculty of the RHDI School of Theology & Biblical Studies is
            composed of dedicated Christian educators, experienced ministry
            leaders, scholars, and mentors who are committed to academic
            excellence, biblical truth, and spiritual formation. Our faculty
            members bring together theological knowledge, practical ministry
            experience, leadership expertise, and a passion for developing the
            next generation of Christ-centered leaders.
          </p>

          <p>
            Through quality instruction, personal mentorship, and faithful
            Christian service, our faculty strive to create a dynamic learning
            environment that encourages academic achievement, spiritual growth,
            critical thinking, and practical ministry effectiveness. They are
            committed to equipping students with the knowledge, skills, and
            character necessary to faithfully serve the Church, strengthen
            communities, and advance the Kingdom of God.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Our Commitment
            </h3>

            <p className="leading-8 text-slate-200">
              Our faculty are committed to nurturing biblically grounded,
              spiritually mature, and transformational Christian leaders
              through academic excellence, servant leadership, mentorship,
              and faithful ministry.
            </p>

          </div>

        </div>

        </section>

        {/* 2. Qualifications */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Qualifications
            </h2>

            <p className="mt-2 text-slate-500">
              High academic standards and experienced Christian leadership.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            maintaining high academic and ministry standards by engaging
            qualified faculty members who demonstrate academic competence,
            biblical integrity, spiritual maturity, and practical ministry
            experience. Faculty are selected based on their educational
            qualifications, leadership abilities, teaching effectiveness,
            Christian character, and commitment to the mission and values
            of the School.
          </p>

          <p>
            Our faculty are expected to possess appropriate academic
            credentials in their respective fields, relevant ministry and
            leadership experience, a commitment to lifelong learning, and
            the ability to mentor and inspire students. Through professional
            excellence, ethical leadership, and faithful Christian service,
            they contribute to a learning environment that prepares students
            for effective ministry, leadership, and community transformation.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Faculty Expectations
            </h3>

            <div className="space-y-4">

              {[
                "Appropriate Academic Credentials",
                "Relevant Ministry Experience",
                "Teaching Excellence",
                "Biblical Integrity",
                "Spiritual Maturity",
                "Leadership Competence",
                "Commitment to Lifelong Learning",
                "Mentorship and Student Development",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

        </section>

        {/* 3. Mentorship */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <HeartHandshake className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Mentorship
            </h2>

            <p className="mt-2 text-slate-500">
              Developing students through personal guidance and servant leadership.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            Mentorship is a core component of the educational experience at
            the RHDI School of Theology & Biblical Studies. We believe that
            effective theological education is strengthened through meaningful
            relationships between students and experienced faculty, ministry
            leaders, and mentors who provide academic guidance, spiritual
            encouragement, leadership development, and practical ministry
            support.
          </p>

          <p>
            Our mentorship model is designed to help students grow in
            biblical knowledge, Christ-like character, ministry competence,
            and servant leadership. Through regular interaction, personal
            guidance, prayer, coaching, and ministry engagement, mentors
            encourage students to discover their God-given calling, develop
            their leadership potential, and faithfully serve the Church and
            their communities with wisdom, integrity, and compassion.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Mentorship Focus
            </h3>

            <p className="leading-8 text-slate-200">
              Academic guidance, spiritual encouragement, leadership
              development, practical ministry support, and Christ-centered
              personal growth remain central to our mentorship philosophy.
            </p>

          </div>

        </div>

        </section>

        {/* 4. Academic Leadership */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <ShieldCheck className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Leadership
            </h2>

            <p className="mt-2 text-slate-500">
              Visionary leadership dedicated to excellence in theological education.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The academic leadership of the RHDI School of Theology & Biblical
            Studies is committed to providing visionary leadership, academic
            excellence, and faithful stewardship in all areas of theological
            education. Guided by biblical principles and a commitment to
            institutional integrity, the School strives to foster a
            Christ-centered learning environment that promotes scholarship,
            spiritual formation, innovation, and transformational leadership.
          </p>

          <p>
            The Academic Leadership Team provides strategic direction for
            curriculum development, academic quality assurance, faculty
            support, student success, and institutional growth. Working
            collaboratively with faculty, mentors, and ministry partners,
            the team is dedicated to ensuring that every academic program
            reflects the highest standards of theological education while
            preparing graduates to serve the Church, strengthen communities,
            and advance the Kingdom of God with excellence, integrity, and
            servant leadership.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Leadership Commitment
            </h3>

            <p className="leading-8 text-slate-200">
              Our academic leadership is committed to strengthening academic
              excellence, faculty development, student success, institutional
              integrity, and transformational Christian leadership for the
              advancement of God's Kingdom.
            </p>

          </div>

        </div>

        </section>

      </div>

    </main>
  );
}