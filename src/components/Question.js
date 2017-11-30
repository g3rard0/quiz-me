import React, { Component } from 'react';
import shuffle from 'shuffle-array';

class Question extends Component {
  renderAnswers = () => {
    const { question, userAnswer, changeAnswer } = this.props
    const id = question.id;
    return question.options
      .map((option, i) =>
        <div key={i} className="answer">
          <label>
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
