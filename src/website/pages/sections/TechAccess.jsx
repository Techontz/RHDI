import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TechAccess = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-24 bg-[#f3f4f6]">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#001a3d]/5 blur-3xl"></div>

        <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-[#d4a017]/10 blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#001a3d 1px, transparent 1px), linear-gradient(90deg, #001a3d 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Small Label */}
          <span className="inline-block uppercase tracking-[5px] text-[#d4a017] font-semibold text-sm">
            Technology Initiative
          </span>

          {/* Gold Divider */}
          <div className="w-20 h-1 bg-[#d4a017] rounded-full mx-auto mt-3 mb-8"></div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001a3d] leading-tight">
            Technology Access &
            <br />
            Digital Empowerment Initiative
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-9 text-gray-600">
            Our Technology Access & Digital Empowerment Initiative is committed
            to bridging the digital divide by expanding access to technology,
            strengthening digital literacy, and providing innovative solutions
            that empower churches, schools, underserved communities, and future
            leaders to thrive in today's connected world.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/technology/vision")}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              bg-[#001a3d]
              hover:bg-[#00295d]
              text-white
              font-semibold
              px-8
              py-4
              rounded-full
              shadow-2xl
              transition-all
              duration-300
              group
            "
          >
            Explore the Initiative

            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d4a017] group-hover:translate-x-1 transition-transform duration-300">
              <ChevronRight
                size={18}
                className="text-[#001a3d]"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechAccess;