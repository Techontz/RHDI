import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

// import HeroImage from "../assets/core-values.jpg";

const CoreValues = () => {
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

      {/* HERO */}

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >

              {/* Gold Decoration */}

              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#D6B25E]/15 blur-3xl"></div>

              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#0F2747]/10 blur-3xl"></div>

              <div className="overflow-hidden rounded-[20px] border border-[#E5E7EB]">

                <img
                  src="/YOUR_IMAGE.jpg"
                  alt="Core Values"
                  className="w-full h-[650px] object-cover"
                />

              </div>

              {/* Floating Badge */}

              <div className="absolute bottom-8 left-8 bg-[#0F2747] text-white rounded-xl px-6 py-5 border border-[#214A78]">

                <p className="text-[#D6B25E] uppercase text-xs tracking-[0.3em]">
                  Since
                </p>

                <h3 className="text-4xl font-bold mt-1">
                  2006
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

              <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-none text-[#0F2747]">
                CORE
              </h1>

              <h2 className="text-5xl lg:text-7xl font-black text-[#D6B25E]">
                VALUES
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
                Our core values define who we are, guide every decision we
                make, and shape the way we serve communities, develop leaders,
                and build lasting partnerships across nations.
              </p>

              <div className="mt-10 flex items-start gap-5">

                <div className="w-16 h-16 rounded-full bg-[#0F2747] flex items-center justify-center flex-shrink-0">

                  <Globe2 className="w-8 h-8 text-[#D6B25E]" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#0F2747]">
                    Guided by Purpose
                  </h3>

                  <p className="mt-3 text-gray-600 leading-8">
                    Every ministry, partnership and community initiative is
                    rooted in integrity, servant leadership, excellence,
                    accountability and a commitment to sustainable
                    transformation.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

                      {/* ==========================================
                COMMITMENT SECTION
            ========================================== */}

<motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-20"
            >
              <div className="grid lg:grid-cols-2 gap-10">

                {/* Left Commitment Card */}

                <div className="relative overflow-hidden rounded-[16px] bg-[#0F2747] border border-[#214A78] p-10">

                  {/* Decorative Circle */}

                  <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#D6B25E]/10" />

                  <p className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold mb-5">
                    Our Commitment
                  </p>

                  <h2 className="text-4xl font-bold text-white leading-tight">
                    Building Character Before Success
                  </h2>

                  <p className="mt-8 text-gray-300 leading-9 text-lg">
                    At Rehoboth Discipleship International, our values are more
                    than guiding principles—they are the foundation of every
                    decision, every partnership, and every life we seek to
                    impact.
                  </p>

                  <p className="mt-6 text-gray-300 leading-9 text-lg">
                    They shape our leadership, strengthen accountability,
                    encourage innovation, and ensure that every program reflects
                    our commitment to serving God and communities with
                    excellence.
                  </p>

                </div>

                {/* Right Statistics */}

                <div className="grid grid-cols-2 gap-6">

                  <div className="rounded-[16px] bg-white border border-gray-200 p-8 border border-[#E7E7E7] text-center">

                    <h2 className="text-5xl font-black text-[#0F2747]">
                      20+
                    </h2>

                    <p className="mt-3 uppercase tracking-widest text-sm text-[#D6B25E]">
                      Countries Served
                    </p>

                  </div>

                  <div className="rounded-[16px] bg-white border border-gray-200 p-8 border border-[#E7E7E7] text-center">

                    <h2 className="text-5xl font-black text-[#0F2747]">
                      1M+
                    </h2>

                    <p className="mt-3 uppercase tracking-widest text-sm text-[#D6B25E]">
                      Lives Reached
                    </p>

                  </div>

                  <div className="rounded-[16px] bg-white border border-gray-200 p-8 border border-[#E7E7E7] text-center">

                    <h2 className="text-5xl font-black text-[#0F2747]">
                      500+
                    </h2>

                    <p className="mt-3 uppercase tracking-widest text-sm text-[#D6B25E]">
                      Leaders Trained
                    </p>

                  </div>

                  <div className="rounded-[16px] bg-white border border-gray-200 p-8 border border-[#E7E7E7] text-center">

                    <h2 className="text-5xl font-black text-[#0F2747]">
                      100%
                    </h2>

                    <p className="mt-3 uppercase tracking-widest text-sm text-[#D6B25E]">
                      Mission Driven
                    </p>

                  </div>

                </div>

              </div>
            </motion.div>

            {/* ==========================================
                SECTION TITLE
            ========================================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mt-24 mb-16"
            >

              <span className="inline-block px-5 py-2 rounded-full bg-[#FFF7E2] text-[#C89B3C] font-semibold uppercase tracking-[0.25em] text-xs">
                Our Foundation
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#0F2747]">
                What We Stand For
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-9">
                These seven values define our culture, guide our leadership,
                shape our relationships, and influence every initiative we
                undertake in communities around the world.
              </p>

            </motion.div>

            {/* ==========================================
                CORE VALUES GRID
                (Continue in Part 2A)
            ========================================== */}

            <div className="grid lg:grid-cols-2 gap-8">

                      {/* ==========================================
              VALUE 01 - INTEGRITY
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#0F2747] to-[#D6B25E]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-[#0F2747]">
                    Integrity
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#0F2747] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#D6B25E]">
                    01
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-600 leading-9 text-lg">
                We are committed to honesty, ethical conduct,
                and consistency between our values and actions.
              </p>

            </div>
          </motion.div>

          {/* ==========================================
              VALUE 02 - ACCOUNTABILITY
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-[#0F2747] border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#D6B25E] to-[#F6D87B]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-white">
                    Accountability
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#D6B25E] flex items-center justify-center sborder border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#0F2747]">
                    02
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-200 leading-9 text-lg">
                We believe in responsible stewardship,
                transparency, and maintaining trust through
                responsible management and reporting.
              </p>

            </div>
          </motion.div>
                    {/* ==========================================
              VALUE 01 - INTEGRITY
          ========================================== */}

<motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#0F2747] to-[#D6B25E]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-[#0F2747]">
                    Integrity
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#0F2747] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#D6B25E]">
                    01
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-600 leading-9 text-lg">
                We are committed to honesty, ethical conduct,
                and consistency between our values and actions.
              </p>

            </div>
          </motion.div>

          {/* ==========================================
              VALUE 02 - ACCOUNTABILITY
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-[#0F2747] border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#D6B25E] to-[#F6D87B]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-white">
                    Accountability
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#D6B25E] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#0F2747]">
                    02
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-200 leading-9 text-lg">
                We believe in responsible stewardship,
                transparency, and maintaining trust through
                responsible management and reporting.
              </p>

            </div>
          </motion.div>
                    {/* ==========================================
              VALUE 03 - LEADERSHIP
          ========================================== */}

<motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white border border-[#E7E7E7] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#0F2747] to-[#D6B25E]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-[#0F2747]">
                    Leadership
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#0F2747] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#D6B25E]">
                    03
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-600 text-lg leading-9">
                We are committed to developing leaders who serve with wisdom,
                humility, and integrity.
              </p>

            </div>
          </motion.div>

          {/* ==========================================
              VALUE 04 - SERVICE
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#1C446D] bg-[#0F2747] border border-[#E7E7E7] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            {/* Top Accent */}
            <div className="h-2 bg-gradient-to-r from-[#D6B25E] to-[#F6D87B]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-white">
                    Service
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#D6B25E] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#0F2747]">
                    04
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-200 text-lg leading-9">
                We believe in serving individuals and communities with
                compassion, respect, and a genuine commitment to human dignity
                and well-being.
              </p>

            </div>
          </motion.div>
                    {/* ==========================================
              VALUE 05 - EXCELLENCE
          ========================================== */}

<motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white border border-[#E7E7E7] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="h-2 bg-gradient-to-r from-[#0F2747] to-[#D6B25E]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-4xl font-black text-[#0F2747]">
                    Excellence
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#0F2747] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#D6B25E]">
                    05
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-600 text-lg leading-9">
                We strive to pursue high standards, continuous improvement,
                and quality in our programs, partnerships, and organizational
                practices.
              </p>

            </div>
          </motion.div>

          {/* ==========================================
              VALUE 06 - COMMUNITY TRANSFORMATION
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[18px] border border-[#214A78] bg-[#0F2747] hover:border-[#D6B25E] transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-[#D6B25E] to-[#F7D978]" />

            <div className="p-10">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-sm uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
                    Core Value
                  </span>

                  <h2 className="mt-3 text-3xl lg:text-4xl font-black text-white">
                    Community Transformation
                  </h2>

                </div>

                <div className="w-20 h-20 rounded-full bg-[#D6B25E] flex items-center justify-center border border-[#E7E7E7]">

                  <span className="text-3xl font-black text-[#0F2747]">
                    06
                  </span>

                </div>

              </div>

              <div className="w-20 h-1 bg-[#D6B25E] rounded-full mt-8 mb-8"></div>

              <p className="text-gray-200 text-lg leading-9">
                We believe that empowered individuals and collaborative
                communities can create sustainable and lasting positive
                change.
              </p>

            </div>
          </motion.div>

          {/* ==========================================
              VALUE 07 - STRATEGIC COLLABORATION
          ========================================== */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0F2747] via-[#14375F] to-[#0F2747] border border-[#295785]"
          >

            {/* Decorative Blur */}

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#D6B25E]/10 blur-3xl"></div>

            <div className="relative p-12">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                <div className="max-w-3xl">

                  <span className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold">
                    Core Value 07
                  </span>

                  <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
                    Strategic Collaboration
                  </h2>

                  <div className="w-28 h-1 bg-[#D6B25E] rounded-full mt-7 mb-8"></div>

                  <p className="text-xl leading-10 text-gray-200">
                    We value partnerships and believe that working together
                    creates greater opportunities for learning, innovation,
                    and meaningful impact across communities, organizations,
                    and nations.
                  </p>

                </div>

                <div className="flex justify-center">

                  <div className="w-36 h-36 rounded-full bg-[#D6B25E] flex items-center justify-center shadow-2xl">

                    <span className="text-6xl font-black text-[#0F2747]">
                      07
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ==========================================
            CONTINUE WITH PART 3
        ========================================== */}

                {/* ==========================================
            CLOSING SECTION
        ========================================== */}

<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#0F2747] p-12 lg:p-20">

            {/* Decorative Background */}

            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D6B25E]/10 blur-3xl"></div>

            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">

              <span className="uppercase tracking-[0.35em] text-[#D6B25E] font-semibold text-sm">
                Rehoboth Discipleship International
              </span>

              <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
                Living Our Values
                <br />
                Every Day
              </h2>

              <div className="w-32 h-1 bg-[#D6B25E] rounded-full mx-auto my-8"></div>

              <p className="text-gray-200 text-xl leading-10">
                Our Core Values are more than guiding principles.
                They define our culture, inspire our leadership,
                strengthen our partnerships, and influence every
                decision we make as we serve communities across
                the nations.
              </p>

            </div>

          </div>
        </motion.div>

        {/* ==========================================
            QUOTE
        ========================================== */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="max-w-5xl mx-auto text-center">

            <h3 className="text-3xl md:text-4xl font-bold text-[#0F2747] italic leading-relaxed">
              "Integrity is doing the right thing,
              even when no one is watching."
            </h3>

            <div className="w-24 h-1 bg-[#D6B25E] rounded-full mx-auto my-8"></div>

            <p className="uppercase tracking-[0.3em] text-[#D6B25E] font-semibold">
              Our Commitment To Every Community We Serve
            </p>

          </div>

        </motion.div>

      </div>
      </section>
    </div>
  );
};

export default CoreValues;