import React from "react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({
  moves,
  newGame,
  handleCardsQuant,
  cardsQuant,
}) {
  // const [selection, setSelection] = useState(18);

  const handleSelect = (e) => {
    handleCardsQuant(e.target.value);
    newGame(e.target.value);
    // setSelection(e.target.value);
  };

  return (
    <div className="navbar">
      <form className="cards-quantity">
        <div>
          <p>Choose how many cards:</p>
        </div>
        <div className="radio-buttons">
          <label htmlFor="12">
            <input
              id="12"
              type="radio"
              onChange={handleSelect}
              name="Cards quantity"
              value="12"
            />
            12
          </label>
          <label htmlFor="18">
            <input
              id="18"
              type="radio"
              onChange={handleSelect}
              name="Cards quantity"
              value="18"
            />
            18
          </label>
          <label htmlFor="24">
            <input
              id="24"
              type="radio"
              onChange={handleSelect}
              name="Cards quantity"
              value="24"
            />
            24
          </label>
        </div>
      </form>
      <div className="moves">
        <p>Moves: {moves} </p>
      </div>
      <button onClick={() => newGame(cardsQuant)}>Reset game</button>
    </div>
  );
}
