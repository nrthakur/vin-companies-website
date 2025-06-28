import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Clock, Phone, Mail } from "lucide-react"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#233966] mb-6">Vin Group of Companies</h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">Excellence in Engineering and Construction</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Two specialized companies working together to deliver comprehensive solutions for your engineering and
              construction needs
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#4B1A12] mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">100%</div>
              <div className="text-sm text-gray-600">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#4B1A12] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </div>
          </div>

          {/* Company Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Vin Engineering */}
            <Link href="/engineering" className="group">
              <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-[#233966]/20">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/images/vin-engineering-logo.png"
                        alt="Vin Engineering Inc"
                        width={400}
                        height={120}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-[#233966]">Structural & Civil Engineering</h2>
                      <p className="text-gray-600 leading-relaxed">
                        Professional engineering services for residential, commercial, and industrial projects with
                        cutting-edge design solutions.
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-[#233966]" />
                          <span>Structural Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-[#233966]" />
                          <span>Civil Engineering</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-[#233966]" />
                          <span>Permit Drawings</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-[#233966]" />
                          <span>Consultation</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-[#233966] hover:bg-[#233966]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors group-hover:scale-105">
                      Explore Engineering Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vin General Contracting */}
            <Link href="/contracting" className="group">
              <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-[#4B1A12]/20">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/images/vin-contracting-logo.png"
                        alt="Vin General Contracting Inc"
                        width={400}
                        height={120}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-[#4B1A12]">Construction & Renovation</h2>
                      <p className="text-gray-600 leading-relaxed">
                        Complete construction, renovation, and general contracting solutions from concept to completion
                        with quality craftsmanship.
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-[#4B1A12]" />
                          <span>New Construction</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-[#4B1A12]" />
                          <span>Renovations</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-[#4B1A12]" />
                          <span>Project Management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-[#4B1A12]" />
                          <span>Maintenance</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-[#4B1A12] hover:bg-[#4B1A12]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors group-hover:scale-105">
                      Explore Construction Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Why Choose VIN Companies */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose VIN Companies?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#233966]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
                <p className="text-gray-600">
                  Seamless coordination between engineering and construction for optimal project outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#233966]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Licensed professionals with decades of combined experience in engineering and construction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7CC46] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#233966]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">
                  Committed to meeting deadlines and delivering projects on schedule and within budget.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact either company directly or reach out to discuss how our integrated approach can benefit your
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-5 w-5" />
                <span className="font-medium">(905) 915-1758</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="h-5 w-5" />
                <span className="font-medium">info@vingcinc.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
