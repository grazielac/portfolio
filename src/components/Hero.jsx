import Projects from "./Projects";

export default function Hero() {
  return (
    <>
      <div className="bg-amber-100 min-h-screen flex items-center justify-center px-4">
        <div className="border bg-amber-200 w-full max-w-5xl h-[80vh] flex items-center justify-center rounded-xl">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-amber-300 h-[30vh] w-[50vh]"></div>
            <div className="bg-amber-400 h-[30vh] w-[50vh]"></div>
          </div>
          {/* DIVIDER */}
          <div className="border-l border-y-gray-400 h-100 mx-4 ml-10 mr-10"></div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-amber-300 h-[30vh] w-[50vh]"></div>
            <div className="bg-amber-400 h-[30vh] w-[50vh]"></div>
          </div>
        </div>
      </div>
       <Folder />
    </>
  );
}
