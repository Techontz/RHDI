import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutImpactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[28px]
            shadow-[0_25px_70px_rgba(0,0,0,.08)]
            border
            border-gray-200
            bg-white
            grid
            lg:grid-cols-4
          "
        >

          {/* LEFT CONTENT */}

          <div className="bg-[#001a3d] px-10 py-12 flex flex-col justify-center">

            <span className="uppercase tracking-[4px] text-[#d4a017] text-xs font-semibold">
              Global Ministry
            </span>

            <div className="w-14 h-[2px] bg-[#d4a017] mt-4 mb-8"></div>

            <h2 className="text-4xl font-bold text-white leading-tight">
              Our Impact
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              We are committed to equipping leaders, transforming lives,
              strengthening churches and creating sustainable impact in
              communities around the world.
            </p>

            <button
              onClick={() => navigate("/impact/stories")}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                w-fit
                bg-[#d4a017]
                hover:bg-[#bf8d12]
                text-[#001a3d]
                font-semibold
                px-7
                py-3
                rounded-full
                transition
                group
              "
            >
              Explore Impact

              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition">
                <ArrowRight
                  size={16}
                  className="text-[#001a3d]"
                />
              </span>

            </button>

          </div>

          {/* IMAGE COLUMN */}

          <div className="grid grid-rows-2">

            <div className="relative overflow-hidden group">

              <img
                src="/impact1.png"
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>

            </div>

            <div className="relative overflow-hidden group">

              <img
                src="/impact2.png"
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>

            </div>

          </div>

          {/* CENTER IMAGE */}

          <div className="relative overflow-hidden group">

            <img
              src="/impact3.png"
              alt=""
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="bg-[#d4a017] px-10 py-12 flex flex-col justify-center">

            <span className="uppercase tracking-[4px] text-[#001a3d] text-xs font-semibold">
              About RHDI
            </span>

            <div className="w-14 h-[2px] bg-[#001a3d] mt-4 mb-8"></div>

            <h2 className="text-4xl font-bold text-[#001a3d] leading-tight">
              Who We Are
            </h2>

            <p className="mt-6 text-[#17304f] leading-8">
              Rehoboth Discipleship International is a Christ-centered
              ministry devoted to discipleship, leadership development,
              humanitarian outreach and community transformation across
              nations.
            </p>

            <button
              onClick={() => navigate("/about/who-we-are")}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                w-fit
                bg-white
                hover:bg-gray-100
                text-[#001a3d]
                font-semibold
                px-7
                py-3
                rounded-full
                transition
                group
              "
            >
              Learn More

              <span className="w-8 h-8 rounded-full bg-[#001a3d] flex items-center justify-center group-hover:translate-x-1 transition">
                <ArrowRight
                  size={16}
                  className="text-[#d4a017]"
                />
              </span>

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutImpactSection;