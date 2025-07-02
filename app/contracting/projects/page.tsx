"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContractingNav from "@/components/contracting-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, MapPin, Calendar, DollarSign } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContractingProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Oakville, ON",
      year: "2023",
      type: "Residential",
      budget: "$850K",
      description:
        "Custom 3,500 sq ft family home featuring open concept design, luxury finishes, and smart home technology integration.",
      features: ["Smart Home Integration", "Custom Kitchen", "Master Suite", "3-Car Garage"],
      image: "/house.png?height=300&width=400",
    },
    {
      id: 2,
      title: "Downtown Restaurant Renovation",
      location: "Toronto, ON",
      year: "2023",
      type: "Commercial",
      budget: "$450K",
      description:
        "Complete renovation of 4,000 sq ft restaurant space including kitchen upgrade, dining area redesign, and patio expansion.",
      features: ["Commercial Kitchen", "Dining for 120", "Outdoor Patio", "Bar Area"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Luxury Kitchen Remodel",
      location: "Burlington, ON",
      year: "2023",
      type: "Renovation",
      budget: "$125K",
      description:
        "High-end kitchen renovation featuring custom cabinetry, quartz countertops, and premium appliances.",
      features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Wine Storage"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Office Building Addition",
      location: "Mississauga, ON",
      year: "2022",
      type: "Commercial",
      budget: "$1.2M",
      description: "Two-story addition to existing office building, adding 8,000 sq ft of modern office space.",
      features: ["Modern Office Space", "Conference Rooms", "Break Areas", "Parking Expansion"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Basement Finishing Project",
      location: "Hamilton, ON",
      year: "2022",
      type: "Renovation",
      budget: "$85K",
      description:
        "Complete basement transformation into entertainment space with home theater, bar, and guest bedroom.",
      features: ["Home Theater", "Wet Bar", "Guest Bedroom", "Recreation Area"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Warehouse Renovation",
      location: "Brampton, ON",
      year: "2022",
      type: "Industrial",
      budget: "$650K",
      description: "Conversion of 15,000 sq ft warehouse into modern distribution center with office space.",
      features: ["Loading Docks", "Office Space", "Climate Control", "Security Systems"],
      image: "/placeholder.svg?height=300&width=400",
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F7CC46] text-[#4B1A12]">{project.budget}</Badge>
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
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{project.budget}</span>
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
              <h2 className="text-3xl font-bold mb-4">Featured Project: Luxury Estate</h2>
              <p className="text-lg mb-6">
                Our latest masterpiece - a stunning 6,000 sq ft luxury estate featuring custom architecture, premium
                finishes, and sustainable building practices.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Home className="h-4 w-4" />
                    <span className="font-semibold">Size:</span>
                  </div>
                  <p>6,000 sq ft</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">Location:</span>
                  </div>
                  <p>Oakville, ON</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-semibold">Completed:</span>
                  </div>
                  <p>2024</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">Value:</span>
                  </div>
                  <p>$1.8M</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Luxury Estate"
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
