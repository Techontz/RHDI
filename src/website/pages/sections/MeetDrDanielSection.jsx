import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DrDanielImage from "../../../assets/drdaniel/drdaniel.jpeg";

export default function MeetDrDanielSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#001a3d] py-24">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-44 -left-44 h-[500px] w-[500px] rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute -bottom-44 -right-44 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-white shadow-2xl overflow-hidden"
        >

          <div className="grid lg:grid-cols-[260px_1fr]">

            {/* Left Side */}

            <div className="bg-[#fafafa] border-r border-gray-200 p-8">

              <div className="lg:sticky lg:top-28">

                <img
                  src={DrDanielImage}
                  alt="Dr. Daniel"
                  className="w-full rounded-3xl object-cover shadow-xl"
                />

                <div className="mt-6">

                  <h3 className="text-2xl font-bold text-[#061C3F]">
                    Dr. Daniel
                  </h3>

                  <p className="mt-2 text-[#C79A2B] font-semibold">
                    President & Founder
                  </p>

                  <div className="mt-5 h-[2px] w-16 bg-[#C79A2B]" />

                  <p className="mt-5 text-gray-600 leading-7 text-[15px]">
                    Rehoboth Discipleship International (RHDI)
                  </p>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="p-8 lg:p-14">

              <span className="uppercase tracking-[4px] text-[#C79A2B] font-semibold text-sm">
                President & Founder
              </span>

              <div className="mt-4 h-[2px] w-20 bg-[#C79A2B]" />

              <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#061C3F] leading-tight">
                A Message from the President
              </h2>

              <div className="mt-10 max-w-4xl space-y-7 text-[18px] leading-9 text-gray-700">

                <p>
                  <strong>
                    Welcome to Rehoboth Discipleship International (RHDI).
                  </strong>
                </p>

                <p>
                  It is my great privilege to welcome you to our global
                  community of faith, leadership, education, and service.
                </p>

                <p>
                  At RHDI, we believe that every individual has God-given
                  potential to influence families, communities, and nations.
                  Our mission is to equip leaders, empower communities, and
                  transform lives through discipleship, education, leadership
                  development, humanitarian outreach, and digital empowerment.
                </p>

                <p>
                  Since our journey began, we have witnessed God opening doors
                  for ministry and collaboration across multiple countries.
                  Through conferences, leadership training, online learning,
                  community development initiatives, and strategic
                  partnerships, we continue to invest in people who are
                  committed to making a lasting difference in their
                  communities.
                </p>

                <p>
                  We recognize that today’s world requires leaders who combine
                  strong moral character, professional excellence, and servant
                  leadership. For this reason, RHDI is committed to developing
                  individuals who are prepared to lead with integrity,
                  compassion, wisdom, and innovation.
                </p>

                <p>
                  Our vision extends beyond geographical boundaries. We are
                  building an international network of leaders, churches,
                  ministries, organizations, educators, and volunteers who
                  share a common desire to bring hope, opportunity, and
                  sustainable transformation to future generations.
                </p>

                <p>
                  As you explore our website, I invite you to learn more about
                  our programs, celebrate the impact that has already been
                  made, and discover how you can become part of this growing
                  mission. Whether through partnership, volunteering,
                  training, or financial support, your involvement can help
                  expand our reach and transform more lives around the world.
                </p>

                <p>
                  Thank you for visiting RHDI. We look forward to serving
                  alongside you as together we build stronger leaders,
                  healthier communities, and a brighter future for generations
                  to come.
                </p>

                <p>
                  <strong>May God richly bless you.</strong>
                </p>

              </div>

              {/* Signature */}

              <div className="mt-14 border-l-4 border-[#C79A2B] pl-6">

                <h3 className="text-2xl font-bold text-[#061C3F]">
                  Dr. Daniel
                </h3>

                <p className="mt-2 font-semibold text-[#C79A2B]">
                  President & Founder
                </p>

                <p className="mt-2 text-gray-600">
                  Rehoboth Discipleship International (RHDI)
                </p>

              </div>

              {/* Buttons */}

              <div className="mt-14 flex flex-wrap gap-5">

                <button
                  onClick={() => navigate("/appointment")}
                  className="inline-flex items-center gap-3 rounded-full bg-[#C79A2B] px-8 py-4 font-semibold text-[#061C3F] transition hover:bg-[#b88a20]"
                >
                  Invite Dr. Daniel
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/about/president")}
                  className="rounded-full border border-[#061C3F] px-8 py-4 font-semibold text-[#061C3F] transition hover:bg-[#061C3F] hover:text-white"
                >
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}