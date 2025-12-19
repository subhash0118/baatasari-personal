import Header from "@/components/about/header"
import Hero from "@/components/about/hero"
import Features from "@/components/about/features"
import SuggestionsForm from "@/components/about/suggestions-form"
import EventOrganizer from "@/components/about/event-organizer"
import RestaurantOwner from "@/components/about/restaurant-owner"
import Performers from "@/components/about/performers"
import Footer from "@/components/about/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Features />
            <SuggestionsForm />
            <EventOrganizer />
            <RestaurantOwner />
            <Performers />
            <Footer />
        </main>
    )
}
