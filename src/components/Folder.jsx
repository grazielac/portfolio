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
    Soon: {
      title: "Soon",
      screenshot: [],
      description: "Coming Soon",
      tech: [],
      github: "#",
      live: "#",
    },
    DFM: {
      title: "DFM",
      screenshot: [],
      description: "Coming Soon",
      tech: [],
      github: "#",
      live: "#",
    },
    Blumiora: {
      title: "Blumiora (On-going)",
      screenshot: ["/blumiorahero.png", "/featurecreatives.png"],
      description:
        "A hyper-local, curated hub for creatives to discover events, showcase their work, and connect with each other — all in one place. The MVP features event browsing, user profiles, and a responsive interface built with Next.js and TypeScript. Actively developing portfolio showcasing and community messaging features.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/grazielac/blumiora",
      live: "#",
    },
  };

  const tabs = ["Soon", "DFM", "Blumiora"];
  const currentProject = projects[activeTab];

  return (
    <>
      <div id="projects" className="bg-[#FDFCF8] min-h-[650px] py-2 sm:py-8 md:py-12 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
        <div className="mb-8 w-full max-w-6xl sm:-ml-[700px] flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Featured Projects
          </h1>
        </div>

        {/* FOLDER BASE */}
        <div className="relative w-full max-w-6xl h-[500px] sm:h-[600px] lg:h[650px] pb-6 ">
          {/* TABS */}
          <div className="hidden lg:flex absolute -top-12 right-0 space-x-2 lg:space-x-4">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer hover:bg-[#fff1b5] w-32 lg:w-40 h-10 lg:h-12 bg-gray-200 rounded-tl-2xl rounded-tr-2xl relative transition-all -ml-4 duration-200
              ${
                activeTab === tab
                  ? "z-30 bg-[#c1dbe8]"
                  : `z-${30 - (index + 1) * 10}`
              } ${activeTab === tab ? "" : "shadow-md"} ${
                  index > 0 ? "-ml-2" : ""
                }`}
              >
                <div className="flex justify-center items-center h-full">
                  <p className="text-[#43302e] font-medium text-sm lg:text-base">
                    {tab}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* tabs for mobile */}

          <div className="md:hidden mb-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap
                    ${
                      activeTab === tab
                        ? "bg-[#c1dbe8] text-[#43302e]"
                        : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* FOLDER BODY */}
          <div
            onScroll={handleScroll}
            className="w-full h-160 sm:h-150 md:h-145 ld:h-140 bg-gray-200 rounded-xl rounded-tr-xl md:rounded-b-xl md:rounded-tl-2xl shadow-lg p-4 lg:p-8 overflow-y-scroll"
          >
            {/* PROJECT CONTENT */}
            <div className="space-y-4 sm:space-y-6">
              {/* project title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#43302e]">
                {currentProject.title}
              </h2>

              {/* screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentProject.screenshot &&
                currentProject.screenshot.length > 0 ? (
                  currentProject.screenshot.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${currentProject.title} screenshot ${index + 1}`}
                      className="sm:w-full h-55 sm:h-70 sm:object-fit rounded-lg border-2 border-gray-300"
                    />
                  ))
                ) : (
                  <>
                    <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400">Coming Soon</span>
                    </div>
                    <div className="bg-white rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400">Coming Soon</span>
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
            <div className="absolute sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-[#43302e] opacity-50" size={32} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
