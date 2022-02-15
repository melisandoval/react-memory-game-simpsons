import { useState, useEffect } from "react";

//components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CardGrid from "./components/CardsGrid";
import EndGameModal from "./components/EndGameModal";
import Footer from "./components/Footer";

//styles:
import "./App.css";

const characters = [
  { name: "Abraham", src: "/img/Abraham.png", alt: "Abraham Simpson" },
  { name: "Barney", src: "/img/Barney.png", alt: "Barney Gumble" },
  { name: "Bart", src: "/img/Bart.png", alt: "Bart Simpson" },
  { name: "Burns", src: "/img/Burns.png", alt: "Montgomery Burns" },
  { name: "Flanders", src: "/img/Flanders.png", alt: "Ned Flanders" },
  { name: "Homer", src: "/img/Homer.png", alt: "Homer Simpson" },
  { name: "Lisa", src: "/img/Lisa.png", alt: "Lisa Simpson" },
  { name: "Maggie", src: "/img/Maggie.png", alt: "Maggie Simpson" },
  { name: "Marge", src: "/img/Marge.png", alt: "Marge Simpson" },
  { name: "Moe", src: "/img/Moe.png", alt: "Moe Szyslak" },
  { name: "Krusty", src: "/img/Krusty.png", alt: "Krusty the Clown" },
  { name: "Ralph", src: "/img/Ralph.png", alt: "Ralph Wiggum" },
  { name: "Milhouse", src: "/img/Milhouse.png", alt: "Milhouse Van Houten" },
  { name: "Skinner", src: "/img/Skinner.png", alt: "Seymour Skinner" },
  { name: "Dog", src: "/img/Dog.png", alt: "Santa's Little Helper" },
  { name: "Apu", src: "/img/Apu.png", alt: "Apu Nahasapeemapetilon" },
  { name: "Dignity", src: "/img/Dignity.png", alt: "The Dignity" },
  { name: "Chief", src: "/img/Chief.png", alt: "Chief Clancy Wiggum" },
  { name: "Edna", src: "/img/Edna.png", alt: "Edna Krabappel" },
  { name: "Smithers", src: "/img/Smithers.png", alt: "Waylon Smithers" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [cardsQuant, setCardsQuant] = useState(18);
  const [moves, setMoves] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [inicialTime, setInicialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  // Set state CARDS and how many cards,
  // Start new game:
  const newGame = (n) => {
    const halfN = n / 2;
    const selectedCharacters = characters
      .sort(() => Math.random() - 0.5)
      .slice(0, halfN);
    const shuffledCards = [...selectedCharacters, ...selectedCharacters]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
    setMoves(0);
    setChoiceOne(null);
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
      setShowModal(false);
      setTimeout(() => setShowEndModal(true), 500);
      setFinalTime(new Date().getTime() / 60000);
    }
  }, [choiceOne, choiceTwo]);

  // Moves counter,
  // Set choiceOne and choiceTwo back to null
  // Makes Woo-hoo Modal disappear:
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

// testeando git

export default App;
