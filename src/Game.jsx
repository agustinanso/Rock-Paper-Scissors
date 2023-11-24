import { useState, useEffect } from "react";
import Rocksvg from "./components/Rocksvg";
import Papersvg from "./components/Papersvg";
import Scissors from "./components/Scissors";

const gameOptions = [
  {
    id: 0,
    name: "Piedra",
    beat: 2,
    img: <Rocksvg />,
    styles: "bg-red-500 hover:bg-red-400 disabled:bg-gray-400",
  },
  {
    id: 1,
    name: "Tijera",
    beat: 0,
    img: <Scissors />,
    styles: "bg-blue-500 hover:bg-blue-400 disabled:bg-gray-400",
  },
  {
    id: 2,
    name: "Papel",
    beat: 1,
    img: <Papersvg />,
    styles: "bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-400",
  },
];

function Game() {
  const [userChoice, setUserChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [loserMessage, setLoserMessage] = useState(null);
  const [userImage, setUserImage] = useState({ img: null, styles: null });
  const [machineImage, setMachineImage] = useState({ img: null, styles: null });
  const [empate, setEmpate] = useState(null);
  const [result, setResult] = useState(null);
  const [disable, setDisable] = useState(null);
  const [showGame, setShowGame] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);

  const handlePlay = (pick) => {
    setUserChoice(pick);
    const randomPick = Math.floor(Math.random() * 3);
    setMachineChoice(randomPick);
    setShowGame(false);
    setDisable(true);
    setVisibleModal(true);
  };

  useEffect(() => {
    if (userChoice !== null) {
      setUserImage({
        img: gameOptions[userChoice].img,
        styles: gameOptions[userChoice].styles,
      });
    }
  }, [userChoice]);

  useEffect(() => {
    if (machineChoice !== null) {
      setMachineImage({
        img: gameOptions[machineChoice].img,
        styles: gameOptions[machineChoice].styles,
      });
    }
  }, [machineChoice]);

  useEffect(() => {
    if (userChoice !== null && machineChoice !== null) {
      const userOption = gameOptions[userChoice];
      const machineOption = gameOptions[machineChoice];

      if (userOption.beat === machineOption.id) {
        setResult(machineOption);
        setLoserMessage("YOU LOSE");
      } else if (machineOption.beat === userOption.id) {
        setResult(userOption);
        setWinnerMessage("YOU WIN");
      } else {
        setEmpate("TIE");
      }
    }
  }, [userChoice, machineChoice]);

  const resetGame = () => {
    setEmpate(null);
    setMachineChoice(null);
    setResult(null);
    setUserChoice(null);
    setDisable(false);
    setUserImage({ img: null, styles: null });
    setMachineImage({ img: null, styles: null });
    setVisibleModal(false);
    setShowGame(true);
    setWinnerMessage(null);
    setLoserMessage(null);
  };

  return (
    <div>
      <section className="flex flex-col items-center h-screen m-auto bg-slate-800">
        {/* JUEGO */}
        <div className="w-full h-screen pt-10 ">
          <div className="flex justify-between py-5 border-[4px] rounded-lg text-4xl font-bold text-center max-w-[900px] m-auto px-4 border-white/20 text-white">
            <div className="flex flex-col gap-1 text-left">
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
            </div>
            <div className="text-center">
              <p>SCORE</p>
            </div>
          </div>

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

          {/* MODAL */}
          <div
            className={` ${
              visibleModal
                ? "text-white scale-100 absolute top-0 bottom-10 left-0 right-0  transition-transform duration-200 delay-75"
                : "scale-0"
            }   rounded-xl  flex flex-col text-center gap-8 items-center justify-center`}>
            <div className="flex items-center justify-center w-full gap-10 py-10 m-auto">
              <div>
                <div className="flex flex-col pb-5 text-2xl font-bold">Your Pick:</div>
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
      </section>
    </div>
  );
}

export default Game;
