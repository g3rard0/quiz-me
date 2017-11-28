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
import Settings from './Settings';
import QuizList from './QuizList';

const Main = ({categories, difficulties}) => (
  <div>
    <Container>
      <Switch>
        <Route exact path="/" render={props => <Categories {...props} />} />
        <Route exact path="/categories" component={() => <Redirect to="/" />} />
        <Route path="/categories/:categoryId" render={props => <Settings {...props} /> }/>
        <Route path="/quiz" component={QuizList} />
      </Switch>
    </Container>
  </div>
);

export default Main;
