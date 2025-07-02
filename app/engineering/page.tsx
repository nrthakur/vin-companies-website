import EngineeringNav from "@/components/engineering-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calculator, FileText, Users } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function EngineeringHome() {
  return (
    <div className="min-h-screen bg-white">
      <EngineeringNav />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="engineering.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-r from-[#233966] to-[#233966]/90"></div>
          </video>
          <div className="absolute inset-0 bg-[#233966]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Vin Engineering</h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional Architectural and Structural Engineering Services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/engineering/services">
              <Button
                size="lg"
                className="bg-[#F7CC46] text-black hover:bg-[#F7CC46]/90 font-semibold px-10 py-4 text-lg"
              >
                Our Services
              </Button>
            </Link>
            <Link href="/engineering/contact">
            <Button
    size="lg"
    variant="outline"
    className="bg-white/10 border-white text-white px-10 py-4 text-lg"
  >
    Get Quote
  </Button>
</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#233966] mb-6">Engineering Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering innovative engineering solutions for residential, commercial, and industrial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Building2 className="h-16 w-16 text-[#233966] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#233966] mb-4">Structural Design</h3>
                <p className="text-gray-600">Complete structural analysis and design for all building types</p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Calculator className="h-16 w-16 text-[#233966] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#233966] mb-4">Architectural Design</h3>
                <p className="text-gray-600">Interior and exterior design for custom projects</p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-[#233966] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#233966] mb-4">Permit Drawings</h3>
                <p className="text-gray-600">Professional drawings and documentation for all types of permits</p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-[#233966] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#233966] mb-4">Consultation</h3>
                <p className="text-gray-600">Expert engineering consultation and project management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#233966] mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Contact us today for a consultation and let our experienced engineers help bring your vision to life.
          </p>
          <Link href="/engineering/contact">
            <Button size="lg" className="bg-[#233966] hover:bg-[#233966]/90 text-white px-10 py-4 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
