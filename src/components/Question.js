import React, { Component } from 'react';
import shuffle from 'shuffle-array';

class Question extends Component {
  renderAnswers = () => {
    const { question } = this.props
    return shuffle([question.correct_answer, ...question.incorrect_answers])
      .map((question, i) => <div key={i} className="answer">{question}</div>)
  }
  render() {
    const { question } = this.props;

    return (
      <div className="question">
        {
          this.renderAnswers()
        }
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </div>
    )
  }
}

export default Question;
