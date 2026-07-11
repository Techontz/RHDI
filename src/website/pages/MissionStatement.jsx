import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const MissionStatement = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ===========================
          MAIN SECTION
      ============================ */}

      <section
        className="py-14 md:py-20"
        style={{
          background:
            "linear-gradient(180deg,#07182C 0%, #0A2240 45%, #07182C 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* ===========================
              PAGE TITLE
          ============================ */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">

              <div className="w-14 h-[2px] bg-[#C89B3C]" />

              <span
                className="uppercase tracking-[0.35em] text-[#D6B25E] text-sm font-semibold"
              >
                Rehoboth Discipleship International
              </span>

              <div className="w-14 h-[2px] bg-[#C89B3C]" />

            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
              Mission & Vision
            </h1>

          </motion.div>

          {/* ===========================
              MISSION + VISION GRID
          ============================ */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >

            {/* =====================================================
                MISSION CARD
                (Continue in Part 1B)
            ====================================================== */}

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-[#D6B25E]/30 bg-white/5 backdrop-blur-md p-8 lg:p-10 shadow-2xl"
            >



              <div className="space-y-6">

                <div className="border-l-4 border-[#D6B25E] bg-[#D6B25E]/10 rounded-xl p-6">

                  <h3 className="text-[#D6B25E] text-xl font-bold mb-4">
                    OUR MISSION
                  </h3>

                  <p className="text-white text-lg leading-8 font-medium">
                  To equip individuals, leaders, and communities through discipleship, education, training, humanitarian service, and digital empowerment, enabling people to develop their potential and positively impact society. We are committed to expanding access to learning opportunities, strengthening leadership capacity, promoting responsible stewardship, and creating environments where individuals and communities can thrive and achieve sustainable transformation.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* =====================================================
                VISION CARD
                (Continue in Part 1C)
            ====================================================== */}

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-[#D6B25E]/30 bg-white/5 backdrop-blur-md p-8 lg:p-10 shadow-2xl"
            >

              <div className="space-y-6">

                <div className="border-l-4 border-[#D6B25E] bg-[#D6B25E]/10 rounded-xl p-6">

                  <h3 className="text-[#D6B25E] text-xl font-bold mb-4">
                    OUR VISION
                  </h3>

                  <p className="text-white text-lg leading-8 font-medium">
                  To build transformed, empowered, and connected communities across nations through discipleship, education, leadership development, technology access, and sustainable community engagement. Our vision is to see individuals, families, and communities equipped with knowledge, values, resources, and opportunities that inspire hope, strengthen leadership, encourage collaboration, and contribute to long-term social, educational, and spiritual transformation.
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">

                </div>

              </div>

            </motion.div>

          </motion.div>
          </div>
      </section>
    </div>
  );
};

export default MissionStatement;