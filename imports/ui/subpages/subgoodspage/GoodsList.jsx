import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Cell, Menu } from 'react-mdl';
import ProductItem from '../../components/ProductItem.jsx';

class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: this.props.goodsList,
    };
  }

  render() {
    return (
      <Grid>
        <Cell col={12} tablet={8} phone={6}>

        </Cell>
        {
          this.stae.goodsList.forEach((item) => {
            return (
              <Cell col={2} tablet={2} phone={2}>
                <ProductItem goodItem={item} />
              </Cell>
            );
          })
        }
      </Grid>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.object.isRequired,
};

const GoodsListContainer = createContainer(() => {
  return Meteor.subscribe('products.public');
}, GoodsList);

export default GoodsListContainer;
