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
      isLoading: false,
      questionsCount: 1,
      error: false
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

  handleFormSubmit = () => {
    if (this.state.questionsCount) {
      this.setState({isLoading: true});
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { isLoading, questionsCount, error} = this.state;
    return (
      <div>
        <Difficulty {...this.state} changeDifficulty={this.handleChangeDifficulty}/>
        <Type {...this.state} changeType={this.handleChangeType}/>
        <div className="settings__section">
          <Header as="h3">Number of Questions</Header>
          <Input placeholder='Number of Questions' value={questionsCount} error={error}
            onChange={(e) => this.setState({ questionsCount: e.target.value})}/>
        </div>
        <div className="settings__section">
          <Button fluid onClick={() => this.handleFormSubmit()}>
            {!isLoading && <span>Create Quiz <Icon name="long arrow right" /></span>}
            {isLoading && <span><Loader active inline='centered' /></span>}
          </Button>
        </div>
      </div>
    );
  }
}

export default Settings;
