import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

const Pagination = ({page, totalQuestions, nextQuestion, prevQuestion}) => {
  return (
    <div className="pagination">
      { page > 1 && <Button color='teal' onClick={ prevQuestion }><Icon name="angle left" /> Prev</Button> }
      { page < totalQuestions && <Button color='purple' onClick={ nextQuestion }>Next <Icon name="angle right" /></Button> }
    </div>
  );
}

export default Pagination;
