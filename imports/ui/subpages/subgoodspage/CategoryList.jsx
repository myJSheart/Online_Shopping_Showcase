import React, { Component, PropTypes } from 'react';
import { Collapse, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router';


class CategoryList extends Component {
  constructor(props) {
    super(props);
    /**
     * maintain two arraies,
     * @param {Array} goodscategory all categories that should display in the check list
     */
    this.state = {
      collapse: true,
      goodscategory: ['wall', 'potted', 'massive', 'combo'],
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const lists = this.state.goodscategory.map(
      (category) => {
        return (
          <ListGroupItem>
            <Button color="link">
              <Link to={`/goodspage/${category}`}>
                {category}
              </Link>
            </Button>
          </ListGroupItem>
        );
      },
    );
    return (
      <div>
        <Button 
          color="link"
          size="lg"
          onClick={() => { this.handleCollapse(); }}
        >Types</Button>
        <Collapse isOpen={this.state.collapse}>
          <ListGroup>
            {lists}
          </ListGroup>
        </Collapse>
      </div>
    );
  }
}

CategoryList.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(CategoryList);
