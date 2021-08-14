const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck')

describe('Deck', () => {

    it('should be a function', () => {
        const deck = new Deck()
        expect(Deck).to.be.a('function')
    })

    it('should store cards', () => {
        const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = new Deck([card1, card2, card3])
    })

    it('should count cards in the deck', () => {
        const card1 = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card (2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = new Deck([card1, card2, card3])
        expect(deck.countDeck()).to.equal(3)
    })

    
})