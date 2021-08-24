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

    //update turn count ` 
    this.turns++

    //guess is evaluated
    if(newTurn.evaluateGuess() === false){
      this.incorrectGuesses.push(this.currentCard.cardNumber)
    }

    //removes first card from deck
    this.currentDeck.deck.shift()

    //next card becomes current card
    this.currentCard = this.currentDeck.deck[0]

    //returns feedback
    return newTurn.giveFeedback()
  

  }

  calculatePercentCorrect() {
    let totalCorrect = this.currentDeck.deck.length - this.incorrectGuesses.length
    return totalCorrect / this.currentDeck.deck.length * 100
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }


}

module.exports = Round;