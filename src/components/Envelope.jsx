export default function Envelope() {
  return (
    <>
      <div className="h-screen mb-15 flex justify-center items-center bg-cover bg-center">
        {/* ENVELOPE */}
        <div className="rounded-md flex justify-center items-center relative shadow-lg mx-auto overflow-hidden h-[90%] w-3/5 bg-[rgba(246,237,188,0.5)]">
          {/* FLAP */}
          <div
            className="absolute top-0 left-0 right-0 w-full 
                            border-l-[300px] border-r-[300px] border-t-[250px]
                            border-l-transparent border-r-transparent  
                            border-t-[rgba(246,237,188,0.5)] pointer-events-none"
          ></div>
          {/* POST CARD CONTENT */}
          <div className="bg-[#FFFBF0] h-[63%] w-[70%] shadow-xl rounded-lg relative p-6">

            <div className="flex justify-between mb-4">
              <div className="w-1/2">
                <h1 className="text-2xl font-serif drop-shadow-md">Hi, I'm Graziela</h1>
                <p className="mt-3 w-full italic text-brown-800 text-sm drop-shadow-sm">
                  A creative software developer with a love for crafting
                  elegant, intuitive, and meaningful digital experiences.
                </p>
              </div>

              <div className="border italic p-4 h-3/5 cursor-pointer shadow-lg">
                <p className="text-sm pb-2 cursor-pointer hover:text-brown-700">Home</p>
                <p className="text-sm pb-2 cursor-pointer hover:text-brown-700">About</p>
                <p className="text-sm cursor-pointer hover:text-brown-700">Contact</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/2 flex justify-center">
                <img
                  src="src/assets/me.jpeg"
                  alt="profile picture"
                  className="w-32 h-auto object-cover rounded-md shadow-lg"
                />
              </div>

              <div className=" h-60 w-px bg-gray-400 mx-6 shadow-inner"></div>

              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">About:</h3>
                <p className="max-w-md drop-shadow-sm">
                  Every project I create is like a letter - carefully designed,
                  thoughtfully written, and sent with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
