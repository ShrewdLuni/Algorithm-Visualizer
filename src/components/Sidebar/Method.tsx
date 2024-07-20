import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

interface SortMethodProps {
  label : string
  icon? : JSX.Element
  isActive : boolean
  setActive : () => void
}

export const SortMethod = ({label,isActive,setActive} : SortMethodProps) => {
  return (
    <Button className={cn("w-full text-white text-xl text-left", isActive && "bg-rose-600 text-white")} variant={"ghost"} onClick={setActive}>
      <p className="w-full text-left">
        {label}
      </p>
    </Button>
  )
}