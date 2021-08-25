const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck')

describe('Deck', () => {

  let card1, card2, card3, deck

  beforeEach(() => {
    card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should store cards', () => {
    console.log(deck.deck)
    expect(deck.deck).to.deep.equal([card1, card2, card3])
  })

  it('should count cards in the deck', () => {
    expect(deck.countCards()).to.equal(3)
  })
})