import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { types } from '../data';

class Type extends Component {
  state = {
    active: ''
  }

  componentWillMount() {
    const difficulty = this.props.match.params.difficulty;
    if (difficulty) {
      this.props.changeDifficulty(difficulty);
    }
  }
  render() {
    const { active } = this.state;
    const { match } = this.props;
    const { difficulty, categoryId } = match.params;
    return (
      <div>
        <Header as="h3">Select type</Header>
        {/*match.params.difficulty*/}
        {difficulty}
        <div className="content">
          <Grid padded columns="equal">
          {
            types.map(({type, value}) =>
              <Grid.Column key={type}
                className={`type selectable-item ${active && active == type ? 'selected': ''}`}>
                <Link to={`/categories/${categoryId}/difficulty/${difficulty}/type/${value}`}>
                  <div className="type" onClick={() => this.setState({ active: type})}>{type}</div>
                </Link>
              </Grid.Column>
            )
          }
          </Grid>
        </div>
      </div>
    );
  }
}

export default Type;
