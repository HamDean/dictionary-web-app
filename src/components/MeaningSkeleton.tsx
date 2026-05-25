const MeaningSkeleton = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => (
        <section key={index} className="mt-14 animate-pulse">
          {/* Part of speech heading */}
          <div className="flex justify-between items-center gap-2.5 mb-10">
            <div className="skeleton h-6 w-24 md:h-8 md:w-32" />
            <hr className="text-[#E9E9E9] w-full mt-0.5" />
          </div>

          {/* Meaning label */}
          <div className="skeleton h-5 w-20 mb-6" />

          {/* Definitions */}
          <ul className="flex flex-col gap-4 mb-6">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#8F19E8] mt-3 shrink-0" />
                <div className="skeleton h-5 w-full" />
              </li>
            ))}
          </ul>

          {/* Synonyms */}
          <div className="flex gap-6 mb-6">
            <div className="skeleton h-5 w-20" />
            <div className="flex gap-2 flex-wrap">
              <div className="skeleton h-5 w-16" />
              <div className="skeleton h-5 w-20" />
              <div className="skeleton h-5 w-14" />
            </div>
          </div>

          {/* Example */}
          <div className="skeleton h-5 w-3/4" />
        </section>
      ))}
    </>
  );
};

export default MeaningSkeleton;