import Skills from "./skills";
import Workx from "./workx";

const profilePicUrl = "https://via.placeholder.com/150";

const About = () => {
  return (
    <div className="py-16 bg-white rounded-[40px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
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

          <div className="mt-6 grid grid-cols-12 gap-3">
            <Workx />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
