import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Button } from "@/components/ui/button"


export const SortSettings = () => {
  const [elementsCount,setElementsCount] = useState(100)
  const [delay,setDelay] = useState(20)

  return (
    <div className="text-white py-6 flex flex-col gap-y-2">
      <p>Elements: {elementsCount}</p>
      <Slider value={[elementsCount]} defaultValue={[100]} max={1000} step={5} onValueChange={(value) => setElementsCount(value[0])}/>
      <p>Delay: {delay}ms</p>
      <Slider value={[delay]} defaultValue={[20]} max={50} step={1} onValueChange={(value) => setDelay(value[0])}/>
      <div className="flex flex-row justify-between w-full mt-2">
        <Button className="w-[45%]">Start</Button>
        <Button className="w-[45%]">Stop</Button>
      </div>
      <Button className="">Shuffle</Button>
    </div>
  )
}