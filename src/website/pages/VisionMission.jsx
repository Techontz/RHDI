import { BookOpen, Cross, HeartHandshake, GraduationCap, ShieldCheck, Globe2, Sparkles, Scale, Users, Lightbulb, CheckCircle2 } from "lucide-react";

export default function VisionMission() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061C3F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,43,0.22),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-[#C79A2B]/40 bg-white/10 px-5 py-2 text-white backdrop-blur">
              <BookOpen className="w-4 h-4 mr-2 text-[#C79A2B]" />
              RHDI School of Theology & Biblical Studies
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
              Vision, Mission &
              <br />
              Institutional Identity
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200 max-w-3xl">
              Building biblically grounded, spiritually mature, and transformational Christian
              leaders through academic excellence, servant leadership, biblical truth,
              and practical ministry.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* Vision */}

        <section className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">

            <div className="sticky top-24">

              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary"/>
              </div>

              <h2 className="mt-6 text-4xl font-bold">
                Vision
              </h2>

              <p className="mt-4 text-muted-foreground">
                Our long-term aspiration for theological education and
                transformational Christian leadership.
              </p>

            </div>

          </div>

          <div className="lg:col-span-8">

            <div className="rounded-3xl border bg-card p-10">

              <p className="leading-9 text-lg">

                To be a globally recognized Christ-centered School of Theology &
                Biblical Studies that equips biblically grounded, spiritually
                mature, and transformational leaders through academic excellence,
                biblical truth, spiritual formation, servant leadership, and
                practical ministry.

                We aspire to prepare graduates who faithfully advance the Gospel
                of Jesus Christ, strengthen the Church, empower communities, and
                positively impact nations through lives of integrity, wisdom,
                compassion, and faithful Christian service.

              </p>

            </div>

          </div>

        </section>

        {/* Mission */}

        <section className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">

            <div className="sticky top-24">

              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
                <Cross className="w-10 h-10 text-primary"/>
              </div>

              <h2 className="mt-6 text-4xl font-bold">
                Mission
              </h2>

            </div>

          </div>

          <div className="lg:col-span-8">

            <div className="rounded-3xl border bg-card p-10">

              <p className="leading-9 text-lg">

                The mission of the RHDI School of Theology & Biblical Studies is
                to provide Christ-centered, biblically grounded, and
                academically excellent theological education that equips
                individuals for faithful Christian leadership, effective
                ministry, spiritual formation, and lifelong service.

                Through biblical scholarship, practical ministry training,
                mentorship, and leadership development, we prepare students to
                faithfully serve churches, ministries, organizations, and
                communities while advancing the Gospel and contributing to the
                transformation of lives and nations for the glory of God.

              </p>

            </div>

          </div>

        </section>

        {/* Educational Philosophy */}

        <section>

          <div className="flex items-center gap-4">

            <GraduationCap className="w-10 h-10 text-primary"/>

            <div>

              <h2 className="text-4xl font-bold">
                Educational Philosophy
              </h2>

              <p className="text-muted-foreground mt-2">
                Our philosophy that guides teaching, learning and ministry.
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-3xl border p-10">

            <p className="leading-9 text-lg">

              The educational philosophy of the RHDI School of Theology &
              Biblical Studies is founded on the belief that theological
              education should transform the whole person—spiritually,
              intellectually, morally, and practically.

              We are committed to providing Christ-centered, biblically
              grounded, and academically excellent education that integrates
              biblical knowledge, spiritual formation, servant leadership, and
              practical ministry.

              Our goal is to equip students with the wisdom, character, and
              leadership competencies necessary to faithfully serve God,
              strengthen the Church, and positively impact communities and
              nations.

            </p>

          </div>

        </section>

        {/* Core Values */}

        <section>

          <h2 className="text-5xl font-bold text-center">
            Core Values
          </h2>

          <p className="text-center mt-4 text-muted-foreground max-w-3xl mx-auto">
            These principles define our institutional culture and shape every
            aspect of teaching, leadership, ministry, and Christian service.
          </p>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            {[
              ["Biblical Authority", BookOpen],
              ["Christ-Centered Education", Cross],
              ["Academic Excellence", GraduationCap],
              ["Spiritual Formation", HeartHandshake],
              ["Servant Leadership", Users],
              ["Integrity & Ethics", ShieldCheck],
              ["Respect & Human Dignity", Scale],
              ["Community Transformation", Globe2],
              ["Global Collaboration", Globe2],
              ["Innovation & Continuous Improvement", Lightbulb],
            ].map(([title, Icon]) => (

              <div
                key={title}
                className="rounded-3xl border p-8 hover:shadow-xl transition-all"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary"/>
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {title}
                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Learning Outcomes */}

        <section>

          <h2 className="text-5xl font-bold text-center">
            Program Learning Outcomes
          </h2>

          <p className="text-center mt-4 text-muted-foreground">
            Graduates of the program will demonstrate the following competencies.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mt-16">

            {[
              "Demonstrate a sound understanding of the Holy Scriptures and Christian theology.",
              "Interpret and apply biblical principles with wisdom and integrity.",
              "Exhibit Christ-like character and spiritual maturity.",
              "Lead effectively in churches, ministries and communities.",
              "Communicate biblical truth through preaching and teaching.",
              "Apply theology to practical ministry.",
              "Engage in evangelism, missions and outreach.",
              "Promote lifelong learning and servant leadership.",
              "Contribute to Church growth and God's Kingdom globally.",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border p-6 flex items-start gap-4"
              >

                <CheckCircle2 className="w-6 h-6 mt-1 text-primary"/>

                <p className="leading-8">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}