import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";

const OnlineGivingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/donate-image.jpeg"
          alt="Online Giving"
          className="w-full h-full object-cover scale-105"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00142f]/95 via-[#001a3d]/85 to-[#00142f]/95" />

        {/* Decorative Effects */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d4a017]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#d4a017]/10 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-[#d4a017]/30 bg-white/10 backdrop-blur-xl px-6 py-3"
          >
            <div className="h-2 w-2 rounded-full bg-[#d4a017]" />
            <span className="text-xs font-semibold uppercase tracking-[4px] text-[#d4a017]">
              Support the Mission
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Online Giving
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 130 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#d4a017] to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-200 md:text-xl"
          >
            Your generosity enables us to spread the Gospel, equip leaders,
            strengthen churches, serve communities, and transform lives across
            nations through the love of Christ.
          </motion.p>

          {/* Scripture Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-14 max-w-2xl rounded-3xl border border-white/10 bg-white/10 px-8 py-8 backdrop-blur-xl"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a017]/20">
              <Heart
                size={28}
                className="fill-[#d4a017] text-[#d4a017]"
              />
            </div>

            <p className="text-xl italic leading-9 text-[#f6d06c] md:text-2xl">
              "God loves a cheerful giver."
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[5px] text-white/70">
              2 Corinthians 9:7
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <motion.button
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/donate-to-support")}
              className="group inline-flex items-center gap-5 rounded-full bg-[#d4a017] px-9 py-5 text-base font-bold text-[#001a3d] shadow-[0_20px_50px_rgba(212,160,23,0.35)] transition-all duration-300 hover:bg-[#e1af1e]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#001a3d] transition-transform duration-300 group-hover:rotate-12">
                <Heart
                  size={18}
                  className="fill-[#d4a017] text-[#d4a017]"
                />
              </span>

              <span className="tracking-wide">
                Donate Now
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-2">
                <ChevronRight size={20} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#00142f] to-transparent" />
    </section>
  );
};

export default OnlineGivingSection;