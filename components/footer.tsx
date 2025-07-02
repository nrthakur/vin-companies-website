import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Vin Engineering */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/vin-engineering-logo.png"
                alt="Vin Engineering"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional Architectural and Structural Engineering Services for residential, commercial, and industrial
              projects.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F7CC46]" />
                <span>(905) 915-1758</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F7CC46]" />
                <span>info@vingcinc.com</span>
              </div>
            </div>
          </div>

          {/* VIN Contracting */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/vin-contracting-logo.png"
                alt="VIN Contracting"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Complete construction, renovation, and general contracting solutions from concept to completion.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F7CC46]" />
                <span>(905) 915-1758</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F7CC46]" />
                <span>info@vingcinc.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-[#F7CC46]">Engineering</h4>
                <Link href="/engineering" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/engineering/about" className="block text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/engineering/services" className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/engineering/projects" className="block text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/engineering/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-[#F7CC46]">Contracting</h4>
                <Link href="/contracting" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/contracting/about" className="block text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contracting/services" className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/contracting/projects" className="block text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/contracting/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#F7CC46] mt-1" />
                <div>
                  <p>1065 Canadian Place</p>
                  <p>Suite 203</p>
                  <p>Mississauga, ON L4W 0C2</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-[#F7CC46] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#F7CC46] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#F7CC46] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#F7CC46] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; 2024 VIN Companies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
