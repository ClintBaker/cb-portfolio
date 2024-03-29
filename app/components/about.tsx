import { Link } from "@remix-run/react";
import Attributes from "./attributes";
import Skills from "./skills";
import Workx from "./workx";

const About = () => {
  return (
    <div id="about" className="py-24 bg-white rounded-t-[40px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About me</h2>
          <p className="text-xl text-blue-600">
            A little more about who I am and what I do.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg">
            I've developed many Shopify websites, apps, and microservices, to
            drive ecommerce operations and analysis for multiple entities, and
            ultimately facilitated the sale of $7M+ in digital revenue annually.
            Always seeking personal growth, I expanded my coding acumen through
            a 1,000+ hour coding Bootcamp focused on Javascript, where I was
            invited to return as a teaching assistant. I am now eager to tackle
            more complex challenges and continue to find ways to build
            Javascript solutions for real-world problems.
          </p>

          <div className="mt-8 grid grid-cols-12 gap-3 h-fit">
            <div className="rounded-lg col-span-12 md:col-span-8 p-4 md:p-4  text-black">
              <Workx />
            </div>

            <div className="flex flex-col justify-between col-span-12 md:col-span-4 h-full">
              <Skills />
              <Attributes />
            </div>
          </div>
        </div>
        <Link to="assets/clint-baker-resume.pdf" target="_blank">
          <div className="mt-12 flex justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Download my resume
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
