"use client"

const steps = [
  {
    number: "01",
    title: "Brief & échanges",
    description:
      "Nous définissons ensemble le type de contenu, le thème et vos objectifs. Si besoin, un contrat sera rédigé à cet effet.",
  },
  {
    number: "02",
    title: "Envoi des produits / informations",
    description:
      "La marque m'envoie les produits, détails et guidelines nécessaires.",
  },
  {
    number: "03",
    title: "Création du contenu",
    description:
      "Je réalise un contenu esthétique, propre et aligné à votre image. Durée : 3 à 7 jours selon la demande.",
  },
  {
    number: "04",
    title: "Validation",
    description:
      "La marque valide la vidéo ou la photo avant publication (si souhaité). Cette étape ne concerne pas les gifting.",
  },
  {
    number: "05",
    title: "Publication / Livraison UGC",
    description:
      "Le contenu est posté sur mes réseaux ou livré au format souhaité.",
  },
]

export function ProcessusSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf6f4] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CEA3A6]/8 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-[#984546]/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#984546]" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#984546]">
            Étapes
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3d2020] mb-14">
          Processus de{" "}
          <span className="italic text-[#984546]">collaboration</span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#CEA3A6]/60 via-[#984546]/30 to-transparent hidden sm:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                    i !== steps.length - 1 ? "md:mb-10" : ""
                  }`}
                >
                  {/* Left side — content or empty */}
                  <div className={`${isEven ? "md:text-right" : "md:order-2"}`}>
                    {isEven && (
                      <Card step={step} align="right" />
                    )}
                    {!isEven && <div className="hidden md:block" />}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#faf6f4] border-2 border-[#CEA3A6] flex items-center justify-center shadow-sm">
                      <span className="font-sans text-[10px] font-semibold text-[#984546] tracking-wide">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right side — content or empty */}
                  <div className={`${!isEven ? "md:order-2" : "md:order-2"}`}>
                    {!isEven && <Card step={step} align="left" />}
                    {isEven && <div className="hidden md:block" />}
                  </div>

                  {/* Mobile card */}
                  <div className="sm:hidden">
                    <MobileCard step={step} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ step, align }: { step: (typeof steps)[0]; align: "left" | "right" }) {
  return (
    <div
      className={`hidden sm:block group bg-white rounded-2xl border border-[#CEA3A6]/15 shadow-sm p-6 hover:shadow-md hover:border-[#CEA3A6]/30 transition-all duration-300 ${
        align === "right" ? "ml-auto" : "mr-auto"
      } max-w-sm`}
    >
      <div className="flex items-start gap-4">
        {align === "left" && (
          <span className="font-serif text-3xl text-[#CEA3A6]/40 leading-none select-none">
            {step.number}
          </span>
        )}
        <div className={align === "right" ? "text-right flex-1" : "flex-1"}>
          <h3 className="font-serif text-base text-[#3d2020] mb-2">{step.title}</h3>
          <p className="font-sans text-xs text-[#5a4040]/70 leading-relaxed">
            {step.description}
          </p>
        </div>
        {align === "right" && (
          <span className="font-serif text-3xl text-[#CEA3A6]/40 leading-none select-none">
            {step.number}
          </span>
        )}
      </div>
    </div>
  )
}

function MobileCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="flex gap-4 items-start bg-white rounded-2xl border border-[#CEA3A6]/15 shadow-sm p-5">
      <div className="w-9 h-9 shrink-0 rounded-full bg-[#F6DCDA]/50 border border-[#CEA3A6]/30 flex items-center justify-center">
        <span className="font-sans text-[10px] font-semibold text-[#984546]">{step.number}</span>
      </div>
      <div>
        <h3 className="font-serif text-sm text-[#3d2020] mb-1">{step.title}</h3>
        <p className="font-sans text-xs text-[#5a4040]/70 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}