"use client"
import { useState } from "react"
import type React from "react"

import { Mail, Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Receive Latest News</h2>
          <p className="text-xl text-blue-100 mb-8">
            Stay updated with the latest AI trends, course releases, and exclusive learning resources.
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
