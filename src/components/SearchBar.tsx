import searchIcon from "../assets/search-icon.svg";
const SearchBar = () => {
  return (
    <label className="input py-3.5 px-6 md:w-full border-none rounded-2xl outline-none h-12 md:h-16 bg-[#F4F4F4]">
      <input type="text" required placeholder="Search for any word..." />
      <img src={searchIcon} />
    </label>
  );
};
export default SearchBar;
