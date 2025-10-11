export default function Footer() {
  return (
    <footer className="bg-[#4B2914] h-[250px] flex flex-col justify-center rounded-tl-3xl rounded-tr-3xl">
      <div className="max-w-6xl px-4">
        <div className="flex space-x-4 mt-3 text-[#FFFBF0]">
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
          <a
            href="./resume.pdf"
            target="blank"
            className="hover:underline mr-4"
          >
            Resume
          </a>
        </div>
        <p className="text-sm mt-4 text-[#FFFBF0]">
          &copy; {new Date().getFullYear()} Graziela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
