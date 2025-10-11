export default function Folder() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen flex justify-center items-start p-10">
        {/* FOLDER BASE */}
        <div className="relative w-full h-[600px] rounded-tl-3xl rounded-tr-3xl shadow-lg bg-amber-200">
          {/* TABS */}
          <div className="absolute top-0 right-0 flex space-x-4 pl-4 pt-2">
            <div className="w-40 h-10 bg-gray-400 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-30"></div>
            <div className="w-40 h-10 bg-gray-400 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-20"></div>
            <div className="w-40 h-10 bg-gray-400 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-10"></div>
          </div>
          <div className="absolute top-12 left-0 w-full h-full bg-gray-500 rounded-b-xl shadown">

          </div>
        </div>
      </div>
    </>
  )
}
