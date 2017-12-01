import React, { Component } from 'react';
import shuffle from 'shuffle-array';

class Question extends Component {
  renderAnswers = () => {
    const { question, userAnswer, changeAnswer } = this.props
    const quizId = question.id;
    return question.options
      .map(({option, id}, i) =>
        <div key={id} className="answer">
          <label>
            <input
              type="radio"
              name={id}
              value={option}
              checked={option == userAnswer.value}
              onChange={(e) => {
                let isCorrect = (option == question.correct_answer);
                changeAnswer(quizId, option, isCorrect);
              }}
            />
            <span className='option-icon'>{i + 1}</span>
            <span>{option}</span>
          </label>
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
      </div>
    )
  }
}

export default Question;
