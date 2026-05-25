import searchIcon from "../assets/images/search-icon.svg";

interface Props {
  onSearch: (word: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const handleSubmit = (formdata: FormData) => {
    onSearch(formdata.get("word") as string);
  };

  return (
    <form action={handleSubmit} className="mt-6 md:mt-14 mb-6 md:mb-12">
      <label className="input font-semibold dark:bg-[#1F1F1F] py-3.5 px-6 md:w-full border-none rounded-2xl focus-within:outline-[#A445ED] focus-within:outline-1 h-12 md:h-16 bg-[#F4F4F4]">
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
