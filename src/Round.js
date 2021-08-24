const Turn = require("./Turn");
const Game = require("./Game");

class Round {
  constructor(deck) {
    this.currentDeck = deck
    this.currentCard = this.currentDeck.deck[0]
    this.turns = 0;
    this.incorrectGuesses = []
    this.startTime = []
    this.timeEnd = 0
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard)

    if(newTurn.evaluateGuess() === false){
      this.incorrectGuesses.push(this.currentCard.id)
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
    this.timeEnd = Date.now();
    let durationOfGame = (this.timeEnd -= this.startTime)
    this.convertTime(durationOfGame)
    
  }

  convertTime(time) {
      var minutes = Math.floor(time / 60000);
      var seconds = ((time % 60000) / 1000).toFixed(0);
      console.log(`You've spent ${minutes} minutes and ${(seconds < 10 ? '0' : '')} ${seconds} seconds on this round`);
  }


}

module.exports = Round;