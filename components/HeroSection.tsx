import { ArrowRight, Users, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
              Let's Learn About <span className="text-yellow-500">New Knowledge</span> and{" "}
              <span className="text-blue-600">Abilities</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Master AI, digital innovation, and 21st-century skills with our comprehensive learning platform. Join
              thousands of students already transforming their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students learning"
              className="rounded-2xl shadow-2xl"
            />

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-3">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-500" />
                <div>
                  <div className="font-bold text-slate-800">150+</div>
                  <div className="text-sm text-slate-600">Active Students</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-3">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                <div>
                  <div className="font-bold text-slate-800">5+</div>
                  <div className="text-sm text-slate-600">Top AI Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
