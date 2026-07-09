import { useEffect, useState } from "react";

import {
  BookOpen,
  GraduationCap,
  Target,
  ShieldCheck,
  Star,
  Users,
  CheckCircle2,
  HeartHandshake,
  Globe2,
} from "lucide-react";

const purposeItems = [
  "Understand and interpret the Bible responsibly.",
  "Develop a strong foundation in Christian doctrine.",
  "Grow in spiritual maturity and Christ-like character.",
  "Strengthen leadership and ministry skills.",
  "Serve effectively in churches, ministries, and communities.",
  "Engage contemporary issues from a biblical perspective.",
  "Contribute to community transformation through faith, education, and service.",
];

const whyItems = [
  "Christ-Centered and Biblically Grounded Education",
  "Academic Excellence with Practical Ministry Training",
  "Flexible Online Learning with Live Interactive Classes",
  "Experienced Faculty, Mentors, and Ministry Leaders",
  "Leadership Development and Spiritual Formation",
  "Globally Focused Learning Community",
  "Practical Ministry and Community Engagement",
  "Affordable and Accessible Learning Opportunities",
  "Commitment to Integrity, Excellence, and Servant Leadership",
  "Preparation for Ministry, Leadership, and Lifelong Christian Service",
];

const highlightItems = [
  "Christ-Centered and Biblically Grounded Curriculum",
  "Comprehensive Theology and Biblical Studies Programs",
  "Certificate, Diploma, Bachelor's, Master's, and Doctoral Degree Pathways",
  "Flexible Online Learning with Live Interactive Classes",
  "Experienced Faculty, Mentors, and Ministry Leaders",
  "Leadership Development and Spiritual Formation",
  "Practical Ministry Experience and Field Practicum",
  "Research-Based Learning and Academic Excellence",
  "Global Learning Community with International Student Participation",
  "Student Mentorship and Academic Advising",
  "Community Engagement and Transformational Leadership Training",
  "Christian Counseling and Ministry Leadership Development",
  "Digital Learning Resources and Online Academic Support",
  "Opportunities for Ministry, Missions, and Community Service",
  "Academic Progression Pathways for Lifelong Learning",
  "Commitment to Integrity, Excellence, Servant Leadership, and Biblical Truth",
];

const designedForItems = [
  "Pastors and Church Leaders",
  "Associate and Assistant Pastors",
  "Evangelists and Missionaries",
  "Ministry Workers and Church Staff",
  "Bible Teachers and Christian Educators",
  "Youth and Young Adult Leaders",
  "Worship Leaders and Ministry Coordinators",
  "Christian Counselors and Caregivers",
  "Community and Nonprofit Leaders",
  "Christian Professionals Seeking Leadership Development",
  "Individuals Preparing for Full-Time Ministry",
  "Believers Seeking Spiritual Growth and Biblical Knowledge",
  "International Students Pursuing Theological Education",
  "Anyone with a Desire to Grow in Faith, Leadership, and Christian Service",
];

const impactItems = [
  "Develop a comprehensive understanding of the Bible and Christian theology.",
  "Demonstrate Christ-like character, spiritual maturity, and ethical leadership.",
  "Effectively teach, preach, and communicate biblical truth.",
  "Provide servant leadership within churches, ministries, and nonprofit organizations.",
  "Equip and mentor future Christian leaders and disciples.",
  "Promote biblical values that strengthen families, churches, and communities.",
  "Apply theological knowledge to real-world ministry and leadership challenges.",
  "Engage in evangelism, discipleship, missions, and community outreach.",
  "Foster unity, integrity, and transformational leadership in diverse cultural contexts.",
  "Make a lasting spiritual, social, and community impact through faithful Christian service.",
];

export default function ProgramOverview() {

  const sections = [
    { id: "overview", label: "Program Overview" },
    { id: "introduction", label: "Introduction" },
    { id: "purpose", label: "Purpose" },
    { id: "why", label: "Why Study With RHDI" },
    { id: "highlights", label: "Program Highlights" },
  ];

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-120px 0px -45% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061C3F] text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C79A2B25,transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/40 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <GraduationCap className="h-4 w-4 text-[#C79A2B]" />
              Theology & Biblical Studies
            </div>

            <h1 className="mt-6 text-4xl lg:text-6xl font-black leading-tight">
              Program Overview
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-200">
              The RHDI Theology & Biblical Studies Program is a Christ-centered
              academic and ministry training initiative designed to equip
              believers, church leaders, ministry workers, and emerging leaders
              with sound biblical knowledge, theological understanding,
              spiritual formation, and practical leadership skills.
            </p>

          </div>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Sidebar */}

          <aside className="lg:sticky lg:top-24 h-fit">

            <div className="rounded-3xl border bg-white shadow-sm">

              <div className="p-6 border-b">

                <h3 className="font-bold text-[#061C3F]">
                  Contents
                </h3>

              </div>

              <nav className="p-4 space-y-2 text-sm">

                {[
                  ["overview","Program Overview"],
                  ["introduction","Introduction"],
                  ["purpose","Purpose"],
                  ["why","Why Study With RHDI"],
                  ["highlights","Program Highlights"],
                  ["designed-for","Who This Program Is Designed For"],
                  ["impact","Expected Impact"],
                ].map(([id,label])=>(
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-xl px-4 py-3 hover:bg-slate-100 transition"
                  >
                    {label}
                  </a>
                ))}

              </nav>

            </div>

          </aside>

          {/* Content */}

          <div className="lg:col-span-3 space-y-12">

            {/* Program Overview */}

            <section
              id="overview"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <BookOpen className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Program Overview
                </h2>

              </div>

              <div className="space-y-6 text-slate-700 leading-9">

                <p>
                  The RHDI Theology & Biblical Studies Program is a
                  Christ-centered academic and ministry training initiative
                  designed to equip believers, church leaders, ministry workers,
                  and emerging leaders with sound biblical knowledge,
                  theological understanding, spiritual formation, and practical
                  leadership skills.
                </p>

                <p>
                  This program is part of Rehoboth Discipleship International
                  (RHDI), a faith-based, community-focused organization
                  committed to equipping leaders, empowering communities, and
                  transforming nations through discipleship, education,
                  leadership development, digital empowerment, and community
                  service.
                </p>

                <p>
                  The Theology & Biblical Studies Program provides learners with
                  a strong foundation in Scripture, Christian doctrine,
                  discipleship, ministry practice, and servant leadership. It is
                  designed to help students grow in biblical understanding,
                  develop Christ-centered character, and become effective
                  leaders who can serve churches, ministries, families,
                  organizations, and communities with integrity and excellence.
                </p>

                <p>
                  Through online learning, live interactive classes, guided
                  study, mentorship, and practical ministry application,
                  students are prepared not only to understand the Word of God,
                  but also to apply biblical truth in real-life ministry and
                  community settings.
                </p>

                <h3 className="text-2xl font-bold text-[#061C3F] pt-4">
                  Who This Program Is Designed For
                </h3>

                <p>
                  This program is designed for pastors, church leaders,
                  ministry workers, youth leaders, Bible teachers, community
                  leaders, Christian professionals, students, and believers who
                  desire to deepen their knowledge of Scripture and become more
                  effective in Christian service.
                </p>

                <p>
                  It is also suitable for individuals preparing for ministry,
                  those already serving in leadership roles, and those seeking
                  personal spiritual growth and biblical understanding.
                </p>

                <h3 className="text-2xl font-bold text-[#061C3F] pt-4">
                  Expected Impact
                </h3>

                <p>
                  Graduates and participants of the Theology & Biblical Studies
                  Program are expected to become biblically grounded,
                  spiritually mature, and practically equipped leaders. They
                  will be prepared to serve with wisdom, integrity, and
                  compassion in churches, ministries, organizations, and
                  communities.
                </p>

                <p>
                  Through this program, RHDI seeks to raise leaders who can
                  teach biblical truth, make disciples, strengthen families,
                  support communities, promote ethical leadership, and
                  contribute to lasting transformation in their nations.
                </p>

                <div className="rounded-2xl bg-[#061C3F] p-6 text-white">

                  <h4 className="font-bold text-xl mb-3">
                    Ultimate Goal
                  </h4>

                  <p className="text-slate-200">
                    The ultimate goal of the program is to equip biblical
                    leaders for global impact.
                  </p>

                </div>

              </div>

            </section>

            {/* Introduction */}

            <section
              id="introduction"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <GraduationCap className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Introduction to the Program
                </h2>

              </div>

              <div className="space-y-6 text-slate-700 leading-9">

                <p>
                  The RHDI Theology & Biblical Studies Program is a
                  Christ-centered academic and ministry training program
                  established by Rehoboth Discipleship International (RHDI) to
                  equip individuals with sound biblical knowledge,
                  theological understanding, spiritual maturity, and practical
                  leadership skills for effective Christian service.
                </p>

                <p>
                  The program is designed to provide high-quality theological
                  education that integrates biblical scholarship, spiritual
                  formation, leadership development, and practical ministry
                  experience within a flexible and accessible learning
                  environment.
                </p>

                <p>
                  Through a comprehensive curriculum, interactive online
                  instruction, mentorship, and ministry-based learning,
                  students are prepared to serve faithfully and effectively in
                  churches, ministries, nonprofit organizations, educational
                  institutions, and communities around the world.
                </p>

                <p>
                  Recognizing the growing need for biblically grounded and
                  ethically responsible leaders, the program seeks to develop
                  graduates who demonstrate academic excellence, Christ-like
                  character, servant leadership, and a lifelong commitment to
                  discipleship and community transformation.
                </p>

                <p>
                  Whether preparing for pastoral ministry, Christian
                  leadership, teaching, missions, counseling, community
                  development, or personal spiritual growth, students receive a
                  well-rounded theological education that combines biblical
                  truth with practical application.
                </p>

                <p>
                  As part of the broader mission of Rehoboth Discipleship
                  International, the program is committed to equipping biblical
                  leaders for global impact through excellence in theological
                  education, leadership development, discipleship, and
                  transformational service.
                </p>

              </div>

            </section>

            {/* Purpose */}

            <section
              id="purpose"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <Target className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Purpose of the Program
                </h2>

              </div>

              <p className="text-slate-700 leading-9 mb-8">
                The purpose of the RHDI Theology & Biblical Studies Program is
                to provide Christ-centered, biblically grounded, and
                academically excellent theological education that equips
                individuals for effective Christian leadership, faithful
                ministry, spiritual growth, and lifelong service.
              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {purposeItems.map((item)=>(
                  <div
                    key={item}
                    className="rounded-2xl border bg-slate-50 p-5 flex gap-3"
                  >
                    <CheckCircle2 className="text-[#C79A2B] mt-1" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </section>

            {/* Why */}

            <section
              id="why"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <ShieldCheck className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Why Study With RHDI?
                </h2>

              </div>

              <p className="text-slate-700 leading-9 mb-8">
                Choosing the RHDI School of Theology & Biblical Studies means
                becoming part of a Christ-centered learning community committed
                to academic excellence, biblical truth, spiritual formation,
                and transformational leadership.
              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {whyItems.map((item)=>(
                  <div
                    key={item}
                    className="rounded-2xl border p-5 hover:border-[#C79A2B] transition"
                  >
                    <div className="flex gap-3">

                      <Star className="text-[#C79A2B]" />

                      <span>{item}</span>

                    </div>

                  </div>
                ))}

              </div>

            </section>

            {/* Highlights */}

            <section
              id="highlights"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <Users className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Program Highlights
                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {highlightItems.map((item)=>(
                  <div
                    key={item}
                    className="rounded-2xl border bg-slate-50 p-5 flex gap-3"
                  >
                    <CheckCircle2 className="text-[#C79A2B] mt-1" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

              <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#061C3F] to-[#0D2F63] p-8 text-white">

                <h3 className="text-2xl font-bold mb-4">
                  Our Commitment
                </h3>

                <p className="leading-9 text-slate-200">
                  The program is designed to develop biblically knowledgeable,
                  spiritually mature, ethically responsible, and
                  transformational leaders who are prepared to faithfully serve
                  God, strengthen the Church, and positively impact communities
                  and nations through Christian leadership, discipleship,
                  education, and compassionate service.
                </p>

              </div>

            </section>

            <section
              id="designed-for"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <HeartHandshake className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Who This Program Is Designed For
                </h2>

              </div>

              <div className="space-y-6 text-slate-700 leading-9">

                <p>
                  The RHDI Theology & Biblical Studies Program is designed for individuals
                  who desire to deepen their understanding of God's Word, strengthen their
                  Christian faith, develop leadership competencies, and prepare for
                  effective ministry and service. The program welcomes learners from
                  diverse educational, cultural, and ministry backgrounds who are
                  committed to spiritual growth, biblical learning, and lifelong
                  discipleship.
                </p>

                <p>
                  Whether you are beginning your theological journey or seeking to expand
                  your ministry knowledge and leadership capacity, the program provides a
                  supportive and academically enriching environment to help you fulfill
                  your God-given calling.
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                {designedForItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-slate-50 p-5 flex gap-3"
                  >
                    <CheckCircle2 className="text-[#C79A2B] mt-1" />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

              <div className="mt-10 rounded-3xl bg-[#061C3F] text-white p-8">

                <h3 className="text-2xl font-bold mb-4">
                  Inclusive Learning Community
                </h3>

                <p className="leading-9 text-slate-200">
                  The RHDI School of Theology & Biblical Studies is committed to creating
                  an inclusive, Christ-centered learning community where students are
                  equipped with biblical knowledge, spiritual maturity, practical ministry
                  skills, and transformational leadership abilities to faithfully serve
                  the Church, strengthen communities, and make a lasting impact around the
                  world.
                </p>

              </div>

            </section>

            <section
              id="impact"
              className="bg-white rounded-3xl border shadow-sm p-8 lg:p-12"
            >

              <div className="flex items-center gap-3 mb-8">

                <Globe2 className="h-8 w-8 text-[#C79A2B]" />

                <h2 className="text-3xl font-black text-[#061C3F]">
                  Expected Impact
                </h2>

              </div>

              <div className="space-y-6 text-slate-700 leading-9">

                <p>
                  The RHDI Theology & Biblical Studies Program is committed to developing
                  biblically grounded, spiritually mature, and transformational leaders
                  who faithfully serve God and positively impact churches, ministries,
                  organizations, and communities around the world.
                </p>

                <p>
                  Through Christ-centered theological education, practical ministry
                  training, and leadership development, the program seeks to produce
                  graduates who are equipped to lead with integrity, wisdom, compassion,
                  and biblical conviction.
                </p>

                <p>
                  Graduates of the program will be prepared to communicate the truth of
                  Scripture with confidence, provide effective spiritual leadership,
                  disciple others, strengthen local churches, promote ethical leadership,
                  and contribute to sustainable community transformation.
                </p>

              </div>

              <h3 className="text-2xl font-bold text-[#061C3F] mt-10 mb-6">
                Expected Outcomes
              </h3>

              <div className="grid md:grid-cols-2 gap-5">

                {impactItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-slate-50 p-5 flex gap-3"
                  >
                    <CheckCircle2 className="text-[#C79A2B] mt-1" />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

              <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#061C3F] to-[#0D2F63] text-white p-8">

                <h3 className="text-2xl font-bold mb-4">
                  The Ultimate Impact
                </h3>

                <p className="leading-9 text-slate-200">
                  The ultimate impact of the RHDI Theology & Biblical Studies Program is
                  to raise a new generation of biblical leaders who are academically
                  prepared, spiritually equipped, and globally minded—leaders who will
                  faithfully advance the Gospel of Jesus Christ, strengthen the Church,
                  serve their communities, and contribute to the transformation of nations
                  for the glory of God.
                </p>

              </div>

            </section>

          </div>

        </div>

      </div>

    </div>
  );
}