import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import useDefinitions from "./hooks/useDefinitions";

const App = () => {
  const { error } = useDefinitions();
  
  return (
    <div className="container">
      <NavBar />
      <main className="mt-6 md:mt-14">
        <SearchBar />
        <p>{error}</p>
      </main>
    </div>
  );
};
export default App;
