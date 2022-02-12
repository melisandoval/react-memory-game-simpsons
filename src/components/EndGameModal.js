import "./EndGameModal.css";

export default function EndGameModal({
  handleCloseEndModal,
  newGame,
  cardsQuant,
}) {
  return (
    <div className="end-game">
      <div className="end-game-content">
        <button className="exit-button" onClick={() => handleCloseEndModal()}>
          x
        </button>
        <h1>Congratulations!</h1>
        <button
          onClick={() => {
            newGame(cardsQuant);
            handleCloseEndModal();
          }}
        >
          New game
        </button>
        <img src="img/homer-crazy.png" alt="Homer jumping looking like crazy" />
      </div>
    </div>
  );
}
