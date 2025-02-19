import { Settings, SquareFunction } from "lucide-react"

import { CategoryButton } from "./CategoryButton"
import { SortSettings } from "./SortSettings"
import { SortMethods } from "./SortMethods"

interface SidebarProps{
  sidebarItems: {label: string;}[]

  isActiveSettings : boolean
  setIsActiveSettings : (value: boolean) => void

  isActiveMethods : boolean
  setIsActiveMethods : (value: boolean) => void

  activeMethod : string
  setActiveMethod : (value: string) => void

  elementsCount : number
  delay : number
  setElementsCount : (value: number) => void
  setDelay : (value: number) => void

  isConnected : boolean
  isConnecting : boolean

  onStart : () => void
  onStop : () => void
  onShuffle : () => void
}


export const Sidebar = ({sidebarItems, isActiveSettings, setIsActiveSettings, isActiveMethods, activeMethod, setIsActiveMethods ,setActiveMethod, elementsCount, delay, setElementsCount, setDelay, isConnected, isConnecting, onStart, onStop, onShuffle} : SidebarProps) => {

  return (
    <div className="h-screen flex flex-col gap-y-2 w-[300px] px-4 py-6 text-left border-emerald-500 border-solid bg-black overflow-y-scroll">
      <CategoryButton label={"Settings"} icon={<Settings/>} onClick={() => setIsActiveSettings(!isActiveSettings)}/>
      {isActiveSettings && <SortSettings elementsCount={elementsCount} delay={delay} setElementsCount={setElementsCount} setDelay={setDelay} isConnected={isConnected} isConnecting={isConnecting}  onStart={onStart} onStop={onStop} onShuffle={onShuffle}/>}

      <CategoryButton label={"Algorithms"} icon={<SquareFunction/>} onClick={() => setIsActiveMethods(!isActiveMethods)}/>
      {isActiveMethods && <SortMethods methodsList={sidebarItems} activeMethod={activeMethod} setActive={setActiveMethod}/>}
    </div>
  )
}