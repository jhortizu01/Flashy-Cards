const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.currentDeck = deck
    this.currentCard = this.currentDeck.deck[0]
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess, card) {
    //instantiates new turn
    let newTurn = new Turn(guess, card)

    //update turn count
    this.turns++

    //removes first card from deck
    this.currentDeck.deck.shift()

    //next card becomes current card
    this.currentCard

    
  
  }

}

module.exports = Round;