import { Star, ExternalLink } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface FeaturedToolCardProps {
  icon: LucideIcon
  title: string
  description: string
  rating: number
  category: string
}

export default function FeaturedToolCard({ icon: Icon, title, description, rating, category }: FeaturedToolCardProps) {
  return (
    <div className="card group hover:scale-105 transition-transform">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 transition-colors">
          <Icon className="h-6 w-6 text-yellow-600" />
        </div>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{category}</span>
      </div>

      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-slate-700">{rating}</span>
        </div>
        <button className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors">
          <span>Try Now</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
