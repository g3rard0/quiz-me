import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CategoryList = ({categories}) => (
  <div className="category-list">
    <Grid padded>
        {categories.map((category) =>
          <Grid.Column key={category.value} mobile={16} tablet={8} computer={4} className="category">
            <Link to={`categories/${category.value}`}>
              <div className="category__type">{category.type}</div>
            </Link>
          </Grid.Column>
          )
        }
    </Grid>
  </div>
);

export default CategoryList;
