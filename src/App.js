import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Main from './components/Main';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Main />
      </div>
    );
  }
}

export default App;
