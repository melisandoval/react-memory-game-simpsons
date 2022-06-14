import "./EndGameModal.css";
import homerCrazy from "../../assets/homer-crazy.png";

export default function EndGameModal({
  handleCloseEndModal,
  newGame,
  cardsQuant,
  moves,
  inicialTime,
  finalTime,
}) {
  const minSecs = (minutes) => {
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  return (
    <div className="end-game">
      <div className="end-game-content">
        <button className="exit-button" onClick={() => handleCloseEndModal()}>
          x
        </button>
        <h1>Congratulations!</h1>
        <p>
          You did it with{" "}
          <span style={{ backgroundColor: "#ffd910" }}>{moves}</span> moves in{" "}
          <span style={{ backgroundColor: "#ffd910" }}>
            {minSecs(finalTime - inicialTime)}
          </span>{" "}
          minutes!
        </p>
        <p>Go over your limit:</p>
        <button
          onClick={() => {
            newGame(cardsQuant);
            handleCloseEndModal();
          }}
        >
          Play again
        </button>
        <img
          src={homerCrazy}
          alt="Homer jumping looking like crazy"
          loading="eager"
        />
      </div>
    </div>
  );
}
