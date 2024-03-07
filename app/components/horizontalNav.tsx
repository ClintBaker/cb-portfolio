import PortfolioNavItem from "./portfolioNavItem";

interface portfolioItem {
  description: string;
  name: string;
}

export default function HorizontalNav(props: {
  active: string;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return (
    <div>
      {props.portfolioItems.map((item) => (
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
