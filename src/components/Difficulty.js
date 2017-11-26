import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Difficulty extends Component {
  render() {
    const { difficulties, match} = this.props;
    return (
      <div>
        <Header as="h3">Select difficulty</Header>{JSON.stringify(match, null, 2)}
        <div className="content">
          <Grid padded>
            {
              difficulties.map(({type}) =>
              <Grid.Column key={type} mobile={16} tablet={8} computer={4} className="difficulty selectable-item">
                <Link to={`/categories/${match.params.categoryId + '/' + type}`}>
                  <div className="category__type">{type}</div>
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

export default Difficulty;
