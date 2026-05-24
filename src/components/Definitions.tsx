import type { Meaning } from "../hooks/useDefinitions";

const Definitions = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <>
      {meanings.map((meaning: Meaning, index: number) => (
        <section key={index} className="mt-14">
          <div className="flex justify-between items-center gap-2.5 mb-10">
            <h2 className="text-lg md:text-2xl font-bold">
              {meaning.partOfSpeech}
            </h2>
            <hr className="text-[#E9E9E9] w-full mt-0.5" />
          </div>

          <span className="text-[#757575] text-[16px] mb-6 block">Meaning</span>
          <ul className="list-disc marker:text-[#8F19E8] text-[#2D2D2D] text-[15px] md:text-xl flex flex-col gap-3 mb-6">
            {meaning.definitions.map((def, defIndex) => (
              <li key={defIndex}>{def.definition}</li>
            ))}
          </ul>

          {meaning.synonyms.length > 0 && (
            <div className="flex gap-6">
              <span className="text-[#757575] text-[16px] ">Synonyms</span>
              <div className="text-[#A445ED] font-semibold flex gap-2 flex-wrap">
                {meaning.synonyms.map((synonym, synIndex) => (
                  <span key={synIndex}>{synonym}</span>
                ))}
              </div>
            </div>
          )}

          {(() => {
            const firstWithExample = meaning.definitions.find((d) => d.example);
            return firstWithExample ? (
              <p className="text-[#757575] text-[15px] md:text-xl">{`"${firstWithExample.example}"`}</p>
            ) : null;
          })()}
        </section>
      ))}
    </>
  );
};

export default Definitions;
