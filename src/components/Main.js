import React from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Categories from './Categories';
import Difficulty from './Difficulty';

const Main = ({categories, difficulties}) => (
  <div>
    <Container>
      <div className="section">
        <Header as='h1'>Create your quiz.</Header>
      </div>
      <Switch>
        <Route exact path="/" render={props => <Categories {...props} categories={categories}/>} />
        <Route exact path="/categories" component={() => <Redirect to="/" />} />
        <Route path="/categories/:categoryId" render={props => <Difficulty {...props} difficulties={difficulties}/>}/>
      </Switch>
    </Container>
  </div>
);

export default Main;
