import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  Users,
  Target,
} from "lucide-react";

// import HeroImage from "../assets/about/leadership_governance.webp";

const LeadershipGovernance = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="pt-24 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >

              <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-[#D6B25E]/10 blur-3xl"></div>

              <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-[#0F2747]/10 blur-3xl"></div>

              <div className="overflow-hidden rounded-[20px] border border-[#E7E7E7]">

                <img
                  src="/YOUR_IMAGE.jpg"
                  alt="Leadership & Governance"
                  className="w-full h-[650px] object-cover"
                />

              </div>

              {/* Floating Card */}

              <div className="absolute bottom-8 left-8 rounded-xl bg-[#0F2747] border border-[#214A78] px-6 py-5">

                <p className="uppercase tracking-[0.3em] text-[#D6B25E] text-xs">
                  Our Foundation
                </p>

                <h3 className="text-white text-3xl font-bold mt-2">
                  Leadership
                </h3>

              </div>

            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >

              <div className="inline-flex items-center gap-3">

                <div className="h-[2px] w-14 bg-[#D6B25E]" />

                <span className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold">
                  Rehoboth Discipleship International
                </span>

              </div>

              <h1 className="mt-6 text-5xl lg:text-7xl font-black text-[#0F2747] leading-none">
                Leadership
              </h1>

              <h2 className="text-5xl lg:text-7xl font-black text-[#D6B25E]">
                & Governance
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Rehoboth Discipleship International (RHDI) is committed
                to maintaining effective leadership, ethical governance,
                transparency, and responsible stewardship in every area
                of organizational operations.
              </p>

              <div className="mt-10 flex items-start gap-5">

                <div className="w-16 h-16 rounded-full bg-[#0F2747] flex items-center justify-center">

                  <Landmark className="w-8 h-8 text-[#D6B25E]" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#0F2747]">
                    Leading With Integrity
                  </h3>

                  <p className="mt-3 text-gray-600 leading-8">
                    Our leadership exists to serve people, strengthen
                    communities, steward resources responsibly, and
                    provide strategic direction that creates sustainable
                    impact across nations.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* ==========================================
              INTRODUCTION
          ========================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24"
          >

            <div className="grid lg:grid-cols-2 gap-10">

              {/* Main Statement */}

              <div className="rounded-[18px] bg-[#0F2747] border border-[#214A78] p-10">

                <p className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold mb-5">
                  Leadership Philosophy
                </p>

                <h2 className="text-4xl font-black text-white leading-tight">
                  Responsible Leadership Creates Lasting Impact
                </h2>

                <p className="mt-8 text-gray-300 text-lg leading-9">
                  Rehoboth Discipleship International (RHDI) is committed
                  to maintaining effective leadership, ethical governance,
                  transparency, and responsible stewardship in all areas
                  of organizational operations.
                </p>

                <p className="mt-6 text-gray-300 text-lg leading-9">
                  We believe that leadership is not simply about authority,
                  but about serving people with wisdom, humility,
                  accountability, and excellence while advancing the
                  organization's mission with integrity.
                </p>

              </div>

              {/* Feature Cards */}

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <ShieldCheck className="w-10 h-10 text-[#D6B25E]" />

                  <h3 className="mt-6 text-2xl font-bold text-[#0F2747]">
                    Integrity
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    Ethical leadership built on trust and transparency.
                  </p>

                </div>

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <Users className="w-10 h-10 text-[#D6B25E]" />

                  <h3 className="mt-6 text-2xl font-bold text-[#0F2747]">
                    Collaboration
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    Working together to maximize sustainable impact.
                  </p>

                </div>

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <Target className="w-10 h-10 text-[#D6B25E]" />

                  <h3 className="mt-6 text-2xl font-bold text-[#0F2747]">
                    Vision
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    Strategic direction that strengthens communities.
                  </p>

                </div>

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <Landmark className="w-10 h-10 text-[#D6B25E]" />

                  <h3 className="mt-6 text-2xl font-bold text-[#0F2747]">
                    Stewardship
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    Responsible management of every entrusted resource.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ==========================================
              CONTINUE IN PART 1B
          ========================================== */}

                    {/* ==========================================
              LEADERSHIP PRINCIPLES
          ========================================== */}

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24"
          >

            <div className="text-center mb-16">

              <span className="inline-block px-5 py-2 rounded-full bg-[#FFF7E2] text-[#C89B3C] uppercase tracking-[0.3em] text-xs font-semibold">
                Leadership Principles
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#0F2747]">
                Our Leadership Seeks To
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg leading-9 text-gray-600">
                The leadership of Rehoboth Discipleship International is
                guided by principles that emphasize integrity,
                accountability, servant leadership, collaboration,
                and excellence in every decision and action.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Card 1 */}

              <div className="rounded-[18px] border border-[#E7E7E7] p-10">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-[#0F2747] flex items-center justify-center">

                    <span className="text-[#D6B25E] font-black text-2xl">
                      01
                    </span>

                  </div>

                  <h3 className="text-3xl font-black text-[#0F2747]">
                    Strategic Direction
                  </h3>

                </div>

                <p className="mt-8 text-lg text-gray-600 leading-9">
                  Provide strategic direction and vision that strengthens
                  organizational effectiveness while advancing our
                  mission and long-term sustainability.
                </p>

              </div>

              {/* Card 2 */}

              <div className="rounded-[18px] bg-[#0F2747] border border-[#214A78] p-10">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-[#D6B25E] flex items-center justify-center">

                    <span className="text-[#0F2747] font-black text-2xl">
                      02
                    </span>

                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Organizational Capacity
                  </h3>

                </div>

                <p className="mt-8 text-lg text-gray-300 leading-9">
                  Strengthen organizational capacity, resilience,
                  sustainability, and operational excellence to create
                  long-term community impact.
                </p>

              </div>

              {/* Card 3 */}

              <div className="rounded-[18px] bg-[#0F2747] border border-[#214A78] p-10">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-[#D6B25E] flex items-center justify-center">

                    <span className="text-[#0F2747] font-black text-2xl">
                      03
                    </span>

                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Ethical Leadership
                  </h3>

                </div>

                <p className="mt-8 text-lg text-gray-300 leading-9">
                  Promote ethical leadership, accountability,
                  transparency, and integrity throughout every level
                  of the organization.
                </p>

              </div>

              {/* Card 4 */}

              <div className="rounded-[18px] border border-[#E7E7E7] p-10">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-[#0F2747] flex items-center justify-center">

                    <span className="text-[#D6B25E] font-black text-2xl">
                      04
                    </span>

                  </div>

                  <h3 className="text-3xl font-black text-[#0F2747]">
                    Collaborative Partnerships
                  </h3>

                </div>

                <p className="mt-8 text-lg text-gray-600 leading-9">
                  Foster meaningful partnerships and collaborative
                  engagement that strengthen programs and expand
                  sustainable impact.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ==========================================
              CONTINUE IN PART 2A
          ========================================== */}

                    {/* ==========================================
              GOVERNANCE FRAMEWORK
          ========================================== */}

<motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24"
          >

            <div className="text-center mb-16">

              <span className="inline-block px-5 py-2 rounded-full bg-[#FFF7E2] text-[#C89B3C] uppercase tracking-[0.3em] text-xs font-semibold">
                Governance Framework
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#0F2747]">
                Built On Trust & Accountability
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg leading-9 text-gray-600">
                Governance at Rehoboth Discipleship International is built
                upon systems, policies, and practices that promote
                transparency, ethical leadership, responsible
                decision-making, and continuous organizational improvement.
              </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">

              {/* LEFT */}

              <div className="rounded-[18px] border border-[#214A78] bg-[#0F2747] p-10">

                <span className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold">
                  Governance
                </span>

                <h3 className="mt-5 text-4xl font-black text-white">
                  Responsible Stewardship
                </h3>

                <p className="mt-8 text-lg leading-9 text-gray-300">
                  Governance at RHDI encourages transparency,
                  responsible leadership, sound financial
                  stewardship, ethical conduct, and accountability
                  across every ministry, partnership, and community
                  initiative.
                </p>

                <p className="mt-6 text-lg leading-9 text-gray-300">
                  Our governance framework strengthens trust,
                  supports responsible decision-making,
                  encourages continuous learning, and ensures
                  sustainable organizational growth.
                </p>

              </div>

              {/* RIGHT */}

              <div className="grid gap-6">

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <span className="text-[#D6B25E] font-black text-5xl">
                    01
                  </span>

                  <h4 className="mt-5 text-2xl font-bold text-[#0F2747]">
                    Transparency
                  </h4>

                  <p className="mt-4 text-gray-600 leading-8">
                    Open communication, ethical reporting,
                    and responsible management.
                  </p>

                </div>

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <span className="text-[#D6B25E] font-black text-5xl">
                    02
                  </span>

                  <h4 className="mt-5 text-2xl font-bold text-[#0F2747]">
                    Responsible Decision-Making
                  </h4>

                  <p className="mt-4 text-gray-600 leading-8">
                    Decisions guided by integrity,
                    organizational values,
                    and long-term sustainability.
                  </p>

                </div>

                <div className="rounded-[18px] border border-[#E7E7E7] p-8">

                  <span className="text-[#D6B25E] font-black text-5xl">
                    03
                  </span>

                  <h4 className="mt-5 text-2xl font-bold text-[#0F2747]">
                    Continuous Improvement
                  </h4>

                  <p className="mt-4 text-gray-600 leading-8">
                    Strengthening organizational systems,
                    leadership capacity, innovation,
                    and operational excellence.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ==========================================
              CONTINUE IN PART 2B
          ========================================== */}

                    {/* ==========================================
              CLOSING COMMITMENT
          ========================================== */}

<motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24"
          >

            <div className="relative overflow-hidden rounded-[22px] border border-[#214A78] bg-gradient-to-br from-[#0F2747] via-[#14375F] to-[#0A1E36] p-12 lg:p-20">

              {/* Decorative Background */}

              <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#D6B25E]/10 blur-3xl"></div>

              <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

              <div className="relative z-10 max-w-5xl mx-auto text-center">

                <span className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold">
                  Our Commitment
                </span>

                <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
                  Leadership That Builds
                  <br />
                  Trust & Sustainable Impact
                </h2>

                <div className="w-32 h-1 bg-[#D6B25E] rounded-full mx-auto my-10"></div>

                <p className="text-xl leading-10 text-gray-200">
                  We believe that strong governance and responsible
                  leadership are essential to creating trust,
                  strengthening partnerships, and achieving
                  sustainable impact across communities and nations.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ==========================================
              QUOTE
          ========================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20"
          >

            <div className="max-w-5xl mx-auto text-center">

              <h3 className="text-3xl md:text-4xl font-bold italic text-[#0F2747] leading-relaxed">
                "Leadership is not about being in charge.
                It is about taking responsibility for those
                entrusted to your care."
              </h3>

              <div className="w-24 h-1 bg-[#D6B25E] rounded-full mx-auto my-8"></div>

              <p className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold">
                Integrity • Accountability • Stewardship • Service
              </p>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default LeadershipGovernance;