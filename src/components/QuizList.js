import React, { Component } from 'react';
import Question from './Question';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react'
import axios from 'axios';
import { parse } from 'qs';
import shuffle from 'shuffle-array';


class QuizList extends Component {
  state = {
    isLoading: true,
    error: '',
    quizList: [],
    activeQuestion: 0,
    userAnswers: []
  };
  url = 'https://opentdb.com/api.php?';

  handleChange = (id, option) => {
    let userAnswers = this.state.userAnswers.slice();
    userAnswers = userAnswers.map(answer => {
      if (answer.id == id) {
        answer.value = option;
      }
      return answer;
    });
    this.setState({ userAnswers });

  }

  componentDidMount() {
    const { location } = this.props;
    const params = parse(location.search.substr(1));
    this.url += Object
      .keys(params)
      .map(param => `${param}=${params[param]}`)
      .join('&');

    axios.get(this.url)
      .then(res => {
        const response_code = res.data.response_code;

        if ([1,2].includes(response_code)) {
          return Promise.reject(response_code);
        }
        console.log(res.data.results);
        let userAnswers = [];
        let quizList = res.data.results;
        quizList.forEach((quiz, i) => {
          quiz.id = i;
          quiz.options = shuffle([quiz.correct_answer, ...quiz.incorrect_answers]);
          userAnswers.push({
            id: i,
            value: ''
          });
        });

        this.setState({ isLoading: false, quizList: res.data.results, userAnswers})
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
    let { isLoading, error, quizList, activeQuestion, userAnswers } = this.state;
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
        <div className="section">
          <Header as='h1'>
            <div dangerouslySetInnerHTML={{__html: quizList[activeQuestion].question}} />
          </Header>
          <span className="subheading">Question { activeQuestion + 1} of {quizList.length}</span>
        </div>
        <Question
          question={quizList[activeQuestion]}
          userAnswer={userAnswers[activeQuestion]}
          changeAnswer={this.handleChange}
        />
        <pre>{ JSON.stringify(quizList, null, 2)}</pre>
      </div>
    )
  }
}

export default QuizList;
