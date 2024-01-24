 class DB {
  constructor(questions) {
    this.questions = questions;
  }

  add(question) {
    this.questions.push(question);
  }

  getAll() {
    return this.questions;
  }
}

export default DB