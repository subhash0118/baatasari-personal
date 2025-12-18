import { Header } from "@/components/about/header"
import { HeroSection } from "@/components/about/hero-section"
import { EventSection } from "@/components/about/event-section"
import { MovieSection } from "@/components/about/movie-section"
import { ArtistSection } from "@/components/about/artist-section"
import { Footer } from "@/components/about/footer"

export default function AboutPage() {
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
