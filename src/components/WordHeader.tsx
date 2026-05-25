import playButton from "../assets/images/play-button.svg";

interface Props {
  audioSources?: { audio: string }[];
  word: string;
  phonetic: string;
}

const WordHeader = ({ audioSources, word, phonetic }: Props) => {
  const playPronunciation = () => {
    for (const source of audioSources || []) {
      if (source.audio) {
        const audio = new Audio(source.audio);
        audio.play();
        break;
      }
    }
  };

  return (
    <section className="flex justify-between items-center mt-7">
      <div>
        <h1 className="text-4xl md:text-[64px] font-bold">{word}</h1>
        <span className="text-[#A445ED] mt-2 text-[18px] md:text-2xl">
          {phonetic}
        </span>
      </div>

      <img
        src={playButton}
        alt="Play pronunciation"
        className="w-12 h-12 md:h-18.75 md:w-18.75 cursor-pointer"
        onClick={playPronunciation}
      />
    </section>
  );
};
export default WordHeader;
