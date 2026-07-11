import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  MapPinned,
  GraduationCap,
  MonitorSmartphone,
  Flag,
  Sparkles,
} from "lucide-react";

export default function CountriesWeServe() {
  const countries = [
    "Tanzania","Kenya","Uganda","Cameroon","Liberia","Sierra Leone",
    "Germany","Burundi","Democratic Republic of the Congo","South Sudan",
    "Nigeria","USA","India","Pakistan","Bangladesh","Rwanda",
    "South Africa","Australia","Nepal"
  ];

  const highlights = [
    "Founded in 2018",
    "Registered in Vermont, USA in 2024",
    "20 Country Representatives",
    "392+ Zoom Seminars Conducted",
    "283+ Physical Seminars Conducted",
    "4,840+ Individuals Reached Through Programs",
  ];

  const stats = [
    {label:"Physical Seminars",value:"283+"},
    {label:"Zoom Seminars",value:"392+"},
    {label:"Country Representatives",value:"20"},
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl"/>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl"/>
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 uppercase tracking-[0.25em] text-sm font-semibold text-[#C79A2B]">
              <Sparkles className="h-4 w-4"/> Countries We Serve
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-[#061C3F] leading-tight">
              Expanding Impact
              <span className="block text-[#C79A2B]">Across Nations</span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#C79A2B]"/>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-600">
              Rehoboth Discipleship International (RHDI) serves communities across Africa and the United States through education, leadership development, discipleship, digital empowerment, and community engagement initiatives.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600">
              Our international presence reflects our commitment to building transformed, empowered, and connected communities through collaboration, learning, and sustainable development.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {stats.map((s)=>(
              <div key={s.label} className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="text-5xl font-bold text-[#061C3F]">{s.value}</div>
                <div className="mt-3 text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold text-[#061C3F]">Countries</h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]"/>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((c,i)=>(
              <motion.div key={c} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.03}} viewport={{once:true}}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 hover:border-[#C79A2B]/30 hover:shadow-lg">
                <Flag className="h-5 w-5 text-[#C79A2B]"/>
                <span className="text-gray-700">{c}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-28 grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3">
                <Globe2 className="h-8 w-8 text-[#C79A2B]"/>
                <h2 className="text-3xl font-bold text-[#061C3F]">International Engagement</h2>
              </div>
              <p className="mt-8 text-lg leading-9 text-gray-600">
                Through seminars, virtual learning platforms, leadership development activities, and strategic partnerships, RHDI continues to strengthen relationships and expand opportunities that positively impact individuals and communities across multiple countries.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MapPinned className="h-8 w-8 text-[#C79A2B]"/>
                <h2 className="text-3xl font-bold text-[#061C3F]">Organizational Highlights</h2>
              </div>

              <div className="mt-8 space-y-4">
                {highlights.map((h)=>(
                  <div key={h} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[#C79A2B]"/>
                    <p className="text-gray-700">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-28 rounded-[36px] bg-[#061C3F] px-10 py-14 md:px-16 text-center">
            <MonitorSmartphone className="mx-auto h-14 w-14 text-[#C79A2B]"/>
            <h2 className="mt-6 text-4xl font-bold text-white">Our Vision for Global Impact</h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C79A2B]"/>
            <p className="mx-auto mt-8 max-w-5xl text-lg leading-9 text-gray-200">
              We envision communities across nations equipped with knowledge, leadership capacity, technology access, and opportunities that inspire hope, encourage collaboration, and contribute to long-term social, educational, and spiritual transformation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
