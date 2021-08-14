const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
    });

  it('should be an instance of a turn', () => {
    const turn = new Turn(); 
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should store a user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('dog', card)
    expect(turn.guess).to.equal('dog')
  })

  it('should store a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('dog', card)
    expect(turn.card).to.equal(card)
  })

  it('should return a user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('dog', card)
    expect(turn.returnGuess()).to.equal('dog')
  })

  it('should return a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('dog', card)
    expect(turn.returnCard()).to.equal(card)
  })

  it('should return a boolean indicating if the users guess matches the correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('dog', card)
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should return false when there is no guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('', card)
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should return incorrect feedback', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('dog', card)
    expect(turn.giveFeedback()).to.equal('Sorry you are wrong!')
  })

  it('should return correct feedback', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card)
    expect(turn.giveFeedback()).to.equal('Sheeeesh! You are correct!')
  })

})