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
          <Header as='h1'>Quiz.me</Header>
        </Container>
      </Segment>
    </div>
);

export default TopBar;
