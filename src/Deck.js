class Deck {
  constructor(cards) {
    this.deck = cards
  }

  countCards() {
    console.log(this.deck)
    return this.deck.length
  }
}

module.exports = Deck;