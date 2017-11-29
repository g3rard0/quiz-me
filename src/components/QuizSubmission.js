import React, { Component } from 'react';
import { Button, Modal, Header, Icon } from 'semantic-ui-react';

const QuizSubmission = ({ userAnswers}) => {
    let count = 0;
    let results = userAnswers.map(answer => {
      if (!answer.isCorrect) {
        return <p>{answer.id}. <Icon name="exclamation triangle" className="error"/> <span className="incorrect">{answer.value}</span></p>
      }
      count++;
      return <p>{answer.id}. <Icon name="check" className="success"/> <span className="correct">{answer.value}</span></p>;
    });
    return (
      <Modal dimmer={true} trigger={<Button basic color='green'>Submit Answers</Button>}>
        <Modal.Header>Quiz Submission</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{count}/{userAnswers.length} Correct</Header>
            {results}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
}

export default QuizSubmission;
