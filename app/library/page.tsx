"use client"
import { useState } from "react"
import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"
import { Search, Filter, Star, Users, ExternalLink, Zap, Bot, Brain, Code, Database, Globe } from "lucide-react"

const categories = ["All", "AI Tools", "Data Analysis", "Programming", "Automation", "Research", "Creative"]

const tools = [
  {
    id: 1,
    title: "AI Chatbot Assistant",
    description: "Get instant help with your learning questions using our advanced AI chatbot powered by GPT-4.",
    category: "AI Tools",
    rating: 4.8,
    users: 1250,
    price: "Free",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Bot,
    features: ["24/7 Availability", "Multi-language Support", "Context Awareness", "Learning Recommendations"],
    featured: true,
    inUse: false,
  },
  {
    id: 2,
    title: "Career Path Generator",
    description:
      "Discover personalized career paths based on your skills, interests, and market trends using AI analysis.",
    category: "AI Tools",
    rating: 4.9,
    users: 890,
    price: "Pro",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Zap,
    features: ["Skill Assessment", "Market Analysis", "Personalized Roadmap", "Industry Insights"],
    featured: true,
    inUse: true,
  },
  {
    id: 3,
    title: "Code Review Assistant",
    description: "AI-powered code analysis and suggestions to improve your programming skills and code quality.",
    category: "Programming",
    rating: 4.7,
    users: 2100,
    price: "Free",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Code,
    features: ["Code Analysis", "Best Practices", "Security Checks", "Performance Tips"],
    featured: false,
    inUse: false,
  },
  {
    id: 4,
    title: "Data Visualization Studio",
    description: "Create stunning data visualizations and interactive charts with AI-assisted design recommendations.",
    category: "Data Analysis",
    rating: 4.6,
    users: 750,
    price: "Pro",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Database,
    features: ["Drag & Drop Interface", "AI Suggestions", "Export Options", "Real-time Collaboration"],
    featured: true,
    inUse: false,
  },
  {
    id: 5,
    title: "Research Paper Analyzer",
    description:
      "AI tool to analyze research papers, extract key insights, and generate summaries for faster learning.",
    category: "Research",
    rating: 4.9,
    users: 650,
    price: "Pro",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Brain,
    features: ["PDF Analysis", "Key Insights", "Citation Generator", "Summary Creation"],
    featured: true,
    inUse: false,
  },
  {
    id: 6,
    title: "Language Learning Companion",
    description: "Practice conversations with AI tutors in multiple languages with real-time feedback and corrections.",
    category: "AI Tools",
    rating: 4.5,
    users: 1800,
    price: "Free",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Globe,
    features: ["Voice Recognition", "Grammar Correction", "Cultural Context", "Progress Tracking"],
    featured: false,
    inUse: true,
  },
  {
    id: 7,
    title: "AR/VR Learning Experience",
    description:
      "Immersive learning experiences with augmented and virtual reality for hands-on education in 3D environments.",
    category: "AI Tools",
    rating: 4.9,
    users: 450,
    price: "Pro",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Globe,
    features: ["3D Environments", "Hand Tracking", "Voice Commands", "Multi-user Sessions"],
    featured: true,
    inUse: false,
  },
]

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (toolId: number) => {
    setFavorites((prev) => (prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]))
  }

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.users - a.users
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "price":
        return a.price === "Free" ? -1 : b.price === "Free" ? 1 : 0
      default:
        return 0
    }
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">AI Learning Tools</h1>
            <p className="text-slate-600">
              Discover and use our comprehensive collection of AI-powered learning tools to enhance your education.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="card mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools, features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="price">Free First</option>
                </select>

                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Tools */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">🌟 Featured Learning Tools</h2>
            <p className="text-slate-600 mb-6">
              Discover our most innovative and popular learning tools, including cutting-edge AR/VR experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter((tool) => tool.featured)
                .map((tool) => (
                  <div
                    key={tool.id}
                    className={`card group hover:scale-105 transition-transform ${tool.title.includes("AR/VR") ? "ring-2 ring-purple-500 bg-gradient-to-br from-purple-50 to-pink-50" : ""}`}
                  >
                    <div className="relative mb-4">
                      <img
                        src={tool.image || "/placeholder.svg"}
                        alt={tool.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <div className="p-2 bg-white rounded-full shadow-md">
                          <tool.icon className="h-5 w-5 text-yellow-600" />
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tool.price === "Free" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {tool.price}
                        </span>
                      </div>
                      {tool.inUse && (
                        <div className="absolute bottom-2 left-2">
                          <span className="px-2 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                            In Use
                          </span>
                        </div>
                      )}
                      {tool.title.includes("AR/VR") && (
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold animate-pulse">
                            🚀 NEW TECH
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">{tool.title}</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {tool.users.toLocaleString()}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tool.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span>{tool.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                          {tool.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                              +{tool.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full btn-primary flex items-center justify-center space-x-2">
                        <span>{tool.inUse ? "Open Tool" : "Try Now"}</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Tools */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">All AI Tools ({sortedTools.length})</h2>
              <div className="text-sm text-slate-600">
                Showing {sortedTools.length} of {tools.length} tools
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedTools.map((tool) => (
                <div
                  key={tool.id}
                  className={`card group ${viewMode === "list" ? "flex items-center space-x-6" : "hover:scale-105 transition-transform"}`}
                >
                  <div className={`relative ${viewMode === "list" ? "w-48 h-32 flex-shrink-0" : "mb-4"}`}>
                    <img
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.title}
                      className={`object-cover rounded-lg ${viewMode === "list" ? "w-full h-full" : "w-full h-48"}`}
                    />
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-white rounded-full shadow-md">
                        <tool.icon className="h-5 w-5 text-yellow-600" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tool.price === "Free" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tool.price}
                      </span>
                    </div>
                    {tool.inUse && (
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                          In Use
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`space-y-3 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{tool.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {tool.users.toLocaleString()}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tool.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>

                    {viewMode === "grid" && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                          {tool.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                              +{tool.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <button className="w-full btn-primary flex items-center justify-center space-x-2">
                      <span>{tool.inUse ? "Open Tool" : "Try Now"}</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
