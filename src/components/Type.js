import React, { Component } from 'react';

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
      <div>wut??? {match.params.difficulty}</div>
    );
  }
}

export default Type;
