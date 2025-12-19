import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { EventSection } from "@/components/landing/event-section"
import { MovieSection } from "@/components/landing/movie-section"
import { ArtistSection } from "@/components/landing/artist-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EventSection title="Crowd Favourite Activities" type="activities" />
        <MovieSection title="Top Hindi movies near you" />
        <EventSection title="India's Top Events" type="events" />
        <EventSection title="Best in Comedy" type="comedy" />
        <ArtistSection />
      </main>
      <Footer />
    </div>
  )
}
