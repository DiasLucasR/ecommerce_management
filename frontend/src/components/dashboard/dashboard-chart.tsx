"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan 1",
    value: 2400,
  },
  {
    date: "Jan 2",
    value: 1398,
  },
  {
    date: "Jan 3",
    value: 9800,
  },
  {
    date: "Jan 4",
    value: 3908,
  },
  {
    date: "Jan 5",
    value: 4800,
  },
  {
    date: "Jan 6",
    value: 3800,
  },
  {
    date: "Jan 7",
    value: 4300,
  },
  {
    date: "Jan 8",
    value: 5300,
  },
  {
    date: "Jan 9",
    value: 6300,
  },
  {
    date: "Jan 10",
    value: 7300,
  },
  {
    date: "Jan 11",
    value: 8300,
  },
  {
    date: "Jan 12",
    value: 7300,
  },
  {
    date: "Jan 13",
    value: 6300,
  },
  {
    date: "Jan 14",
    value: 5300,
  },
]

export function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

