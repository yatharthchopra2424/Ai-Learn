import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: ["Access to 2 basic courses", "Community support", "Basic AI tools", "Progress tracking"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Best for serious learners",
    features: [
      "Access to all courses",
      "Priority support",
      "Advanced AI tools",
      "Certificates",
      "Mentorship sessions",
      "Project reviews",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Custom courses",
      "Analytics dashboard",
      "API access",
      "Dedicated support",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Choose Your Learning Path</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Select the perfect plan to accelerate your AI and digital skills journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? "ring-2 ring-yellow-500 scale-105" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{plan.price}</div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
