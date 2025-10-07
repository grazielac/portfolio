export default function NavBar() {
    return (
      <div className="flex justify-between bg-amber-100">
        <div className="bg-amber-200">
            <h1>Welcome to my Portfolio</h1>
        </div>
        <nav>
            <a href="#" className="text-semibold">Home</a>
            <a href="#" className="text-semibold">About</a>
            <a href="#" className="text-semibold">Projects</a>
            <a href="#" className="text-semibold">Contact</a>


        </nav>
      </div>
    );
}