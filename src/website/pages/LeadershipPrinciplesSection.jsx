import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Compass,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function LeadershipPrinciples() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4" />
              Faith & Values
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Leadership
              <span className="block text-[#C79A2B]">
                Principles
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />
          </motion.div>

          {/* Main Article */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-5xl rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-16"
          >
            <div className="space-y-10 text-lg leading-10 text-gray-600">

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At Rehoboth Discipleship International (RHDI), we believe that leadership is both a privilege and a responsibility. Leadership is not defined by position, status, or authority alone; it is demonstrated through character, service, integrity, and the positive influence that one brings to the lives of others. We are committed to developing leaders who lead with purpose, serve with humility, and work diligently to create meaningful and sustainable transformation within their communities and nations.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our leadership philosophy is founded upon the principle of servant leadership. We believe that effective leaders place the needs of others above personal interests and use their influence to empower, encourage, and develop people. Leadership is expressed through a willingness to listen, support, mentor, and create opportunities that enable others to grow and succeed. True leaders seek not merely to direct people but to inspire, equip, and serve them.
                </p>
              </div>

              <div className="flex gap-6">
                <ShieldCheck className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We affirm that integrity is the foundation of trustworthy leadership. Leaders must demonstrate honesty, transparency, ethical conduct, and consistency between their values and actions. Integrity builds credibility, strengthens relationships, and fosters confidence among individuals, communities, and partners. We therefore encourage leaders to make decisions that reflect accountability, fairness, and a commitment to the common good.
                </p>
              </div>

              <div className="flex gap-6">
                <Compass className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We believe that leadership requires vision and purpose. Effective leaders possess the ability to identify opportunities, address challenges, and mobilize people toward a shared mission. Visionary leadership inspires hope, promotes innovation, and creates environments where individuals can discover their potential and contribute meaningfully to society. Leaders should therefore be intentional, forward-thinking, and committed to long-term impact and sustainable development.
                </p>
              </div>

              <div className="flex gap-6">
                <GraduationCap className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We further believe that leadership demands humility and continuous learning. Great leaders recognize the importance of personal growth, value the contributions of others, and remain open to learning, adaptation, and improvement. Humility enables leaders to cultivate meaningful relationships, embrace collaboration, and lead with wisdom and compassion in diverse and changing environments.
                </p>
              </div>

              <div className="flex gap-6">
                <Briefcase className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At RHDI, we believe that leadership is inseparable from stewardship and responsibility. Leaders are entrusted with people, resources, opportunities, and influence, all of which must be managed faithfully and responsibly. Responsible leadership requires accountability, sound decision-making, and a commitment to using resources effectively for the benefit of communities and future generations.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We also affirm that leadership should produce transformation. Effective leadership empowers individuals, strengthens institutions, promotes justice and human dignity, and contributes to the well-being and flourishing of society. Leaders should seek to create environments where people can thrive spiritually, socially, educationally, and economically. The measure of leadership is not personal success alone but the positive and lasting impact created in the lives of others.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At Rehoboth Discipleship International, we are committed to raising leaders of character, competence, and compassion—leaders who embody faith, integrity, excellence, accountability, and servant-heartedness. Through leadership development, mentorship, education, and community engagement, we seek to equip leaders who are prepared to address contemporary challenges and inspire transformation across generations and nations.
                </p>
              </div>

            </div>
          </motion.article>

          {/* Closing */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">

              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Our Leadership Commitment
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7]">
                To develop leaders who serve with integrity, lead with vision,
                steward resources responsibly, empower others intentionally,
                and pursue transformation that positively impacts communities
                and nations.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Biblical References
                </h3>

                <p className="mt-5 text-xl leading-9 text-gray-200">
                  Proverbs 11:14; Matthew 20:26–28; Luke 12:48;
                  Romans 12:8; Philippians 2:3–5; 1 Timothy 4:12;
                  1 Peter 5:2–3.
                </p>
              </div>

            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}