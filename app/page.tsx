import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Clock, Phone, Mail } from "lucide-react"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/group.png"
                alt="VIN Group of Companies"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/engineering">
                <Button 
                  variant="outline" 
                  className="border-[#233966] text-[#233966] hover:bg-[#233966] hover:text-white"
                >
                  Visit Engineering
                </Button>
              </Link>
              <Link href="/contracting">
                <Button 
                  variant="outline" 
                  className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white"
                >
                  Visit Construction
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Vin Group of Companies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Excellence in Engineering and Construction
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                15+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                500+ Projects Completed
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Licensed & Insured
              </span>
            </div>
          </div>

          {/* Company Cards - Wider & Bigger */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* Vin Engineering */}
            <Link href="/engineering" className="group">
              <Card className="h-full bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="text-center space-y-8">
                    <div className="w-full max-w-sm mx-auto">
                      <Image
                        src="/images/vin-engineering-logo.png"
                        alt="Vin Engineering Inc"
                        width={400}
                        height={120}
                        className="w-full h-auto"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#233966] mb-4">
                        Engineering Services
                      </h2>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Professional structural and civil engineering for residential, commercial, and industrial projects.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-[#233966] text-[#233966] hover:bg-[#233966] hover:text-white px-8 py-3 text-lg"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vin General Contracting */}
            <Link href="/contracting" className="group">
              <Card className="h-full bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="text-center space-y-8">
                    <div className="w-full max-w-sm mx-auto">
                      <Image
                        src="/images/vin-contracting-logo.png"
                        alt="Vin General Contracting Inc"
                        width={400}
                        height={120}
                        className="w-full h-auto"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#4B1A12] mb-4">
                        Construction Services
                      </h2>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Complete construction, renovation, and general contracting solutions from concept to completion.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white px-8 py-3 text-lg"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Contact Section - Simplified */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Get in touch to discuss your engineering or construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:(905) 915-1758" 
                className="flex items-center space-x-2 text-gray-700 hover:text-[#233966] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">(905) 915-1758</span>
              </a>
              <a 
                href="mailto:info@vingcinc.com" 
                className="flex items-center space-x-2 text-gray-700 hover:text-[#233966] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">info@vingcinc.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
