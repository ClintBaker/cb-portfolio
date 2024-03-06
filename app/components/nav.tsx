import Avatar from "./avatar";

export default function Navi() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          <div className="flex items-center">
            <div>
              <Avatar src="./assets/cb.jpeg" alt="Clint Baker" />
            </div>
            <div className="ml-2">Clint Baker</div>
          </div>
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:bg-blue-700 p-2 rounded">
            Home
          </a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">
            About
          </a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">
            Services
          </a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
