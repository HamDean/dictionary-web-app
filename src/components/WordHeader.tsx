import playButton from "../assets/play-button.svg";

interface Props {
    audioSource: string;
    word: string;
    phonetic: string;
}

const WordHeader = ({ audioSource, word, phonetic }: Props) => {
  const playPronunciation = () => {
    const audio = new Audio(audioSource);
    audio.play();
  };

  return (
    <section className="flex justify-between items-center mt-7">
      <div>
        <h1 className="text-4xl md:text-[64px] font-bold">{word}</h1>
        <span className="text-[#A445ED] mt-2 text-[18px] md:text-2xl">{phonetic}</span>
      </div>

      <img
        src={playButton}
        alt="Play pronunciation"
        className="w-12 h-12 cursor-pointer"
        onClick={playPronunciation}
      />
    </section>
  );
};
export default WordHeader;
