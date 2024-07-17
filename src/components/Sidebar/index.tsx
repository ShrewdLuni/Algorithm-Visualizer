import { useState } from "react"
import { SidebarItem } from "./SidebarItem"

import { ChevronDown, Settings, SquareFunction } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CategoryButton } from "./CategoryButton"

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
      <CategoryButton label={"Settings"} icon={<Settings/>} onClick={() => setActiveCategorie("Settings")} isActive={activeCategory == "Settings"}/>


      {activeCategory == "Settings" && (
        <div className="text-white bg-emerald-500">
          <p>Delay:</p>
          <p>123</p>
        </div>
      )}

      <CategoryButton label={"Algorithms"} icon={<SquareFunction/>} onClick={() => setActiveCategorie("Algorithms")} isActive={activeCategory == "Algorithms"}/>



      {activeCategory == "Algorithms" && (
        sidebarItems.map(item => <SidebarItem label={item.label}/>)
      )}
    </div>
  )
}