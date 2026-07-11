import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  BookOpen,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DrDanielImage from "../../assets/drdaniel/drdaniel.jpeg";

export default function President() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001a3d] py-24">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#C79A2B]/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-[#C79A2B] font-semibold"
          >
            President & Founder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl lg:text-7xl font-black"
          >
            Dr. Daniel K. Boniface
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 leading-9"
          >
            Meet Dr Daniel K Boniface
          </motion.p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-16">
            {/* Sidebar */}
            <aside>
              <div className="sticky top-24">
                <img
                  src={DrDanielImage}
                  alt="Dr. Daniel K. Boniface"
                  className="rounded-3xl shadow-2xl object-cover w-full"
                />

                <div className="mt-8">
                  <h2 className="text-3xl font-bold text-[#061C3F]">
                    Dr. Daniel K. Boniface
                  </h2>

                  <p className="mt-2 font-semibold text-[#C79A2B]">
                    President & Founder
                  </p>

                  <p className="mt-4 text-gray-600 leading-7">
                    Rehoboth Discipleship International (RHDI)
                  </p>

                  <button
                    onClick={() => navigate("/appointment")}
                    className="mt-8 w-full rounded-full bg-[#C79A2B] py-4 font-semibold text-[#061C3F] hover:bg-[#b98d22] transition inline-flex justify-center items-center gap-2"
                  >
                    Invite Dr. Daniel
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </aside>

            {/* Content */}
            <article>
              <div className="border-l-4 border-[#C79A2B] pl-6 mb-12">
                <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#061C3F] via-blue-700 to-[#C79A2B] bg-clip-text text-transparent">
                  Meet Dr Daniel K Boniface
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-10 prose-p:mb-7">

            <p>
                He is the father of 1 daughter named{" "}
                <span className="font-bold text-[#061C3F]">
                Beatrice Daniel Boniface
                </span>
                , and his wife{" "}
                <span className="font-bold text-[#061C3F]">
                Rahab Ernest Daniel
                </span>
                . His wife has already passed away.
            </p>

            <p>
                <span className="font-bold text-[#061C3F]">
                Dr. Daniel K. Boniface
                </span>{" "}
                was commissioned into ministry in{" "}
                <span className="font-bold text-[#061C3F]">2002</span> and was ordained as
                a teacher in{" "}
                <span className="font-bold text-[#061C3F]">2006</span>.
            </p>

            <p>
                He is the{" "}
                <span className="font-bold text-[#061C3F]">
                Founder and Director of Rehoboth Discipleship International
                </span>
                , based in the{" "}
                <span className="font-bold text-[#061C3F]">USA</span>, and training and
                discipling the Nation for Christ.{" "}
                <span className="font-bold text-[#061C3F]">
                Dr. Daniel
                </span>{" "}
                is committed to helping{" "}
                <span className="font-bold text-[#061C3F]">
                Church Leaders
                </span>{" "}
                with making{" "}
                <span className="font-bold text-[#061C3F]">
                Disciples
                </span>
                , equipping and{" "}
                <span className="font-bold text-[#061C3F]">
                Training effective Ministers and leaders
                </span>
                , raising{" "}
                <span className="font-bold text-[#061C3F]">
                Sons
                </span>
                , and building the{" "}
                <span className="font-bold text-[#061C3F]">
                true Church
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#061C3F]">
                true Disciples
                </span>
                .
            </p>

            <p>
                He holds a{" "}
                <span className="font-bold text-[#061C3F]">
                Bachelor's Degree in Theology (BTh)
                </span>
                ,{" "}
                <span className="font-bold text-[#061C3F]">
                Master's Degree in Christian Business Administration (MB)
                </span>
                ,{" "}
                <span className="font-bold text-[#061C3F]">
                Doctorate in Ministry (DM)
                </span>
                , and{" "}
                <span className="font-bold text-[#061C3F]">
                Candidate for Doctorate in Philosophy of Religion (PhD)
                </span>{" "}
                from{" "}
                <span className="font-bold text-[#061C3F]">
                Maranatha Mission Bible College
                </span>{" "}
                in the US.
            </p>

            <p>
                He has also been a teacher at{" "}
                <span className="font-bold text-[#061C3F]">
                Maranatha Mission Bible College
                </span>{" "}
                for{" "}
                <span className="font-bold text-[#061C3F]">
                14 years
                </span>{" "}
                now.
            </p>

            <p>
                He started full-time with{" "}
                <span className="font-bold text-[#061C3F]">
                Rehoboth Discipleship International
                </span>{" "}
                in{" "}
                <span className="font-bold text-[#061C3F]">
                2018
                </span>
                , Leading{" "}
                <span className="font-bold text-[#061C3F]">
                Equip to Serve
                </span>{" "}
                groups and training men and women individually. He loves the
                relationships that come from learning about{" "}
                <span className="font-bold text-[#061C3F]">
                Jesus
                </span>{" "}
                together.
            </p>

            <p>
                <span className="font-bold text-[#061C3F]">
                Dr. Daniel
                </span>{" "}
                today has been a great blessing to many people; he has been a good
                teacher, and he has found{" "}
                <span className="font-bold text-[#061C3F]">
                spiritual sons
                </span>{" "}
                for{" "}
                <span className="font-bold text-[#061C3F]">
                spiritual grandchildren
                </span>
                .{" "}
                <span className="font-bold text-[#061C3F]">
                Discipleship is life.
                </span>
            </p>

            <blockquote className="border-l-4 border-[#C79A2B] bg-blue-50 rounded-r-xl pl-6 py-5 italic text-[#061C3F]">
                <span className="font-bold text-[#061C3F]">
                John 15:8
                </span>{" "}
                Herein is my Father glorified, that ye bear much fruit; so shall ye be my
                disciples.
            </blockquote>

            <div className="mt-12 border-t pt-8">
                <h3 className="text-2xl font-bold text-[#061C3F]">
                Dr. Daniel K. Boniface
                </h3>

                <p className="text-[#C79A2B] font-semibold">
                President & Founder
                </p>

                <p className="text-3xl mt-4">🙏</p>
            </div>

            </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                <div className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition">
                  <GraduationCap className="text-[#C79A2B]" />
                  <h4 className="mt-4 font-bold text-[#061C3F]">
                    Biblical Education
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Bachelor's, Master's, Doctorate in Ministry and PhD
                    Candidate.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition">
                  <BookOpen className="text-[#C79A2B]" />
                  <h4 className="mt-4 font-bold text-[#061C3F]">
                    Teaching Ministry
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Teacher at Maranatha Mission Bible College for 14 years now.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition">
                  <Users className="text-[#C79A2B]" />
                  <h4 className="mt-4 font-bold text-[#061C3F]">
                    Discipleship
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Helping Church Leaders with making Disciples, equipping and
                    Training effective Ministers and leaders.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition">
                  <Heart className="text-[#C79A2B]" />
                  <h4 className="mt-4 font-bold text-[#061C3F]">
                    Family
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Father of 1 daughter named Beatrice Daniel Boniface.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition md:col-span-2">
                  <BookOpen className="text-[#C79A2B]" />
                  <h4 className="mt-4 font-bold text-[#061C3F]">
                    Ministry Since 2002
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Commissioned into ministry in 2002, ordained as a teacher in
                    2006, and started full-time with Rehoboth Discipleship
                    International in 2018.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}