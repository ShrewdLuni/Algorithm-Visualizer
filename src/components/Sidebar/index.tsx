import { useState } from "react"
import { Settings, SquareFunction } from "lucide-react"

import { CategoryButton } from "./CategoryButton"
import { SortSettings } from "./SortSettings"
import { SortMethods } from "./SortMethods"

export const Sidebar = () => {

  const [activeCategory,setActiveCategorie] = useState("Settings")
  const [activeMethod,setActiveMethod] = useState("BubbleSort")

  let sidebarItems =  [
    {label:"BubbleSort"},
    {label:"InsertionSort"},
    {label:"HeapSort"},
    {label:"QuickSort"},
    {label:"MergeSort"},
    {label:"BucketSort"},
  ]
  
  return (
    <div className="h-screen flex flex-col w-[300px] px-4 py-6 text-left border-emerald-500 border-solid bg-black">
      <CategoryButton label={"Settings"} icon={<Settings/>} onClick={() => setActiveCategorie("Settings")} isActive={activeCategory == "Settings"}/>
      {activeCategory == "Settings" && <SortSettings/>}

      <CategoryButton label={"Algorithms"} icon={<SquareFunction/>} onClick={() => setActiveCategorie("Algorithms")} isActive={activeCategory == "Algorithms"}/>
      {activeCategory == "Algorithms" && <SortMethods methodsList={sidebarItems} activeMethod={activeMethod} setActive={setActiveMethod}/>}
    </div>
  )
}