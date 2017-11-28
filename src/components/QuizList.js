import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { parse } from 'qs';

class QuizList extends Component {
  state = {
    isLoading: true,
    error: '',
    quizList: []
  };
  url = 'https://opentdb.com/api.php?';

  componentDidMount() {
    const { location } = this.props;
    const params = parse(location.search.substr(1));
    this.url += Object
      .keys(params)
      .map(param => `${param}=${params[param]}`)
      .join('&');

    console.log(this.url);
    axios.get(this.url)
      .then(res => {
        const response_code = res.data.response_code;
        console.log(response_code);

        if ([1,2].includes(response_code)) {
          return Promise.reject(response_code);
        }
        console.log(res.data.results);
        this.setState({ isLoading: false, quizList: res.data.results})
      })
      .catch(err_code => {
        let message = '';
        switch (err_code) {
          case 1:
            message = 'No Results';
            break;
          case 2:
            message = 'Invalid Parameter';
            break;
          default:
            message = 'Something went wrong. Try again later.'
        }
        console.log(message);
        this.setState({ error: message, isLoading: false });
      });
  }
  render() {
    const { isLoading, error, quizList } = this.state;
    if (isLoading) {
      return (
        <div>
          <Loader active inline='centered' size='large'>
            Fetching Questions...
          </Loader>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          { error }
        </div>
      )
    }

    return (
      <div>
        <pre>{ JSON.stringify(quizList, null, 2)}</pre>
      </div>
    )
  }
}

export default QuizList;
