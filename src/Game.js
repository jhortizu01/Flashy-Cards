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
    this.round = {}
  }

  start() {
    this.cards = this.data.map(cardInfo => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
    })
    console.log(this.cards)
    this.deck = new Deck(this.cards)
    this.round = new Round(this.deck)
    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)

    this.startTimer()
  }

  startTimer() {
    startTime = Date.now()
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;