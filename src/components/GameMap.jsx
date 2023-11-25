import { gameOptions } from "../Game";

function GameMap({ showGame, disable, handlePlay }) {
  return (
    <div
      className={` ${
        showGame ? "text-white scale-100" : "scale-0"
      }  flex items-center m-auto mt-10 justify-evenly gap-14 max-w-[420px] w-full flex-wrap bg-no-repeat bg-center bg-triangulo transition duration-200 delay-75`}>
      {gameOptions.map((game) => (
        <div key={game.id}>
          <button
            disabled={disable}
            onClick={() => handlePlay(game.id)}
            className={`flex flex-wrap items-center cursor-pointer justify-center gap-4 px-4 py-4 rounded-full ${game.styles}`}
            key={game.id}>
            <div className="px-3 py-3 bg-white rounded-full shadow-inner min-w-[120px] min-h-[120px] flex justify-center items-center shadow-black">
              {game.img}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameMap;
