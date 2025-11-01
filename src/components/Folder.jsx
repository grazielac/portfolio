import { useState } from "react";
// import Github from "lucide-react";

export default function Folder() {
  const [activeTab, setActiveTab] = useState("Blumiora");

  const projects = {
    Hello: {
      title: "Hello",
      description: "A social networking app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    DFM: {
      title: "DFM",
      description: "A social networking app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    Blumiora: {
      title: "Blumiora",
      description: "A social networking app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
  };

  const tabs = ["Hello", "DFM", "Blumiora"];
  const currentProject = projects[activeTab];

  return (
    <>
      <div className="bg-[#FDFCF8] pt-20 flex justify-center items-start p-10 pb-30">
        {/* FOLDER BASE */}
        <div className="relative w-4/5 h-[600px]">
          <h1 className="text-2xl">Featured Projects</h1>

          {/* TABS */}
          <div className="absolute -top-4 right-0 flex space-x-4 pl-4 ">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer hover:bg-[#fff1b5] w-40 h-12 bg-gray-200 rounded-tl-2xl rounded-tr-2xl relative -ml-4 transition-all duration-200
              ${
                activeTab === tab
                  ? "z-30 bg-[#c1dbe8]"
                  : `z-${30 - (index + 1) * 10}`
              } ${activeTab === tab ? "" : "shadow-md"} ${
                  index > 0 ? "-ml-2" : ""
                }`}
              >
                <div className="flex justify-center items-center h-full">
                  <p className="text-[#43302e] font-medium">{tab}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FOLDER BODY */}
          <div className="w-full h-full bg-gray-200 rounded-b-xl rounded-tl-2xl shadow-lg p-8 overflow-y-auto">
            {/* PROJECT CONTENT */}
            <div className="space-y-6">
              {/* project title */}
              <h2 className="text-3xl font-bold text-[#43302e]">
                {currentProject.title}
              </h2>

              {/* screenshot */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400">Screenshot 1</span>
                </div>
                <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400">Screenshot 1</span>
                </div>
              </div>

              {/* description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="leading-relaxed">{currentProject.description}</p>
              </div>

              {/* tech stack */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white px-3 rounded-full text-sm border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={currentProject.github}
                  className="flex items-center gap-2 bg-[#43302e] text-white px-6 py-3 rounded-full hover:bg-[#5a4240] transition-colors"
                >
                  {/* <Github size={20} /> */}
                  View Code
                </a>
                <a
                  href={currentProject.live}
                  className="flex items-center gap-2 bg-[#43302e] text-white px-6 py-3 rounded-full hover:bg-[#5a4240] transition-colors"
                >
                  {/* <Github size={20} /> */}
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* <div className="cursor-pointer hover:bg-[#fff1b5] w-40 h-10 bg-gray-200 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-30">
              <div className="flex justify-center items-center h-full">
                <p className="text-[#43302e] group-hover:text-[#4B2914] transition-colors duration-200">
                  Hello
                </p>
              </div>
            </div>
            <div className=" cursor-pointer hover:bg-[#fff1b5] w-40 h-10 bg-gray-200 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-20">
              <div className="flex justify-center items-center h-full">
                <p className="text-[#43302e]">DFM</p>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-[#fff1b5] w-40 h-10 bg-gray-200 rounded-tl-2xl rounded-tr-2xl shadow-md relative -ml-4 z-10">
              <div className="flex justify-center items-center h-full">
                <p className="text-[#43302e]">Blumiora</p>
              </div>
            </div> */}
        </div>
        <div className="absolute top-12 left-0 w-full h-full bg-gray-200 rounded-b-xl rounded-tl-2xl shadow-lg"></div>
      </div>
    </>
  );
}
