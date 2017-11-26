import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';
import {
  Link,
  Route
} from 'react-router-dom';

class Difficulty extends Component {
  state = {
    active: ''
  };
  render() {
    const { difficulties, match} = this.props;
    return (
      <div>
        <Header as="h3">Select difficulty</Header>
        <div className="content">
          <Grid padded>
            {
              difficulties.map(({type}) =>
              <Grid.Column key={type} mobile={16} tablet={8} computer={4} className={`difficulty selectable-item`}>
                <Link to={`/categories/${match.params.categoryId + '/difficulty/' + type}`}>
                  <div className="category__type">{type}</div>
                </Link>
              </Grid.Column>
              )
            }
          </Grid>
        </div>
        <Route path={"/categories/:categoryId/difficulty/:difficulty"} component={({match}) => <div>wut??? {match.params.difficulty}</div>}/>
      </div>
    );
  }
}

export default Difficulty;
