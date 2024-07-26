export const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-black justify-center items-center text-left">
      <div className="flex flex-col w-[90%]">
        <p className="block w-[100%] text-white text-[12vw] md:text-[6vw] font-bold">404</p> 
        <div className="flex flex-col">
          <p className="text-white text-[8vw] md:text-[4vw] font-semibold">Something went wrong.</p>
          <p className="text-gray-400 text-[5vw] md:text-[2vw]">The page is missing or you assembled the link incorrectly</p>
        </div>
        <a className="text-blue-500 text-[5vw] md:text-[2vw] mt-8" href="/">Go back to home page</a>
      </div>
    </div>
  )
}