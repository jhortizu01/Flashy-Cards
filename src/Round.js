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
    let newTurn = new Turn(guess, this.currentCard)

    if(newTurn.evaluateGuess() === true){
      this.incorrectGuesses.push(this.currentCard.cardNumber)
    }

    this.turns++
    this.currentCard = this.currentDeck.deck[this.turns]
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    let totalCorrect = this.currentDeck.deck.length - this.incorrectGuesses.length
    return Math.round(totalCorrect / this.currentDeck.deck.length * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }


}

module.exports = Round;