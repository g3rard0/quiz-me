import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';
import {
  Link,
  Route
} from 'react-router-dom';
import Type from './Type';

class Difficulty extends Component {
  render() {
    const { difficulties, match, difficultySelected} = this.props;
    return (
      <div>
        <Header as="h3">Select difficulty</Header>
        <div className="content">
          <Grid padded>
            {
              difficulties.map(({type}) =>
              <Grid.Column
                key={type}
                mobile={16}
                tablet={8}
                computer={4}
                className={`difficulty selectable-item ${difficultySelected && type == difficultySelected ? 'selected': ''}`}>
                  <div className="category__type" onClick={() => this.props.changeDifficulty(type)}>{type}</div>
              </Grid.Column>
              )
            }
          </Grid>
        </div>
      </div>
    );
  }
}

export default Difficulty;
