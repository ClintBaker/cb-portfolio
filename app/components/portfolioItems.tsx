interface portfolioItem {
  description: string;
  name: string;
}

const profilePicUrl = "https://via.placeholder.com/800x500";

export default function PortfolioItems(props: {
  active: any;
  setActive: Function;
  portfolioItems: Array<portfolioItem>;
}) {
  return (
    <div>
      <img
        src={props.active.imgUrl}
        alt="alt"
        className="rounded-lg object-cover"
      />
    </div>
  );
}
