import logo from "../assets/Logo.svg";
import FontSelector from "./FontSelector";
import Toggle from "./Toggle";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} />{" "}
      </div>

      <div className="flex gap-6">
        <FontSelector />
        <Toggle />
      </div>
    </nav>
  );
};
export default NavBar;
