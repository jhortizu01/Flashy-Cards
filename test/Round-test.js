const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', () => {

  let card1, card2, card3, deck, round

  beforeEach(() => {
    card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })
  
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of a round', () => {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should have current card be first card in deck', () => {
    expect(round.currentCard).to.equal(card1)
  })

  it('should return current card in the deck', () => {
    expect(round.returnCurrentCard()).to.equal(deck.deck[0])
  })

  it('should store current turn count', () => {
    expect(round.turns).to.equal(0)
  })
  
  it('should update current turn count', () => {
    round.takeTurn('dog')
    expect(round.turns).to.equal(1)
  })

  it('should make the next card the current card', () => {
    round.takeTurn()
    expect(round.currentCard).to.equal(card2)
  })

  it('should store incorrect guesses', () => {
    round.takeTurn('pug')
    expect(round.incorrectGuesses).to.deep.equal([1])
  })
  
  it('should return Correct! when the answer is correct', () => {
    expect(round.takeTurn('sea otter')).to.equal('Correct!')
  })

  it('should return Incorrect! when the answer is incorrect', () => {
    expect(round.takeTurn('pug')).to.equal('Incorrect!')
  })

  it('should calculate percent of questions that were guessed correctly', () => {
    round.takeTurn('wrong')
    round.takeTurn('gallbladder')
    round.takeTurn('wrong')
    round.calculatePercentCorrect() 
    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it.skip('should print  ** Round over! ** You answered 33% of the questions correctly! to the console', () => {
    round.takeTurn('wrong')
    round.takeTurn('gallbladder')
    round.takeTurn('wrong')
    round.calculatePercentCorrect() 
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})