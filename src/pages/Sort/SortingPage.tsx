import { Sidebar } from "@/components/Sidebar"

export const SortingPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="w-full h-screen flex flex-col text-black bg-white items-center justify-center">
        <div>
          <p>Page</p>
        </div>
      </div>
    </div>
  )
}