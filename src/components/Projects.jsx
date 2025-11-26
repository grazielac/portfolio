import { projects } from "../data";

function Projects() {
  return (
    <>
      <section id="Projects" className="min-h-screen mt-12">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl">Projects</h1>
          </div>

          <div className="mt-10 px-6 xl:px-24">
            {/* PLACEHOLDER IMAGE */}
            <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
              {projects.map((project) => (
                <div className="w-full max-w-sm">
                  {/* PLACEHOLDER PHOTO */}
                  <div className="relative w-full max-w-sm shadow-lg md:hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* gray cover */}
                    <div className="bg-[#E7E5DC] w-full h-16 xl:h-20 absolute top-68 xl:top-70 "></div>
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
                      className="w-full h-auto object-cover"
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
                    <div
                      className="flex flex-wrap gap-2 
                    "
                    >
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="bg-[#DCDCDC] px-3 rounded-full text-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
