import React, { Component } from 'react';
import {
  Header,
  Grid,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Type extends Component {
  render() {
    const { types, typeSelected } = this.props;
    return (
      <div className="settings__section">
        <Header as="h3">Select type</Header>
          <Grid columns="equal">
          {
            types.map(({type, value}) =>
              <Grid.Column key={type}
                >
                <Button fluid
                  className={`type selectable-item ${ typeSelected && typeSelected  == value ? 'selected': ''}`}
                    onClick={() => this.props.changeType(value)}
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

export default Type;
