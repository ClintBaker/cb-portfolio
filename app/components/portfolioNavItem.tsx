const activeClass =
  "cursor-pointer bg-blue-400 bg-opacity-45 rounded-lg p-4 border-[1px] border-blue-400";
const inactiveClass =
  "p-4 cursor-pointer hover:bg-blue-500 hover:bg-opacity-45 hover:rounded-lg";

export default function portfolioNavItem(props: {
  name: string;
  description: string;
  active: string;
  setActive: Function;
}) {
  const { name, description } = props;

  function handleClick() {
    props.setActive(props.name);
  }
  return (
    <div
      onClick={handleClick}
      className={props.active === props.name ? activeClass : inactiveClass}
    >
      <h4 className="text-xl">{name}</h4>
      <p className="mt-4 text-sm">{description}</p>
    </div>
  );
}
