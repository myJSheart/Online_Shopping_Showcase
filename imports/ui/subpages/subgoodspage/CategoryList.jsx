import React, { Component, PropTypes } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';


class CategoryTitle extends Component {
  constructor(props) {
    super(props);
    /**
     * maintain two arraies,
     * @param {Array} checkStateList record elements that are checked
     * @param {Array} goodscategory all categories that should display in the check list
     */
    this.state = {
      checkStateList: this.props.checkStateList,
      goodscategory: ['wall', 'potted', 'massive', 'combo'],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checkStateList: nextProps.checkStateList,
    });
  }

  handleChange(value) {
    const tempArray = this.state.checkStateList;
    if (tempArray.includes(value)) {
      tempArray.slice(tempArray.indexOf(value), 1);
      this.setState({
        checkStateList: tempArray,
      });
      this.props.sendCheckList(tempArray);
    } else {
      tempArray.push(value);
      this.setState({
        checkStateList: tempArray,
      });
      this.props.sendCheckList(tempArray);
    }
  }

  render() {
    return (
      <div>
        {
          () => {
            this.state.goodscategory.forEach((cate) => {
              return (
                <Checkbox
                  checked={() => { this.state.checkStateList.includes(cate); }}
                  label={cate}
                  onChange={this.handleChange(cate)}
                />
              );
            });
          }
        }
      </div>
    );
  }
}

CategoryTitle.propTypes = {
  checkStateList: PropTypes.object.isRequired,
  sendCheckList: PropTypes.func.isRequired,
};

export default CategoryTitle;
