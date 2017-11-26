import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

const Main = () => (
  <div>
    <Container>
      <div className="section">
        <Header as='h1'>Create your quiz.</Header>
      </div>
      <Header as='h3'>Select categories</Header>
      <div className="content content--padding">
        Category
      </div>
    </Container>
  </div>
);

export default Main;
