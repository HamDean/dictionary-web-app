import { useState } from "react";
import downArrow from "../assets/images/down-arrow.svg";

interface Props {
  onSelectFont?: (font: string) => void;
}

const FontSelector = ({ onSelectFont }: Props) => {
  const [showFonts, setShowFonts] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const fonts = ["Sans Serif", "Serif", "Mono"];

  return (
    <div className="font-selector ">
      <div
        onClick={() => setShowFonts(!showFonts)}
        className="font-selector-headear"
      >
        <span>{selectedFont}</span> <img src={downArrow} />
      </div>

      {showFonts && (
        <ul
          className="absolute z-10000000 opacity-100 bg-white dark:bg-[#1F1F1F] 
        dark:text-white"
        >
          {fonts.map((font, index) => (
            <li
              onClick={() => {
                onSelectFont?.(font);
                setSelectedFont(font);
                setShowFonts(false);
              }}
              key={index}
            >
              {font}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FontSelector;
