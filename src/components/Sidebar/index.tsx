import { useState } from "react"
import { Settings, SquareFunction } from "lucide-react"

import { CategoryButton } from "./CategoryButton"
import { SortSettings } from "./SortSettings"
import { SortMethods } from "./SortMethods"

export const Sidebar = () => {

  const [isActiveSettings,setIsActiveSettings] = useState(true)
  const [isActiveMethods,setIsActiveMethods] = useState(true)
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
      <CategoryButton label={"Settings"} icon={<Settings/>} onClick={() => setIsActiveSettings(!isActiveSettings)} isActive={isActiveSettings}/>
      {isActiveSettings && <SortSettings/>}

      <CategoryButton label={"Algorithms"} icon={<SquareFunction/>} onClick={() => setIsActiveMethods(!isActiveMethods)} isActive={isActiveMethods}/>
      {isActiveMethods && <SortMethods methodsList={sidebarItems} activeMethod={activeMethod} setActive={setActiveMethod}/>}
    </div>
  )
}