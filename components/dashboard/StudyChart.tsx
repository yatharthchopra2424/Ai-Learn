"use client"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const data = [
  { name: "Mon", study: 2, test: 1 },
  { name: "Tue", study: 3, test: 2 },
  { name: "Wed", study: 1, test: 1 },
  { name: "Thu", study: 4, test: 3 },
  { name: "Fri", study: 2, test: 1 },
  { name: "Sat", study: 5, test: 2 },
  { name: "Sun", study: 3, test: 2 },
]

export default function StudyChart() {
  const [filter, setFilter] = useState("Week")
  const [chartType, setChartType] = useState("line")

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-700">Study Statistics</h3>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>Today</option>
            <option>Week</option>
            <option>Month</option>
          </select>
          <button
            onClick={() => setChartType(chartType === "line" ? "bar" : "line")}
            className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm hover:bg-yellow-200 transition-colors"
          >
            {chartType === "line" ? "Bar" : "Line"} Chart
          </button>
        </div>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="study" stroke="#f59e0b" strokeWidth={2} />
              <Line type="monotone" dataKey="test" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="study" fill="#f59e0b" />
              <Bar dataKey="test" fill="#3b82f6" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-slate-600">Day</th>
              <th className="text-left py-2 text-slate-600">Study Hours</th>
              <th className="text-left py-2 text-slate-600">Test Hours</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-2 text-slate-800">{row.name}</td>
                <td className="py-2 text-yellow-600 font-medium">{row.study}h</td>
                <td className="py-2 text-blue-600 font-medium">{row.test}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
