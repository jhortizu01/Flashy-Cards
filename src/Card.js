class Card {
    constructor(cardNumber, cardQuestion, possibleAnswers, correct) {
        this.cardNumber = cardNumber;
        this.question = cardQuestion;
        this.answers = possibleAnswers;
        this.correctAnswer = correct;
    }

}

module.exports = Card;