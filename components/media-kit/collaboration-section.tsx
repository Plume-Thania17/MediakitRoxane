"use client"

import { Camera, Video, Package, MessageCircle, Sparkles, Target, Heart } from "lucide-react"

const collaborationTypes = [
  {
    icon: Camera,
    title: "UGC",

    description: "Contenu authentique et original pour vos campagnes, tourne de maniere naturelle et engageante.",
  },
  {
    icon: Video,
    title: "Videos sponsorisees",
    description: "Integration produit dans des videos TikTok et Reels Instagram avec storytelling creatif.",
  },
  {
    icon: Package,
    title: "Tests produits",
    description: "Revues honnetes et detaillees de produits beaute, skincare et mode.",
  },
  {
    icon: MessageCircle,
    title: "Story + Post",
    description: "Publications Instagram (feed + stories) pour maximiser la visibilite autour de votre marque.",
  },
]

const whyMe = [
  {
    icon: Heart,
    title: "Authenticité",
    text: "Contenu sincère, une audience qui fait confiance a mes recommandations.",
  },
  {
    icon: Sparkles,
    title: "Double univers",
    text: "Un profil unique alliant beaute et sciences, pour un message porteur de sens.",
  },
  {
    icon: Target,
    title: "Audience ciblée",
    text: "88% de femmes 18-34 ans, basees en Afrique francophone et en France.",
  },
]

export function CollaborationSection() {
  return (
    <section className="py-20 md:py-28 bg-[#3d2020]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#CEA3A6]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#CEA3A6]">Services</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-14">
          {"Ce que je "}
          <span className="italic text-[#CEA3A6]">propose</span>
        </h2>

        {/* Collaboration type cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {collaborationTypes.map((collab) => (
            <div
              key={collab.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#984546]/40 flex items-center justify-center mb-4">
                <collab.icon className="w-4.5 h-4.5 text-[#F6DCDA]" />
              </div>
              <h3 className="font-serif text-sm text-white mb-2">{collab.title}</h3>
              <p className="font-sans text-xs text-white/50 leading-relaxed">
                {collab.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why work with me */}
        <div className="border-t border-white/10 pt-14">
          <h3 className="font-serif text-2xl text-white text-center mb-10">
            {"Pourquoi travailler avec "}
            <span className="italic text-[#CEA3A6]">{"moi\u00A0?"}</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyMe.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#984546]/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-[#F6DCDA]" />
                </div>
                <h4 className="font-serif text-base text-white mb-2">{item.title}</h4>
                <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs mx-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
