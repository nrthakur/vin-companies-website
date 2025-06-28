import EngineeringNav from "@/components/engineering-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Calculator, FileText, Users, Zap, Shield, Wrench, Target } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function EngineeringServices() {
  return (
    <div className="min-h-screen bg-white">
      <EngineeringNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#233966] mb-6">Engineering Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet your project's unique requirements and challenges.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-[#233966]/20 hover:border-[#233966]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-[#233966]" />
                <CardTitle className="text-2xl text-[#233966]">Structural Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Complete structural analysis and design services for all types of construction projects, ensuring
                safety, efficiency, and code compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Structural analysis and design</li>
                <li>• Foundation design and analysis</li>
                <li>• Steel and concrete structure design</li>
                <li>• Seismic and wind load analysis</li>
                <li>• Structural inspections and assessments</li>
                <li>• Retrofit and strengthening design</li>
              </ul>
              <div className="pt-4">
                <Link href="/engineering/contact">
                  <Button className="bg-[#233966] hover:bg-[#233966]/90">Get Quote</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#233966]/20 hover:border-[#233966]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Calculator className="h-8 w-8 text-[#233966]" />
                <CardTitle className="text-2xl text-[#233966]">Civil Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Site development and infrastructure engineering services to support your development projects from
                concept through construction.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Site development and planning</li>
                <li>• Drainage and stormwater management</li>
                <li>• Utility design and coordination</li>
                <li>• Grading and earthwork design</li>
                <li>• Municipal approvals and permits</li>
                <li>• Environmental compliance</li>
              </ul>
              <div className="pt-4">
                <Link href="/engineering/contact">
                  <Button className="bg-[#233966] hover:bg-[#233966]/90">Get Quote</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#233966] text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-[#233966] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#233966] mb-2">Permit Drawings</h3>
                <p className="text-gray-600 text-sm">
                  Professional drawings and documentation for building permits and municipal approvals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-[#233966] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#233966] mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Expert engineering consultation and feasibility studies for your development projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-[#233966] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#233966] mb-2">Inspections</h3>
                <p className="text-gray-600 text-sm">
                  Structural inspections, condition assessments, and safety evaluations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#233966]/10 hover:border-[#233966]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-[#233966] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#233966] mb-2">Forensic Engineering</h3>
                <p className="text-gray-600 text-sm">
                  Investigation and analysis of structural failures and performance issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industry Sectors */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#233966] text-center mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential</h3>
              <p className="text-gray-600">Custom homes, multi-family developments, renovations, and additions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
              <p className="text-gray-600">Office buildings, retail spaces, warehouses, and mixed-use developments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233966] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial</h3>
              <p className="text-gray-600">Manufacturing facilities, processing plants, and specialized structures.</p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#233966] text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#233966] font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#233966] mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Initial project discussion and requirements gathering</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#233966] font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#233966] mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">Detailed engineering analysis and design development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#233966] font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#233966] mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Professional drawings and technical specifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4 text-[#233966] font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#233966] mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Ongoing support through construction and completion</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#233966] mb-4">Ready to Start Your Engineering Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and learn how our engineering expertise can help bring
            your vision to life.
          </p>
          <Link href="/engineering/contact">
            <Button size="lg" className="bg-[#233966] hover:bg-[#233966]/90 text-white">
              Get Engineering Quote
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
