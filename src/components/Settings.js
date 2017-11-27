import React, { Component } from 'react';
import { categories, difficulties, types } from '../data';
import Difficulty from './Difficulty';

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

  render() {
    return (
      <div>
        <Difficulty {...this.state} changeDifficulty={this.handleChangeDifficulty}/>
      </div>
    );
  }
}

export default Settings;
