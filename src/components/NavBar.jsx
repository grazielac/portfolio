export default function NavBar() {
  return (
    <header
      className="
      top-0
      flex justify-between
      text-sm items-center 
      p-4
    bg-amber-100"
    >
      {/*left: logo */}
      <div>
        <h1 className="text-xl font-bold">Welcome to my Portfolio</h1>
      </div>

      {/*left: links */}
      <div>
        <nav>
          <a href="#" className="hover:underline mr-4">
            Home
          </a>
          <a href="#about" className="hover:underline mr-4">
            About
          </a>
          <a href="#projects" className="hover:underline mr-4">
            Projects
          </a>
          <a href="#contact" className="hover:underline mr-4">
            Contact
          </a>
          <a href="./resume.pdf" target="blank" className="hover:underline mr-4">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
