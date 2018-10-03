const shuffler = arr => {
  let arrayCopy = arr;
  let cardsInDeck = arrayCopy.length;

  for (let i = 0; i < arrayCopy.length; i++) {
    // random() is num between 0-1 so multiplying
    // by remaining cards keeps index in range
    let i = Math.floor(Math.random() * cardsInDeck);

    // subtract 1 from remaining cardsInDeck to avoid
    // duplicates
    cardsInDeck -= 1;

    // grab card at back of deck and store
    let endCard = arrayCopy[cardsInDeck];

    // swap card at back of deck with randomly picked card
    arrayCopy[cardsInDeck] = arrayCopy[i];

    // move the endCard to the position of the randomly picked
    // card that was just moved to the back of the deck
    arrayCopy[i] = endCard;
  }
  return arrayCopy;
};
