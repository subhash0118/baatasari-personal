import { TalentInformationForm } from "@/components/talent-information-form"
import { Header } from "@/components/header"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-normal text-black mb-8">Talent information</h1>
        <TalentInformationForm />
      </main>
    </div>
  )
}
