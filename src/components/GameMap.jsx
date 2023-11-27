import { gameOptions } from "../Game";

function GameMap({ showGame, disable, handlePlay }) {
  return (
    <div
      className={` ${
        showGame ? "text-white scale-100" : "scale-0"
      }  flex items-center  m-auto justify-around gap-14 max-w-[400px]  w-full flex-wrap bg-no-repeat  bg-center bg-triangulo transition duration-200 delay-75`}>
      {gameOptions.map((game) => (
        <div key={game.id}>
          <button
            disabled={disable}
            onClick={() => handlePlay(game.id)}
            className={`flex flex-wrap items-center cursor-pointer justify-center gap-4 px-4 py-4 rounded-full ${game.styles} `}
            key={game.id}>
            <div className="px-3 py-3 bg-white rounded-full shadow-[inset_0px_10px_2px_0px_#00000024] min-w-[85px] min-h-[85px] sm:min-w-[120px] sm:min-h-[120px] flex justify-center items-center ">
              {game.img}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameMap;
