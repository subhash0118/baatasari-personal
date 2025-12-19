"use client"

import { useState } from "react"
import Header from "../components/header"
import PersonalDetailsForm from "../components/personal-details-form"
import PreferencesPage from "../components/preferences-page"

export default function Page() {
  const [currentPage, setCurrentPage] = useState<"personal-details" | "preferences">("personal-details")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {currentPage === "personal-details" ? (
        <PersonalDetailsForm onContinue={() => setCurrentPage("preferences")} />
      ) : (
        <PreferencesPage />
      )}
    </div>
  )
}
