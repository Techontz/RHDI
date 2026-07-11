import { motion } from "framer-motion";
import {
  Sparkles,
  Cross,
  HeartHandshake,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

export default function StatementOfFaith() {
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
              Statement
              <span className="block text-[#C79A2B]">
                of Faith
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) – Statement of Faith
            </p>
          </motion.div>

          {/* Article */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-5xl overflow-hidden rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm md:p-16"
          >
            <div className="space-y-10 text-lg leading-10 text-gray-600">

              <div className="flex gap-6">
                <Cross className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Rehoboth Discipleship International (RHDI) is a faith-based organization founded upon Christian principles and values that affirm the dignity, worth, and God-given potential of every human being. We believe that faith is not merely a personal conviction but a transformative force that inspires individuals and communities to pursue lives of integrity, purpose, service, and hope.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We believe that every person has been created with unique gifts, abilities, and the capacity to contribute meaningfully to society. Therefore, we are committed to creating opportunities that empower individuals to discover their potential, develop their leadership abilities, and become positive agents of transformation within their families, communities, and nations.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our faith calls us to demonstrate compassion, love, justice, and responsible stewardship in all aspects of our work. We seek to serve people with dignity and respect, recognizing that sustainable transformation occurs when individuals are empowered spiritually, intellectually, socially, and economically. We are committed to serving communities in ways that promote human flourishing, reconciliation, peace, and collective well-being.
                </p>
              </div>

              <div className="flex gap-6">
                <ShieldCheck className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At RHDI, we believe that leadership is fundamentally an act of service. We embrace the principles of servant leadership, accountability, humility, and excellence, encouraging leaders to use their influence responsibly and ethically for the benefit of others. We believe that authentic leadership seeks not personal recognition but the advancement of individuals and communities toward greater opportunity and sustainable development.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our faith also compels us to value collaboration and unity. We believe that meaningful transformation is strengthened through partnerships that bring together diverse individuals, organizations, and communities around a shared commitment to human dignity and social impact. We therefore seek to build relationships based on trust, integrity, mutual respect, and a common desire to serve humanity.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  As a faith-based organization, we are committed to equipping individuals and communities through discipleship, education, leadership development, humanitarian service, digital empowerment, and community engagement initiatives. Through these efforts, we seek to nurture responsible citizens, develop transformative leaders, and contribute to the creation of communities that are empowered, resilient, compassionate, and prepared to positively influence future generations.
                </p>
              </div>

              <div className="flex gap-6">
                <Cross className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our Statement of Faith reflects our conviction that faith should inspire action, service should demonstrate compassion, leadership should embody integrity, and communities should experience transformation that enables people to thrive spiritually, socially, educationally, and economically.
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
                Our Declaration
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7]">
                Faith in action. Leadership through service. Transformation with purpose.
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}