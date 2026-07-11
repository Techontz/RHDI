import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";

export default function ImpactReport() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C79A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#061C3F]/5 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C79A2B]/20 bg-[#C79A2B]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A2B]">
              <Sparkles className="h-4 w-4" />
              Impact Report
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#061C3F] md:text-7xl">
              Impact
              <span className="block text-[#C79A2B]">
                Report
              </span>
            </h1>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[#C79A2B]" />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
              Our Impact Report showcases the measurable outcomes, stories of
              transformation, and lasting change generated through the work of
              Rehoboth Discipleship International (RHDI). It highlights how our
              programs and initiatives are equipping leaders, empowering
              communities, and creating sustainable impact across the nations we
              serve.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              This report demonstrates our commitment to accountability,
              transparency, and evidence-based impact by presenting key
              achievements, beneficiary reach, program outcomes, and strategic
              progress toward our mission.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Download our Impact Report to discover the lives transformed,
              communities strengthened, and milestones achieved through our
              collective efforts and partnerships.
            </p>
          </motion.div>

          {/* PDF Download */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-4xl overflow-hidden rounded-[36px] bg-[#061C3F] p-12 text-center text-white shadow-2xl"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#C79A2B]/20">
              <FileText className="h-12 w-12 text-[#C79A2B]" />
            </div>

            <h2 className="mt-8 text-4xl font-bold">
              Impact Report (PDF)
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-gray-300">
              PDF Download: 📄 Impact Report (PDF)
            </p>

            <a
              href="/impact-report.pdf"
              download
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#C79A2B] px-8 py-4 text-lg font-bold text-white transition hover:opacity-90"
            >
              <Download className="h-5 w-5" />
              Download Impact Report (PDF)
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.section>

        </div>
      </section>
    </main>
  );
}