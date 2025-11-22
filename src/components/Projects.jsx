import { projects } from "../data";

function Projects() {
  return (
    <>
      <section id="Projects" className="h-screen mt-10 py-16 ">
        <div>
          <div className="flex justify-center items-center ">
            <h1 className="text-2xl md:text-4xl">Projects</h1>
          </div>

          <div className="flex mt-10 bg-red-100">
            {/* PLACEHOLDER IMAGE */}
            <div className="ml-24 mr-24 flex gap-12 flex-col md:flex-cols-2 lg:flex-row">
              {projects.map((project) => (
                <div>
                  {/* placeholder */}
                  <div className="relative w-fit shadow-lg md:hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* gray cover */}
                    <div className="bg-[#E7E5DC] w-full h-18 top-70 absolute"></div>

                    {/* note */}

                    <p
                      className="
                  text-[#730C04] absolute top-76 left-16 text-sm"
                      style={{ fontFamily: "Permanent Marker, sans" }}
                    >
                      {project.note}
                    </p>
                    {/* bottom */}
                    <img
                      src="/polaroid.jpg"
                      alt="polaroid"
                      className="rounded-xs flex justify-center w-full h-full object-cover"
                    />
                    {/* top */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-4 pl-3 pr-3 rounded-md"
                    />
                    {/* tape */}
                    <img
                      src="/tape3.png"
                      alt="tape"
                      className="absolute top-0 translate-y- translate-x-30 w-24 md:w-32"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-2 mt-8">
                    <h1 className="text-2xl">{project.title}</h1>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="bg-[#DCDCDC] px-3 rounded-full text-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="mt-2">{project.description}</div>
                      <div className="mt-4">
                        <p style={{ fontFamily: "Inter" }} className="font-medium">{project.type} • {project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
