"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

export function CoverSection() {
  return (
    <section className="relative min-h-screen bg-[#faf6f4] overflow-hidden">
      {/* Subtle decorative arc */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F6DCDA]/40 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#CEA3A6]/15 translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-20 flex flex-col items-center">
        {/* Top bar */}
        <div className="w-full flex items-center justify-between mb-16">
          <p className="font-serif italic text-[#984546] text-lg">MR</p>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#955A5C]/60">Media Kit 2025</p>
        </div>

        {/* Main hero layout */}
        <div className="w-full grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left: Text content - 3 cols */}
          <div className="md:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#CEA3A6]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#AF5553]" />
              <span className="font-sans text-xs text-[#955A5C] tracking-wide">{"Cr\u00e9atrice de contenu"}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3d2020] leading-[0.95] tracking-tight">
              Miessan
              <br />
              <span className="italic text-[#984546]">Roxane</span>
            </h1>

            <p className="font-sans text-sm md:text-base text-[#7a5a5a] leading-relaxed max-w-md">
              {"Beaut\u00e9 \u00b7 Mode \u00b7 Lifestyle \u00b7 Skincare"}
              <br />
              {"Etudiante en sciences actuarielles & mannequin"}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/angeroxane_miessan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#984546] text-white text-xs font-sans tracking-wide hover:bg-[#AF5553] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@angeroxane_miessan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#984546]/30 text-[#984546] text-xs font-sans tracking-wide hover:bg-[#984546]/5 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.24 8.24 0 0 0 4.79 1.53V6.84a4.83 4.83 0 0 1-1.03-.15Z" />
                </svg>
                TikTok
              </a>
            </div>

            {/* Quick stats row */}
            <div className="flex items-center gap-8 pt-6 border-t border-[#CEA3A6]/20 mt-4">
              <div>
                <p className="font-serif text-2xl text-[#984546]">15K+</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60">Followers</p>
              </div>
              <div className="w-px h-8 bg-[#CEA3A6]/30" />
              <div>
                <p className="font-serif text-2xl text-[#984546]">88%</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60">Femmes</p>
              </div>
              <div className="w-px h-8 bg-[#CEA3A6]/30" />
              <div>
                <p className="font-serif text-2xl text-[#984546]">18-24</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#955A5C]/60">{"Tranche d'\u00e2ge"}</p>
              </div>
            </div>
          </div>

          {/* Right: Photo collage - 2 cols */}
          <div className="md:col-span-2 relative">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#984546]/10">
              <Image
                src="/images/r1.jpeg"
                alt="Miessan Roxane portrait"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Small floating photo */}
            <div className="absolute -bottom-6 -left-8 md:-left-12 w-28 md:w-36 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-[#faf6f4]">
              <Image
                src="/images/r3.jpeg"
                alt="Roxane lifestyle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
