"use client"

import { useState } from "react"
import EngineeringNav from "@/components/engineering-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function EngineeringProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const projects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      location: "Calgary, AB",
      year: "2023",
      type: "Commercial",
      description:
        "15-story mixed-use development with retail and office spaces. Structural design included post-tensioned concrete slabs and steel frame construction.",
      services: ["Structural Design", "Foundation Engineering", "Seismic Analysis"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      location: "Vancouver, BC",
      year: "2023",
      type: "Residential",
      description:
        "32-story residential tower with underground parking. Complex foundation design due to challenging soil conditions.",
      services: ["Structural Engineering", "Geotechnical Consultation", "Wind Analysis"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      location: "Edmonton, AB",
      year: "2022",
      type: "Industrial",
      description: "Large-span industrial facility with specialized equipment foundations and crane support systems.",
      services: ["Industrial Design", "Equipment Foundations", "Structural Analysis"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Heritage Building Restoration",
      location: "Toronto, ON",
      year: "2022",
      type: "Heritage",
      description:
        "Structural assessment and retrofit of 100-year-old heritage building while preserving historical integrity.",
      services: ["Structural Assessment", "Heritage Consultation", "Retrofit Design"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Shopping Center Expansion",
      location: "Mississauga, ON",
      year: "2021",
      type: "Commercial",
      description: "Major expansion of existing shopping center including new anchor stores and parking structure.",
      services: ["Structural Design", "Site Development", "Parking Structure"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Custom Residential Homes",
      location: "Whistler, BC",
      year: "2021",
      type: "Residential",
      description: "Series of luxury mountain homes with complex geometries and challenging site conditions.",
      services: ["Custom Home Design", "Foundation Engineering", "Site Analysis"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filters = ["All Projects", "Residential", "Commercial", "Industrial", "Heritage"]

  const filteredProjects =
    activeFilter === "All Projects" ? projects : projects.filter((project) => project.type === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <EngineeringNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#233966] mb-6">Our Engineering Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful engineering projects across residential, commercial, and industrial
            sectors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">50M+</div>
            <div className="text-sm text-gray-600">Sq Ft Designed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#233966] mb-2">100%</div>
            <div className="text-sm text-gray-600">Code Compliance</div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#233966] text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-600 hover:border-[#233966] hover:text-[#233966]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-[#233966]/20 hover:border-[#233966]/40 transition-colors overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#233966] text-white">{project.type}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#233966] mb-3">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#233966]">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F7CC46]/20 text-[#233966]">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Project */}
        <div className="bg-[#233966] text-white rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Project: Innovation Center</h2>
              <p className="text-lg mb-6">
                Our latest achievement - a state-of-the-art research and development facility featuring sustainable
                design principles and cutting-edge structural solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Building2 className="h-4 w-4" />
                    <span className="font-semibold">Size:</span>
                  </div>
                  <p>150,000 sq ft</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold">Capacity:</span>
                  </div>
                  <p>500 researchers</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">Location:</span>
                  </div>
                  <p>Waterloo, ON</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-semibold">Completed:</span>
                  </div>
                  <p>2024</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Innovation Center"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#233966] mb-4">Ready to Add Your Project to Our Portfolio?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can help make your next project a success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/engineering/contact"
              className="bg-[#233966] hover:bg-[#233966]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/engineering/services"
              className="border border-[#233966] text-[#233966] hover:bg-[#233966] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
