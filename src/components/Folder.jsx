import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

export default function Folder() {
  const [activeTab, setActiveTab] = useState("Blumiora");
  const [showScroll, setShowScroll] = useState(true);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    setShowScroll(!bottom);
  };

  const projects = {
    Hello: {
      title: "Hello",
      screenshot: [],
      description: "A social networking app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    DFM: {
      title: "DFM",
      screenshot: ["/travel.jpg", "/travel.jpg"],
      description: "A social networking app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    Blumiora: {
      title: "Blumiora",
      screenshot: ["/blumiorahero.png", "/blue.png"],
      description:
        "A hyper-local, curated hub for creatives to discover events, showcase their work, and connect with each other — all in one place.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/grazielac/blumiora",
      live: "#",
    },
  };

  const tabs = ["Hello", "DFM", "Blumiora"];
  const currentProject = projects[activeTab];

  return (
    <>
      <div className="bg-[#FDFCF8] pt-30 flex flex-col justify-center items-center p-10 pb-30">
        <div className="mb-8 -ml-[700px] ">
          <h1 className="text-3xl w-90">Featured Projects</h1>
        </div>

        {/* FOLDER BASE */}
        <div className="relative w-4/5 h-[600px] pb-6">
          {/* TABS */}
          <div className="absolute -top-12 right-0 flex space-x-4 pl-4">
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
          <div onScroll={handleScroll} className="w-full h-full bg-gray-200 rounded-b-xl rounded-tl-2xl shadow-lg p-8 overflow-y-scroll">
            
            {/* PROJECT CONTENT */}
            <div className="space-y-6">
              {/* project title */}
              <h2 className="text-3xl font-bold text-[#43302e]">
                {currentProject.title}
              </h2>

              {/* screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProject.screenshot &&
                currentProject.screenshot.length > 0 ? (
                  currentProject.screenshot.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${currentProject.title} screenshot ${index + 1}`}
                      className="w-full h-70 object-cover rounded-lg border-2 border-gray-300"
                    />
                  ))
                ) : (
                  <>
                    <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400">No screenshot</span>
                    </div>
                    <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400">No screenshot</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* description */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="leading-relaxed">{currentProject.description}</p>
            </div>
            {/* tech stack */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-amber-50 px-3 rounded-full text-sm border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href={currentProject.github}
                className="flex items-center gap-2 bg-[#43302e] text-white px-6 py-2 rounded-full hover:bg-[#5a4240] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                View Code
              </a>
              <a
                href={currentProject.live}
                className="flex items-center gap-2 bg-[#43302e] text-white px-6 py-3 rounded-full border-2 border-[#43302e] hover:bg-[#5a4240] transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>

          {showScroll && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-[#43302e] opacity-50" size={32} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
