import "./SingleCard.css";
import backCardImg from "../../assets/_back_couch_family.png";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt={card.alt} />
        <img
          className="back"
          src={backCardImg}
          alt="card back"
          loading="eager"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
