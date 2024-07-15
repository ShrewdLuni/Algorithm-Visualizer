import { useState } from "react"
import { SidebarItem } from "./SidebarItem"

import { ChevronDown, Settings, SquareFunction } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Sidebar = () => {

  const [activeCategory,setActiveCategorie] = useState("Settings")

  let sidebarItems =  [
    {label:"BubbleSort"},
    {label:"InsertionSort"},
    {label:"HeapSort"},
    {label:"QuickSort"},
    {label:"MergeSort"},
    {label:"BucketSort"},
  ]
  
  return (
    <div className="h-screen flex flex-col w-[300px] px-4 py-6 text-left border-emerald-500 border-solid border-r-4 bg-black">
      <Button className="flex flex-row justify-between items-center border-2 px-2 py-2 text-white font-semibold" variant="ghost" onClick={() => setActiveCategorie("Settings")}>
        <div className="flex flex-row">
          <Settings />
          <p className={cn(activeCategory == "Settings" && "uppercase")}>Settings</p> 
        </div>
        <ChevronDown className=""/>
      </Button>
      <div className="bg-emerald-600">
        {activeCategory == "Settings" && (
          <div className="text-white">
            <p>Delay:</p>
            <p>123</p>
          </div>
        )}
      </div>
      <Button className="flex flex-row items-center justify-between border-2 px-2 py-2 text-white font-semibold" variant="ghost" onClick={() => setActiveCategorie("Algorithms")}>
        <div className="flex flex-row">
          <SquareFunction />
          <p className={cn(activeCategory == "Algorithms" && "uppercase")}>Algorithms</p>
        </div>
        <ChevronDown className=""/>
      </Button>
      {activeCategory == "Algorithms" && (
        sidebarItems.map(item => <SidebarItem label={item.label}/>)
      )}
    </div>
  )
}