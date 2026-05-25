import frownIcon from "../assets/images/frown.svg";

const WordNotFound = () => {
  return (
    <section className="flex flex-col items-center text-center mt-28">
      <img src={frownIcon} alt="Frown Icon" className="w-51.5 h-16 mb-12" />
      <h2 className="text-xl font-semibold text-[#2D2D2D] mb-5 dark:text-white">No Definitions Found</h2>
      <p className="text-[#757575] text-lg">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </section>
  );
};
export default WordNotFound;
