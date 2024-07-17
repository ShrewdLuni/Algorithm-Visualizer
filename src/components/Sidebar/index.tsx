import { useState } from "react"
import { SidebarItem } from "./SidebarItem"

import { Settings, SquareFunction } from "lucide-react"

import { CategoryButton } from "./CategoryButton"
import { SortSettings } from "./SortSettings"

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
      {activeCategory == "Settings" && <SortSettings/>}

      <CategoryButton label={"Algorithms"} icon={<SquareFunction/>} onClick={() => setActiveCategorie("Algorithms")} isActive={activeCategory == "Algorithms"}/>
      {activeCategory == "Algorithms" && (
        sidebarItems.map(item => <SidebarItem label={item.label}/>)
      )}
    </div>
  )
}