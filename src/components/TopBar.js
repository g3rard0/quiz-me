import React from 'react';
import {
  Segment,
  Container,
  Header
} from 'semantic-ui-react';

const TopBar = () => (
    <div id="top-bar">
      <Segment vertical>
        <Container>
          <Header as='h2'>Quiz.me</Header>
        </Container>
      </Segment>
    </div>
);

export default TopBar;
