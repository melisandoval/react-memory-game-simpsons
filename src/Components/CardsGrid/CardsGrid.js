import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./CardsGrid.css";

export default function CardsGrid({
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
}) {
  return (
    <>
      {cards.map((card) => (
        <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </>
  );
}
