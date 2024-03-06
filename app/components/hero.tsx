export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 text-black text-center p-10 lg:p-20">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Hey, my name is Clint Baker
        </h1>
        <p className="text-xl mb-8">I'm a full stack software developer.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Let's talk about me
        </button>
      </div>
    </div>
  );
}
