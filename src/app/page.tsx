import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { EventSection } from "@/components/landing/event-section"
import { MovieSection } from "@/components/landing/movie-section"
import { ArtistSection } from "@/components/landing/artist-section"
import { Footer } from "@/components/landing/footer"
import SuggestionsForm from "@/components/landing/suggestions-form"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <MovieSection title="Top Hindi movies near you" />
        <SuggestionsForm />
        <EventSection title="India's Top Events" type="events" />
        <EventSection title="Best in Comedy" type="comedy" />
        <ArtistSection />
      </main>
      <Footer />
    </div>
  )
}
