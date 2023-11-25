function HeaderGame({ score }) {
  return (
    <header className="flex justify-between  py-5 border-[4px] rounded-lg font-bold text-center max-w-[900px] m-auto px-4 border-white/20 text-white">
      <div className="flex flex-col gap-1 text-4xl font-bold text-left font-barlow">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="px-2 pt-4 items-center flex flex-col text-6xl text-center text-black/80 bg-white max-w-[150px] w-full rounded-lg shadow-sm shadow-black">
        <p className="text-base text-scoreText">SCORE</p>
        <p className="px-5">{score}</p>
      </div>
    </header>
  );
}

export default HeaderGame;
