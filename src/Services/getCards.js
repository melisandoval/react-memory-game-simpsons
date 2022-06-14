import Abraham from "../assets/Abraham.png";
import Apu from "../assets/Apu.png";
import Barney from "../assets/Barney.png";
import Bart from "../assets/Bart.png";
import Burns from "../assets/Burns.png";
import Chief from "../assets/Chief.png";
import Dignity from "../assets/Dignity.png";
import Dog from "../assets/Dog.png";
import Edna from "../assets/Edna.png";
import Flanders from "../assets/Flanders.png";
import Homer from "../assets/Homer.png";
import Lisa from "../assets/Lisa.png";
import Maggie from "../assets/Maggie.png";
import Marge from "../assets/Marge.png";
import Moe from "../assets/Moe.png";
import Krusty from "../assets/Krusty.png";
import Ralph from "../assets/Ralph.png";
import Milhouse from "../assets/Milhouse.png";
import Skinner from "../assets/Skinner.png";
import Smithers from "../assets/Smithers.png";

// List of characters that we can find in the game cards:
export function getCharacters() {
  const characters = [
    { name: "Abraham", src: Abraham, alt: "Abraham Simpson" },
    { name: "Apu", src: Apu, alt: "Apu Nahasapeemapetilon" },
    { name: "Barney", src: Barney, alt: "Barney Gumble" },
    { name: "Bart", src: Bart, alt: "Bart Simpson" },
    { name: "Burns", src: Burns, alt: "Montgomery Burns" },
    { name: "Chief", src: Chief, alt: "Chief Clancy Wiggum" },
    { name: "Dignity", src: Dignity, alt: "The Dignity" },
    { name: "Dog", src: Dog, alt: "Santa's Little Helper" },
    { name: "Edna", src: Edna, alt: "Edna Krabappel" },
    { name: "Flanders", src: Flanders, alt: "Ned Flanders" },
    { name: "Homer", src: Homer, alt: "Homer Simpson" },
    { name: "Lisa", src: Lisa, alt: "Lisa Simpson" },
    { name: "Maggie", src: Maggie, alt: "Maggie Simpson" },
    { name: "Marge", src: Marge, alt: "Marge Simpson" },
    { name: "Moe", src: Moe, alt: "Moe Szyslak" },
    { name: "Krusty", src: Krusty, alt: "Krusty the Clown" },
    { name: "Ralph", src: Ralph, alt: "Ralph Wiggum" },
    { name: "Milhouse", src: Milhouse, alt: "Milhouse" },
    { name: "Skinner", src: Skinner, alt: "Seymour Skinner" },
    { name: "Smithers", src: Smithers, alt: "Waylon Smithers" },
  ];
  return characters;
}

// Generate the required cards with random characters from the list above:
export function getCards(n) {
  // divide the number of cards by two to know how many characters we need:
  const halfN = n / 2;
  // with this number get random characters from the characters list:
  const selectedCharacters = getCharacters()
    .sort(() => Math.random() - 0.5)
    .slice(0, halfN);
  // duplicate the characters in order to have two cards from the same character,
  // sort them and give to every one an ID and the boolean property "matched" (initial value: false).
  const shuffledCards = [...selectedCharacters, ...selectedCharacters]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random(), matched: false }));
  return shuffledCards;
}
