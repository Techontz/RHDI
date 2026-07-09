import React from "react";
import {
  Monitor,
  Video,
  Church,
  Search,
  ClipboardCheck,
  LibraryBig,
  CheckCircle2,
} from "lucide-react";

export default function LearningApproach() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#061C3F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2">
            <Monitor className="w-4 h-4 mr-2 text-[#C79A2B]" />
            RHDI School of Theology & Biblical Studies
          </span>

          <h1 className="mt-8 text-5xl font-black">
            Learning Approach
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Flexible, Christ-centered theological education combining online
            learning, live instruction, ministry practice, research, assessment,
            and comprehensive learning resources.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* 1. Online Learning */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Monitor className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Online Learning
            </h2>

            <p className="mt-2 text-slate-500">
              Flexible, accessible, and Christ-centered theological education for
              students worldwide.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies offers a flexible and
            accessible online learning environment designed to provide high-quality
            theological education to students around the world. Through a secure
            digital learning platform, students can access course materials,
            lectures, assignments, assessments, and academic resources from any
            location while maintaining a structured and engaging learning
            experience.
          </p>

          <p>
            Our online learning model combines academic excellence, biblical
            scholarship, spiritual formation, and practical ministry training,
            enabling students to balance their educational journey with their
            personal, professional, and ministry responsibilities. This flexible
            approach ensures that learners receive a Christ-centered education
            without geographical limitations while becoming part of a global
            community committed to biblical truth, leadership development, and
            lifelong learning.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Key Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Flexible online learning from anywhere in the world",
                "Secure digital learning platform",
                "Access to lectures, assignments, and academic resources",
                "Structured and engaging learning experience",
                "Balanced learning for ministry, work, and family responsibilities",
                "Academic excellence integrated with biblical scholarship",
                "Spiritual formation and practical ministry training",
                "Global Christ-centered learning community",
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
              Our Commitment
            </h3>

            <p className="leading-8 text-slate-200">
              We are committed to providing accessible, high-quality theological
              education that equips students with biblical knowledge, spiritual
              maturity, leadership competencies, and practical ministry skills
              through a flexible online learning experience that prepares them for
              faithful Christian service and lifelong learning.
            </p>

          </div>

        </div>

        </section>
        {/* 2. Zoom Learning */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Video className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Zoom Learning
            </h2>

            <p className="mt-2 text-slate-500">
              Interactive live virtual classrooms that connect students,
              faculty, and ministry leaders from around the world.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies utilizes Zoom as
            its primary live virtual classroom platform, providing students
            with an interactive and engaging learning experience regardless
            of their geographical location. Live online classes enable
            students to participate in lectures, discussions, seminars,
            group activities, prayer sessions, and real-time interaction
            with faculty members and fellow students.
          </p>

          <p>
            Through Zoom Learning, students benefit from direct instruction,
            academic mentoring, collaborative learning, and meaningful
            classroom engagement while maintaining the flexibility of online
            education. This approach promotes active participation,
            strengthens the learning community, and supports both academic
            excellence and spiritual formation in a dynamic and
            Christ-centered environment.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Zoom Learning Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Live online lectures",
                "Interactive classroom discussions",
                "Seminars and workshops",
                "Group learning activities",
                "Prayer sessions",
                "Real-time faculty interaction",
                "Academic mentoring",
                "Collaborative learning environment",
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
              Learning Experience
            </h3>

            <p className="leading-8 text-slate-200">
              Zoom Learning strengthens the global RHDI learning community
              by promoting active participation, meaningful engagement,
              spiritual formation, and academic excellence within a
              flexible Christ-centered learning environment.
            </p>

          </div>

        </div>

        </section>

        {/* 3. Ministry Practicum */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Church className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Ministry Practicum
            </h2>

            <p className="mt-2 text-slate-500">
              Practical ministry experience that transforms classroom
              learning into real-world Christian service.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Ministry Practicum at the RHDI School of Theology &
            Biblical Studies provides students with supervised,
            hands-on ministry experience that integrates biblical
            knowledge with practical application. Through guided
            ministry placements, students apply classroom learning
            in real ministry settings while developing leadership,
            pastoral care, discipleship, teaching, evangelism,
            counseling, and community engagement skills.
          </p>

          <p>
            The practicum is designed to strengthen spiritual
            maturity, ministry competence, and servant leadership
            by allowing students to serve under the guidance of
            qualified mentors and experienced ministry leaders.
            This experiential learning component prepares graduates
            to confidently lead, serve, and make a meaningful
            impact in churches, ministries, nonprofit organizations,
            and communities around the world.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Ministry Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Supervised ministry placements",
                "Leadership development",
                "Pastoral care",
                "Discipleship",
                "Teaching ministry",
                "Evangelism",
                "Christian counseling",
                "Community engagement",
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
              Practical Ministry Impact
            </h3>

            <p className="leading-8 text-slate-200">
              Through guided ministry practice and mentorship,
              students develop the confidence, spiritual maturity,
              leadership competence, and servant-hearted character
              required to faithfully serve churches, ministries,
              organizations, and communities around the world.
            </p>

          </div>

        </div>

        </section>

        {/* 4. Research */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Search className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Research
            </h2>

            <p className="mt-2 text-slate-500">
              Developing biblical scholarship, critical thinking, and academic
              excellence through Christ-centered research.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            Research is an integral part of the academic experience at the
            RHDI School of Theology & Biblical Studies. Students are
            encouraged to develop strong research, critical thinking, and
            academic writing skills while exploring biblical, theological,
            leadership, and ministry-related topics from a Christ-centered
            perspective.
          </p>

          <p>
            Through guided research projects, scholarly writing, and faculty
            supervision, students learn to investigate theological issues,
            interpret biblical texts responsibly, and apply research findings
            to contemporary ministry and community challenges. The School is
            committed to fostering a culture of academic inquiry,
            intellectual integrity, and lifelong learning that prepares
            graduates to contribute meaningfully to theological scholarship,
            Christian leadership, and transformational ministry.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Research Focus Areas
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Biblical Research",
                "Theological Studies",
                "Critical Thinking",
                "Academic Writing",
                "Scholarly Research Projects",
                "Faculty Supervision",
                "Leadership & Ministry Studies",
                "Contemporary Ministry Challenges",
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
              Research Excellence
            </h3>

            <p className="leading-8 text-slate-200">
              The School promotes a culture of academic inquiry, intellectual
              integrity, and lifelong learning that equips graduates to make
              meaningful contributions to theological scholarship, Christian
              leadership, and transformational ministry.
            </p>

          </div>

        </div>

        </section>

        {/* 5. Student Assessment */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <ClipboardCheck className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Student Assessment
            </h2>

            <p className="mt-2 text-slate-500">
              Comprehensive assessment that measures academic achievement,
              spiritual formation, leadership growth, and ministry readiness.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            maintaining high academic standards through a comprehensive and
            continuous student assessment process. Assessment is designed to
            evaluate students' biblical knowledge, theological
            understanding, critical thinking, spiritual formation,
            leadership development, and practical ministry competencies
            throughout their academic journey.
          </p>

          <p>
            Students are assessed through a variety of methods, including
            assignments, quizzes, examinations, research papers,
            presentations, ministry practicum, class participation, and
            capstone projects. These assessment methods ensure that students
            not only achieve academic excellence but also demonstrate the
            knowledge, skills, character, and ministry readiness required
            for effective Christian leadership and faithful service in
            churches, ministries, organizations, and communities.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Assessment Methods
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Assignments",
                "Quizzes",
                "Examinations",
                "Research Papers",
                "Presentations",
                "Ministry Practicum",
                "Class Participation",
                "Capstone Projects",
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
              Assessment Philosophy
            </h3>

            <p className="leading-8 text-slate-200">
              Our assessment approach ensures that graduates demonstrate
              academic excellence, biblical understanding, Christ-like
              character, leadership competence, and practical ministry
              readiness to faithfully serve churches, ministries,
              organizations, and communities around the world.
            </p>

          </div>

        </div>

        </section>

        {/* 6. Learning Resources */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <LibraryBig className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Learning Resources
            </h2>

            <p className="mt-2 text-slate-500">
              Comprehensive academic and ministry resources that support
              learning, spiritual growth, and lifelong development.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies provides a wide
            range of learning resources to support students throughout their
            academic and spiritual journey. These resources are designed to
            enhance biblical understanding, theological education, academic
            success, and practical ministry development in a flexible and
            engaging learning environment.
          </p>

          <p>
            Students have access to digital course materials, online
            lectures, recommended textbooks, academic publications,
            research resources, recorded class sessions, and faculty
            guidance. In addition, the School offers academic advising,
            mentorship, collaborative learning opportunities, and online
            communication tools to ensure that every student receives the
            support needed to achieve academic excellence and ministry
            effectiveness.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Available Learning Resources
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Digital Course Materials",
                "Online Lectures",
                "Recommended Textbooks",
                "Academic Publications",
                "Research Resources",
                "Recorded Class Sessions",
                "Faculty Guidance",
                "Academic Advising",
                "Student Mentorship",
                "Collaborative Learning",
                "Online Communication Tools",
                "Academic & Ministry Support",
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
              Our Commitment
            </h3>

            <p className="leading-8 text-slate-200">
              We are committed to providing accessible, high-quality learning
              resources that encourage lifelong learning, spiritual growth,
              critical thinking, and faithful Christian leadership within a
              supportive global learning community.
            </p>

          </div>

        </div>

        </section>
      </div>
    </main>
  );
}
