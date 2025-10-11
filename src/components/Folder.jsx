export default function Folder() {
  return (
    <>
      <div className="bg-amber-100 min-h-screen flex justify-center items-start p-10">
        {/* FOLDER BASE */}
        <div className="relative w-full h-[600px] rounded-tl-3xl rounded-tr-3xl shadow-lg">
          {/* TABS */}
          <div className="absolute top-0 right-0 flex space-x-4 pl-4 pt-2">
            <div className="cursor-pointer hover:bg-[#EDC3BA] w-40 h-10 bg-[#CCC7B6] rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-30">
              <div className="flex justify-center items-center mt-2 ">
                <p className="text-[#1A1A3E] group-hover:text-[#4B2914] transition-colors duration-200">Hello</p>
              </div>
            </div>
           <div className=" cursor-pointer hover:bg-[#EDC3BA] w-40 h-10 bg-[#CCC7B6] rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-30">
              <div className="flex justify-center items-center mt-2">
                <p className="text-[#1A1A3E]">DFM</p>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-[#EDC3BA] w-40 h-10 bg-[#CCC7B6] rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-30">
              <div className="flex justify-center items-center mt-2">
                <p className="text-[#1A1A3E]">BloomSpace</p>
              </div>
            </div>
          </div>
          <div className="absolute top-12 left-0 w-full h-full bg-[#CCC7B6] rounded-b-xl rounded-tl-2xl shadow"></div>
        </div>
      </div>
    </>
  );
}
