import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  Ticket,
  ArrowRight,
} from "lucide-react";

const pages = [
  {
    title: "Hero Banner",
    href: "/conference/hero",
  },
  {
    title: "Conference Overview",
    href: "/conference/overview",
  },
  {
    title: "Why This Conference?",
    href: "/conference/why-this-conference",
  },
  {
    title: "About the Book",
    href: "/conference/about-book",
  },
  {
    title: "Meet the Author",
    href: "/conference/author",
  },
  {
    title: "What You Will Learn",
    href: "/conference/what-you-will-learn",
  },
  {
    title: "Conference Program",
    href: "/conference/program",
  },
  {
    title: "Who Should Attend?",
    href: "/conference/who-should-attend",
  },
  {
    title: "Frequently Asked Questions",
    href: "/conference/faq",
  },
  {
    title: "Registration",
    href: "/conference/register",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="inline-block rounded-full bg-[#C79A2B] px-5 py-2 text-sm font-bold text-[#061C3F]">
            UPCOMING EVENT
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#061C3F] leading-tight">
            Marriage Success Conference &
            <span className="block text-[#C79A2B]">
              Official Book Launch
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Where Psychology, Education, and Biblical Wisdom Converge
            to Build Strong Marriages, Healthy Families, and Lasting
            Generational Impact.
          </p>

        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20 overflow-hidden rounded-3xl bg-white shadow-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative flex items-center justify-center bg-slate-100 p-6">

              <img
                src="/marriage1.jpeg"
                alt="Marriage Success"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-6 lg:p-8">

              <span className="inline-flex w-fit rounded-full bg-[#061C3F] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                October 24, 2026
              </span>

              <h3 className="mt-4 text-4xl font-black leading-tight text-[#061C3F]">
                Discover the Principles Behind
                <span className="block text-[#C79A2B]">
                  Successful Marriages
                </span>
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Join Dr. Daniel for the official launch of his
                groundbreaking book
                <strong> Marriage Success (Ndoa Yenye Mafanikio)</strong>,
                where proven research, practical education, and Biblical
                principles come together to build healthier marriages,
                stronger families, and transformed communities.
              </p>

              {/* Details */}

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">

                <div className="rounded-lg bg-[#061C3F] p-2.5 text-white">
                    <CalendarDays size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Conference Date
                    </p>
                    <h4 className="font-bold text-[#061C3F]">
                      Saturday, October 24, 2026
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">

                <div className="rounded-lg bg-[#C79A2B] p-2.5 text-[#061C3F]">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Time
                    </p>
                    <h4 className="font-bold text-[#061C3F]">
                      3:30 PM – 7:30 PM
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">

                <div className="rounded-lg bg-[#061C3F] p-2.5 text-white">
                    <Ticket size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Admission
                    </p>
                    <h4 className="font-bold text-[#061C3F]">
                      FREE Registration
                    </h4>
                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-6 flex flex-wrap gap-3">

                <button className="inline-flex items-center gap-2 rounded-xl bg-[#061C3F] px-5 py-2.5 font-semibold text-white transition hover:opacity-90">
                  Learn More
                  <ArrowRight size={18} />
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl bg-[#C79A2B] px-6 py-3 font-semibold text-[#061C3F] transition hover:opacity-90">
                  Register Now
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </motion.div>

                {/* Conference Pages */}

                <div className="mt-20">

                <div className="text-center mb-12">

                  <h3 className="text-3xl font-black text-[#061C3F]">
                    Explore the Conference
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Browse everything included in the Marriage Success Conference &
                    Official Book Launch.
                  </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {pages.map((page, index) => (
                <Link key={page.title} to={page.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#C79A2B] hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061C3F] text-lg font-bold text-white">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>

                      <ArrowRight
                        size={20}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#C79A2B]"
                      />
                    </div>

                    <h4 className="mt-6 text-xl font-bold text-[#061C3F] leading-snug">
                      {page.title}
                    </h4>

                    <span className="mt-6 inline-block text-sm font-semibold text-[#C79A2B] group-hover:underline">
                      Explore Section
                    </span>
                  </motion.div>
                </Link>
              ))}

          </div>

        </div>

     </div>
</section>
);
}