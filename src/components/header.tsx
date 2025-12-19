"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏃</span>
            <span className="font-semibold text-xl text-gray-900">baatasari</span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900 transition">
              Events
            </Link>
            <Link href="/talent" className="text-gray-700 hover:text-gray-900 transition">
              Talent
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src="/abstract-profile.png"
                alt="User Profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12M6 18h12M6 18v-12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 transition border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/events"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 transition border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/talent"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 transition border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talent
              </Link>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
