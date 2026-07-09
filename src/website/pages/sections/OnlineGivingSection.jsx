import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";

import GivingBackground from "../../../assets/giving/giving-bg.png";

const OnlineGivingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={GivingBackground}
          alt="Online Giving"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#001a3d]/85"></div>

        {/* Soft Gold Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4a017]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <span className="uppercase tracking-[4px] text-[#d4a017] text-sm font-semibold">
            Support the Mission
          </span>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#d4a017] mx-auto mt-4 mb-10"></div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Online Giving
          </h2>

          {/* Description */}
          <p className="mt-10 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-200">
            Your generosity enables us to spread the Gospel, equip leaders,
            strengthen churches, serve communities, and transform lives across
            nations through the love of Christ.
          </p>

          {/* Scripture */}
          <p className="mt-10 text-[#d4a017] italic text-lg md:text-xl">
            "God loves a cheerful giver."
          </p>

          <p className="mt-2 text-white/80 text-sm tracking-wider uppercase">
            2 Corinthians 9:7
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/donate-to-support")}
            className="
              mt-14
              inline-flex
              items-center
              gap-4
              bg-[#d4a017]
              hover:bg-[#c59512]
              text-[#001a3d]
              font-bold
              px-9
              py-4
              rounded-full
              shadow-2xl
              transition-all
              duration-300
              group
            "
          >
            <Heart
              size={18}
              className="fill-[#001a3d]"
            />

            Donate Now

            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#001a3d] group-hover:translate-x-1 transition-transform">
              <ChevronRight
                size={18}
                className="text-[#d4a017]"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineGivingSection;