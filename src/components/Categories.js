import React from 'react';
import {
  Header
} from 'semantic-ui-react';
import CategoryList from './CategoryList';

const Categories = ({categories}) => (
  <div>
    <Header as='h3'>Select category</Header>
    <div className="content">
      <CategoryList categories={categories}/>
    </div>
  </div>
);

export default Categories;
