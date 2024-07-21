import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface CategoryButtonProps{
  label : string
  onClick : () => void
  icon : JSX.Element
  isActive : boolean
}

export const CategoryButton = ({label, onClick, icon, isActive} : CategoryButtonProps) => {
  return (
      <Button className="flex flex-row justify-between items-center border-rose-600 bg-black hover:bg-red-950 hover:text-white border-2 px-2 py-2 text-white font-semibold"  onClick={onClick}>
        <div className="flex flex-row items-center">
          {icon}
          <p className={cn("text-lg",isActive && "text-xl")}>{label}</p> 
        </div>
        <ChevronDown/>
      </Button>
  )
}