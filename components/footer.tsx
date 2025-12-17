import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
  <Image
    src="foot-logo.png"        
    alt="Icon"
    width={216}
    height={216}
    className="object-contain"
  />
 
</div>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold text-white">Contact Us:</p>
              <p className="leading-relaxed">
                Ashtvinayak Centre,
                <br />
                Amardeep Cinema - Gaondevi
                <br />
                amravati-444601-MH-INDIA
              </p>
              <p>+91 7020704207</p>
              <p>soulseeker@gmail.com</p>
            </div>
          </div>

          {/* Connect With */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect with</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition flex items-center gap-2">
                  <span>📘</span> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center gap-2">
                  <span>🔗</span> LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2025 Soulseeker. All rights reserved. Soulseeker team Kerala, India.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
