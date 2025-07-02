import ContractingNav from "@/components/contracting-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Hammer, Target } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContractingAbout() {
  return (
    <div className="min-h-screen bg-white">
      <ContractingNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B1A12] mb-6">About Vin General Contracting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building dreams into reality with quality craftsmanship, reliable service, and unwavering commitment to
            excellence since 2011.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#4B1A12] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Vin General Contracting Inc. was founded in 2011 with a simple yet powerful vision: to provide
                exceptional construction and renovation services that exceed our clients' expectations while building
                lasting relationships based on trust and quality.
              </p>
              <p>
                What started as a small residential contracting business has grown into a full-service construction
                company serving both residential and commercial clients. Our success is built on a foundation of skilled
                craftsmanship, attention to detail, and a commitment to delivering projects on time and within budget.
              </p>
              <p>
                Today, we're proud to be a trusted partner for homeowners, developers, and businesses throughout the
                region, with a portfolio that includes everything from custom homes and renovations to commercial
                buildings and industrial facilities.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/about.png?height=400&width=500"
              alt="VIN Contracting Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-[#4B1A12]/20">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#4B1A12] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction and renovation services that transform our clients' visions into
                reality, while maintaining the highest standards of quality, safety, and professionalism.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#4B1A12]/20">
            <CardContent className="p-8 text-center">
              <Hammer className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#4B1A12] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier general contracting company in our region, recognized for our craftsmanship,
                reliability, and commitment to building lasting relationships with our clients and community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#4B1A12]/20">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-[#4B1A12] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#4B1A12] mb-4">Our Values</h3>
              <p className="text-gray-600">
                Quality craftsmanship, honest communication, and reliable service guide every project we undertake. We
                believe in building not just structures, but lasting relationships.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Memberships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4B1A12] text-center mb-8">Certifications & Memberships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-[#4B1A12]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Licensed Contractor</h3>
              <p className="text-sm text-gray-600">General Contractor License #GC-789012</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-[#4B1A12]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">BBB Accredited</h3>
              <p className="text-sm text-gray-600">Better Business Bureau A+ Rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-3">
                <Hammer className="h-8 w-8 text-[#4B1A12]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">WSIB Covered</h3>
              <p className="text-sm text-gray-600">Full workplace safety insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-[#4B1A12]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Tarion Licensed</h3>
              <p className="text-sm text-gray-600">Certified Tarion Builder</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
