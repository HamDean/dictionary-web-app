import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <main className="mt-6 md:mt-14">
        <SearchBar />
      </main>
    </div>
  );
};
export default App;
