import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SortSettinsProps{
  elementsCount : number
  delay : number
  setElementsCount : (value : number) => void
  setDelay : (value : number) => void

  isConnected : boolean
  isConnecting : boolean

  onStart : () => void
  onStop : () => void
  onShuffle : () => void
}


export const SortSettings = ({elementsCount, delay, setElementsCount, setDelay, isConnected, isConnecting, onStart, onStop, onShuffle} : SortSettinsProps) => {

  const text = isConnected ? "Connected" : isConnecting ? "Connecting..." : "Disconnected" 

  return (
    <div className="text-white pb-6 flex flex-col gap-y-2">
      <div className="flex flex-row items-center gap-x-2 mt-2 mb-4">
        <div className={cn("h-4 w-4 rounded-full bg-rose-600", isConnected && "bg-green-500" , isConnecting && "bg-yellow-400")}></div>
        <p className="font-semibold text-md lg:text-lg">{text}</p>
      </div>
      <p className="font-semibold">Elements: {elementsCount}</p>
      <Slider value={[elementsCount]} defaultValue={[100]} max={500} step={5} onValueChange={(value) => setElementsCount(value[0])}/>
      <p className="font-semibold">Delay: {delay}ms</p>
      <Slider value={[delay]} defaultValue={[0]} max={200} step={1} onValueChange={(value) => setDelay(value[0])}/>
      <div className="flex flex-row justify-between w-full mt-2">
        <Button className="w-[47%] border-rose-600 border-2 bg-rose-600 text-md lg:text-lg  hover:text-lg lg:hover:text-xl hover:bg-black transition-all" onClick={onStart}>Start</Button>
        <Button className="w-[47%] border-rose-600 border-2 bg-rose-600 text-md lg:text-lg  hover:text-lg lg:hover:text-xl hover:bg-black transition-all" onClick={onStop}>Stop</Button>
      </div>
      <Button className="border-rose-600 border-2 bg-rose-600 text-md lg:text-lg hover:text-lg lg:hover:text-xl hover:text-white transition-all" onClick={onShuffle}>Shuffle</Button>
    </div>
  )
}