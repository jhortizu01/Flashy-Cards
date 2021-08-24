const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.data = prototypeQuestions;
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
    this.timeStart = 0
  }

  start() {

    this.cards = this.data.map(cardInfo => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
    })

    this.deck = new Deck(this.cards)

    this.currentRound = new Round(this.deck)

    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)



    this.currentRound.startTime.push(this.startTimer())



  }

  startTimer() {
    this.timeStart = Date.now()
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}
1

module.exports = Game;