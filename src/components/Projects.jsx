import { projects } from "../data";

function Projects() {
  return (
    <>
      <section id="Projects" className="h-screen mt-10">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl">Projects</h1>
          </div>

          <div className="flex mt-10 ml-8 mr-8 xl:ml-24 xl:mr-24">
            {/* PLACEHOLDER IMAGE */}
            <div className="flex gap-12 flex-col md:flex-cols-2 lg:flex-row">
              {projects.map((project) => (
                <div>
                  {/* PLACEHOLDER PHOTO */}
                  <div className="relative w-full max-w-sm shadow-lg md:hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* gray cover */}
                    <div className="bg-[#E7E5DC] w-full h-16 xl:h-20 top-68 xl:top-70 absolute"></div>
                    {/* note */}
                    <p
                      className="
                  text-[#730C04] absolute top-70 xl:top-72 left-16 text-sm xl:left-10 xl:text-lg mt-4"
                      style={{ fontFamily: "Permanent Marker, sans" }}
                    >
                      {project.note}
                    </p>

                    {/* bottom */}
                    <img
                      src="/polaroid.jpg"
                      alt="polaroid"
                      className="rounded-xs flex justify-center w-full h-auto object-cover"
                    />
                    {/* top */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-4 pl-3 pr-3 xl:h-66"
                    />
                    {/* tape */}
                    <img
                      src="/tape3.png"
                      alt="tape"
                      className="absolute top-0 translate-x-30 w-28 md:w-36 md:translate-x-40 xl:translate-x-30 xl:w-32"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-2 mt-4 xl:mt-8">
                    <h1 className="text-2xl">{project.title}</h1>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 pl-2">
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="bg-[#DCDCDC] px-3 rounded-full text-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                      <div className="mt-2">{project.description}</div>
                      <div className="mt-2">
                        <p
                          style={{ fontFamily: "Inter" }}
                          className="font-medium"
                        >
                          {project.type} • {project.date}
                        </p>
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
