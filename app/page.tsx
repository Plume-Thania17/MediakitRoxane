import { CoverSection } from "@/components/media-kit/cover-section"
import { AboutSection } from "@/components/media-kit/about-section"
import { StatsSection } from "@/components/media-kit/stats-section"
import { GallerySection } from "@/components/media-kit/gallery-section"
import { BrandWorkSection } from "@/components/media-kit/brand-work-section"
import { CollaborationSection } from "@/components/media-kit/collaboration-section"
import { ContactSection } from "@/components/media-kit/contact-section"

export default function MediaKitPage() {
  return (
    <main className="overflow-x-hidden">
      <CoverSection />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <BrandWorkSection />
      <CollaborationSection />
      <ContactSection />
    </main>
  )
}
