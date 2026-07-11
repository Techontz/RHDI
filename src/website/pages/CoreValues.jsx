import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  HeartHandshake,
  Award,
  Sparkles,
  Handshake,
} from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      icon: ShieldCheck,
      description:
        "We are committed to honesty, ethical conduct, and consistency between our values and actions.",
    },
    {
      title: "Accountability",
      icon: BadgeCheck,
      description:
        "We believe in responsible stewardship, transparency, and maintaining trust through responsible management and reporting.",
    },
    {
      title: "Leadership",
      icon: Users,
      description:
        "We are committed to developing leaders who serve with wisdom, humility, and integrity.",
    },
    {
      title: "Service",
      icon: HeartHandshake,
      description:
        "We believe in serving individuals and communities with compassion, respect, and a genuine commitment to human dignity and well-being.",
    },
    {
      title: "Excellence",
      icon: Award,
      description:
        "We strive to pursue high standards, continuous improvement, and quality in our programs, partnerships, and organizational practices.",
    },
    {
      title: "Community Transformation",
      icon: Sparkles,
      description:
        "We believe that empowered individuals and collaborative communities can create sustainable and lasting positive change.",
    },
    {
      title: "Strategic Collaboration",
      icon: Handshake,
      description:
        "We value partnerships and believe that working together creates greater opportunities for learning, innovation, and impact.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl"/>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl"/>
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4"/> Core Values
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-[#061C3F] leading-tight">
              The Principles That
              <span className="block text-[#C79A2B]">Guide Everything We Do</span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#C79A2B]"/>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Our core values shape our culture, guide our decisions, strengthen our relationships,
              and define how we serve communities with excellence, integrity, and purpose.
            </p>
          </motion.div>

          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {values.map(({title,icon:Icon,description},i)=>(
              <motion.div
                key={title}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.08}}
                viewport={{once:true}}
                className="group rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white transition-colors group-hover:bg-[#C79A2B]">
                  <Icon className="h-8 w-8"/>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#061C3F]">
                  {title}
                </h3>

                <div className="mt-4 h-1 w-14 rounded-full bg-[#C79A2B]"/>

                <p className="mt-6 text-gray-600 leading-8">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mt-28 rounded-[36px] bg-[#061C3F] px-10 py-14 md:px-16"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
              Living Our Values Every Day
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C79A2B]"/>
            <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-200">
              These values provide the foundation for our leadership, guide our decision-making,
              strengthen our partnerships, and inspire our commitment to creating sustainable,
              Christ-centered transformation within communities and nations.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
