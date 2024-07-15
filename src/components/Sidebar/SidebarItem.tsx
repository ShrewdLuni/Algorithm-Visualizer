interface SidebarItemProps {
  label : string
  icon? : any
}

export const SidebarItem = ({label} : SidebarItemProps) => {
  return (
    <div className="text-white">
      <p className="w-max bg-rose-400" draggable>
        {label}
      </p>
    </div>
  )
}