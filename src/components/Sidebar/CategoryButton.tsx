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
      <Button className="flex flex-row justify-between items-center border-rose-600  border-2 px-2 py-2 text-white font-semibold" variant="ghost" onClick={onClick}>
        <div className="flex flex-row items-center">
          {icon}
          <p className={cn("text-lg",isActive && "text-xl")}>{label}</p> 
        </div>
        <ChevronDown/>
      </Button>
  )
}