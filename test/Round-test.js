const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', () => {
  
  it('should be a function', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(Round).to.be.a('function')
  })

  it('should be an instance of a round', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round).to.be.an.instanceof(Round)
  })

  it('should have current card be first card in deck', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.currentCard).to.equal(card1)
  })

  it('should return current card in the deck', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.returnCurrentCard()).to.equal(deck.deck[0])
  })

  it('should store current turn count', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.turns).to.equal(0)
  })

  it.skip('should create a new instance of Turn', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const turn = new Turn('dog', card1)
    const round = new Round(deck)
    expect(round.takeTurn('dog', card1)).to.be.an.instanceof(Turn)
  })
  
  it('should update current turn count', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn()

    expect(round.turns).to.equal(1)
  })

  it('should make the next card the current card', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn()

    expect(round.currentCard).to.equal(deck.deck[0])
  })

  it('should store incorrect guesses', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const turn = new Turn('dog', deck[0])
    const round = new Round(deck)

    round.takeTurn()

    expect(round.incorrectGuesses).to.deep.equal([2])
  })

  it('should store incorrect guesses', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const turn = new Turn('dog', deck[0])
    const round = new Round(deck)

    round.takeTurn()

    expect(round.incorrectGuesses).to.deep.equal([2])
  })
  
  it('should return Sheeeesh! You are correct! when the answer is correct', () => {
    const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const turn = new Turn('gallbladder', card2)
    const round = new Round(deck)

    console.log(card2)
    round.takeTurn('gallbladder')

    expect(round.takeTurn('gallbladder')).to.equal('Sheeeesh! You are correct!')
  })



})