const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.currentDeck = deck
    this.currentCard = deck.deck[0]
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(game, card) {
    let newTurn = new Turn(game, card)
    this.turns++

    
  }

}

module.exports = Round;