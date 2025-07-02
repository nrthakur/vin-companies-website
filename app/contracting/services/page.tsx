import ContractingNav from "@/components/contracting-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Hammer, Wrench, Truck, Building2, Paintbrush, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ContractingServices() {
  return (
    <div className="min-h-screen bg-white">
      <ContractingNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B1A12] mb-6">Construction Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and renovation services from concept to completion, delivered with quality
            craftsmanship and attention to detail.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-[#4B1A12]/20 hover:border-[#4B1A12]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Home className="h-8 w-8 text-[#4B1A12]" />
                <CardTitle className="text-2xl text-[#4B1A12]">New Construction</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Complete new construction services for residential and commercial projects, from foundation to final
                finishes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom home construction</li>
                <li>• Commercial building construction</li>
                <li>• Multi-family developments</li>
                <li>• Site preparation and excavation</li>
                <li>• Foundation and framing</li>
                <li>• Complete project management</li>
              </ul>
              <div className="pt-4">
                <Link href="/contracting/contact">
                  <Button className="bg-[#4B1A12] hover:bg-[#4B1A12]/90">Get Estimate</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#4B1A12]/20 hover:border-[#4B1A12]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Hammer className="h-8 w-8 text-[#4B1A12]" />
                <CardTitle className="text-2xl text-[#4B1A12]">Renovations & Remodeling</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Transform your existing space with our comprehensive renovation and remodeling services.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodeling</li>
                <li>• Office and Restaurent finishing</li>
                <li>• Home additions, and coach houses</li>
                <li>• Whole-home renovations</li>
                <li>• Commercial unit renovations</li>
              </ul>
              <div className="pt-4">
                <Link href="/contracting/contact">
                  <Button className="bg-[#4B1A12] hover:bg-[#4B1A12]/90">Get Estimate</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4B1A12] text-center mb-12">Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Repairs & Maintenance</h3>
                <p className="text-gray-600 text-sm">
                  Professional repair services and ongoing maintenance for residential and commercial properties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Project Management</h3>
                <p className="text-gray-600 text-sm">
                  Complete project oversight from planning through completion, ensuring quality and timeline adherence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Paintbrush className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Finishing Services</h3>
                <p className="text-gray-600 text-sm">
                  Interior and exterior finishing including painting, flooring, trim work, and custom millwork.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#4B1A12]/10 hover:border-[#4B1A12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Emergency Services</h3>
                <p className="text-gray-600 text-sm">
                  24/7 emergency repair services for urgent construction and maintenance needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#4B1A12] text-center mb-8">Service Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4B1A12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential</h3>
              <p className="text-gray-600">
                Custom homes, renovations, additions, and residential maintenance services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4B1A12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
              <p className="text-gray-600">Office buildings, retail spaces, restaurants, and commercial renovations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4B1A12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial</h3>
              <p className="text-gray-600">
                Warehouses, manufacturing facilities, and specialized industrial construction.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4B1A12] text-center mb-12">Our Construction Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B1A12] font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Initial meeting to discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B1A12] font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Design & Planning</h3>
              <p className="text-gray-600 text-sm">Detailed planning, permits, and project timeline development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B1A12] font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Construction</h3>
              <p className="text-gray-600 text-sm">Professional construction with regular progress updates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B1A12] font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Quality Control</h3>
              <p className="text-gray-600 text-sm">Thorough inspections and quality assurance checks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B1A12] font-bold text-xl">
                5
              </div>
              <h3 className="text-lg font-semibold text-[#4B1A12] mb-2">Completion</h3>
              <p className="text-gray-600 text-sm">Final walkthrough and project handover with warranty</p>
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="bg-[#4B1A12] text-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Transparent Pricing</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              We believe in honest, upfront pricing with no hidden costs. Every project receives a detailed estimate
              with clear breakdowns of materials, labor, and timeline.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Free Estimates</h3>
                <p>Detailed quotes at no cost to you</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fixed Pricing</h3>
                <p>No surprises - stick to agreed budget</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Payment Plans</h3>
                <p>Flexible payment options available</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#4B1A12] mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's discuss how we can bring your construction
            vision to life.
          </p>
          <Link href="/contracting/contact">
            <Button size="lg" className="bg-[#4B1A12] hover:bg-[#4B1A12]/90 text-white">
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
