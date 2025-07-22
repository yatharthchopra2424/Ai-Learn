"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, BookOpen } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-slate-800">AI Learn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-slate-700 hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="#pricing" className="text-slate-700 hover:text-yellow-500 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-yellow-500 transition-colors">
              Contact
            </Link>
            <Link href="/dashboard" className="btn-primary">
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-700 hover:text-yellow-500 transition-colors">
                About
              </Link>
              <Link href="#pricing" className="text-slate-700 hover:text-yellow-500 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-yellow-500 transition-colors">
                Contact
              </Link>
              <Link href="/dashboard" className="btn-primary inline-block text-center">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
