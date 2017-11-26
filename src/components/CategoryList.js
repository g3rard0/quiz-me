import React from 'react';
import categories from '../categories';
import { Grid } from 'semantic-ui-react';

const CategoryList = () => (
  <div className="category-list">
    <Grid>
        {categories.map((category) =>
          <Grid.Column key={category.value} mobile={16} tablet={8} computer={4} className="category">
            <div className="category__type">{category.type}</div>
            {/*<div className="category__value">{category.value}</div>*/}
          </Grid.Column>
          )
        }
    </Grid>
    {/*<pre>{JSON.stringify(categories, null, 2)}</pre>*/}
  </div>
);

export default CategoryList;
