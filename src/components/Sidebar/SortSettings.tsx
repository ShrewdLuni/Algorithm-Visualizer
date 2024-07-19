import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface SortSettinsProps{
  elementsCount : number
  delay : number
  setElementsCount : (value : number) => void
  setDelay : (value : number) => void
  onStart : () => void
}


export const SortSettings = ({elementsCount,delay,setElementsCount,setDelay,onStart} : SortSettinsProps) => {

  return (
    <div className="text-white py-6 flex flex-col gap-y-2">
      <p>Elements: {elementsCount}</p>
      <Slider value={[elementsCount]} defaultValue={[100]} max={1000} step={5} onValueChange={(value) => setElementsCount(value[0])}/>
      <p>Delay: {delay}ms</p>
      <Slider value={[delay]} defaultValue={[100]} max={2000} step={5} onValueChange={(value) => setDelay(value[0])}/>
      <div className="flex flex-row justify-between w-full mt-2">
        <Button className="w-[45%]" onClick={onStart}>Start</Button>
        <Button className="w-[45%]">Stop</Button>
      </div>
      <Button className="">Shuffle</Button>
    </div>
  )
}