"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function ContractingNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/contracting", label: "Home" },
    { href: "/contracting/about", label: "About" },
    { href: "/contracting/services", label: "Services" },
    { href: "/contracting/projects", label: "Projects" },
    { href: "/contracting/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/vin-contracting-logo.png"
              alt="Vin General Contracting"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#4B1A12] border-b-2 border-[#4B1A12] pb-1"
                    : "text-gray-600 hover:text-[#4B1A12]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/">
              <Button variant="outline" className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white">
                Back to Main
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-[#4B1A12]" : "text-gray-600 hover:text-[#4B1A12]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white w-full"
                >
                  Back to Main
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
