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

  componentWillReceiveProps() {
    Object.keys(this.props.checkStateList).forEach((field) => {
      this.setState({
        [field]: !this.props[field],
      });
    });
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.wall}
          label="Wall"
          onChange={this.handleChange('wall')}
        />
        <Checkbox
          checked={this.state.wall}
          label="Potted"
          onChange={this.handleChange('potted')}
        />
        <Checkbox
          checked={this.state.wall}
          label="Massive"
          onChange={this.handleChange('massive')}
        />
        <Checkbox
          checked={this.state.wall}
          label="combo"
          onChange={this.handleChange('combo')}
        />
      </div>
    );
  }
}

CategoryTitle.propTypes = {
  checkStateList: PropTypes.object || { wall: false, potted: false, massive: false, combo: false },
};

export default CategoryTitle;
