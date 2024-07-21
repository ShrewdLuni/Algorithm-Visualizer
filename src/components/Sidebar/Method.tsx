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
    <Button className={cn("w-full text-white text-base hover:text-lg lg:text-xl lg:hover:text-2xl text-left bg-black hover:bg-black hover:text-rose-600  transition-all duration-300", isActive && "bg-rose-600 text-white hover:bg-rose-600 hover:text-white")}  onClick={setActive}>
      <p className="w-full text-left">
        {label}
      </p>
    </Button>
  )
}