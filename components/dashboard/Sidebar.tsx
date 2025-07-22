"use client"
import Link from "next/link"
import { LayoutDashboard, BookOpen, CreditCard, Settings, Award, ChevronRight } from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
  { icon: BookOpen, label: "Library", href: "/library", active: false },
  { icon: CreditCard, label: "Pricing", href: "/pricing", active: false },
  { icon: Settings, label: "Account Settings", href: "/settings", active: false },
]

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-yellow-500" />
          <span className="text-xl font-bold text-slate-800">AI Learn</span>
        </Link>
      </div>

      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  typeof window !== "undefined" && window.location.pathname === item.href
                    ? "bg-yellow-50 text-yellow-700 border-r-2 border-yellow-500"
                    : "text-slate-600 hover:bg-gray-50 hover:text-slate-800"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {typeof window !== "undefined" && window.location.pathname === item.href && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Box */}
      <div className="mx-4 mt-8 p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
        <Award className="h-8 w-8 mb-2" />
        <h3 className="font-bold mb-1">Get Pro Certificate</h3>
        <p className="text-sm text-yellow-100 mb-3">Unlock advanced features and get certified</p>
        <button className="w-full bg-white text-yellow-600 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-50 transition-colors">
          Get Access
        </button>
      </div>
    </div>
  )
}
