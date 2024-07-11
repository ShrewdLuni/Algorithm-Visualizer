import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {

  let sidebarItems =  [
    {label:"BubbleSort"},
    {label:"QuickSort"},
    {label:"MergeSort"},
  ]
  
  return (
    <div className="h-screen flex flex-col gap-y-8 px-12 py-6 text-left border-black border-solid border-r-4">
      {sidebarItems.map(item => <SidebarItem label={item.label}/>)}
    </div>
  )
}