import React, { Component } from 'react';
import {
  Header,
  Grid,
  Button
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
        <Grid>
          {
            difficulties.map(({type}, i) =>
            <Grid.Column
              key={i}
              mobile={16}
              tablet={8}
              computer={4}
              className='difficulty'>
                <Button fluid className={`selectable-item ${difficultySelected && type == difficultySelected ? 'selected': ''}`}
                  onClick={() => this.props.changeDifficulty(type)}
                  >
                  {type}
                </Button>
              </Grid.Column>
              )
            }
          </Grid>
      </div>
    );
  }
}

export default Difficulty;
