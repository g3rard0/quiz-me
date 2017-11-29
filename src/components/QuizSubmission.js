import React, { Component } from 'react';
import { Button, Modal, Header, Icon } from 'semantic-ui-react';

class QuizSubmission extends Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  render() {
    let {userAnswers} = this.props;
    let count = 0;
    let results = userAnswers.map(answer => {
      if (!answer.isCorrect) {
        return <p>{answer.id}. <Icon name="exclamation triangle" className="error"/> <span className="incorrect">{answer.value}</span></p>
      }
      count++;
      return <p>{answer.id}. <Icon name="check" className="success"/> <span className="correct">{answer.value}</span></p>;
    });
    return (
      <Modal
        trigger={<Button basic color='green' onClick={this.handleOpen}>Submit Answers</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        >
        <Modal.Header>Quiz Submission</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{count}/{userAnswers.length} Correct</Header>
            {results}
            <Modal.Actions>
              <Button color='green' onClick={this.handleClose}>
                <Icon name='checkmark' /> Close
              </Button>
            </Modal.Actions>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default QuizSubmission;
