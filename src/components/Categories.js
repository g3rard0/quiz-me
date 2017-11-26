import React from 'react';
import {
  Header
} from 'semantic-ui-react';
import CategoryList from './CategoryList';

const Categories = ({categories}) => (
  <div>
    <Header as='h3'>Select categories</Header>
    <div className="content content--padding">
      <CategoryList categories={categories}/>
    </div>
  </div>
);

export default Categories;
