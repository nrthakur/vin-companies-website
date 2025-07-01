import EngineeringNav from "@/components/engineering-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Building2, Target } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function EngineeringAbout() {
  return (
    <div className="min-h-screen bg-white">
      <EngineeringNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#233966] mb-6">About Vin Engineering</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering innovative engineering solutions with precision, expertise, and unwavering commitment to
            excellence since 2008.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#233966] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2008, Vin Engineering Inc. has grown from a small structural engineering firm to a
                comprehensive engineering consultancy serving clients across residential, commercial, and industrial
                sectors.
              </p>
              <p>
                Our journey began with a simple mission: to provide reliable, innovative engineering solutions that
                exceed client expectations. Over the years, we've built a reputation for technical excellence, attention
                to detail, and collaborative approach to problem-solving.
              </p>
              <p>
                Today, we're proud to be a trusted partner for architects, contractors, developers, and property owners,
                delivering projects that stand the test of time while meeting the highest safety and performance
                standards.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Vin Engineering Office"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-[#233966]/20">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-[#233966] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#233966] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional engineering services that ensure the safety, functionality, and sustainability of
                every structure we design, while fostering long-term partnerships with our clients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#233966]/20">
            <CardContent className="p-8 text-center">
              <Building2 className="h-12 w-12 text-[#233966] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#233966] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading engineering consultancy in our region, recognized for innovation, technical
                excellence, and our contribution to building safer, more sustainable communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#233966]/20">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-[#233966] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#233966] mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, and collaboration guide everything we do. We're committed to continuous learning,
                environmental responsibility, and delivering value that exceeds expectations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Memberships */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-[#233966] text-center mb-8">Certifications & Memberships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Professional Engineers</h3>
              <p className="text-sm text-gray-600">Licensed P.Eng in Multiple Provinces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">APEGA Member</h3>
              <p className="text-sm text-gray-600">Association of Professional Engineers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">CISC Member</h3>
              <p className="text-sm text-gray-600">Canadian Institute of Steel Construction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">ISO 9001</h3>
              <p className="text-sm text-gray-600">Quality Management Certified</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
