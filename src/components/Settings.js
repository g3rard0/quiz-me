import React, { Component } from 'react';
import { categories, difficulties, types } from '../data';
import Difficulty from './Difficulty';
import Type from './Type';
import {
  Header,
  Input,
  Button,
  Icon,
  Loader
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Settings extends Component {
  constructor(props) {
    super(props);
    const categoryId = parseInt(this.props.match.params.categoryId);
    this.state = {
      categories: [...categories],
      difficulties: [...difficulties],
      types: [...types],
      categorySelected: categoryId,
      difficultySelected: 'any',
      typeSelected: 'any',
      questionsCount: 1,
      error: false
    };
    this.url = 'https://opentdb.com/api.php';
  }

  handleChangeDifficulty = (difficulty) => {
    const newState = { ...this.state, difficultySelected: difficulty };
    this.setState(newState);
  }

  handleChangeType = (type) => {
    const newState = { ...this.state, typeSelected: type };
    this.setState(newState);
  }

  handleClick = (e) => {
    const {questionsCount, error} = this.state;
    if (!e.target.value) {
      this.setState({ error: true, questionsCount: '' });
      return;
    }
    this.setState({error: false, questionsCount: e.target.value});
  }

  render() {
    const { isLoading, questionsCount, error, categorySelected, difficultySelected, typeSelected} = this.state;
    const path = `/quiz?amount=${questionsCount}&category=${categorySelected}&difficulty=${difficultySelected}&type=${typeSelected}`;
    return (
      <div>
        <Difficulty {...this.state} changeDifficulty={this.handleChangeDifficulty}/>
        <Type {...this.state} changeType={this.handleChangeType}/>
        <div className="settings__section">
          <Header as="h3">Number of Questions</Header>
          <Input placeholder='Number of Questions' value={questionsCount} error={error}
            onChange={this.handleClick}/>
        </div>
        <div className="settings__section text-center">
          <Link to={path} className={`link ${!questionsCount ? 'disabled': ''}`}>
            Create Quiz <Icon name="long arrow right"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Settings;
