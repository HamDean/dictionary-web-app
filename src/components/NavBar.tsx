import logo from "../assets/Logo.svg";
import FontSelector from "./FontSelector";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} />{" "}
      </div>

      <div>
        <FontSelector />
        <div></div>
      </div>
    </nav>
  );
};
export default NavBar;
