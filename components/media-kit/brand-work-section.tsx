"use client"
import Image from "next/image"

export function BrandWorkSection() {
  const brandProjects = [
    {
      brand: "Yves Rocher",
      imageUrl: "/images/b1.png", // ← remplace par ton lien image
      type: "UGC / Skincare",
      description: "Collaboration beauté pour une routine skincare parfaite.",
      placeholder: true,
    },
    {
      brand: "Yango FellowShip",
      imageUrl: "images/b2.png", // ← remplace par ton lien image
      type: "Education",
      description: "Partenariat avec Yango pour promouvoir l'éducation et l'innovation.",
      placeholder: true,
    },
    {
      brand: "DUCRAY",
      imageUrl: "images/b3.png", // ← remplace par ton lien image
      type: "Skincare",
      description: "Collaboration beauté pour une routine skincare parfaite.",
      placeholder: true,
    },
    {
      brand: "Carl's Nail",
      imageUrl: "images/b4.png", // ← remplace par ton lien image
      type: "Nails",
      description: "Nail art et finitions impeccables.",
      placeholder: true,
    },
    {
      brand: "Karoo Boutik",
      imageUrl: "images/b5.png", // ← remplace par ton lien image
      type: "Fashion",
      description: "Mode contemporaine et élégance intemporelle.",
      placeholder: true,
    },
    {
      brand: "La Canteen",
      imageUrl: "images/b6.png", // ← remplace par ton lien image
      type: "Restauration",
      description: "Restaurant authentique et convivial.",
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
              {/* Image ou placeholder */}
              <div className="aspect-[4/5] relative bg-[#F6DCDA]/20 border-b border-[#CEA3A6]/10">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.brand}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-6">
                      <svg className="w-10 h-10 text-[#CEA3A6]/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <p className="font-sans text-xs text-[#CEA3A6]/50">{"Ajouter une capture du contenu cr\u00e9\u00e9"}</p>
                    </div>
                  </div>
                )}
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
       
      </div>
    </section>
  )
}