const activeClass =
  "text-blue-600 cursor-pointer bg-white rounded-3xl font-semibold px-3 py-2 mx-1";
const inactiveClass =
  "px-3 py-2 cursor-pointer hover:bg-blue-400 hover:rounded-3xl mx-1";

export default function SmallNavItem(props: {
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
    <button
      onClick={handleClick}
      className={props.active === props.name ? activeClass : inactiveClass}
    >
      {name}
    </button>
  );
}
