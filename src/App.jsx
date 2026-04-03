// src/App.jsx
import React from "react";
import financialData from "./financialData.json";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell
} from "recharts";

// Pie chart colors
const PIE_COLORS = ["#22c55e", "#f87171"];

export default function App() {
  // Pie chart data: Ad Revenue vs Ad Cost
  const pieData = [
    { name: "Ad Revenue", value: financialData.reduce((sum, item) => sum + Number(item["Ad Revenue"]), 0) },
    { name: "Ad Cost", value: financialData.reduce((sum, item) => sum + Number(item["Ad Cost of revenue"]), 0) },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Financial Dashboard</h1>

      {/* Charts Grid: 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl mb-4">Total Revenue vs Cost of Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financialData}>
              <XAxis dataKey="Date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <Tooltip contentStyle={{ backgroundColor: "#1e1f1f", color: "#fff" }} />
              <Line type="monotone" dataKey="Total Revenue" stroke="#22c55e" strokeWidth={3} />
              <Line type="monotone" dataKey="Cost of Revenue" stroke="#f87171" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl mb-4">Gross Profit</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="Date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
              <Bar dataKey="Gross Profit" fill="#7ee0ed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl mb-4">Premium Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={financialData}>
              <XAxis dataKey="Date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
              <Area type="monotone" dataKey="Premium Revenue" stroke="#facc15" fill="#facc15" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4">Ad Revenue Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}