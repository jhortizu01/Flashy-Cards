const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = null;
    this.timeStart = 0
  }

  start() {
    this.instantiateClasses()
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)
    this.currentRound.startTime = this.startTimer()
  }

  instantiateClasses() {
    this.cards = prototypeQuestions.map(cardInfo => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
    })
    this.deck = new Deck(this.cards)
    this.currentRound = new Round(this.deck)
  }

  startTimer() {
    return this.timeStart = Date.now()
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;