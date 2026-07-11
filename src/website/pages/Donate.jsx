import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Globe,
  Users,
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const DonateBackground = "/donate-bg.jpg";
const DonateImage = "/donate-image.jpg";

const Donate = () => {
  // Paypal
  const paypalDonationLink =
    "https://www.paypal.com/donate/?hosted_button_id=WEUK8NKDYNL2E";

  const handleDonate = () => {
    window.open(paypalDonationLink, "_blank", "noopener,noreferrer");
  };

  // Animation
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08111F] text-white">

      {/* ========================= */}
      {/* Background Image */}
      {/* ========================= */}

      <div className="absolute inset-0">

        <img
          src={DonateBackground}
          alt="Donate Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}


      <div className="absolute inset-0 bg-[#08111F]/88"></div>

      {/* Luxury Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#08111F]/95 via-[#0E1728]/90 to-[#121D30]/95"></div>

      {/* Gold Vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,216,111,.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(198,146,20,.08),transparent_40%)]"></div>

      </div>

      {/* ========================= */}
      {/* Premium Blurred Lights */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden">

      <motion.div
          animate={{
              scale: [1, 1.12, 1],
              opacity: [.12,.22,.12],
          }}
          transition={{
              duration:10,
              repeat:Infinity,
          }}
          className="absolute
          -top-40
          -right-40
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#FFD86F]
          blur-[180px]"
      />

        <motion.div
            animate={{
                scale:[1.05,.95,1.05],
                opacity:[.08,.18,.08],
            }}
            transition={{
                duration:12,
                repeat:Infinity,
            }}
            className="absolute
            bottom-[-200px]
            left-[-120px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-[#C69214]
            blur-[190px]"
        />

        {/* Deep Red */}

        <motion.div
            animate={{
                scale:[1,1.15,1],
            }}
            transition={{
                duration:15,
                repeat:Infinity,
            }}
            className="absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#8B1E14]
            opacity-20
            blur-[160px]"
        />

      </div>

      {/* ========================= */}
      {/* Luxury Grid */}
      {/* ========================= */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* ========================= */}
      {/* Floating Gold Particles */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [-20, 25, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-[#FFD86F] shadow-[0_0_20px_rgba(255,216,111,.7)]"
            style={{
              width: `${4 + (index % 4)}px`,
              height: `${4 + (index % 4)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </div>

      {/* ========================= */}
      {/* Main Container */}
      {/* ========================= */}

      <div className="relative z-20 container mx-auto px-6 lg:px-10 py-20 lg:py-32">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
                    {/* ===================================================== */}
          {/* HERO SECTION */}
          {/* ===================================================== */}

          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <motion.div
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >

              {/* Badge */}

              <div className="inline-flex items-center gap-3 rounded-full border border-[#C69214]/25 bg-[#121D30]/80 backdrop-blur-2xl px-6 py-3 mb-10 shadow-[0_10px_40px_rgba(0,0,0,.25)]">

                <Sparkles className="w-5 h-5 text-[#F4C95D]" />

                <span className="text-[#FFD86F] text-sm font-semibold tracking-widest uppercase">
                  Support the Mission
                </span>

              </div>

              {/* Heading */}

              <h1 className="font-black leading-none">

                <span className="block text-[#FFFFFF] text-5xl md:text-6xl lg:text-7xl">
                  DONATE
                </span>

                <span className="block mt-2 bg-gradient-to-r from-[#FFD86F] via-[#F5C142] to-[#C69214] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
                  TO SUPPORT
                </span>

              </h1>

              {/* Description */}

              <p className="mt-8 text-lg md:text-xl leading-9 text-[rgba(255,255,255,.85)] max-w-xl">

                Your generosity helps us proclaim the Gospel,
                disciple believers, strengthen families, equip
                leaders, and extend the love of Christ to people
                across the world.

              </p>

              {/* Scripture */}

              <div className="mt-8 border-l-[3px] border-[#FFD86F] pl-6">

                <p className="italic text-[#FFD86F] text-lg">

                  "Each one must give as he has decided in his
                  heart, not reluctantly or under compulsion,
                  for God loves a cheerful giver."

                </p>

                <p className="mt-3 text-[rgba(255,255,255,.45)]">
                  — 2 Corinthians 9:7
                </p>

              </div>

              {/* Features */}

              <div className="mt-10 grid gap-5">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-full bg-[#C69214]/20 flex items-center justify-center">

                    <CheckCircle2 className="w-6 h-6 text-[#F4C95D]" />

                  </div>

                  <div>

                    <h4 className="text-white font-semibold">
                      Global Gospel Outreach
                    </h4>

                    <p className="text-white/65">
                      Helping spread Biblical truth around the world.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-full bg-[#C69214]/20 flex items-center justify-center">

                    <CheckCircle2 className="w-6 h-6 text-[#F4C95D]" />

                  </div>

                  <div>

                    <h4 className="text-white font-semibold">
                      Christian Leadership Development
                    </h4>

                    <p className="text-white/65">
                      Equipping disciples and ministry leaders.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-full bg-[#C69214]/20 flex items-center justify-center">

                    <CheckCircle2 className="w-6 h-6 text-[#F4C95D]" />

                  </div>

                  <div>

                    <h4 className="text-white font-semibold">
                      Family & Marriage Ministry
                    </h4>

                    <p className="text-white/65">
                      Strengthening homes through Biblical wisdom.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* ================= RIGHT IMAGE ================= */}

            <motion.div
              variants={fadeInUp}
              className="relative order-1 lg:order-2"
            >

              {/* Glow */}

              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-[#C69214]/25 via-[#D97706]/15 to-[#8B1E14]/20 blur-3xl"></div>

              {/* Card */}

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

                {/* Image */}

                <img
                  src="/donate-image.png"
                  alt="Support Ministry"
                  className="w-full h-[650px] object-cover"
                />
                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-[#08111F]/20 to-transparent"></div>

                {/* Floating Card */}

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-black/40 backdrop-blur-2xl p-6"
                >

                  <div className="flex items-center gap-3 mb-4">

                    <Heart className="w-8 h-8 text-[#F6C443] fill-[#F6C443]" />

                    <div>

                      <h3 className="text-white font-bold text-xl">
                        Every Gift Matters
                      </h3>

                      <p className="text-white/60">
                        Together we make an eternal impact.
                      </p>

                    </div>

                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                      animate={{
                        width: ["20%", "85%", "60%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#F6C443] via-[#E49A18] to-[#C76D12]"
                    />

                  </div>

                </motion.div>

              </div>

            </motion.div>

          </div>

          {/* ===================================================== */}
          {/* END HERO */}
          {/* ===================================================== */}

                    {/* ===================================================== */}
          {/* IMPACT STATISTICS */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          >

            {/* Card 1 */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-[#C69214]/40 transition-all duration-500">

              <div className="absolute inset-0 bg-gradient-to-br from-[#C69214]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C69214] to-[#E9A821] flex items-center justify-center mb-6">

                  <Globe className="w-8 h-8 text-white" />

                </div>

                <h3 className="text-5xl font-black text-white mb-2">
                  50+
                </h3>

                <p className="text-[#F5D56B] font-semibold mb-3">
                  Countries Reached
                </p>

                <p className="text-white/65 leading-7">
                  The Gospel is reaching communities across
                  multiple nations through discipleship,
                  conferences, teaching, and digital ministry.
                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-[#C69214]/40 transition-all duration-500">

              <div className="absolute inset-0 bg-gradient-to-br from-[#C69214]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C69214] to-[#E9A821] flex items-center justify-center mb-6">

                  <Users className="w-8 h-8 text-white" />

                </div>

                <h3 className="text-5xl font-black text-white mb-2">
                  10K+
                </h3>

                <p className="text-[#F5D56B] font-semibold mb-3">
                  Lives Impacted
                </p>

                <p className="text-white/65 leading-7">
                  Individuals, families and church leaders
                  equipped with practical Biblical wisdom
                  for everyday life.
                </p>

              </div>

            </div>

            {/* Card 3 */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-[#C69214]/40 transition-all duration-500">

              <div className="absolute inset-0 bg-gradient-to-br from-[#C69214]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C69214] to-[#E9A821] flex items-center justify-center mb-6">

                  <Shield className="w-8 h-8 text-white" />

                </div>

                <h3 className="text-5xl font-black text-white mb-2">
                  100%
                </h3>

                <p className="text-[#F5D56B] font-semibold mb-3">
                  Ministry Focused
                </p>

                <p className="text-white/65 leading-7">
                  Every contribution supports ministry
                  initiatives with integrity, stewardship,
                  and Kingdom impact.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ===================================================== */}
          {/* DONATION INFORMATION */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-3xl"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-[#C69214]/10 via-transparent to-[#8B1E14]/10"></div>

            <div className="relative p-10 lg:p-14">

              <div className="max-w-4xl mx-auto text-center">

                <div className="inline-flex items-center gap-3 rounded-full bg-[#C69214]/15 border border-[#C69214]/25 px-6 py-3 mb-8">

                  <Heart className="w-5 h-5 text-[#F6C443] fill-[#F6C443]" />

                  <span className="uppercase tracking-[0.25em] text-[#F6C443] text-sm font-semibold">
                    Partner With The Mission
                  </span>

                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

                  Every Donation Helps Build
                  <span className="block mt-2 bg-gradient-to-r from-[#FFD86F] via-[#F5C142] to-[#D6891D] bg-clip-text text-transparent">
                    Stronger Disciples Worldwide
                  </span>

                </h2>

                <p className="mt-8 text-lg md:text-xl leading-9 text-white/75">

                  Your financial partnership enables ministry
                  outreach, discipleship training, Christian
                  leadership development, conferences,
                  publications, and digital resources that
                  transform lives through the Gospel of
                  Jesus Christ.

                </p>

              </div>

            </div>

          </motion.div>

          {/* ===================================================== */}
          {/* PAYPAL INFO */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="mt-20 flex flex-col items-center justify-center"
          >

            <div className="flex items-center gap-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-5">

              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt="PayPal"
                className="h-10"
              />

              <div>

                <h4 className="text-white font-semibold">
                  Secure PayPal Donations
                </h4>

                <p className="text-white/60 text-sm">
                  Safe, encrypted and trusted worldwide.
                </p>

              </div>

            </div>

          </motion.div>

                    {/* ===================================================== */}
          {/* DONATE CTA SECTION */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="relative mt-24"
          >

            {/* Background Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[650px] h-[650px] rounded-full bg-[#C69214]/10 blur-[180px]"></div>

            </div>

            <div className="relative text-center">

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#C69214]/30 bg-[#C69214]/10 backdrop-blur-xl mb-8">

                <Heart
                  className="w-5 h-5 text-[#F6C443] fill-[#F6C443]"
                />

                <span className="uppercase tracking-[0.25em] text-[#F6C443] text-sm font-semibold">
                  Give With Joy
                </span>

              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white">

                Become A
                <span className="block mt-3 bg-gradient-to-r from-[#FFE27C] via-[#F5C142] to-[#D98B16] bg-clip-text text-transparent">

                  Kingdom Partner

                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl leading-9 text-white/75">

                Every contribution, whether large or small,
                becomes part of God's work through this ministry.
                Together we proclaim Christ, strengthen believers,
                equip families, and impact generations with the
                transforming truth of God's Word.

              </p>

            </div>

          </motion.div>

          {/* ===================================================== */}
          {/* DONATE BUTTON */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center mt-16"
          >

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={handleDonate}
              className="group relative overflow-hidden rounded-full"
            >

              {/* Glow */}

              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FFD86F] via-[#F5C142] to-[#C69214] blur-xl opacity-40 group-hover:opacity-100 transition duration-700"></div>

              {/* Button */}

              <div className="relative flex items-center gap-5 rounded-full bg-gradient-to-r from-[#FFD86F] via-[#F4BE3A] to-[#C69214] px-14 md:px-20 py-7 shadow-[0_25px_80px_rgba(198,146,20,.45)]">

                <Heart
                  className="w-8 h-8 fill-[#08111F] text-[#08111F]"
                />

                <span className="text-[#08111F] text-xl md:text-2xl font-black tracking-wide">

                  DONATE NOW

                </span>

                <motion.div
                  animate={{
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight
                    className="w-8 h-8 text-[#08111F]"
                  />
                </motion.div>

              </div>

            </motion.button>

          </motion.div>

          {/* ===================================================== */}
          {/* TRUST BADGES */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mt-20"
          >

            {/* Badge */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

              <Shield className="mx-auto w-10 h-10 text-[#F6C443] mb-5" />

              <h3 className="text-white font-bold text-xl">

                Secure Giving

              </h3>

              <p className="mt-3 text-white/65 leading-7">

                Donations are processed securely through
                PayPal's trusted payment platform.

              </p>

            </div>

            {/* Badge */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

              <Heart className="mx-auto w-10 h-10 text-[#F6C443] fill-[#F6C443] mb-5" />

              <h3 className="text-white font-bold text-xl">

                Kingdom Impact

              </h3>

              <p className="mt-3 text-white/65 leading-7">

                Every gift supports discipleship,
                leadership development,
                outreach and ministry resources.

              </p>

            </div>

            {/* Badge */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

              <Globe className="mx-auto w-10 h-10 text-[#F6C443] mb-5" />

              <h3 className="text-white font-bold text-xl">

                Global Reach

              </h3>

              <p className="mt-3 text-white/65 leading-7">

                Helping spread Biblical truth,
                hope and love to people
                around the world.

              </p>

            </div>

          </motion.div>

          {/* ===================================================== */}
          {/* THANK YOU MESSAGE */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="mt-24"
          >

            <div className="rounded-[36px] border border-[#C69214]/20 bg-gradient-to-br from-white/5 to-[#C69214]/10 backdrop-blur-2xl p-12 text-center">

              <h3 className="text-4xl font-black text-white">

                Thank You For Your Generosity

              </h3>

              <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-white/75">

                Your faithful support helps advance the Gospel,
                strengthen Christian families, raise disciples,
                and extend the love of Christ to communities
                across the world.

                <br /><br />

                We sincerely appreciate your partnership in
                fulfilling the Great Commission.

              </p>

            </div>

          </motion.div>

                    {/* ===================================================== */}
          {/* PREMIUM DECORATIVE DOTS */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center gap-4 mt-24"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.35, 1, 0.35],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
                className={`rounded-full ${
                  index === 2
                    ? "w-4 h-4 bg-[#F5C142]"
                    : "w-3 h-3 bg-[#C69214]"
                }`}
              />
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ===================================================== */}
      {/* LUXURY BOTTOM FADE */}
      {/* ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">

        <div className="h-40 bg-gradient-to-t from-[#08111F] via-[#08111F]/80 to-transparent" />

      </div>

      {/* ===================================================== */}
      {/* GOLD WAVE */}
      {/* ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 opacity-30">

        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>

            <linearGradient
              id="goldWave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >

              <stop offset="0%" stopColor="#8A5A00" />

              <stop offset="30%" stopColor="#C69214" />

              <stop offset="65%" stopColor="#FFD86F" />

              <stop offset="100%" stopColor="#A86A0A" />

            </linearGradient>

          </defs>

          <path
            fill="url(#goldWave)"
            d="M0,160L48,154.7C96,149,192,139,288,128C384,117,480,107,576,122.7C672,139,768,181,864,192C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />

        </svg>

      </div>

      {/* ===================================================== */}
      {/* FLOATING GOLD ORBS */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-16 w-36 h-36 rounded-full bg-[#C69214]/20 blur-[90px]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.55, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-28 right-16 w-52 h-52 rounded-full bg-[#D98B16]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-1/3 right-1/4 w-44 h-44 rounded-full bg-[#8B1E14]/20 blur-[110px]"
      />

    </section>
  );
};

export default Donate;