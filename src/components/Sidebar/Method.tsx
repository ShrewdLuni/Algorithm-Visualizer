interface SortMethodProps {
  label : string
  icon? : any
}

export const SortMethod = ({label} : SortMethodProps) => {
  return (
    <div className="text-white">
      <p className="w-max bg-rose-400" draggable>
        {label}
      </p>
    </div>
  )
}