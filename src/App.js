import { useState, useEffect } from "react";

//components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import CardGrid from "./Components/CardsGrid";
import EndGameModal from "./Components/EndGameModal";
import Footer from "./Components/Footer";

// services:
import { getCards } from "./Services/getCards";

//styles:
import "./App.css";

function App() {
  // cards:
  const [cards, setCards] = useState([]);
  const [cardsQuant, setCardsQuant] = useState(18);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  // state to prevent for a second the user from clicking more cards when two are showing their character:
  const [disabled, setDisabled] = useState(false);
  // moves counter:
  const [moves, setMoves] = useState(0);
  // modal for every card match:
  const [showModal, setShowModal] = useState(false);
  // modal for the end of the game:
  const [showEndModal, setShowEndModal] = useState(false);
  const [inicialTime, setInicialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  // NewGame accepts a number that represents the number of cards the user choose to play with:
  const newGame = (n) => {
    // set state Cards with the cards we get from function getCards:
    setCards(getCards(n));
    // set moves counter to 0
    setMoves(0);
    // set first card choice to null:
    setChoiceOne(null);
    // set inicial time for the new game:
    setInicialTime(new Date().getTime() / 60000);
    setFinalTime(0);
  };

  // set state cardsQuant (user selection of number of cards):
  const handleCardsQuant = (n) => {
    setCardsQuant(n);
  };

  // first render:
  useEffect(() => {
    newGame(cardsQuant); //default 18 cards
  }, []);

  // handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // cards comparison, set states CARDS, showModal and showEndModal:
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.name === choiceOne.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTimeout(() => setShowModal(true), 500);
        resetMoves();
      } else {
        setTimeout(() => resetMoves(), 1000);
      }
    }
    if (cards.length > 0 && cards.every((card) => card.matched === true)) {
      // if al the cards are already matched:
      setShowModal(false); // because we want to show the "End Modal", so:
      // set final time to show to user:
      setFinalTime(new Date().getTime() / 60000);
      // show end modal:
      setTimeout(() => setShowEndModal(true), 500);
    }
  }, [choiceOne, choiceTwo]);

  // Reset the moves counter:
  // Set choiceOne and choiceTwo back to null
  // Makes "Woo-hoo Modal" disappear:
  const resetMoves = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves((prevMoves) => prevMoves + 1);
    setDisabled(false);
    setTimeout(() => setShowModal(false), 1100);
  };

  const handleCloseEndModal = () => {
    setShowEndModal(false);
  };

  return (
    <div className="App">
      <Header />
      <Navbar
        moves={moves}
        newGame={newGame}
        cards={cards}
        handleCardsQuant={handleCardsQuant}
        cardsQuant={cardsQuant}
      />
      <section className={"cards-grid-container"}>
        {cards.length === 12 && (
          <div className="cards-grid-12">
            <CardGrid
              cards={cards}
              handleChoice={handleChoice}
              disabled={disabled}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
            />
          </div>
        )}
        {cards.length === 18 && (
          <div className="cards-grid-18">
            <CardGrid
              cards={cards}
              handleChoice={handleChoice}
              disabled={disabled}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
            />
          </div>
        )}
        {cards.length === 24 && (
          <div className="cards-grid-24">
            <CardGrid
              cards={cards}
              handleChoice={handleChoice}
              disabled={disabled}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
            />
          </div>
        )}
        {showModal && <Modal />}
        {showEndModal && (
          <EndGameModal
            handleCloseEndModal={handleCloseEndModal}
            newGame={newGame}
            cardsQuant={cardsQuant}
            moves={moves}
            inicialTime={inicialTime}
            finalTime={finalTime}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
