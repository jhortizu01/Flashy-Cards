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
      new Card(cardInfo.cardNumber, cardInfo.question, cardInfo.answers, cardInfo.correctAnswers)
    })

    this.deck = new Deck(this.cards)

    this.round = new Round(this.deck)

    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)
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