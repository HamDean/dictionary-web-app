import linkIcon from "../assets/images/link.svg";

const Source = ({ source }: { source: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-0.5 md:gap-5 text-[14px] md:text-xl">
      <p className="text-[#757575] underline">Source</p>
      <span className="text-[#2D2D2D] dark:text-white underline flex items-center gap-2.5">
        <a href={source} target="_blank" rel="noopener noreferrer">
          {source}
        </a>
        <img className="h-3 w-3" src={linkIcon} alt="Link" />
      </span>
    </div>
  );
};
export default Source;
