"use client"

import Image from "next/image"
import { Instagram, Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Main contact card */}
        <div className="relative bg-[#faf6f4] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left image */}
            <div className="md:col-span-2 relative min-h-[300px] md:min-h-full">
              <Image
                src="/images/r5.jpeg"
                alt="Roxane portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#faf6f4]/20 md:bg-gradient-to-r md:from-transparent md:to-[#faf6f4]" />
            </div>

            {/* Right content */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546] mb-3">Contact</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] mb-2">
                {"Travaillons "}
                <span className="italic text-[#984546]">ensemble</span>
              </h2>
              <p className="font-sans text-sm text-[#5a4040] leading-relaxed mb-8 max-w-sm">
                {"Vous souhaitez collaborer avec moi\u00A0? N\u2019h\u00e9sitez pas \u00e0 me contacter via mes r\u00e9seaux ou par email."}
              </p>

              {/* Links */}
              <div className="space-y-3 mb-8">
                <a
                  href="https://www.instagram.com/angeroxane_miessan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#CEA3A6]/15 hover:border-[#984546]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-[#984546]" />
                    <span className="font-sans text-sm text-[#3d2020]">@angeroxane_miessan</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#CEA3A6] group-hover:text-[#984546] transition-colors" />
                </a>

                <a
                  href="https://www.tiktok.com/@myra_msn?_r=1&_t=ZS-93zcnDXVD0f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#CEA3A6]/15 hover:border-[#984546]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#984546]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.24 8.24 0 0 0 4.79 1.53V6.84a4.83 4.83 0 0 1-1.03-.15Z" />
                    </svg>
                    <span className="font-sans text-sm text-[#3d2020]">@angeroxane_miessan</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#CEA3A6] group-hover:text-[#984546] transition-colors" />
                </a>

                <a
                  href="mailto:miessanroxane0111@gmail.com"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#CEA3A6]/15 hover:border-[#984546]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#984546]" />
                    <span className="font-sans text-sm text-[#3d2020]">miessanroxane0111@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#CEA3A6] group-hover:text-[#984546] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-14 space-y-2">
          <p className="font-serif italic text-lg text-[#984546]">Miessan Roxane</p>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#CEA3A6]">
            {"Media Kit 2026 \u2022 Tous droits r\u00e9serv\u00e9s"}
          </p>
        </div>
      </div>
    </section>
  )
}