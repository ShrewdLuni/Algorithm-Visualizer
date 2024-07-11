interface SidebarItemProps {
  label : string
  icon? : any
}

export const SidebarItem = ({label} : SidebarItemProps) => {
  return (
    <div>
      {label}
    </div>
  )
}