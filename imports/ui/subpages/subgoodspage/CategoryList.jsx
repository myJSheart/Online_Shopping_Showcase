import React, { Component, PropTypes } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

class CategoryTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wall: false,
      potted: false,
      massive: false,
      combo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.wall}
          label="Wall"
          onChange={this.handleChange('wall')}
        />
      </div>
    );
  }
}

CategoryTitle.propTypes = {
  checkStateList: PropTypes.object,
};

export default CategoryTitle;
