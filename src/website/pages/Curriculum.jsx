import React from "react";
import {
  BookOpen,
  GraduationCap,
  Award,
  School,
  CheckCircle2,
  ArrowDown,
  Briefcase,
  Library,
  Clock3,
  Target,
  Hash,
} from "lucide-react";

/**
 * Curriculum.tsx
 *
 * This file is a scaffold containing all required sections from the
 * specification you provided. Replace or expand the placeholder text
 * in each section with the full institutional wording as needed.
 */

export default function Curriculum() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#061C3F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2">
            <BookOpen className="w-4 h-4 text-[#C79A2B]" />
            RHDI School of Theology & Biblical Studies
          </div>

          <h1 className="mt-8 text-5xl font-black">
            Curriculum
          </h1>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8">
            Christ-centered academic pathways from Certificate through Doctoral
            studies with biblical scholarship, leadership development,
            spiritual formation, and practical ministry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* 1. Academic Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Programs
            </h2>

            <p className="text-slate-500 mt-2">
              Progressive theological education pathways.
            </p>
          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies offers a comprehensive
            range of Christ-centered academic programs designed to equip students
            with biblical knowledge, theological understanding, spiritual
            formation, leadership skills, and practical ministry experience.
            Our programs are structured to provide progressive academic pathways
            that prepare learners for effective Christian service, ministry
            leadership, and lifelong learning.
          </p>

          <p>
            Whether beginning with foundational biblical studies or pursuing
            advanced theological education, students are equipped through
            academically rigorous, biblically grounded, and ministry-focused
            programs that promote personal growth, professional excellence,
            and transformational leadership.
          </p>

          <h3 className="text-2xl font-semibold text-[#061C3F]">
            Academic Programs Offered
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {[
              "Certificate Programs",
              "Diploma Programs",
              "Bachelor's Degree Programs",
              "Master's Degree Programs",
              "Doctoral Degree Programs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-slate-50 p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                <span>{item}</span>

              </div>
            ))}

          </div>

          <p>
            Each program is carefully designed to integrate biblical scholarship,
            theological reflection, spiritual formation, leadership development,
            and practical ministry, preparing graduates to faithfully serve
            churches, ministries, educational institutions, nonprofit
            organizations, and communities around the world.
          </p>

        </div>

        </section>

        {/* 2. Certificate Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Award className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Certificate Programs
            </h2>

            <p className="mt-2 text-slate-500">
              Building a strong biblical foundation for ministry, leadership, and
              lifelong spiritual growth.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Certificate Programs at the RHDI School of Theology &
            Biblical Studies are designed to provide a strong biblical
            and theological foundation for individuals seeking personal
            spiritual growth, ministry preparation, and leadership
            development. These programs equip students with essential
            knowledge of the Holy Scriptures, Christian doctrine,
            discipleship, and practical ministry while establishing a
            solid foundation for further theological education.
          </p>

          <p>
            Certificate Programs are ideal for pastors, church leaders,
            ministry workers, Christian educators, youth leaders, and
            believers who desire to strengthen their biblical
            understanding and ministry effectiveness.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-4">
              Upon Successful Completion
            </h3>

            <div className="space-y-4">

              {[
                "Foundational biblical knowledge",
                "Sound understanding of Christian doctrine",
                "Spiritual maturity and Christ-like character",
                "Practical ministry skills",
                "Leadership competencies for Christian service",
                "Preparation for continued theological education",
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

          <p>
            Graduates will possess the foundational knowledge, spiritual
            maturity, and practical skills necessary to serve faithfully
            in churches, ministries, organizations, and communities while
            pursuing continued academic and ministry development.
          </p>

        </div>

        </section>

        {/* 3. Diploma Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <School className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Diploma Programs
            </h2>

            <p className="mt-2 text-slate-500">
              Comprehensive theological education for Christian leadership,
              ministry excellence, and community transformation.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Diploma Programs at the RHDI School of Theology & Biblical
            Studies provide comprehensive theological education that builds
            upon foundational biblical studies and prepares students for
            effective Christian ministry, leadership, and community service.
            These programs combine biblical scholarship, theological
            reflection, spiritual formation, and practical ministry training
            to develop competent and Christ-centered leaders.
          </p>

          <p>
            Students are equipped with a deeper understanding of Scripture,
            Christian doctrine, ministry leadership, pastoral care,
            discipleship, and servant leadership while strengthening their
            ability to apply biblical principles in diverse ministry and
            community settings.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-4">
              Program Focus
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Biblical Scholarship",
                "Theological Reflection",
                "Spiritual Formation",
                "Practical Ministry Training",
                "Christian Doctrine",
                "Ministry Leadership",
                "Pastoral Care",
                "Discipleship & Servant Leadership",
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

          <p>
            The Diploma Programs also provide a strong academic pathway for
            students who wish to advance to Bachelor's Degree studies and
            expand their leadership and ministry responsibilities.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Graduate Preparation
            </h3>

            <p className="leading-8 text-slate-200">
              Graduates of the Diploma Programs will be prepared to serve
              with integrity, wisdom, and excellence in churches,
              ministries, educational institutions, nonprofit organizations,
              and community development initiatives while making a
              meaningful impact through faithful Christian service.
            </p>

          </div>

        </div>

        </section>

        {/* 4. Bachelor's Degree Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Bachelor's Degree Programs
            </h2>

            <p className="mt-2 text-slate-500">
              Advanced theological education for Christian leadership, ministry,
              teaching, missions, counseling, and community transformation.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Bachelor's Degree Programs at the RHDI School of Theology &
            Biblical Studies are designed to provide advanced theological
            education that prepares students for Christian leadership,
            ministry, teaching, missions, counseling, and community
            transformation. These programs combine rigorous academic study,
            biblical scholarship, spiritual formation, leadership
            development, and practical ministry experience to equip graduates
            for effective service in an increasingly complex and diverse
            world.
          </p>

          <p>
            Students engage in comprehensive studies of the Holy Scriptures,
            Christian theology, leadership, ministry, ethics, research, and
            practical application while developing critical thinking,
            biblical interpretation, and servant leadership skills. Through
            a balanced integration of faith and learning, graduates are
            prepared to lead with integrity, wisdom, and biblical conviction
            in churches, educational institutions, nonprofit organizations,
            and community-based ministries.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Areas of Advanced Study
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Holy Scriptures",
                "Christian Theology",
                "Christian Leadership",
                "Ministry Studies",
                "Christian Ethics",
                "Theological Research",
                "Biblical Interpretation",
                "Practical Ministry",
                "Critical Thinking",
                "Servant Leadership",
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
              Graduate Pathway & Leadership Impact
            </h3>

            <p className="leading-8 text-slate-200">
              The Bachelor's Degree Programs also provide a strong academic
              foundation for graduate-level theological education while
              preparing students to become transformational leaders who
              faithfully proclaim the Gospel, strengthen the Church, and
              positively impact communities and nations through
              Christ-centered leadership and service.
            </p>

          </div>

        </div>

        </section>

        {/* 5. Master's Degree Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Master's Degree Programs
            </h2>

            <p className="mt-2 text-slate-500">
              Advanced theological scholarship, leadership development,
              and specialized ministry preparation.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Master's Degree Programs at the RHDI School of Theology &
            Biblical Studies are designed for graduates, ministry leaders,
            pastors, educators, and Christian professionals who seek
            advanced theological knowledge, leadership development, and
            specialized ministry preparation. These programs provide an
            academically rigorous and Christ-centered learning experience
            that integrates biblical scholarship, theological research,
            spiritual formation, and practical ministry.
          </p>

          <p>
            Students engage in advanced studies that strengthen their
            ability to interpret Scripture, address contemporary
            theological issues, conduct scholarly research, and provide
            strategic leadership within churches, educational institutions,
            nonprofit organizations, and community initiatives. The
            curriculum encourages critical thinking, ethical
            decision-making, and the integration of biblical principles
            into leadership and ministry practice.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Areas of Specialization
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Biblical Scholarship",
                "Theological Research",
                "Strategic Christian Leadership",
                "Spiritual Formation",
                "Practical Ministry",
                "Critical Thinking",
                "Ethical Decision-Making",
                "Leadership & Ministry Integration",
              ].map((item) => (

                <div key={item} className="flex items-start gap-3">

                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Graduate Preparation
            </h3>

            <p className="leading-8 text-slate-200">
              Graduates of the Master's Degree Programs are equipped to
              serve as effective leaders, educators, mentors,
              researchers, and ministry practitioners who demonstrate
              academic excellence, spiritual maturity, servant
              leadership, and a lifelong commitment to advancing the
              Gospel and strengthening the Church in a global context.
            </p>

          </div>

        </div>

        </section>

        {/* 6. Doctoral Degree Programs */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <GraduationCap className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Doctoral Degree Programs
            </h2>

            <p className="mt-2 text-slate-500">
              Preparing Christian scholars, researchers, and visionary
              leaders for global ministry and theological scholarship.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Doctoral Degree Programs at the RHDI School of Theology &
            Biblical Studies are designed to prepare highly qualified
            Christian scholars, educators, ministry leaders, and
            researchers for advanced leadership, theological
            scholarship, and global ministry. These programs emphasize
            academic excellence, original research, biblical
            scholarship, strategic leadership, and practical ministry
            application.
          </p>

          <p>
            Students engage in advanced theological study, critical
            research, and scholarly writing while addressing
            contemporary issues affecting the Church, Christian
            leadership, and society. Through rigorous academic
            training, mentorship, and dissertation research,
            graduates develop the expertise required to contribute
            meaningfully to theological education, ministry
            innovation, leadership development, and community
            transformation.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Doctoral Focus Areas
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Original Research",
                "Biblical Scholarship",
                "Strategic Leadership",
                "Scholarly Writing",
                "Theological Education",
                "Dissertation Research",
                "Leadership Development",
                "Community Transformation",
              ].map((item) => (

                <div key={item} className="flex items-start gap-3">

                  <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Graduate Impact
            </h3>

            <p className="leading-8 text-slate-200">
              Graduates are equipped to serve as theological
              educators, senior ministry leaders, researchers,
              consultants, and Christian thought leaders who
              advance biblical truth, strengthen the Church,
              mentor future generations, and provide visionary
              leadership that impacts communities and nations
              for the glory of God.
            </p>

          </div>

        </div>

        </section>

        {/* 7. Academic Pathway */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <ArrowDown className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Academic Pathway
            </h2>

            <p className="mt-2 text-slate-500">
              A progressive journey of theological education,
              leadership development, and lifelong learning.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies
            provides a structured academic pathway that
            supports continuous learning and professional
            development in theological education. Each level
            of study builds upon the previous one, enabling
            students to progressively expand their biblical
            knowledge, theological understanding, leadership
            competencies, research skills, and practical
            ministry experience.
          </p>

          <p>
            Students begin with foundational studies through
            Certificate Programs, advance to Diploma Programs,
            continue into Bachelor's Degree Programs, pursue
            specialized Master's Degree Programs, and
            ultimately achieve the highest level of academic
            and theological scholarship through Doctoral
            Degree Programs.
          </p>

          <div className="rounded-3xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-8">

            <h3 className="text-2xl font-bold text-center text-[#061C3F] mb-8">
              Academic Progression
            </h3>

            <div className="flex flex-col items-center gap-5">

              {[
                "Certificate Programs",
                "Diploma Programs",
                "Bachelor's Degree Programs",
                "Master's Degree Programs",
                "Doctoral Degree Programs",
              ].map((item, index, array) => (
                <React.Fragment key={item}>

                  <div className="rounded-2xl bg-white border px-8 py-4 font-semibold shadow-sm">
                    {item}
                  </div>

                  {index < array.length - 1 && (
                    <ArrowDown className="w-7 h-7 text-[#C79A2B]" />
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Lifelong Learning
            </h3>

            <p className="leading-8 text-slate-200">
              Each academic level is designed to prepare
              students for greater knowledge, deeper spiritual
              formation, increased leadership responsibility,
              and more effective Christian ministry while
              promoting lifelong learning and academic
              excellence.
            </p>

          </div>

        </div>

        </section>

        {/* 8. Career Opportunities */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Briefcase className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Career Opportunities
            </h2>

            <p className="mt-2 text-slate-500">
              Preparing graduates for Christian leadership, ministry,
              education, nonprofit service, and community transformation.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            Graduates of the RHDI School of Theology & Biblical Studies are
            equipped with the biblical knowledge, theological understanding,
            leadership competencies, and practical ministry skills necessary
            to serve in a wide range of ministry, educational, nonprofit,
            and community leadership roles. The School prepares graduates to
            make meaningful contributions through faithful Christian service,
            ethical leadership, and lifelong learning.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Career Opportunities
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Pastor and Associate Pastor",
                "Church Leader and Ministry Director",
                "Bible Teacher and Christian Educator",
                "Missionary and Evangelist",
                "Christian Counselor",
                "Chaplain",
                "Discipleship and Leadership Trainer",
                "Youth and Family Ministry Leader",
                "Worship and Ministry Coordinator",
                "Community Development Practitioner",
                "Nonprofit Organization Leader",
                "Program Coordinator and Project Manager",
                "Researcher and Theological Writer",
                "Seminary or Bible College Lecturer",
                "Faith-Based Organizational Consultant",
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
              Graduate Advancement
            </h3>

            <p className="leading-8 text-slate-200">
              Graduates are also prepared for advanced theological studies,
              leadership development, ministry innovation, and community
              engagement, enabling them to faithfully serve the Church and
              contribute to the transformation of communities and nations
              through Christ-centered leadership.
            </p>

          </div>

        </div>

        </section>

        {/* 9. Course Catalog */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Library className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Course Catalog
            </h2>

            <p className="mt-2 text-slate-500">
              A comprehensive guide to academic courses and learning pathways.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The Course Catalog of the RHDI School of Theology &
            Biblical Studies provides a comprehensive overview of
            all academic courses offered within our Certificate,
            Diploma, Bachelor's, Master's, and Doctoral programs.
            Each course is carefully designed to promote biblical
            knowledge, theological understanding, spiritual
            formation, leadership development, and practical
            ministry skills.
          </p>

          <p>
            Our curriculum integrates academic excellence with
            biblical truth, preparing students to faithfully
            serve the Church, strengthen communities, and
            provide transformational leadership in a global
            context. Courses are structured to support
            progressive learning, enabling students to build
            a strong theological foundation while advancing
            toward higher levels of academic achievement and
            ministry effectiveness.
          </p>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Official Academic Guide
            </h3>

            <p className="leading-8 text-slate-200">
              The Course Catalog serves as the official guide
              to academic content, learning objectives, and
              educational pathways available through the RHDI
              School of Theology & Biblical Studies, ensuring
              that every student receives a well-rounded,
              Christ-centered theological education.
            </p>

          </div>

        </div>

        </section>

        {/* 10. Credit Hours */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Clock3 className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Credit Hours
            </h2>

            <p className="mt-2 text-slate-500">
              Structured academic credit requirements supporting
              quality theological education.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies
            follows a structured credit hour system designed
            to ensure academic quality, student engagement,
            and progressive learning across all academic
            programs. Credit hours are assigned based on
            academic level, learning outcomes, instructional
            time, practical ministry requirements,
            independent study, and student workload.
          </p>

          <p>
            The School utilizes semester credit hours to
            measure academic progress and degree completion
            requirements. Each course is assigned a specific
            number of credit hours that contribute toward
            successful completion of Certificate, Diploma,
            Bachelor's, Master's, and Doctoral degree
            programs.
          </p>

          <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Program Credit Requirements
            </h3>

            <div className="space-y-4">

              {[
                "Certificate Programs – 30 Semester Credit Hours",
                "Diploma Programs – 60 Semester Credit Hours",
                "Bachelor's Degree Programs – 120 Semester Credit Hours",
                "Master's Degree Programs – 36–48 Semester Credit Hours",
                "Doctoral Degree Programs – 48–60 Semester Credit Hours (including dissertation or doctoral research requirements)",
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
              Graduation Requirements
            </h3>

            <p className="leading-8 text-slate-200">
              Students must successfully complete all required
              credit hours, academic requirements, ministry
              practicum, and graduation requirements before a
              certificate or degree is awarded. The credit
              hour system promotes academic excellence,
              biblical scholarship, spiritual formation,
              practical ministry preparation, and lifelong
              learning.
            </p>

          </div>

        </div>

        </section>

        {/* 11. Learning Outcomes */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Target className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Learning Outcomes
            </h2>

            <p className="mt-2 text-slate-500">
              Knowledge, skills, values, and competencies developed through the
              RHDI School of Theology & Biblical Studies.
            </p>

          </div>

        </div>

        <div className="space-y-6 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies is committed to
            developing graduates who are biblically grounded, spiritually
            mature, academically competent, and equipped for effective
            Christian leadership and ministry. Upon successful completion of
            their program of study, students will have acquired the knowledge,
            skills, values, and practical competencies necessary to faithfully
            serve the Church, strengthen communities, and contribute to the
            advancement of God's Kingdom.
          </p>

          <h3 className="text-2xl font-semibold text-[#061C3F]">
            Graduates Will Be Able To
          </h3>

          <div className="grid lg:grid-cols-2 gap-5">

            {[
              "Demonstrate a comprehensive understanding of the Holy Scriptures and apply sound principles of biblical interpretation.",
              "Explain and apply the major doctrines of the Christian faith with biblical accuracy and theological integrity.",
              "Exhibit Christ-like character, spiritual maturity, ethical conduct, and servant leadership in all areas of life and ministry.",
              "Communicate biblical truth effectively through preaching, teaching, discipleship, counseling, and Christian leadership.",
              "Apply theological knowledge and practical ministry skills to churches, ministries, nonprofit organizations, and community development initiatives.",
              "Demonstrate critical thinking, theological reflection, academic research, and effective written and oral communication.",
              "Engage diverse cultures and communities with wisdom, compassion, and a biblical worldview while promoting reconciliation, justice, and holistic transformation.",
              "Integrate faith, leadership, and professional excellence in addressing contemporary challenges facing the Church and society.",
              "Demonstrate a lifelong commitment to spiritual growth, continuous learning, faithful Christian service, and the advancement of the Gospel of Jesus Christ.",
              "Serve as transformational leaders who uphold biblical truth, strengthen the Church, mentor future generations, and positively impact communities and nations for the glory of God.",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-slate-50 p-5 flex items-start gap-3"
              >

                <CheckCircle2 className="w-5 h-5 mt-1 text-[#C79A2B]" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

        </section>

        {/* 12. Course Codes & Numbering System */}

        <section className="rounded-3xl border bg-white shadow-sm p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="rounded-2xl bg-[#061C3F]/10 p-4">
            <Hash className="w-8 h-8 text-[#C79A2B]" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#061C3F]">
              Course Codes & Numbering System
            </h2>

            <p className="mt-2 text-slate-500">
              Standardized course identification supporting academic
              organization, progression, and curriculum management.
            </p>

          </div>

        </div>

        <div className="space-y-8 text-slate-700 leading-9">

          <p>
            The RHDI School of Theology & Biblical Studies utilizes a
            standardized course coding and numbering system to ensure
            academic organization, consistency, and effective program
            administration. Each course is assigned a unique course code
            that identifies its academic discipline, level of study, and
            sequence within the curriculum. This system enables students,
            faculty, and academic advisors to easily identify course
            requirements, prerequisites, and program progression.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

              <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
                Course Prefixes
              </h3>

              <div className="space-y-3">

                {[
                  "BIB – Biblical Studies",
                  "THEO – Theology",
                  "MIN – Ministry",
                  "CHL – Christian Leadership",
                  "CED – Christian Education",
                  "CCN – Christian Counseling",
                  "MIS – Missions",
                  "ETH – Christian Ethics",
                  "RES – Research Methods",
                  "PRC – Ministry Practicum",
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

            <div className="rounded-2xl border border-[#C79A2B]/30 bg-[#C79A2B]/5 p-6">

              <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
                Course Numbering
              </h3>

              <div className="space-y-3">

                {[
                  "100 Level – Foundational Courses (Certificate Level)",
                  "200 Level – Intermediate Courses (Diploma Level)",
                  "300 Level – Advanced Undergraduate Courses (Bachelor's Level)",
                  "400 Level – Senior Undergraduate and Advanced Ministry Courses",
                  "500 Level – Graduate Courses (Master's Level)",
                  "600 Level – Advanced Graduate and Research Courses",
                  "700 Level – Doctoral Coursework",
                  "800 Level – Doctoral Research, Dissertation, and Advanced Seminar Courses",
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

          </div>

          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-semibold text-[#061C3F] mb-5">
              Course Code Examples
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "BIB 101 – Introduction to the Holy Bible",
                "BIB 201 – Old Testament Survey",
                "THEO 301 – Systematic Theology I",
                "MIN 401 – Pastoral Ministry",
                "CHL 501 – Advanced Christian Leadership",
                "RES 601 – Research Methods in Theology",
                "THEO 701 – Advanced Theological Studies",
                "RES 801 – Doctoral Dissertation Research",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl bg-slate-50 border p-4"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          <div className="rounded-2xl bg-[#061C3F] text-white p-6">

            <h3 className="text-xl font-semibold mb-4">
              Academic Standardization
            </h3>

            <p className="leading-8 text-slate-200">
              This standardized coding system promotes academic clarity,
              facilitates student progression, supports curriculum
              management, and aligns the School's academic structure with
              internationally recognized higher education practices.
            </p>

          </div>

        </div>

        </section>
      </div>
    </main>
  );
}
