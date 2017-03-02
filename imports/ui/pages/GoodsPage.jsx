import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';
import { createContainer } from 'meteor/react-meteor-data';
import CategoryList from '../subpages/subgoodspage/CategoryList.jsx';
import GoodsList from '../subpages/subgoodspage/GoodsList.jsx';
import Products from '../../api/products/products.js';

class GoodsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodscategory: ['wall', 'potted', 'massive', 'combo'],
    };
    this.receiveCheckList = this.receiveCheckList.bind();
  }

  componentWillMount() {
    if (this.props.location.query.goodscategory === 'wall') {
      this.setState({ goodscategory: ['wall'] });
    } else if (this.props.location.query.goodscategory === 'potted') {
      this.setState({ goodscategory: ['potted'] });
    } else if (this.props.location.query.goodscategory === 'massive') {
      this.setState({ goodscategory: ['massive'] });
    } else if (this.props.location.query.goodscategory === 'combo') {
      this.setState({ goodscategory: ['combo'] });
    } else {
      this.setState({ goodscategory: ['wall', 'potted', 'massive', 'combo'] });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ready: nextProps.ready,
      products: nextProps.products,
    });
  }

  receiveCheckList(value) {
    this.setState({
      goodscategory: value,
    });
  }

  render() {
    return (
      <Grid>
        <Cell col={3} tablet={2} phone={2}>
          <CategoryList
            checkStateList={this.state.goodscategory}
            sendCheckList={this.receiveCheckList}
          />
        </Cell>
        <Cell col={9} tablet={6} phone={4}>
          <GoodsList
            goods={this.props.products}
            ready={this.props.ready}
          />
        </Cell>
      </Grid>
    );
  }
}

GoodsPage.propTypes = {
  ready: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      num: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      describe: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const GoodsPageContainer = createContainer(() => {
  const handle = Meteor.subscribe('products.public');
  const ready = handle.ready();
  const products = Products.find().fetch();
  if (ready) {
    return { ready, products };
  }
  return { ready };
}, GoodsPage);

export default GoodsPageContainer;
