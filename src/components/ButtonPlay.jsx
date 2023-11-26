function ButtonPlay({ resetGame }) {
  return (
    <>
      <button
        className="w-[250px] bg-white hover:bg-gray-200 py-4 px-3 rounded-lg text-darkText hover:text-red-500 font-bold shadow-md shadow-gray-800"
        onClick={resetGame}>
        PLAY AGAIN
      </button>
    </>
  );
}

export default ButtonPlay;
