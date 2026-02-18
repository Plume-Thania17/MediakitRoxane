"use client"
import Image from "next/image"

const galleryImages = [
  { src: "/images/r1.jpeg", alt: "Roxane portrait closeup", tall: true },
  { src: "/images/r12.jpeg", alt: "Roxane restaurant lifestyle", tall: false },
  { src: "/images/r5.jpeg", alt: "Roxane seated elegant pose", tall: false },
  { src: "/images/r7.jpeg", alt: "Roxane social media story", tall: true },
   { src: "/images/r13.jpeg", alt: "Roxane social media story", tall: true },
   { src: "/images/r11.jpeg", alt: "Photo 1" }
  
]

// ↓ Ajoute tes liens d'images ici (laisse "" pour garder le placeholder)
const extraPhotos = [
  { src: "/images/r19.jpeg", alt: "Photo 1" },
  { src: "/images/r4.jpeg", alt: "Photo 2" },
  { src: "images/r3.jpeg", alt: "Photo 3" },
  { src: "images/r8.jpeg", alt: "Photo 4" },
  { src: "images/r9.jpeg", alt: "Photo 5" },
  { src: "images/r10.jpeg", alt: "Photo 6" },
  { src: "/images/r20.jpeg", alt: "Photo 2" },
  { src: "images/r15.jpeg", alt: "Photo 3" },
  { src: "images/r14.jpeg", alt: "Photo 4" },
  { src: "images/r16.jpeg", alt: "Photo 5" },
  { src: "images/r18.jpeg", alt: "Photo 6" },
  { src: "images/r22.jpeg", alt: "Photo 6" },
  
  
]



export function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#984546]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546]">Portfolio</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] mb-14">
          {"Mon "}
          <span className="italic text-[#984546]">univers visuel</span>
        </h2>

        {/* Main gallery - masonry style */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3 mb-8">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group"
            >
              <div className={img.tall ? "aspect-[3/4]" : "aspect-square"}>
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-[#984546]/0 group-hover:bg-[#984546]/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Extra photos grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {extraPhotos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden border-2 border-dashed border-[#CEA3A6]/30 bg-[#F6DCDA]/10 relative group"
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg className="w-5 h-5 text-[#CEA3A6]/40 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-[8px] font-sans text-[#CEA3A6]/50 uppercase tracking-wider">Photo</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content types */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Make-up tutorials",
            "Skincare routines",
            "Lifestyle & motivation",
            "Mode & mannequinat",
            "GRWM",
            "UGC",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 rounded-full bg-[#F6DCDA]/40 text-[#984546] text-xs font-sans tracking-wide border border-[#CEA3A6]/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}