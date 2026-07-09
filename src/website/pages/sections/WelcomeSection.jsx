import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const WelcomeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#d4a017]">
            Welcome to RHDI
          </span>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#d4a017] mx-auto mt-4 mb-10"></div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001a3d] leading-[1.15]">
            Equipping Leaders.
            <br />
            Empowering Communities.
            <br />
            Transforming Nations.
          </h2>

          {/* Description */}
          <p className="mt-10 max-w-3xl mx-auto text-lg leading-9 text-gray-600">
            <span className="font-semibold text-[#001a3d]">
              Rehoboth Discipleship International (RHDI)
            </span>{" "}
            is a global ministry committed to equipping believers through
            discipleship, biblical education, leadership development, and
            community transformation, empowering people to fulfill God's purpose
            and make lasting impact across nations.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/about/who-we-are")}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              bg-[#001a3d]
              text-white
              font-semibold
              rounded-full
              hover:bg-[#002b63]
              transition-all
              duration-300
              shadow-lg
              group
            "
          >
            Learn More

            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#d4a017] transition-transform duration-300 group-hover:translate-x-1">
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

export default WelcomeSection;