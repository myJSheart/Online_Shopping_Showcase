import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';
import CategoryList from '../subpages/subgoodspage/CategoryList.jsx';
import GoodsList from '../subpages/subgoodspage/GoodsList.jsx';
import ShoppingCartList from '../subpages/subgoodspage/ShoppingCartList.jsx';

class GoodsPage extends Component {
  render() {
    let category = '';
    if (this.props.location.query.goodscategory === '' ||
        this.props.location.query.goodscategory === null ||
        this.props.location.query.goodscategory === 'all') {

    } else if (this.props.location.query.goodscategory === '') {

    }
    return (
      <Grid>
        <Cell col={2} tablet={2} phone={2}>
          <CategoryList />
        </Cell>
        <Cell col={8} tablet={6} phone={2}>
          <GoodsList />
        </Cell>
        <Cell col={2} tablet={2} phone={2}>
          <ShoppingCartList />
        </Cell>
      </Grid>
    );
  }
}

GoodsPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.object,
  }).isRequired,
};

export default GoodsPage;
