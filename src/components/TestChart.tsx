"use client"
 
import { Bar, BarChart, Cell } from "recharts"
 
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useMemo } from "react"
 
const chartConfig = {
  value: {
    label: "Value",
    color: "#2563eb",
  },

} satisfies ChartConfig
 
interface TestChartProps{
  array : number[]
  currentIndex : number
}

export const TestChart = ({array,currentIndex} : TestChartProps) => {
  const data = useMemo(() => array.map((value, index) => ({ index, value })), [array]);

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full bg-black">
      <BarChart accessibilityLayer data={data} barCategoryGap={0}>
        <Bar dataKey="value" >
          {data.map((entry, index) => (
            <Cell key={index} fill={index === currentIndex ? 'red' : 'white'} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}