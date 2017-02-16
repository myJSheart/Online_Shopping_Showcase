import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';
import CategoryList from '../subpages/subgoodspage/CategoryList.jsx';
import GoodsList from '../subpages/subgoodspage/GoodsList.jsx';

class GoodsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodscategory: ['wall', 'potted', 'massive', 'combo'],
    };
  }
  render() {
    if (this.props.location.query.goodscategory === '' ||
        this.props.location.query.goodscategory === null ||
        this.props.location.query.goodscategory === 'all') {
      this.setState({ goodscategory: ['wall', 'potted', 'massive', 'combo'] });
    } else if (this.props.location.query.goodscategory === 'wall') {
      this.setState({ goodscategory: ['wall'] });
    } else if (this.props.location.query.goodscategory === 'potted') {
      this.setState({ goodscategory: ['potted'] });
    } else if (this.props.location.query.goodscategory === 'massive') {
      this.setState({ goodscategory: ['massive'] });
    } else if (this.props.location.query.goodscategory === 'combo') {
      this.setState({ goodscategory: ['combo'] });
    }

    return (
      <Grid>
        <Cell col={3} tablet={2} phone={2}>
          <CategoryList />
        </Cell>
        <Cell col={9} tablet={6} phone={4}>
          <GoodsList />
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
