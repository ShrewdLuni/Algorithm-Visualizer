import { Sidebar } from "@/components/Sidebar"

export const SortingPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="w-full h-screen flex text-white bg-black items-center justify-center">
        <p>Page</p>
      </div>
    </div>
  )
}