import { useState } from "react";
import downArrow from "../assets/images/down-arrow.svg";

const FontSelector = () => {
  const [showFonts, setShowFonts] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const fonts = ["Sans Serif", "Serif", "Mono"];

  return (
    <div className="font-selector">
      <div
        onClick={() => setShowFonts(!showFonts)}
        className="font-selector-headear"
      >
        <span>{selectedFont}</span> <img src={downArrow} />
      </div>

      {showFonts && (
        <ul>
          {fonts.map((font, index) => (
            <li
              onClick={() => {
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
