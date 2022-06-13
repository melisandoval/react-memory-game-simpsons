import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" loading="lazy" />
        <img
          className="back"
          src="img/_back_couch_family.png"
          alt="card back"
          loading="eager"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
