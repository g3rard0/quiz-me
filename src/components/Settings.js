import React, { Component } from 'react';
import { categories, difficulties, types } from '../data';
import Difficulty from './Difficulty';
import Type from './Type';

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
      typeSelected: 'any'
    };
  }

  handleChangeDifficulty = (difficulty) => {
    const newState = { ...this.state, difficultySelected: difficulty };
    this.setState(newState);
  }

  handleChangeType = (type) => {
    const newState = { ...this.state, typeSelected: type };
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <Difficulty {...this.state} changeDifficulty={this.handleChangeDifficulty}/>
        <Type {...this.state} changeType={this.handleChangeType}/>
      </div>
    );
  }
}

export default Settings;
