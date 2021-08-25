class Card {
  constructor(id, cardQuestion, possibleAnswers, correct) {
    this.id = id;
    this.question = cardQuestion;
    this.answers = possibleAnswers;
    this.correctAnswer = correct;
  }

}

module.exports = Card;