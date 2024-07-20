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
 
interface ArrayVisualizationProps{
  array : number[]
  currentIndex : number
}

export const ArrayVisualization = ({array,currentIndex} : ArrayVisualizationProps) => {
  const data = useMemo(() => array.map((value, index) => ({ index, value })), [array]);

  return (
    <div className="w-full h-screen flex flex-col text-black bg-black items-center justify-center py-24 px-2">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full bg-black">
        <BarChart accessibilityLayer data={data} barCategoryGap={0} >
          <Bar dataKey="value" isAnimationActive={false}>
            {data.map((entry, index) => (
              <Cell key={index} fill={index === currentIndex ? 'red' : 'white'} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}