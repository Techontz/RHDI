import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Users,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function MakingDisciples() {
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
              Making
              <span className="block text-[#C79A2B]">
                Disciples
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
                <BookOpen className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At Rehoboth Discipleship International (RHDI), making disciples is at the heart of our mission and identity. We believe that discipleship is a lifelong process of spiritual growth, personal transformation, leadership development, and purposeful service. It involves intentionally equipping individuals to grow in faith, develop godly character, discover their potential, and positively influence their families, communities, and nations.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We understand discipleship as more than the transmission of knowledge. It is a transformational journey that nurtures the whole person—spiritually, intellectually, emotionally, socially, and practically. Through discipleship, individuals are encouraged to deepen their relationship with God, cultivate integrity and wisdom, embrace servant leadership, and live lives that demonstrate compassion, responsibility, and hope.
                </p>
              </div>

              <div className="flex gap-6">
                <GraduationCap className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At RHDI, we are committed to developing disciples who become responsible leaders and agents of transformation in society. We seek to empower individuals not only to grow personally but also to invest in the growth and development of others. We believe that true discipleship multiplies impact by equipping people to mentor, teach, encourage, and serve future generations.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our discipleship approach emphasizes character formation, leadership development, community engagement, and practical service. We encourage individuals to apply their faith in everyday life by demonstrating love, pursuing justice, promoting peace, and serving communities with humility and excellence. We believe that authentic discipleship produces individuals who are spiritually grounded, ethically responsible, and committed to contributing positively to society.
                </p>
              </div>

              <div className="flex gap-6">
                <BookOpen className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Through educational initiatives, leadership training, mentorship programs, digital engagement, and community-based activities, RHDI seeks to create environments where individuals can learn, grow, and flourish. We are dedicated to building communities of faith and learning that inspire people to pursue their God-given purpose and use their gifts to serve others.
                </p>
              </div>

              <div className="flex gap-6">
                <ShieldCheck className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our vision of discipleship extends beyond individual transformation. We seek to cultivate leaders who can strengthen families, empower communities, and influence nations through values-centered leadership, responsible citizenship, and a commitment to human dignity and sustainable development. We believe that transformed individuals become catalysts for transformed communities, and transformed communities contribute to the transformation of nations.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Making disciples is therefore not merely a program or activity; it is a continuous commitment to nurturing people who embody faith, integrity, compassion, and servant leadership. Through this commitment, RHDI endeavors to raise generations of leaders who are equipped to serve, empowered to lead, and prepared to create lasting and meaningful impact in the world.
                </p>
              </div>

            </div>
          </motion.article>

          {/* Commitment */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">

              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ArrowRight className="h-5 w-5" />
                Our Commitment
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7]">
                Equipping People. Developing Leaders. Transforming Communities.
                Impacting Nations.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Biblical Foundation
                </h3>

                <p className="mt-5 text-xl leading-9 text-gray-200">
                  Matthew 28:19–20; 2 Timothy 2:2; Ephesians 4:11–13.
                </p>
              </div>

            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}