import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Cross,
  Heart,
  ShieldCheck,
  HandHeart,
  Users,
  GraduationCap,
  Globe,
  Scale,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    icon: BookOpen,
    title: "The Authority of Scripture",
    text: "We believe God's Word provides timeless truth and guidance for faith, leadership, stewardship, and community transformation.",
  },
  {
    icon: Heart,
    title: "Human Dignity",
    text: "Every person is created in the image of God with inherent worth, purpose, and unique gifts to serve society.",
  },
  {
    icon: HandHeart,
    title: "Faith in Action",
    text: "Authentic faith is demonstrated through compassion, justice, service, reconciliation, and practical love.",
  },
  {
    icon: ShieldCheck,
    title: "Servant Leadership",
    text: "Leadership is a sacred responsibility exercised with humility, integrity, accountability, and excellence.",
  },
  {
    icon: GraduationCap,
    title: "Wisdom & Learning",
    text: "Education, lifelong learning, mentorship, and responsible stewardship of knowledge enable people to flourish.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Healthy communities are built through love, collaboration, mutual respect, shared responsibility, and unity.",
  },
  {
    icon: Globe,
    title: "Transformation",
    text: "God transforms individuals, strengthens families, renews communities, and impacts nations through faithful service.",
  },
  {
    icon: Scale,
    title: "Justice",
    text: "We seek to uphold righteousness, fairness, dignity, and compassion in every aspect of our work.",
  },
  {
    icon: Lightbulb,
    title: "Responsible Stewardship",
    text: "We are called to wisely use our gifts, resources, technology, and opportunities for God's glory and human flourishing.",
  },
  {
    icon: Cross,
    title: "Hope in Christ",
    text: "Our confidence rests in Christ, whose love inspires lasting transformation for individuals and communities.",
  },
];

const scriptures = [
  "Genesis 1:27",
  "Micah 6:8",
  "Matthew 5:14–16",
  "Matthew 22:37–39",
  "John 13:34–35",
  "Romans 12:9–21",
  "Ephesians 2:10",
  "Colossians 3:23–24",
  "1 Peter 4:10",
];

export default function BiblicalFoundationsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1700px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl"
        >

          {/* HERO */}

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}

            <div className="relative h-[500px] lg:h-auto overflow-hidden">

              <img
                src="/biblical-foundations.jpg"
                alt="Biblical Foundations"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061C3F]/90 via-[#061C3F]/55 to-transparent" />

              <div className="absolute bottom-12 left-10 max-w-md text-white">

                <div className="w-24 h-1 rounded-full bg-[#C79A2B] mb-6" />

                <h3 className="text-4xl font-black uppercase">
                  Biblical Foundations
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-100">
                  God's Word is the moral and spiritual foundation that
                  shapes our mission, values, leadership, and service.
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-white p-12 lg:p-16">

              <span className="inline-block w-24 h-1 rounded-full bg-[#C79A2B] mb-8" />

              <h2 className="text-5xl lg:text-6xl font-black uppercase text-[#061C3F]">
                BIBLICAL FOUNDATIONS
              </h2>

              <div className="w-28 h-1 bg-[#C79A2B] mt-6 mb-10" />

              <div className="space-y-7 text-[19px] leading-9 text-gray-700">

                <p>
                  At Rehoboth Discipleship International (RHDI), our
                  mission, values, and programs are rooted in biblical
                  principles that affirm the dignity of every person
                  and the responsibility of believers to serve others
                  with integrity, compassion, and excellence.
                </p>

                <p>
                  We believe Scripture provides timeless truth for
                  personal transformation, servant leadership,
                  education, stewardship, and community engagement.
                  These principles shape our vision and guide every
                  initiative we undertake.
                </p>

                <p>
                  Our biblical foundations inspire us to promote
                  justice, strengthen communities, cultivate wisdom,
                  empower leaders, and encourage responsible
                  stewardship of resources, knowledge, and technology.
                </p>

                <p>
                  We believe true transformation begins with
                  transformed individuals, extends to families and
                  communities, and ultimately contributes to the
                  renewal and flourishing of nations.
                </p>

              </div>

              <div className="mt-12">

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Faith In Action.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Servant Leadership.
                </h3>

                <h3 className="text-3xl font-black text-[#061C3F]">
                  Responsible Stewardship.
                </h3>

                <h3 className="text-3xl font-black text-[#C79A2B]">
                  Community Transformation.
                </h3>

              </div>

            </div>

          </div>

          {/* PRINCIPLES */}

          <div className="bg-[#061C3F] px-8 py-16">

            <div className="text-center mb-14">

              <h3 className="text-4xl font-black uppercase text-white">
                Biblical Principles
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#C79A2B]/20 bg-white/5 p-7 backdrop-blur-sm"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C79A2B] mb-6">

                      <Icon size={30} className="text-white" />

                    </div>

                    <h4 className="text-xl font-bold uppercase text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-7 text-gray-300">
                      {item.text}
                    </p>

                    <ArrowRight className="mt-6 text-[#C79A2B]" />

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* SCRIPTURE */}

          <div className="bg-[#F8F8F8] px-8 py-20">

            <div className="max-w-6xl mx-auto text-center">

              <h3 className="text-4xl font-black uppercase text-[#061C3F]">
                Biblical References
              </h3>

              <div className="mx-auto mt-5 w-28 h-1 bg-[#C79A2B]" />

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                {scriptures.map((verse) => (

                  <div
                    key={verse}
                    className="rounded-full border border-[#C79A2B] bg-white px-8 py-4 text-lg font-bold text-[#061C3F]"
                  >
                    {verse}
                  </div>

                ))}

              </div>

              <p className="max-w-5xl mx-auto mt-12 text-lg leading-9 text-gray-700">
                These biblical foundations provide the moral and
                spiritual framework that guides our vision, shapes our
                organizational culture, informs our decision-making,
                and inspires our commitment to serving communities
                across nations. They remind us that genuine
                transformation begins with faith expressed through
                compassionate service, ethical leadership, and faithful
                stewardship for the glory of God and the flourishing of
                humanity.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}