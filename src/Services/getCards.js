// List of characters that we can find in the game cards:
export function getCharacters() {
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
    {
      name: "Milhouse",
      src: "/img/Milhouse.png",
      alt: "Milhouse Van Houten",
    },
    { name: "Skinner", src: "/img/Skinner.png", alt: "Seymour Skinner" },
    { name: "Dog", src: "/img/Dog.png", alt: "Santa's Little Helper" },
    { name: "Apu", src: "/img/Apu.png", alt: "Apu Nahasapeemapetilon" },
    { name: "Dignity", src: "/img/Dignity.png", alt: "The Dignity" },
    { name: "Chief", src: "/img/Chief.png", alt: "Chief Clancy Wiggum" },
    { name: "Edna", src: "/img/Edna.png", alt: "Edna Krabappel" },
    { name: "Smithers", src: "/img/Smithers.png", alt: "Waylon Smithers" },
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
