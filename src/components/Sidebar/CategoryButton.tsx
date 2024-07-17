import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface CategoryButtonProps{
  label : string
  onClick : any
  icon : any
  isActive : boolean
}

export const CategoryButton = ({label, onClick, icon, isActive} : CategoryButtonProps) => {
  return (
      <Button className="flex flex-row justify-between items-center border-2 px-2 py-2 text-white font-semibold" variant="ghost" onClick={onClick}>
        <div className="flex flex-row">
          {icon}
          <p className={cn(isActive && "uppercase")}>{label}</p> 
        </div>
        <ChevronDown/>
      </Button>
  )
}