"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative h-16 w-52">
              <Image
                src="/landing/logo.png"
                alt="Baatasari"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex font-[var(--font-poppins)]">
            <Link href="/about" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              About us
            </Link>
            <a href="#" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Events
            </a>
            <a href="#" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Movies
            </a>
            <a href="#" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Activities
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden gap-2 lg:flex">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Select Location</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
