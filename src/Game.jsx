import { useState, useEffect } from "react";
import Rocksvg from "./components/Rocksvg";
import Papersvg from "./components/Papersvg";
import Scissors from "./components/Scissors";

const gameOptions = [
  { id: 0, name: "Piedra", emoji: "💎", beat: 2, img: <Rocksvg /> },
  { id: 2, name: "Papel", emoji: "📜", beat: 1, img: <Papersvg /> },
  { id: 1, name: "Tijera", emoji: "✂", beat: 0, img: <Scissors /> },
];

function Game() {
  const [userChoice, setUserChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [loserMessage, setLoserMessage] = useState(null);
  const [machineMessage, setMachineMessage] = useState(null);
  const [empate, setEmpate] = useState(null);
  const [result, setResult] = useState(null);
  const [disable, setDisable] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);

  const handlePlay = (pick) => {
    setUserChoice(pick);
    const randomPick = Math.floor(Math.random() * 3);
    setMachineChoice(randomPick);
    setDisable(true);
    setVisibleModal(true);
  };

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(`Jugador: ${gameOptions[userChoice]?.emoji}`);
    }
  }, [userChoice]);

  useEffect(() => {
    if (machineChoice !== null) {
      setMachineMessage(`Maquina: ${gameOptions[machineChoice]?.emoji}`);
    }
  }, [machineChoice]);

  useEffect(() => {
    if (userChoice !== null && machineChoice !== null) {
      const userOption = gameOptions[userChoice];
      const machineOption = gameOptions[machineChoice];

      if (userOption.beat === machineOption.id) {
        setResult(machineOption);
        setLoserMessage("¡Perdiste humano!");
      } else if (machineOption.beat === userOption.id) {
        setResult(userOption);
        setWinnerMessage("¡Ganaste!");
        setLoserMessage("Perdió la Máquina");
      } else {
        setEmpate("Empataron");
      }
    }
  }, [userChoice, machineChoice]);

  const resetGame = () => {
    setEmpate(null);
    setMachineChoice(null);
    setMachineMessage(null);
    setResult(null);
    setUserChoice(null);
    setUserMessage(null);
    setDisable(false);
    setVisibleModal(false);
    setWinnerMessage(null);
    setLoserMessage(null);
  };

  return (
    <div>
      <section className="flex flex-col items-center h-screen m-auto bg-slate-800">
        {/* JUEGO */}
        <div className="max-w-[1200px] w-full">
          <h1 className="pt-32 text-6xl font-bold text-center text-white">
            Piedra Papel o Tijera!
          </h1>

          <div className="flex items-center justify-center gap-4 pt-10">
            {gameOptions.map((game) => (
              <div key={game.id} className="px-3 py-3 bg-red-500 rounded-full">
                <button
                  disabled={disable}
                  onClick={() => handlePlay(game.id)}
                  className="px-5 py-4 text-center bg-white rounded-full hover:bg-orange-300 disabled:bg-gray-400"
                  key={game.id}>
                  {game.img}
                </button>
              </div>
            ))}
          </div>

          {/* MODAL */}
          <div
            className={` ${
              visibleModal ? "text-white bg-orange-500 max-w-[600px] w-full" : "hidden"
            }  pb-10 pt-10 px-10 rounded-xl mt-10 flex flex-col text-center gap-8 items-center justify-center m-auto shadow-md shadow-slate-950`}>
            <div className="flex justify-between w-full">
              <div className="border-[2px] px-6 py-3 border-black rounded-xl bg-orange-600 text-white">
                {userChoice !== null && <p className="text-2xl font-bold ">{userMessage}</p>}
              </div>
              <div className="px-6 py-3 border-[2px] border-black rounded-xl bg-orange-600 text-white">
                {machineChoice !== null && <p className="text-2xl font-bold ">{machineMessage}</p>}
              </div>
            </div>

            <div className="border-[2px] items-center text-center border-black px-9 py-9 text-4xl font-bold rounded-xl bg-orange-600">
              {winnerMessage && <p>{winnerMessage}</p>}
              {loserMessage && <p>{loserMessage}</p>}
              {empate !== null && <p>{empate}</p>}
            </div>

            <div className="[&>button]:bg-emerald-600 [&>button]:hover:bg-emerald-400 [&>button]:py-4 [&>button]:px-3 [&>button]:rounded-lg [&>button]:text-white [&>button]:font-bold [&>button]:shadow-md [&>button]:shadow-gray-800">
              {result !== null && <button onClick={() => resetGame()}>Juega de nuevo!</button>}
              {empate !== null && <button onClick={() => resetGame()}>Juega de nuevo!</button>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Game;
