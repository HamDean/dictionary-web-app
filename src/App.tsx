import Definitions from "./components/Definitions";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Source from "./components/Source";
import WordHeader from "./components/WordHeader";
import useDefinitions from "./hooks/useDefinitions";

const App = () => {
  const { definition, setWord } = useDefinitions();

  // TODO: handle initial load and error states

  return (
    <div className="container">
      <NavBar />
      <main className="mt-6 md:mt-14">
        <SearchBar onSearch={(word) => setWord(word)} />
        <WordHeader
          word={definition[0]?.word}
          phonetic={definition[0]?.phonetic}
          audioSources={definition[0]?.phonetics}
        />
        <Definitions meanings={definition[0]?.meanings || []} />
        <hr className="text-[#E9E9E9] mt-12 mb-5" />
      </main>
      <footer>
        <Source source={definition[0]?.sourceUrls[0]} />
      </footer>
    </div>
  );
};
export default App;
