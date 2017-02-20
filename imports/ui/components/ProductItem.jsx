import React, { Component, PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodItem: this.props.goodItem,
    };
  }

  render() {
    return (
      <div className="productitem">
        <img src={this.state.goodItem.url} alt={this.state.goodItem.name} />
        <div className="overlayer">
          <div className="overbutton"><Button label="Save" icon="favorite" flat /></div>
          <div className="overbutton"><Button label="Buy" icon="shopping_cart" raised primary /></div>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  goodItem: PropTypes.object.isRequired,
};

export default ProductItem;
