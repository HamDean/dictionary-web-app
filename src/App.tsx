import { useState } from "react";
import Definitions from "./components/Definitions";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Source from "./components/Source";
import WordHeader from "./components/WordHeader";
import useDefinitions from "./hooks/useDefinitions";
import WordNotFound from "./components/WordNotFound";

const App = () => {
  const { definition, setWord, error } = useDefinitions();
  const [font, setFont] = useState("Sans Serif");
  const isLoaded = definition[0]?.meanings?.length > 0;
  const fontClass =
    font === "Sans Serif"
      ? "font-inter"
      : font === "Serif"
        ? "font-lora"
        : "font-inconsolata";

  return (
    <div className={`container ${fontClass}`}>
      <NavBar onSelectFont={(font) => setFont(font)} />
      <SearchBar onSearch={(word) => setWord(word)} />
      {error ? (
        <WordNotFound />
      ) : (
        <>
          <main className="">
            {isLoaded && (
              <WordHeader
                word={definition[0]?.word}
                phonetic={definition[0]?.phonetic}
                audioSources={definition[0]?.phonetics}
              />
            )}
            <Definitions meanings={definition[0]?.meanings || []} />
            {isLoaded && <hr className="text-[#E9E9E9] mt-12 mb-5" />}
          </main>
          <footer>
            {isLoaded && <Source source={definition[0]?.sourceUrls[0]} />}
          </footer>
        </>
      )}
    </div>
  );
};
export default App;
