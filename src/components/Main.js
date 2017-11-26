import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Categories from './Categories';

const Main = ({categories}) => (
  <div>
    <Container>
      <div className="section">
        <Header as='h1'>Create your quiz.</Header>
      </div>
      <Switch>
        <Route exact path="/" render={props => <Categories {...props} categories={categories}/>} />
      </Switch>
    </Container>
  </div>
);

export default Main;
