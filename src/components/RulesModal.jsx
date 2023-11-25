function RulesModal({ closeRules, rules, handleRules }) {
  return (
    <>
      <div
        className={` ${
          rules
            ? "transition-transform duration-200 delay-75 shadow-md shadow-black/50 flex"
            : "scale-0 transition-transform duration-200"
        } absolute px-4 pt-10 bg-white bottom-1/4 rounded-xl font-bold font-barlow max-w-[300px] md:max-w-[460px] items-center justify-center`}>
        <div className="flex flex-col items-center gap-6 px-4">
          <div className="flex items-center justify-between w-full gap-10">
            <p className="text-2xl font-bold text-darkText">RULES</p>
            <div className="max-w-[30px]">
              <button
                onClick={() => closeRules(false)}
                className="px-2 py-2 bg-gray-200 rounded-full">
                ❌
              </button>
            </div>
          </div>

          <div className="bg-contain bg-no-repeat bg-reglas  min-w-[222px] min-h-[222px] md:min-w-[300px] md:min-h-[300px]"></div>
        </div>
      </div>

      <div className="flex justify-end w-full px-4 pb-4 font-bold font-barlow">
        <button
          className="border-[1px] px-7 py-2 rounded-lg text-white font-bold hover:bg-gray-400/20"
          onClick={() => handleRules()}>
          RULES
        </button>
      </div>
    </>
  );
}

export default RulesModal;
