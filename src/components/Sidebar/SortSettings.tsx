import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface SortSettinsProps{
  elementsCount : number
  delay : number
  setElementsCount : (value : number) => void
  setDelay : (value : number) => void
  onStart : () => void
  onStop : () => void
  onShuffle : () => void
}


export const SortSettings = ({elementsCount, delay, setElementsCount, setDelay, onStart, onStop, onShuffle} : SortSettinsProps) => {

  return (
    <div className="text-white py-6 flex flex-col gap-y-2">
      <p className="font-semibold">Elements: {elementsCount}</p>
      <Slider value={[elementsCount]} defaultValue={[100]} max={2048} step={5} onValueChange={(value) => setElementsCount(value[0])}/>
      <p className="font-semibold">Delay: {delay}ms</p>
      <Slider value={[delay]} defaultValue={[0]} max={200} step={1} onValueChange={(value) => setDelay(value[0])}/>
      <div className="flex flex-row justify-between w-full mt-2">
        <Button className="w-[47%] border-rose-600 border-2 bg-rose-600 text-lg  hover:text-xl hover:bg-black transition-all" onClick={onStart}>Start</Button>
        <Button className="w-[47%] border-rose-600 border-2 bg-rose-600 text-lg  hover:text-xl hover:bg-black transition-all" onClick={onStop}>Stop</Button>
      </div>
      <Button className="border-rose-600 border-2 bg-rose-600 text-lg hover:text-xl hover:text-white transition-all" onClick={onShuffle}>Shuffle</Button>
    </div>
  )
}