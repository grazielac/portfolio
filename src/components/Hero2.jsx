import NavBar2 from "./NavBar2";

function Hero2() {
  return (
    <div>
      <section id="Home" className="h-screen">
        <NavBar2 />
        <div className="flex flex-row md:flex-row items-center justify-between w-full max-w-9xl">
          {/* TAG */}
          <div className="relative flex justify-center items-center ml-4">
            <div>
              {/* RIBBON */}
              <div className="relative hover:scale-105 hover:-rotate-3 transition-transform -translate-y-15">
                <div className="bg-[#730C04] w-4 h-85 ml-38 -translate-y-40"></div>

                {/* PINK BG */}
                <div className="bg-[#EBA7B0] absolute w-45 h-76 rounded-xl -translate-y-40 translate-x-18 shadow-lg">
                  {/* TEXTURE OVERLAY */}
                  <div
                    className="inset-0 absolute rounded-xl pointer-events-none"
                    style={{
                      backgroundImage: "url(/texture.png)",
                      backgroundSize: "auto",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.3,
                    }}
                  ></div>

                  {/* text */}
                  <div className="relative flex-row items-center text-center mt-45 z-10">
                    <h3 className="text-[#730C04] text-2xl">GRAZIELA</h3>
                    <p className="text-[11px] text-[#730C04]">
                      junior software developer
                    </p>
                    <h3 className="text-[12px] text-[#730C04]">
                      React • TypeScript • Postgresql
                    </h3>
                    <p className="text-[12px] font-bold text-[#730C04]">
                      Barcelona
                    </p>
                    <p className="text-[8px] text-[#730C04]">
                      DO NOT ASK FOR 10 YRS EXP
                    </p>
                  </div>

                  {/* Small top decorations */}
                  <div className="absolute top-0 left-0">
                    <div className="bg-[#730C04] w-4 h-6 rounded-xs ml-20 absolute z-10 -translate-y-2"></div>
                    <div className="bg-amber-50 w-8 h-3 translate-x-18 translate-y-2 rounded-xs"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="translate-x-10 translate-y-8">
            <div className="flex flex-col items-center justify-center">
              {/* TYPING */}
              <h1 className="-translate-x-58 text-[140px] leading-none italic">
                hi, I'm
              </h1>
              <h1 className="text-[156px] tracking-tighter leading-none ">
                GRAZIELA
              </h1>

              <p className="font-body text-base whitespace-pre-line text-center mt-6">
                A <span className="font-semibold">junior developer</span> who
                thinks like a designer and builds <br />
                like a maker. I learn by doing, refine as I go, and turn ideas{" "}
                <br />
                into functional, user-focused products. Ceramic artist, <br />
                problem solver, and always improving the things I touch.
              </p>

              <div className="flex justify-center mt-16">
                <button
                  className="bg-[#82040B] flex items-center gap-2 px-5 py-2 rounded-full text-white cursor-pointer hover:bg-[#FDDAD8] hover:text-[#4C3A2C]"
                  href="#Projects"
                  onClick={() =>
                    document
                      .getElementById("Projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See what I’ve built <span className="animate-bounce">↓</span>
                </button>
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="-translate-x-24 translate-y-14">
            <div>
              {/* ANNOTATION */}
              <div>
                <img
                  src="/anotation2.png"
                  alt="GRAZIELA"
                  className="-translate-y-26  -translate-x-60 absolute -rotate-6 w-24 md:w-32 hover:scale-105 hover:-rotate-3 transition-transform"
                />
              </div>

              {/* ARROW */}
              <div>
                <img
                  src="/arrow.png"
                  alt="GRAZIELA"
                  className="-translate-y-10  -translate-x-38 absolute -rotate-6 w-24 md:w-32"
                />
              </div>
              <div className="-translate-y-24 flex justify-center relative hover:scale-105 hover:-rotate-3 transition-transform">
                {/* PHOTO */}
                <img
                  src="/blue.png"
                  alt="GRAZIELA"
                  className="w-30 md:w-40 lg:w-65 lg:h-86 rounded-3xl object-cover border rotate-6 shadow-lg"
                />

                {/* TAPE */}
                <img
                  src="/tape.png"
                  alt="tape"
                  className="absolute top-0 -translate-y-11 translate-x-6 rotate-6 w-24 md:w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;
