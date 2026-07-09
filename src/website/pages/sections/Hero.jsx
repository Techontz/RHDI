import React from "react";
import HeroBackground from "../../../assets/hero/hero.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HeroBackground}
          alt="RHDI"
          className="w-full h-full object-cover"
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/95 via-[#001a3d]/80 to-black/40" />

        {/* Extra Dark Layer */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center">

        <div className="max-w-[1700px] mx-auto w-full px-6 lg:px-12">

          <div className="max-w-3xl">

            {/* Headline */}

            <h1 className="uppercase leading-[1.08]">

              <span className="block text-white font-extrabold text-[1.9rem] md:text-[2.8rem] lg:text-[4rem]">
                EQUIPPING LEADERS.
              </span>

              <span className="block text-white font-extrabold text-[1.9rem] md:text-[2.8rem] lg:text-[4rem]">
                EMPOWERING COMMUNITIES.
              </span>

              <span className="block text-[#d4a017] font-extrabold text-[1.6rem] md:text-[2.2rem] lg:text-[3rem]">
                TRANSFORMING NATIONS.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
              Through Discipleship, Education, Leadership,
              Technology and Community Transformation.
            </p>

            {/* Quote Card */}

            <div className="mt-6 max-w-xl border border-[#d4a017] rounded-md bg-[#001a3d]/50 backdrop-blur-sm p-5">

              <div className="flex gap-4">

                <div className="text-[#d4a017] text-4xl leading-none font-bold">
                  “
                </div>

                <div>
                  <p className="text-white text-base leading-relaxed">
                    Unless the Lord builds the house,
                    the builders labor in vain.
                  </p>

                  <p className="mt-2 text-[#d4a017] text-sm font-medium">
                    — Psalm 127:1
                  </p>
                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-6">

              <button
                className="
                  bg-[#d4a017]
                  hover:bg-[#b88b11]
                  text-black
                  text-sm
                  font-medium
                  uppercase
                  tracking-wide
                  px-8
                  py-3
                  transition-all
                  duration-300
                "
              >
                Our Programs
              </button>

              <button
                className="
                  border-2
                  border-[#d4a017]
                  text-white
                  text-sm
                  font-medium
                  uppercase
                  tracking-wide
                  px-8
                  py-3
                  hover:bg-[#d4a017]
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Partner With Us
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;