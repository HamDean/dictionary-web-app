import searchIcon from "../assets/search-icon.svg";

interface Props {
  onSearch: (word: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const handleSubmit = (formdata: FormData) => {
    onSearch(formdata.get("word") as string);
  };

  return (
    <form action={handleSubmit}>
      <label className="input py-3.5 px-6 md:w-full border-none rounded-2xl outline-none h-12 md:h-16 bg-[#F4F4F4]">
        <input
          name="word"
          type="text"
          required
          placeholder="Search for any word..."
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </label>
    </form>
  );
};
export default SearchBar;
