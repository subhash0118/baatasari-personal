import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
<nav className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
  <Image
    src="/frame-1.svg"
    alt="Soulseeker Logo"
    width={40}
    height={40}
    priority
    className="h-14 w-14 md:h-16 md:w-16 object-contain"
  />
</Link>


          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition">
              Explore
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition">
              Support
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-200 transition px-4 py-2">
              Sign In
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition font-medium">
              Sign Up
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
