import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Users,
  Monitor,
  UserCheck,
  CalendarDays,
  Landmark,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: 7,
    suffix: "",
    title: "Countries",
    subtitle: "Served",
  },
  {
    icon: Users,
    value: 4840,
    suffix: "+",
    title: "Individuals",
    subtitle: "Reached",
    gold: true,
  },
  {
    icon: Monitor,
    value: 58,
    suffix: "+",
    title: "Zoom Seminars",
    subtitle: "Conducted",
    gold: true,
  },
  {
    icon: UserCheck,
    value: 19,
    suffix: "+",
    title: "Physical Seminars",
    subtitle: "Conducted",
    gold: true,
  },
  {
    icon: CalendarDays,
    value: 2018,
    suffix: "",
    title: "Founded",
  },
  {
    icon: Landmark,
    value: 2024,
    suffix: "",
    title: "Registered In",
    subtitle: "Vermont, USA",
    gold: true,
  },
];

const ImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#001a3d] border-y border-[#d4a017]/20"
    >
      <div className="max-w-[1700px] mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  flex items-center gap-4
                  px-6 py-7
                  border-r border-white/10
                  last:border-r-0
                  cursor-pointer
                  transition-all duration-500
                  hover:bg-[#062654]
                  hover:-translate-y-1
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-b
                    from-[#d4a017]/10
                    to-transparent
                  "
                />

                {/* Gold Top Indicator */}
                <div
                  className="
                    absolute top-0 left-0
                    w-0 h-[3px]
                    bg-[#d4a017]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                <Icon
                  size={42}
                  className="
                    text-white
                    flex-shrink-0
                    transition-all duration-500
                    group-hover:text-[#d4a017]
                    group-hover:scale-110
                  "
                  strokeWidth={1.5}
                />

                <div className="relative z-10">
                  <h3
                    className={`text-3xl font-bold leading-none ${
                      item.gold
                        ? "text-[#d4a017]"
                        : "text-white"
                    }`}
                  >
                    {inView ? (
                      <CountUp
                        end={item.value}
                        duration={2.5}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                    {item.suffix}
                  </h3>

                  <p className="text-white text-xs font-semibold uppercase mt-2 tracking-wide">
                    {item.title}
                  </p>

                  {item.subtitle && (
                    <p className="text-white/80 text-xs uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;