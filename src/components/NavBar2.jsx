import { useState } from "react";

function NavBar2() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [active, setActive] = useState("Home");

  const handleClick = (tab) => {
    setActive(tab);
    const section = document.getElementById(tab);
    section?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <>
      <div className="flex justify-center mt-5 mb-5">
        <div className="relative bg-gray-100 rounded-full py-4 flex w-[600px] justify-between items-center">
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
