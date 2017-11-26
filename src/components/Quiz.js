import React, { Component } from 'react';
import TopBar from './TopBar';
import Main from './Main';
import {
  categories,
  difficulties
} from '../data';

class Quiz extends Component {
  state = {
    categories: [...categories],
    difficulties: [...difficulties]
  };
  render() {
    const { categories } = this.state;
    return (
      <div className="Quiz">
        <TopBar />
        <Main categories={categories} difficulties={difficulties}/>
      </div>
    );
  }
}

export default Quiz;
