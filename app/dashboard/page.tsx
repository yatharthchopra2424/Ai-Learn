import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"
import StatCard from "@/components/dashboard/StatCard"
import StudyChart from "@/components/dashboard/StudyChart"
import CalendarWidget from "@/components/dashboard/CalendarWidget"
import FeaturedToolCard from "@/components/dashboard/FeaturedToolCard"
import { stats, featuredTools } from "@/data/dashboardData"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Featured Tools - Moved above study chart */}
          <div className="card mb-8">
            <h3 className="text-xl font-bold text-slate-700 mb-6">Featured Learning Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => (
                <FeaturedToolCard key={index} {...tool} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Study Chart */}
            <div className="lg:col-span-2">
              <StudyChart />
            </div>

            {/* Calendar */}
            <div>
              <CalendarWidget />
            </div>
          </div>

          {/* Then the existing grid with Membership Overview and My Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Membership Overview */}
            <div className="card">
              <h3 className="text-xl font-bold text-slate-700 mb-4">Membership Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-red-500 font-semibold">Inactive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Role:</span>
                  <span className="text-gray-800 font-semibold">User</span>
                </div>
                <button className="btn-primary w-full mt-4">Upgrade to Pro</button>
              </div>
            </div>

            {/* My Progress */}
            <div className="card">
              <h3 className="text-xl font-bold text-slate-700 mb-4">My Progress</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">0h 0min</div>
                <p className="text-gray-600">Total Time Spent</p>
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full w-0"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Start learning to track your progress!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
