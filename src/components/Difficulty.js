import React from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';

const Difficulty = () => (
  <div>
    <Header as="h3">Select difficulty</Header>
    <div className="content">
      <Grid padded>
            <Grid.Column key={1} mobile={16} tablet={8} computer={4} className="difficulty">
                asdf
            </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default Difficulty;
