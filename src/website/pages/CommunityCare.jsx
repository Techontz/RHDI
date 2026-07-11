import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  Landmark,
  Laptop,
  Baby,
  HandHelping,
  Sparkles,
} from "lucide-react";

export default function CommunityCareHumanitarianSupport() {
  const focusAreas = [
    {
      title: "Community Engagement",
      icon: Users,
      description:
        "Promoting community participation, collaboration, and initiatives that strengthen relationships and encourage collective responsibility.",
    },
    {
      title: "Education Support",
      icon: GraduationCap,
      description:
        "Expanding opportunities for learning, training, mentorship, and personal development that empower individuals and families.",
    },
    {
      title: "Leadership & Capacity Building",
      icon: Landmark,
      description:
        "Equipping community leaders and emerging leaders with knowledge, skills, and values that contribute to positive and sustainable change.",
    },
    {
      title: "Digital Inclusion",
      icon: Laptop,
      description:
        "Promoting access to technology resources and virtual learning opportunities that support education, communication, and community engagement.",
    },
    {
      title: "Family & Youth Development",
      icon: Baby,
      description:
        "Supporting initiatives that strengthen families and equip young people through mentorship, education, leadership development, and positive values.",
    },
    {
      title: "Humanitarian Service",
      icon: HandHelping,
      description:
        "Encouraging compassion-driven initiatives that support vulnerable communities and promote human dignity, hope, and sustainable transformation.",
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
            className="mx-auto max-w-5xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4"/> Community Care & Humanitarian Support
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Serving People.
              <span className="block text-[#C79A2B]">Strengthening Communities.</span>
              <span className="block">Restoring Hope.</span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) believes that sustainable transformation begins by caring for people and strengthening communities.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600">
              Our commitment extends beyond education and leadership development to promoting human dignity, compassion, and practical support that improves the well-being of individuals, families, and communities.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600">
              Through community-focused initiatives and humanitarian engagement, RHDI seeks to create opportunities that encourage hope, participation, resilience, and sustainable development.
            </p>
          </motion.div>

          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold text-[#061C3F]">Our Areas of Focus</h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]"/>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map(({title,icon:Icon,description},i)=>(
              <motion.div
                key={title}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.08}}
                viewport={{once:true}}
                className="group rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#C79A2B]/30 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061C3F] text-white group-hover:bg-[#C79A2B]">
                  <Icon className="h-8 w-8"/>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-[#061C3F]">{title}</h3>
                <div className="mt-4 h-1 w-14 rounded-full bg-[#C79A2B]"/>
                <p className="mt-6 leading-8 text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mt-28 overflow-hidden rounded-[36px] bg-[#061C3F] px-10 py-14 md:px-16"
          >
            <div className="mx-auto max-w-5xl text-center">
              <HeartHandshake className="mx-auto h-14 w-14 text-[#C79A2B]"/>
              <h2 className="mt-6 text-4xl font-bold text-white">Our Commitment</h2>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]"/>
              <p className="mt-8 text-lg leading-9 text-gray-200">
                We are committed to serving people with compassion, integrity, and excellence while working collaboratively with communities and partners to create lasting impact and expand opportunities across nations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
