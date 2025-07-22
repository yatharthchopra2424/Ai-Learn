import { Users, HeadphonesIcon, Monitor, Globe } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn from industry experts and AI professionals who guide you through your learning journey with personalized feedback.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock support system and active community forums.",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    description:
      "Access cutting-edge learning tools, interactive simulations, and hands-on projects that prepare you for the future.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Join a worldwide community of learners and connect with peers from different countries and backgrounds.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Makes Us Different</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the unique advantages that set our AI learning platform apart from traditional education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform">
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-yellow-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
