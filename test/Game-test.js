const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    const turn = new Turn('Fitzgerald', card2)
    const game = new Game(round)
    expect(Game).to.be.a.a('function')
  })

  it('should be an instance of a game', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    const turn = new Turn('Fitzgerald', card2)
    const game = new Game(round)
    expect(game).to.be.an.instanceof(Game)
  })


  // it('should keep track of the currentRound', () => {
  //   const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  //   const deck = new Deck([card1, card2, card3])
  //   const round = new Round(deck)
  //   const turn = new Turn('Fitzgerald', card2)
  //   const game = new Game(round)
  //   expect(game).to.be.an.instanceof(Game)
  // })

  it.skip('should create cards out of data', () => {
    const game = new Game()
    game.start()
    expect(game.cards[0]).to.be.an.instanceof(Card);
  })

})
