"use client"

export function BrandWorkSection() {
  const brandProjects = [
    {
      brand: "Votre marque ici",
      image: "/images/r1.jpeg",
      type: "UGC / Skincare",
      description: "Espace pour ajouter votre collaboration avec une marque skincare ou beaute.",
      placeholder: true,
    },
    {
      brand: "Votre marque ici",
      type: "Video sponsorisee",
      description: "Espace pour ajouter une collaboration video sponsorisee (Reels / TikTok).",
      placeholder: true,
    },
    {
      brand: "Votre marque ici",
      type: "Test produit",
      description: "Espace pour ajouter une review ou test produit pour une marque partenaire.",
      placeholder: true,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#faf6f4]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#984546]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546]">{"Collaborations pass\u00e9es"}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] mb-4">
          {"Contenus cr\u00e9\u00e9s pour des "}
          <span className="italic text-[#984546]">marques</span>
        </h2>
        <p className="font-sans text-sm text-[#5a4040] mb-14 max-w-xl">
          {"Retrouvez ici les contenus que j\u2019ai cr\u00e9\u00e9s dans le cadre de partenariats avec des marques. Chaque projet refl\u00e8te mon style unique et mon engagement envers l\u2019authenticit\u00e9."}
        </p>

        {/* Brand work cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {brandProjects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#CEA3A6]/15 shadow-sm"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] bg-[#F6DCDA]/20 border-b border-[#CEA3A6]/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-10 h-10 text-[#CEA3A6]/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="font-sans text-xs text-[#CEA3A6]/50">{"Ajouter une capture du contenu cr\u00e9\u00e9"}</p>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6DCDA]/50 text-[#984546] text-[10px] font-sans uppercase tracking-wider mb-3">
                  {project.type}
                </span>
                <h3 className="font-serif text-base text-[#3d2020] mb-1">{project.brand}</h3>
                <p className="font-sans text-xs text-[#5a4040]/70 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add more CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-dashed border-[#CEA3A6]/30 text-[#984546]/50 text-xs font-sans">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            {"Ajouter d'autres collaborations"}
          </div>
        </div>
      </div>
    </section>
  )
}
