export default function Envelope() {
  return (
    <>
      <div className="h-screen bg-[#ECEAE3] flex justify-center items-center">
        {/* ENVELOPE */}
        <div className="rounded-md flex justify-center items-center relative shadow-lg mx-auto overflow-hidden h-[90%] w-3/5 bg-[rgba(246,237,188,0.5)]">
          {/* POST CARD CONTENT */}
          <div className="flex flex-col justify-center items-start bg-[#FFFBF0] h-[63%] w-[70%] shadow-md p-6">
            <h1 className="text-2xl font-serif">PostCard</h1>
            <p className="italic text-brown-800">This is the postcard...</p>
          </div>
        </div>
        {/* FLAP */}
        {/* <div
            className="absolute top-0 left-0 right-0 w-full 
                            border-l-[300px] border-r-[300px] border-t-[250px]
                            border-l-transparent border-r-transparent  
                            border-t-[rgba(246,237,188,0.5)]"
          > */}
      </div>
      {/* </div> */}
    </>
  );
}
