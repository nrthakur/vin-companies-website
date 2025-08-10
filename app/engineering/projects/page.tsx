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
      title: "Modern Pharmacy & Medical Unit Reception Design",
      location: "Toronto, ON",
      year: "2024",
      type: "Commercial",
      description:
        "This render showcases a sleek, contemporary reception area designed for a pharmacy and medical unit. Warm wood finishes, marble accents, and a vibrant green wall create a welcoming yet professional atmosphere, while a streamlined workstation layout enhances customer service efficiency.",
      services: ["Interior Design", "3D Rendering", "Reception Layout"],
      image: "/pharmacydesign.png?height=300&width=400",
    },
    {
      id: 2,
      title: "Modern Luxury Kitchen – Full Home Design Project",
      location: "Oakville, ON",
      year: "2024",
      type: "Residential",
      description:
        "Part of a complete home design, this modern kitchen features clean lines, high gloss cabinetry, and a striking gold chandelier for a touch of elegance. Every detail, from the integrated appliances to the marble style surfaces, is carefully planned to align with the home's contemporary aesthetic, with renderings provided to help clients visualize the finished space.",
      services: ["Kitchen Design", "3D Visualization", "Home Integration"],
      image: "/luxury.png?height=300&width=400",
    },
    {
      id: 3,
      title: "Franchise Design & Permit Project",
      location: "Burlington, ON",
      year: "2024",
      type: "Commercial",
      description: "Complete franchise design and permit package, combining vibrant brand colors with a functional, efficient layout. Our team provides both construction and design services, often creating detailed renderings to help franchise owners visualize the finished space before build out.",
      services: ["Franchise Design", "Permit Services", "Brand Integration"],
      image: "/franchise.png?height=300&width=400",
    },
    {
      id: 4,
      title: "Medical Reception Area – Pharmacy & Clinic Render",
      location: "Hamilton, ON",
      year: "2024",
      type: "Commercial",
      description: "Conceptual render for a modern pharmacy and medical reception area, blending warm wood tones with elegant marble finishes for a professional yet inviting atmosphere. Designed to enhance patient experience, this layout provides a functional and efficient workspace for staff.",
      services: ["Conceptual Design", "Medical Layout", "3D Rendering"],
      image: "/medical.png?height=300&width=400",
    },
    {
      id: 5,
      title: "Pharmacy & Medical Unit Conversion – Floor Plan Design",
      location: "Mississauga, ON",
      year: "2024",
      type: "Commercial",
      description:
        "Detailed proposed floor plan for converting an existing unit into a fully functional pharmacy and medical facility. The layout optimizes patient flow, maximizes usable space, and meets regulatory standards for both structural and interior design, ensuring smooth permit approval.",
      services: ["Floor Plan Design", "Permit Documentation", "Regulatory Compliance"],
      image: "/pharmacymed.png?height=300&width=400",
    },
    {
      id: 6,
      title: "Basement Second Dwelling Unit – Space-Efficient Design",
      location: "Brampton, ON",
      year: "2024",
      type: "Residential",
      description: "Optimized basement floor plan for a legal second dwelling unit, designed to maximize living space while minimizing construction costs. The layout incorporates functional zones for bedrooms, living, and dining areas, ensuring comfort and compliance with building regulations.",
      services: ["Space Optimization", "Building Code Compliance", "Residential Planning"],
      image: "/basement.png?height=300&width=400",
    },
  ]

  const filters = ["All Projects", "Residential", "Commercial"]

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
