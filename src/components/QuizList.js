import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { parse } from 'qs';

class QuizList extends Component {
  state = {
    isLoading: true,
    url: 'https://opentdb.com/api.php?'
  };

  componentDidMount() {
    const { location } = this.props;
    const { amount, category, difficulty, type } = parse(location.search.substr(1));
    
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div>
          <Loader active inline='centered' size='large'>
            Fetching Questions...
          </Loader>
        </div>
      );
    }
    return (
      <div>

      </div>
    )
  }
}

export default QuizList;
