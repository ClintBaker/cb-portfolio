interface portfolioItem {
  description: string;
  name: string;
}

export default function PortfolioItems(props: {
  active: any;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return <div>HERE WE ARE</div>;
}
