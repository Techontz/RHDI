import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Landmark,
  Handshake,
  Lightbulb,
  Scale,
  Sparkles,
} from "lucide-react";

export default function LeadershipGovernance() {
  const leadershipPoints = [
    { icon: Lightbulb, text: "Provide strategic direction and vision" },
    { icon: Users, text: "Strengthen organizational capacity and sustainability" },
    { icon: Scale, text: "Promote ethical leadership and accountability" },
    { icon: Handshake, text: "Foster partnerships and collaborative engagement" },
    { icon: ShieldCheck, text: "Ensure responsible stewardship of resources" },
    { icon: Sparkles, text: "Support innovation, learning, and community transformation" },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4"/> Leadership & Governance
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Leading with
              <span className="block text-[#C79A2B]">Integrity & Excellence</span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) is committed to maintaining effective leadership,
              ethical governance, transparency, and responsible stewardship in all areas of organizational operations.
            </p>
          </motion.div>

          <motion.section
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mx-auto mt-24 max-w-5xl text-center"
          >
            <Landmark className="mx-auto h-14 w-14 text-[#C79A2B]" />
            <h2 className="mt-6 text-3xl font-bold text-[#061C3F]">Leadership Principles</h2>
            <p className="mt-8 text-lg leading-9 text-gray-600">
              The organization is guided by leadership principles that emphasize integrity,
              accountability, servant leadership, collaboration, and excellence.
            </p>
          </motion.section>

          <section className="mt-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#061C3F]">Our Leadership Seeks To</h2>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]" />
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
              {leadershipPoints.map(({icon:Icon,text},i)=>(
                <motion.div
                  key={i}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  transition={{delay:i*0.08}}
                  viewport={{once:true}}
                  className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C79A2B]/30 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#061C3F] text-white group-hover:bg-[#C79A2B]">
                    <Icon className="h-6 w-6"/>
                  </div>
                  <p className="text-lg leading-8 text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mt-28 overflow-hidden rounded-[36px] bg-[#061C3F] p-10 text-white md:p-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
                <ShieldCheck className="h-5 w-5"/> Governance
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-200">
                Governance at RHDI is built upon systems and practices that encourage transparency,
                responsible decision-making, and continuous organizational improvement.
              </p>

              <div className="my-10 h-px bg-white/10"/>

              <p className="text-2xl font-semibold leading-10 text-white">
                We believe that strong governance and responsible leadership are essential to creating trust,
                strengthening partnerships, and achieving sustainable impact across communities and nations.
              </p>
            </div>
          </motion.section>

        </div>
      </section>
    </main>
  );
}
