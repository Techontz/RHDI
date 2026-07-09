import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import DrDanielImage from "../../../assets/drdaniel/drdaniel.jpeg";

const MeetDrDanielSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-28 bg-[#001a3d]">

      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#d4a017]/10 blur-3xl"></div>

        <div className="absolute -bottom-52 -right-32 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#ffffff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Gold Frame */}
              <div className="absolute -left-5 -top-5 w-full h-full border-2 border-[#d4a017] rounded-3xl"></div>

              <img
                src={DrDanielImage}
                alt="Dr. Daniel K. Boniface"
                className="
                  relative
                  w-full
                  max-w-md
                  rounded-3xl
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                  object-cover
                "
              />

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[5px] text-[#d4a017] font-semibold text-sm">
              President & Founder
            </span>

            <div className="w-16 h-[2px] bg-[#d4a017] mt-4 mb-8"></div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Message from
              <br />
              Dr. Daniel K. Boniface
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Rehoboth Discipleship International exists to equip believers,
              develop Christ-centered leaders, strengthen churches, and raise
              mature disciples who transform communities and nations through the
              power of God's Word.
            </p>

            {/* Quote */}
            <blockquote
              className="
                mt-10
                border-l-4
                border-[#d4a017]
                pl-6
                italic
                text-xl
                text-white
                leading-9
              "
            >
              “A good teacher ensures that disciples reach maturity. Our
              responsibility is to make sure discipleship produces lasting
              fruit.”
            </blockquote>

            {/* Scripture */}
            <div
              className="
                mt-10
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                p-7
              "
            >
              <p className="text-[#d4a017] font-bold mb-3">
                John 15:8
              </p>

              <p className="text-gray-300 italic leading-8">
                "This is to my Father's glory, that you bear much fruit,
                showing yourselves to be my disciples."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-12">

              <button
                onClick={() => navigate("/appointment")}
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#d4a017]
                  hover:bg-[#c79514]
                  text-[#001a3d]
                  font-semibold
                  px-8
                  py-4
                  rounded-full
                  shadow-xl
                  transition-all
                  group
                "
              >
                Invite Dr. Daniel

                <span className="
                  w-8
                  h-8
                  rounded-full
                  bg-[#001a3d]
                  flex
                  items-center
                  justify-center
                  group-hover:translate-x-1
                  transition-transform
                ">
                  <ArrowRight
                    size={16}
                    className="text-[#d4a017]"
                  />
                </span>
              </button>

              <button
                onClick={() => navigate("/about/history")}
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/30
                  text-white
                  hover:bg-white
                  hover:text-[#001a3d]
                  transition-all
                  font-semibold
                "
              >
                Learn More
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MeetDrDanielSection;