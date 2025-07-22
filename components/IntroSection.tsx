import { BookOpen, Bot, Users, Award } from "lucide-react"

export default function IntroSection() {
  const stats = [
    { icon: BookOpen, value: "2+", label: "Courses" },
    { icon: Bot, value: "4+", label: "AI Tools" },
    { icon: Users, value: "150+", label: "Students" },
    { icon: Award, value: "30+", label: "Mentors" },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Digital learning"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              A New Different Way to <span className="text-yellow-500">Improve Your Skills</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our platform revolutionizes learning by combining cutting-edge AI technology with personalized mentorship.
              Experience interactive lessons, real-world projects, and a supportive community that accelerates your
              growth in the digital age.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <stat.icon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
