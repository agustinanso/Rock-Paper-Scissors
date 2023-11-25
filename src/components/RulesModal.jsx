function RulesModal({ closeRules, rules, handleRules }) {
  return (
    <>
      <div
        className={` ${
          rules
            ? "transition-transform duration-200 delay-75 shadow-md shadow-black/50"
            : "scale-0 transition-transform duration-200"
        } absolute px-4 pt-10 bg-white bottom-1/4 rounded-xl font-bold font-barlow`}>
        <div className="flex items-center justify-between px-4">
          <p className="text-2xl font-bold text-darkText">RULES</p>
          <div className="max-w-[30px]">
            <button
              onClick={() => closeRules(false)}
              className="px-2 py-2 bg-gray-200 rounded-full">
              ❌
            </button>
          </div>
        </div>

        <div className="relative  bg-center bg-no-repeat bg-reglas  w-[400px] h-[400px]"></div>
      </div>

      <div className="flex justify-end w-full px-4 py-4 font-bold font-barlow">
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
