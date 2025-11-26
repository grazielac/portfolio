import { useState } from "react";

function NavBar2() {
  const tabs = ["Home", "Projects", "About"];
  const [active, setActive] = useState("Home");

  const handleClick = (tab) => {
    setActive(tab);
    const section = document.getElementById(tab);
    section?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <>
      <div className="ml-8 mr-8 xl:ml-4 xl:mr-4 mb-5 xl:flex justify-center mt-8 xl:mt-5">
        <div className="relative bg-gray-100 rounded-full py-4 flex xl:w-[600px] justify-between items-center">
          {/* SLIDING PILL */}
          <div
            className="absolute py-7 px-2 pl-12 pr-12 rounded-full bg-[#FDDAD8] transition-all duration-300 flex justify-center items-center"
            style={{
              width: `calc(100% / ${tabs.length})`,
              transform: `translateX(${tabs.indexOf(active) * 100}%)`,
            }}
          ></div>

          {/* TABS */}
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className="relative cursor-pointer flex-1 z-10 flex items-center justify-center text-gray-700 transition"
              style={{ fontFamily: "Noto Serif Display"}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar2;
