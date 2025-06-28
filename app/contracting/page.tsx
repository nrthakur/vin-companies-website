import ContractingNav from "@/components/contracting-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Home, Wrench, Truck } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ContractingHome() {
  return (
    <div className="min-h-screen bg-white">
      <ContractingNav />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="construction.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-r from-[#4B1A12] to-[#4B1A12]/90"></div>
          </video>
          <div className="absolute inset-0 bg-[#4B1A12]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Vin General Contracting</h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Complete Construction, Renovation & General Contracting Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contracting/services">
              <Button
                size="lg"
                className="bg-[#F7CC46] text-black hover:bg-[#F7CC46]/90 font-semibold px-10 py-4 text-lg"
              >
                Our Services
              </Button>
            </Link>
            <Link href="/contracting/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white px-10 py-4 text-lg"
              >
                Get Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B1A12] mb-6">Construction Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we deliver quality construction and renovation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="h-16 w-16 text-[#4B1A12] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#4B1A12] mb-4">New Construction</h3>
                <p className="text-gray-600">Complete new home and commercial building construction</p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Hammer className="h-16 w-16 text-[#4B1A12] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#4B1A12] mb-4">Renovations</h3>
                <p className="text-gray-600">Kitchen, bathroom, and whole-home renovation projects</p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Wrench className="h-16 w-16 text-[#4B1A12] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#4B1A12] mb-4">Repairs & Maintenance</h3>
                <p className="text-gray-600">Professional repair services and ongoing maintenance</p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Truck className="h-16 w-16 text-[#4B1A12] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#4B1A12] mb-4">Project Management</h3>
                <p className="text-gray-600">Complete project oversight from planning to completion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#4B1A12] mb-6">Ready to Build Your Dream?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Get in touch today for a free consultation and estimate on your construction or renovation project.
          </p>
          <Link href="/contracting/contact">
            <Button size="lg" className="bg-[#4B1A12] hover:bg-[#4B1A12]/90 text-white px-10 py-4 text-lg">
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
