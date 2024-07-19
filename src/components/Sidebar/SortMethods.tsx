import { SortMethod } from "./Method"

interface SortMethodsProps{
  methodsList : {label: string;}[]
  activeMethod : string
  setActive : (value: string) => void
}

export const SortMethods = ({methodsList,activeMethod,setActive} : SortMethodsProps) => {

  return (
    <div className="flex flex-col gap-y-2 py-2">
      {methodsList.map((method) => <SortMethod label={method.label} isActive={method.label == activeMethod} setActive={() => setActive(method.label)}/>)}
    </div>
  )
}