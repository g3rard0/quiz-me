import React, { Component } from 'react';
import TopBar from './TopBar';
import Main from './Main';
import categories from '../categories';

class Quiz extends Component {
  state = {
    categories: [...categories]
  };
  render() {
    const { categories } = this.state;
    return (
      <div className="Quiz">
        <TopBar />
        <Main categories={categories}/>
      </div>
    );
  }
}

export default Quiz;
