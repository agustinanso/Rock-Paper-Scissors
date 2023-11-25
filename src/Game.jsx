import { useState, useEffect } from "react";
import Rocksvg from "./components/Rocksvg";
import Papersvg from "./components/Papersvg";
import Scissors from "./components/Scissors";
import HeaderGame from "./components/HeaderGame";
import ResultSection from "./components/ResultSection";

export const gameOptions = [
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
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  const handlePlay = (pick) => {
    setUserChoice(pick);
    const randomPick = Math.floor(Math.random() * 3);
    setMachineChoice(randomPick);
    setShowGame(false);
    setDisable(true);
    setVisibleModal(true);
  };

  const handleRules = () => {
    setRules(true);
  };
  const closeRules = () => {
    setRules(false);
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
        setScore((prevScore) => prevScore - 1);
      } else if (machineOption.beat === userOption.id) {
        setResult(userOption);
        setWinnerMessage("YOU WIN");
        setScore((prevscore) => prevscore + 1);
      } else {
        setEmpate("TIE");
      }
    }
  }, [userChoice, machineChoice]);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

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
          <HeaderGame score={score} />
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
          <ResultSection
            visibleModal={visibleModal}
            machineChoice={machineChoice}
            userChoice={userChoice}
            machineImage={machineImage}
            userImage={userImage}
            winnerMessage={winnerMessage}
            loserMessage={loserMessage}
            empate={empate}
            result={result}
            resetGame={resetGame}
          />
        </div>
        <div
          className={` ${
            rules
              ? "transition-transform duration-200 delay-75 shadow-md shadow-black/50"
              : "scale-0 transition-transform duration-200"
          } absolute px-4 pt-10 bg-white bottom-1/4 rounded-xl `}>
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

        <div className="flex justify-end w-full px-4 py-4">
          <button
            className="border-[1px] px-7 py-2 rounded-lg text-white font-bold hover:bg-gray-400"
            onClick={() => handleRules()}>
            RULES
          </button>
        </div>
      </section>
    </div>
  );
}

export default Game;

// "absolute px-4 pt-10 bg-white bottom-1/4 rounded-xl"
