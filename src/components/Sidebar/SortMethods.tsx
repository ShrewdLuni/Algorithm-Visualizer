import { SortMethod } from "./Method"

interface SortMethodsProps{
  methodsList : {label: string;}[]
}

export const SortMethods = ({methodsList} : SortMethodsProps) => {
  return (
    <div>
      {methodsList.map((method) => <SortMethod label={method.label}/>)}
    </div>
  )
}