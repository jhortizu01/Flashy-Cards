class Deck {
    constructor(cards) {
        this.deck = cards
    }

    countDeck() {
        return this.deck.length
    }
}

module.exports = Deck;