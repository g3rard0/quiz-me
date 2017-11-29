import React, { Component } from 'react';
import shuffle from 'shuffle-array';

class Question extends Component {
  renderAnswers = () => {
    const { question, userAnswer, changeAnswer } = this.props
    const id = question.id;
    return question.options
      .map((option, i) =>
        <div key={i} className="answer">
          <input
            type="radio"
            name={id}
            value={option}
            checked={option == userAnswer.value}
            onChange={(e) => {
              let isCorrect = (option == question.correct_answer);
              //console.log(option == question.correct_answer);
              changeAnswer(id, option, isCorrect);
            }}
          />
          <span>{option}</span>
        </div>
      );
  }
  render() {
    const { question, userAnswer } = this.props;
    return (
      <div className="question">
        {
          this.renderAnswers()
        }
        <pre>{JSON.stringify(userAnswer, null, 2)}</pre>
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </div>
    )
  }
}

export default Question;
