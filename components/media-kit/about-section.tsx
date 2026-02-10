"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#984546]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546]">{"A propos"}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Photos stack */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/r3.jpeg"
                  alt="Roxane restaurant look"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/r5.jpeg"
                  alt="Roxane seated elegant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-[#984546] text-white text-xs font-sans tracking-wide shadow-lg">
              {"Depuis juin 2022"}
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="space-y-6 md:pt-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] leading-snug">
              {"L'alliance de la"}
              <br />
              <span className="italic text-[#984546]">{"beaut\u00e9 & de la science"}</span>
            </h2>

            <p className="font-sans text-sm text-[#5a4040] leading-relaxed">
              {"Je suis Miessan Roxane, \u00e9tudiante en derni\u00e8re ann\u00e9e de Math\u00e9matiques, concentration sciences actuarielles, et cr\u00e9atrice de contenu depuis juin 2022."}
            </p>
            <p className="font-sans text-sm text-[#5a4040] leading-relaxed">
              {"Bien qu\u2019ayant un esprit scientifique, je suis \u00e9galement passionn\u00e9e par la beaut\u00e9, la mode et le mannequinat. Je combine rigueur, cr\u00e9ativit\u00e9 et ouverture d\u2019esprit pour proposer des contenus et des collaborations \u00e0 la fois r\u00e9fl\u00e9chis, esth\u00e9tiques et porteurs de sens."}
            </p>

            {/* Quote */}
            <blockquote className="relative pl-5 border-l-2 border-[#CEA3A6]">
              <p className="font-serif italic text-sm text-[#984546] leading-relaxed">
                {"\"Mon objectif : incarner une femme qui valorise la beaut\u00e9 physique tout en affirmant un esprit scientifique.\""}
              </p>
            </blockquote>

            {/* Keyword chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Make-up", "Skincare", "Mode", "Lifestyle", "Motivation", "Mannequinat"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#CEA3A6]/40 text-[#984546] text-xs font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
