import SmallNavItem from "./smallNavItem";

interface portfolioItem {
  description: string;
  name: string;
}

export default function SmallNav(props: {
  active: string;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return (
    <div>
      <div>
        {props.portfolioItems.map((item) => (
          <SmallNavItem
            active={props.active}
            setActive={props.setActive}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
