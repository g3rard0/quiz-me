import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';

class Type extends Component {
  componentDidMount() {
    const difficulty = this.props.match.params.difficulty;
    if (difficulty) {
      this.props.changeDifficulty(difficulty);
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Header as="h3">Select difficulty</Header>
        wut??? {match.params.difficulty}
      </div>
    );
  }
}

export default Type;
