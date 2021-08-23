const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.currentDeck = deck
    this.currentCard = this.currentDeck.deck[0]
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    //instantiates new turn
    let newTurn = new Turn(guess, this.currentCard)

    //update turn count
    this.turns++

    //removes first card from deck
    this.currentDeck.deck.shift()

    //next card becomes current card
    this.currentCard = this.currentDeck.deck[0]

    //guess is evaluated
    let gameGuess = newTurn.evaluateGuess();
  
    if(gameGuess === false){
      this.incorrectGuesses.push(this.currentCard.cardNumber)
    } 
  
    //returns feedback
    return newTurn.giveFeedback()
  
  }

}

module.exports = Round;