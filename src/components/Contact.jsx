export default function Contact() {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="relative w-full h-full mx-auto flex justify-center items-center">
            <div className="absolute w-full h-3/4 bg-amber-200 rounded-b-lg shadow-lg z-10"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-400 transform origin-top transition-transform duration-500 z-20"></div>

            <div className="absolute top-16 left-0 w-full px-6">
                <form className="flex flex-col space-y-4">
                    <input type="text" placeholder="Name" className="p-2 rounded border" />
                    <input type="email" placeholder="Email" className="p-2 rounded border" />

                </form>
            </div>
        </div>
      </div>
    </>
  );
}
