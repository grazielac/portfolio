export default function Envelope() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center p-4">
        {/* ENVELOPE */}
        <div className="rounded-md flex justify-center items-center relative shadow-lg mx-auto overflow-hidden h-[600px] sm:h-[700px] md:h-[90vh] sm:w-[90%] md:w-4/5 lg:w-3/5 bg-[rgba(246,237,188,0.5)]">
          {/* FLAP */}
          <div
            className="absolute top-0 left-0 right-0 w-full 
                            border-l-[300px] border-r-[300px] border-t-[250px]
                            border-l-transparent border-r-transparent  
                            border-t-[rgba(246,237,188,0.5)] pointer-events-none"
          ></div>

          {/* POST CARD CONTENT */}
          <div className="bg-[#FFFBF0] h-[85%] sn:h-[75%] md:h-[63%] w-[90%] sm:w-[85%] md:w-[70%] shadow-2xl rounded-lg relative p-4 sm:p-6 md:p-8 border-2 border-gray-200 transform rotate-1">
            {/* vintage stamp */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-16 sm:w-18 p-2 sm:p-4 h-20 sm:h-24 border-2 transition-shadow hover:shadow-lg  italic border-dashed border-[#43302e] bg-[#c1dbe8] flex flex-col items-center justify-center rotate-3 shadow-md">
              <a href="#" className="text-xs sm:text-sm pb-2 sm:pb-2 cursor-pointer hover:text-brown-700 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-xs sm:text-sm pb-2 cursor-pointer hover:text-brown-700 transition-colors font-medium">
                About
              </a>
              <a href="#projects" className="text-xs sm:text-sm cursor-pointer hover:text-brown-700 transition-colors font-medium">
                Projects
              </a>
            </div>

            {/* lines */}
            <div className="hidden lg:block absolute bottom-4 right-4 text-xs text-gray-400 italic font-mono space-y-1">
              <div className="border-b border-gray-300 w-32"></div>
              <div className="border-b border-gray-300 w-32"></div>
              <div className="border-b border-gray-300 w-24"></div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between mb-6">
              <div className="w-full md:w-2/3 lg:w-3/4 md:pr-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif drop-shadow-md text-[#43302e]">
                  Hi, I'm Graziela
                </h1>
                <div className="w-4/5">
                  <p className="mt-4 sm:mt-6 italic text-[#43302e] text-xs sm:text-sm md:mt-4 md:text-md leading-relaxed">
                    A software developer with an eye for design. I build
                    experiences where functionality and beauty work in harmony -
                    because the best interfaces are the ones you don't have to
                    think about.
                  </p>
                </div>
              </div>

              {/* POSTMARK */}
              <div className="hidden md:flex absolute top-4 right-24 w-20 h-20 border-2 mr-6 border-[#43302e] rounded-full opacity-30 items-center justify-center">
                <div className="text-center text-xs font-mono">
                  <div>PORTFOLIO</div>
                  <div>2025</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center mt-6 gap-4 sm:gap-0">
              <div className="w-full sm:w-1/2 flex justify-center">
                <div className="relative -mt-3">
                  <div className="absolute -top-1 z-20 -left-1 w-4 sm:w-6 h-4 sm:h-6 bg-gray-200 border-t-2 border-gray-300 transform rotate-45"></div>

                  <img
                    src="src/assets/me.jpeg"
                    alt="profile"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md shadow-xl border-4 border-white transform -rotate-2"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 sm:w-6 h-4 sm:h-6 bg-gray-200 border-t-2 border-gray-300 transform rotate-45"></div>
                </div>
              </div>

              <div className="hidden sm:block h-38 w-px bg-gray-400 mx-4 sm:mx-8"></div>

              <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 font-serif">
                  Skills:
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  React • TypeScript • Node.js Tailwind • PostgreSQL
                </p>
              </div>
            </div>

            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
