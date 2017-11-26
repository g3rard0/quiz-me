import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';
import CategoryList from './CategoryList';

const Main = ({categories}) => (
  <div>
    <Container>
      <div className="section">
        <Header as='h1'>Create your quiz.</Header>
      </div>
      <Header as='h3'>Select categories</Header>
      <div className="content content--padding">
        <CategoryList categories={categories}/>
      </div>
    </Container>
  </div>
);

export default Main;
