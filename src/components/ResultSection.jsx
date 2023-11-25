import { gameOptions } from "../Game";

function ResultSection({
  visibleModal,
  userChoice,
  machineChoice,
  userImage,
  winnerMessage,
  loserMessage,
  machineImage,
  result,
  empate,
  resetGame,
}) {
  console.log(machineImage);
  return (
    <div>
      <div
        className={` ${
          visibleModal
            ? "text-white scale-100 absolute top-0 bottom-10 left-0 right-0  transition-transform duration-200 delay-75"
            : "scale-0"
        }   rounded-xl  flex flex-col text-center gap-8 items-center justify-center  font-bold font-barlow`}>
        <div className="flex items-center justify-center w-full gap-10 py-10 m-auto">
          <div>
            <div className="flex flex-col pb-5 text-2xl">Your Pick:</div>
            {userChoice !== null && (
              <div
                className={`flex items-center justify-center gap-4 px-4 py-4 rounded-full ${userImage.styles}`}>
                <div
                  className={`px-3 py-3 bg-white rounded-full shadow-inner min-w-[120px] min-h-[120px] flex justify-center items-center shadow-black`}>
                  {userImage.img}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="items-center font-bold text-center rounded-xl [&>p]:text-4xl">
              {winnerMessage && <p>{winnerMessage}</p>}
              {loserMessage && <p>{loserMessage}</p>}
              {empate !== null && <p>{empate}</p>}
            </div>

            <div className=" [&>button]:w-[250px] [&>button]:bg-white [&>button]:hover:bg-gray-200 [&>button]:py-4 [&>button]:px-3 [&>button]:rounded-lg [&>button]:text-red-400 [&>button]:font-bold [&>button]:shadow-md [&>button]:shadow-gray-800">
              {result !== null && <button onClick={() => resetGame()}>PLAY AGAIN</button>}
              {empate !== null && <button onClick={() => resetGame()}>PLAY AGAIN</button>}
            </div>
          </div>
          <div>
            <div className="flex flex-col pb-5 text-2xl font-bold">House Pick:</div>
            {machineChoice !== null && (
              <div
                className={`flex items-center justify-center gap-4 px-4 py-4 rounded-full ${machineImage.styles} hover:bg-none`}>
                <div
                  className={`px-3 py-3 bg-white rounded-full shadow-inner min-w-[120px] min-h-[120px] flex justify-center items-center shadow-black`}>
                  {machineImage.img}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
