"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContractingNav from "@/components/contracting-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, MapPin, Calendar, DollarSign, Award } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContractingProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const projects = [
    {
      id: 1,
      title: "Elegant Custom Kitchen Renovation",
      location: "Oakville, ON",
      year: "2024",
      type: "Renovation",
      description:
        "This stunning kitchen was part of a complete home renovation by VIN General Contracting. Featuring custom two-tone cabinetry, premium quartz countertops, and detailed millwork, every element was crafted with precision. The bold navy base cabinets paired with crisp white uppers create a timeless and modern look. High-end appliances, hidden lighting, and flawless tile work bring both beauty and functionality to the space. Our craftsmanship ensures durability and luxury in every corner.",
      features: ["Custom Two-Tone Cabinetry", "Premium Quartz Countertops", "Detailed Millwork", "Hidden Lighting", "High-End Appliances"],
      image: "/kitchen.png?height=300&width=400",
    },
    {
      id: 2,
      title: "Custom Home Under Construction",
      location: "Burlington, ON",
      year: "2024",
      type: "Residential",
      description:
        "This custom home is being built from the ground up by VIN General Contracting with premium materials and expert precision. We use high-grade plywood and top-quality products, ensuring durability and strength that stand above typical industry standards. Every cut and joint is carefully measured for a flawless final structure. From framing to finishing, we focus on craftsmanship that lasts for generations.",
      features: ["High-Grade Materials", "Premium Plywood", "Precision Framing", "Expert Craftsmanship", "Durable Construction"],
      image: "/construction.png?height=300&width=400",
    },
    {
      id: 3,
      title: "Modern Indian Restaurant Interior",
      location: "Toronto, ON",
      year: "2024",
      type: "Commercial",
      description:
        "This restaurant project by VIN General Contracting blends modern design with traditional Indian elements to create a warm, inviting atmosphere. Featuring precision-cut CNC woodwork, a custom-crafted central binding pillar, and premium marble tables, every detail is finished with care and accuracy. From the custom millwork to the flooring patterns, we focus on quality craftsmanship and seamless execution. The space is built to impress both visually and structurally.",
      features: ["CNC Woodwork", "Custom Central Pillar", "Premium Marble Tables", "Traditional Design Elements", "Custom Millwork"],
      image: "/indian.png?height=300&width=400",
    },
    {
      id: 4,
      title: "Custom Pharmacy",
      location: "Mississauga, ON",
      year: "2024",
      type: "Commercial",
      description: "VIN General Contracting specializes in pharmacy construction, crafting practical and efficient spaces tailored for healthcare professionals. This pharmacy features extensive custom shelving designed for maximum storage and ease of access. Built with precision and durable materials, our detailed millwork ensures a clean, professional finish. Every element from the marble countertops to the streamlined cabinetry is designed to support functionality, reliability, and a welcoming environment.",
      features: ["Custom Shelving Systems", "Marble Countertops", "Detailed Millwork", "Professional Finish", "Healthcare-Tailored Design"],
      image: "/pharmacy.png?height=300&width=400",
    },
    {
      id: 5,
      title: "Custom Floating Staircase Installation",
      location: "Brampton, ON",
      year: "2024",
      type: "Renovation",
      description: "Part of a custom home build by VIN General Contracting, this floating staircase highlights how even the simplest features deserve careful craftsmanship. Precision-cut wood, seamless glass railings, and exact installation come together to create a clean, modern look. Every joint, finish, and mounting point was handled with attention to detail. It's a perfect example of how thoughtful construction elevates both function and style in any space.",
      features: ["Precision-Cut Wood", "Glass Railings", "Modern Design", "Expert Installation", "Attention to Detail"],
      image: "/stairs.png?height=300&width=400",
    },
    {
      id: 6,
      title: "Franchise Restaurant Build in Progress",
      location: "Oakville, ON",
      year: "2024",
      type: "Commercial",
      description: "This vibrant franchise restaurant is both designed and built by VIN General Contracting, showcasing our ability to deliver complete turn-key commercial spaces. From custom flooring to feature walls, illuminated counters, and exposed ceiling finishes, every detail is thoughtfully executed. We focus on blending modern aesthetics with functional layouts to support day to day business needs. Our team ensures every element - from millwork to final fixtures-is crafted with precision and built to last.",
      features: ["Turn-Key Commercial", "Custom Flooring", "Feature Walls", "Illuminated Counters", "Exposed Ceiling"],
      image: "/rest.png?height=300&width=400",
    },
  ]

  const filters = ["All Projects", "Residential", "Commercial", "Renovation", "Industrial"]

  const filteredProjects =
    activeFilter === "All Projects" ? projects : projects.filter((project) => project.type === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <ContractingNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B1A12] mb-6">Our Construction Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction and renovation projects across residential, commercial, and
            industrial sectors.
          </p>
        </div>


        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#4B1A12] text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-600 hover:border-[#4B1A12] hover:text-[#4B1A12]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mb-12">
          <Link href="https://drive.google.com/drive/folders/1dOfTreO7SKEE0Vsx-aHb5NxlhaSgXc27" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white"
            >
              View All Projects →
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-[#4B1A12]/20 hover:border-[#4B1A12]/40 transition-colors overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#4B1A12] text-white">{project.type}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#4B1A12] mb-3">{project.title}</h3>
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
                  <h4 className="font-semibold text-[#4B1A12]">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F7CC46]/20 text-[#4B1A12]">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Project */}
        <div className="bg-[#4B1A12] text-white rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Luxury Home Build</h2>
              <p className="text-lg mb-6">
                This beautiful custom home was fully designed and built by VIN General Contracting from the ground up. Featuring premium stonework, detailed exterior finishes, and modern architectural elements, every part of the home reflects quality craftsmanship. From foundation to final touches, we focus on precision, durability, and elegance. Our team ensures each custom home stands out with both timeless curb appeal and lasting structural integrity.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Home className="h-4 w-4" />
                    <span className="font-semibold">Type:</span>
                  </div>
                  <p>Custom Home Build</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">Location:</span>
                  </div>
                  <p>Hamilton, ON</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-semibold">Completed:</span>
                  </div>
                  <p>2023</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4" />
                    <span className="font-semibold">Features:</span>
                  </div>
                  <p>Premium Stonework & Modern Architecture</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/clhm.png?height=300&width=500"
                alt="Custom Luxury Home Build"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#4B1A12] mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction or renovation vision to life with the same quality and
            attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contracting/contact">
              <Button size="lg" className="bg-[#4B1A12] hover:bg-[#4B1A12]/90 text-white">
                Get Free Estimate
              </Button>
            </Link>
            <Link href="/contracting/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[#4B1A12] text-[#4B1A12] hover:bg-[#4B1A12] hover:text-white"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
