import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const Pagination = ({page, totalQuestions, nextQuestion, prevQuestion}) => {
  return (
    <div className="pagination">
      { page > 1 && <Button basic color='teal' onClick={ prevQuestion }>Prev</Button> }
      { page < totalQuestions && <Button basic color='purple' onClick={ nextQuestion }>Next</Button> }
      { page == totalQuestions && <Button basic color='green'>Submit Answers</Button>
 }
    </div>
  );
}

export default Pagination;
