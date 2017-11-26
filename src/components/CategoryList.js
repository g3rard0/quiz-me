import React from 'react';
// import categories from '../categories';
import { Grid } from 'semantic-ui-react';

const CategoryList = ({categories}) => (
  <div className="category-list">
    <Grid padded>
        {categories.map((category) =>
          <Grid.Column key={category.value} mobile={16} tablet={8} computer={4} className="category">
            <div className="category__type">{category.type}</div>
          </Grid.Column>
          )
        }
    </Grid>
  </div>
);

export default CategoryList;
