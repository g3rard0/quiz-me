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
  state = {
    active: ''
  };

  handleChangeDifficulty = (difficulty) => {
    const newState = { ...this.state, active: difficulty };
    this.setState(newState);
  }

  render() {
    const { difficulties, match} = this.props;
    const { active } = this.state;
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
                className={`difficulty selectable-item ${active && type == active ? 'selected': ''}`}>
                <Link to={`/categories/${match.params.categoryId + '/difficulty/' + type}`}>
                  <div className="category__type" onClick={() => this.setState({ active: type })}>{type}</div>
                </Link>
              </Grid.Column>
              )
            }
          </Grid>
        </div>
        <Route
          path={"/categories/:categoryId/difficulty/:difficulty"}
          render={props => <Type {...props}
          changeDifficulty={this.handleChangeDifficulty}
        /> }/>
      </div>
    );
  }
}

export default Difficulty;
