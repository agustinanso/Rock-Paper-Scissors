import { gameOptions } from "../Game";
import ButtonPlay from "./ButtonPlay";

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
            ? "text-white scale-100 absolute  top-0 bottom-10 left-0 right-0 transition-transform duration-200 delay-75"
            : "scale-0 "
        }   rounded-xl text-center flex gap-8 items-center justify-center font-bold font-barlow pt-10 `}>
        <div className="flex flex-col items-center justify-center w-full gap-10 m-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 m-auto md:gap-16 ">
            <div className="flex flex-col gap-4 pb-5 text-2xl">
              Your Pick:
              {userChoice !== null && (
                <div
                  className={`items-center flex justify-center px-4 py-4 rounded-full ${userImage.styles} `}>
                  <div
                    className={`px-4 py-4 bg-white rounded-full  min-w-[110px] min-h-[110px] flex justify-center items-center shadow-[inset_0px_10px_2px_0px_#00000024]`}>
                    {userImage.img}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center font-bold text-center rounded-xl [&>p]:text-4xl order-3 sm:order-none gap-4">
              {winnerMessage && <p>{winnerMessage}</p>}
              {loserMessage && <p>{loserMessage}</p>}
              {empate !== null && <p>{empate}</p>}

              {result !== null && <ButtonPlay resetGame={resetGame} />}
              {empate !== null && <ButtonPlay resetGame={resetGame} />}
            </div>

            <div className="flex flex-col gap-4 pb-5 text-2xl font-bold">
              House Pick:
              {machineChoice !== null && (
                <div
                  className={`flex items-center justify-center  px-4 py-4 rounded-full ${machineImage.styles} hover:bg-none`}>
                  <div
                    className={`px-4 py-4 bg-white rounded-full shadow-[inset_0px_10px_2px_0px_#00000024] min-w-[110px] min-h-[110px] flex justify-center items-center `}>
                    {machineImage.img}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
