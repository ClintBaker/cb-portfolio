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
        <div className="flex space-x-4">
          <a
            href="javascript:document.getElementById('about').scrollIntoView(true);"
            className="hover:bg-blue-700 p-2 rounded"
          >
            About
          </a>
          <a
            href="javascript:document.getElementById('portfolio').scrollIntoView(true);"
            className="hover:bg-blue-700 p-2 rounded"
          >
            Portfolio
          </a>
          <a
            href="javascript:document.getElementById('contact').scrollIntoView(true);"
            className="hover:bg-blue-700 p-2 rounded"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
