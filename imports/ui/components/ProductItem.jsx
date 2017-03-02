import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsItem: this.props.goodsItem,
    };
  }

  render() {
    return (
      <div className="productitem">
        <img src={`${Meteor.settings.public.siteUrl}${this.state.goodsItem.url}`} alt={this.state.goodsItem.name} />
        <div className="overlayer">
          <div className="overbutton"><Button label="Save" icon="favorite" flat /></div>
          <div className="overbutton"><Button label="Buy" icon="shopping_cart" raised primary /></div>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  goodsItem: PropTypes.object.isRequired,
};

export default ProductItem;
