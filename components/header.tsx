import Link from "next/link"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path d="M10 2L2 7V14C2 18.42 5.58 22 10 22C14.42 22 18 18.42 18 14V7L10 2Z" fill="currentColor" />
            </svg>
            <span className="font-dancing-script text-2xl text-black">baatasari</span>
          </Link>
          <nav className="flex gap-12">
            <Link href="/" className="text-gray-700 hover:text-black text-base">
              Home
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-black text-base">
              Events
            </Link>
            <Link href="/talent" className="text-gray-700 hover:text-black text-base">
              Talent
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Input type="search" placeholder="" className="w-80 h-10 border-gray-300 rounded-lg" />
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/my-20profile-20-284-29.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}
