import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Cross,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";

export default function BiblicalFoundations() {
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
              Biblical
              <span className="block text-[#C79A2B]">
                Foundations
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
                  At Rehoboth Discipleship International (RHDI), our mission, values, and programs are rooted in biblical principles that affirm the dignity of every person and the responsibility of believers to serve others with integrity, compassion, and excellence. We believe that Scripture provides timeless truths and guiding principles for personal transformation, leadership development, community engagement, and responsible stewardship.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  Our biblical foundation begins with the belief that every human being possesses inherent worth and purpose. We affirm that people are created with unique gifts, talents, and the capacity to contribute meaningfully to their families, communities, and society. This conviction shapes our commitment to empowering individuals through discipleship, education, leadership development, and community transformation initiatives.
                </p>
              </div>

              <div className="flex gap-6">
                <HeartHandshake className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We believe that faith should produce practical and visible expressions of love, service, justice, and compassion. Genuine faith inspires individuals to care for others, respond to human needs, promote peace and reconciliation, and work toward the well-being and flourishing of communities. Our commitment to humanitarian service and community engagement is therefore an expression of our biblical responsibility to serve humanity with dignity and respect.
                </p>
              </div>

              <div className="flex gap-6">
                <ShieldCheck className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We affirm that leadership is a sacred responsibility that should be exercised with humility, integrity, accountability, and servant-heartedness. Biblical leadership seeks the welfare of others, demonstrates ethical conduct, and uses influence to empower and develop people rather than pursuing personal gain or recognition. Through our leadership initiatives, we seek to raise leaders who exemplify character, wisdom, responsibility, and a commitment to transformational service.
                </p>
              </div>

              <div className="flex gap-6">
                <GraduationCap className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We believe that knowledge and learning are essential components of human development and effective stewardship. Therefore, we are committed to promoting education, lifelong learning, mentorship, and the responsible use of knowledge and technology for the benefit of individuals and communities. We encourage people to cultivate wisdom, pursue excellence, and apply their gifts and abilities in ways that contribute positively to society.
                </p>
              </div>

              <div className="flex gap-6">
                <Users className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  We further believe that communities flourish when relationships are characterized by love, mutual respect, collaboration, justice, and shared responsibility. Our biblical foundations encourage unity and partnership among individuals, organizations, and communities in addressing societal challenges and creating sustainable solutions that improve the quality of life for present and future generations.
                </p>
              </div>

              <div className="flex gap-6">
                <Cross className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  At RHDI, our biblical foundations also affirm hope and transformation. We believe that lives can be renewed, leaders can be developed, communities can be strengthened, and nations can experience positive transformation when people are equipped, empowered, and inspired to live according to values that promote human dignity, responsible leadership, and service to others.
                </p>
              </div>

              <div className="flex gap-6">
                <BookOpen className="mt-2 h-10 w-10 shrink-0 text-[#C79A2B]" />
                <p>
                  These biblical foundations provide the moral and spiritual framework that guides our vision, shapes our organizational culture, informs our decision-making, and inspires our commitment to serving communities across nations. They remind us that true transformation begins with transformed individuals, extends to families and communities, and ultimately contributes to the renewal and flourishing of society.
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
                Our Biblical Foundation
              </div>

              <p className="mt-10 text-3xl font-semibold leading-[1.7]">
                Our Biblical Foundation is expressed through faith in action,
                servant leadership, responsible stewardship, compassionate
                service, and an unwavering commitment to human dignity and
                community transformation.
              </p>

              <div className="my-10 h-px bg-white/10" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                  Biblical References
                </h3>

                <p className="mt-5 text-xl leading-9 text-gray-200">
                  Genesis 1:27; Micah 6:8; Matthew 5:14–16; Matthew 22:37–39;
                  John 13:34–35; Romans 12:9–21; Ephesians 2:10;
                  Colossians 3:23–24; 1 Peter 4:10.
                </p>
              </div>

            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}