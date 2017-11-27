import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


class QuizList extends Component {
  state = {
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div>
          <Loader active inline='centered' size='large'>
            Fetching Questions...
          </Loader>
        </div>
      );
    }
    return (
      <div>

      </div>
    )
  }
}

export default QuizList;
