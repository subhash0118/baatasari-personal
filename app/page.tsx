import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import SuggestionsForm from "@/components/suggestions-form"
import EventOrganizer from "@/components/event-organizer"
import RestaurantOwner from "@/components/restaurant-owner"
import Performers from "@/components/performers"
import Footer from "@/components/footer"

export default function Home() {
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
