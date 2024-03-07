import { useState } from "react";
import HorizontalNav from "./horizontalNav";
import PortfolioItem from "./portfolioItem";
import PortfolioItems from "./portfolioItems";
const Portfolio = () => {
  const [active, setActive] = useState("Reqbro");
  return (
    <div className="py-16 flex flex-col justify-center items-center mx-auto px-0 bg-blue-600 text-white">
      <div className="container mx-auto px-0">
        <div className="text-center">
          <h2 className=" text-4xl">Portfolio</h2>
          <p className="mt-4">Take a look at some of my work.</p>
        </div>
        <div className="grid grid-cols-12 gap-0 mt-8">
          <div className="col-span-12 md:col-span-4">
            <HorizontalNav active={active} setActive={setActive} />
          </div>
          <div className="col-span-12 md:col-span-8 bg-slate-400">
            <PortfolioItems active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
