const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn')

describe('Turn', () => {

  let card;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  })

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
    });

  it('should be an instance of a turn', () => {
    const turn = new Turn(); 
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should store a user guess', () => {
    const turn = new Turn('dog', card)
    expect(turn.guess).to.equal('dog')
  })

  it('should store a card', () => {
    const turn = new Turn('dog', card)
    expect(turn.card).to.equal(card)
  })

  it('should return a user guess', () => {
    const turn = new Turn('dog', card)
    expect(turn.returnGuess()).to.equal('dog')
  })

  it('should return a card', () => {
    const turn = new Turn('dog', card)
    expect(turn.returnCard()).to.equal(card)
  })

  it('should return a false if the guess does not match the correct answer', () => {
    const turn = new Turn('dog', card)
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should return a true if the guess does not match the correct answer', () => {
    const turn = new Turn('object', card)
    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('should return false when there is no guess', () => {
    const turn = new Turn('', card)
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should return incorrect feedback', () => {
    const turn = new Turn('dog', card)
    expect(turn.giveFeedback()).to.equal('Incorrect!')
  })

  it('should return correct feedback', () => {
    const turn = new Turn('object', card)
    expect(turn.giveFeedback()).to.equal('Correct!')
  })
})