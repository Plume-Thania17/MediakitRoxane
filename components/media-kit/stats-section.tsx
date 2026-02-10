"use client"

import { Instagram, Users, MapPin, Clock } from "lucide-react"

function ProgressBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-baseline">
        <span className="font-sans text-xs text-[#5a4040]">{label}</span>
        <span className="font-sans text-xs font-medium text-[#984546]">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#F6DCDA]/60">
        <div
          className="h-full rounded-full bg-[#984546] transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

const topStats = [
  { icon: Users, value: "15K+", label: "Followers", sub: "Instagram" },
  { icon: Instagram, value: "88%", label: "Femmes", sub: "Genre dominant" },
  { icon: MapPin, value: "56%", label: "C\u00f4te d'Ivoire", sub: "Top localisation" },
  { icon: Clock, value: "15h-16h", label: "Pic d'activit\u00e9", sub: "Meilleure heure" },
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf6f4]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#984546]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546]">{"Chiffres cl\u00e9s"}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] mb-14">
          {"Mon audience en "}
          <span className="italic text-[#984546]">chiffres</span>
        </h2>

        {/* Top stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {topStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#CEA3A6]/15 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F6DCDA]/60 flex items-center justify-center mb-4">
                <stat.icon className="w-4 h-4 text-[#984546]" />
              </div>
              <p className="font-serif text-2xl md:text-3xl text-[#984546]">{stat.value}</p>
              <p className="font-sans text-sm text-[#3d2020] font-medium mt-1">{stat.label}</p>
              <p className="font-sans text-[10px] text-[#955A5C]/60 uppercase tracking-wider mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Detailed breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Age + Gender */}
          <div className="bg-white rounded-2xl p-8 border border-[#CEA3A6]/15">
            <h3 className="font-serif text-lg text-[#3d2020] mb-6">
              {"D\u00e9mographie de l\u2019audience"}
            </h3>

            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60 mb-3">{"Tranche d\u2019\u00e2ge"}</p>
              <div className="space-y-3">
                <ProgressBar label="18-24 ans" value={73.7} />
                <ProgressBar label="25-34 ans" value={21.1} />
              </div>
            </div>

            <div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60 mb-3">Genre</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-4 rounded-full overflow-hidden flex">
                  <div className="bg-[#984546] h-full" style={{ width: "88%" }} />
                  <div className="bg-[#CEA3A6] h-full" style={{ width: "12%" }} />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-sans text-xs text-[#984546]">{"Femmes 88%"}</span>
                <span className="font-sans text-xs text-[#CEA3A6]">{"Hommes 12%"}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 border border-[#CEA3A6]/15">
            <h3 className="font-serif text-lg text-[#3d2020] mb-6">
              Localisation
            </h3>

            <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60 mb-3">Top pays</p>
            <div className="space-y-3 mb-6">
              <ProgressBar label={"C\u00f4te d\u2019Ivoire"} value={56} />
              <ProgressBar label="France" value={9} />
              <ProgressBar label={"S\u00e9n\u00e9gal"} value={5} />
              <ProgressBar label="Burkina Faso" value={4} />
            </div>

            <div className="p-4 rounded-xl bg-[#F6DCDA]/30 border border-[#CEA3A6]/10">
              <p className="font-sans text-xs text-[#5a4040] leading-relaxed">
                {"Audience principalement bas\u00e9e en Afrique francophone, avec une pr\u00e9sence croissante en Europe (France)."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
