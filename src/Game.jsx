import { useState, useEffect } from "react";
import Rocksvg from "./components/Rocksvg";
import Papersvg from "./components/Papersvg";
import Scissors from "./components/Scissors";
import HeaderGame from "./components/HeaderGame";
import ResultSection from "./components/ResultSection";
import RulesModal from "./components/RulesModal";
import GameMap from "./components/GameMap";

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
        <div className="w-full h-screen pt-10 ">
          <HeaderGame score={score} />
          {/* RENDER JUEGO */}
          <GameMap showGame={showGame} disable={disable} handlePlay={handlePlay} />
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
        {/* RULES MODAL */}
        <RulesModal closeRules={closeRules} rules={rules} handleRules={handleRules} />
      </section>
    </div>
  );
}

export default Game;

// "absolute px-4 pt-10 bg-white bottom-1/4 rounded-xl"
