import PortfolioNavItem from "./portfolioNavItem";

const portfolioItems = [
  {
    name: "Reqbro",
    description:
      "A command line tool developed to query a free tier Render.com app every 14 minutes in order to prevent the server from spinning down 😉.",
  },
  {
    name: "Golf Course Ranker",
    description:
      "A MERN Stack project that allows users to rank and manage their favorite golf courses.",
  },
  {
    name: "Shopify Development",
    description:
      "Throughout my career I've developed, worked on, improved, and maintained a number of Shopify apps, storefronts, and micorservices.  Here's some examples.",
  },
];

export default function HorizontalNav(props: {
  active: string;
  setActive: Function;
}) {
  return (
    <div>
      {portfolioItems.map((item) => (
        <PortfolioNavItem
          active={props.active}
          setActive={props.setActive}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
}
