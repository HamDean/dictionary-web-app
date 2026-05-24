import logo from "../assets/images/Logo.svg";
import FontSelector from "./FontSelector";
import Toggle from "./Toggle";
import moon from "../assets/images/moon.svg";

interface Props {
  onSelectFont: (font: string) => void;
}

const NavBar = ({ onSelectFont }: Props) => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} />{" "}
      </div>

      <div className="flex gap-4 md:gap-6">
        <FontSelector onSelectFont={(font) => onSelectFont(font)} />
        <div className="flex gap-2">
          <Toggle />
          <img src={moon} className="h-5 self-center" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
