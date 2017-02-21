import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Cell } from 'react-mdl';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
          Pagination, PaginationItem, PaginationLink,
            Progress } from 'reactstrap';
import ProductItem from '../../components/ProductItem.jsx';

class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: this.props.goodsList,
      dropdownOpen: false,
      dropdownSelection: 'Sort By',
      dropdownSelectionCode: 0,
      pageNum: 1,
      pages: 1,
    };
    [
      'dropdownToggle',
      'dropdownSelect',
      'mergeSort',
      'previousPage',
      'toPage',
      'nextPage',
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  dropdownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  dropdownSelect(SortBy) {
    if (SortBy === 1) { // Price -- Lowest to Highest
      this.setState({ dropdownSelectionCode: 1, dropdownSelection: 'Price -- Lowest to Highest' });
    } else if (SortBy === 2) { // Price -- Highest to Lowest
      this.setState({ dropdownSelectionCode: 2, dropdownSelection: 'Price -- Highest to Lowest' });
    } else { // Default
      this.setState({ dropdownSelectionCode: 0, dropdownSelection: 'Sort By' });
    }
  }

  /**
   * Sort products by Price
   * @return {Array} productsArray     an sorted array
   */
  sortProducts() {
    const productsArray = this.state.goodsList;
    if (this.state.dropdownSelection === 1) { // Price -- Lowest to Highest
      for (let i = 0; i < productsArray.length; i++) {
        for (let j = 1; j < productsArray.length; j++) {
          if (productsArray[i].price > productsArray[j].price) {
            const temp = productsArray[j];
            productsArray[j] = productsArray[i];
            productsArray[i] = temp;
          }
        }
      }
    } else if (this.state.dropdownSelectionCode === 2) {
      for (let i = 0; i < productsArray.length; i++) {
        for (let j = 1; j < productsArray.length; j++) {
          if (productsArray[i].price < productsArray[j].price) {
            const temp = productsArray[j];
            productsArray[j] = productsArray[i];
            productsArray[i] = temp;
          }
        }
      }
    } else {
      return productsArray;
    }
    return productsArray;
  }

  /**
   * Turn to the previous page
   */
  previousPage() {
    this.setState({ pageNum: this.state.pageNum - 1 });
  }

  /**
   * Turn to page
   */
  toPage(pageNum) {
    this.setState({ pageNum });
  }

  /**
   * Turn to the next page
   */
  nextPage() {
    this.setState({ pageNum: this.state.pageNum + 1 });
  }

  render() {
    this.setState({ pages: (this.state.goodsList.length / 10) + 1 });
    const productsView = (
      () => {
        const productsArray = this.sortProducts();
        const start = (this.state.pageNum * 10) - 10;
        const end = this.state.pageNum * 10;
        for (let i = start; i < end; i++) {
          return (
            <ProductItem goodsItem={productsArray[i]} />
          );
        }
      }
    );

    const pageView = (
      <Pagination>
        <PaginationItem disabled={() => { return this.state.pageNum === 1; }}>
          <PaginationLink previous onClick={this.previousPage()} />
        </PaginationItem>
        {
          () => {
            for (let i = 0; i < this.state.pages; i++) {
              if (this.state.pageNum === i + 1) {
                return (
                  <PaginationItem active={() => { return this.state.pageNum === i + 1; }} >
                    <PaginationLink onClick={this.toPage(i + 1)}>
                      { () => { return i + 1; } }
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              return (
                <PaginationItem active={() => { return this.state.pageNum === i + 1; }}>
                  <PaginationLink onClick={this.nextPage()}>
                    { () => { return i + 1; } }
                  </PaginationLink>
                </PaginationItem>
              );
            }
          }
        }
        <PaginationItem disabled={() => { return this.state.pageNum === this.state.pages; }}>
          <PaginationLink next onClick={this.nextPage()} />
        </PaginationItem>
      </Pagination>
    );

    const withProducts = (
      <Grid>
        <Cell col={12} tablet={8} phone={6}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
            <DropdownToggle caret>
              {this.state.dropdownSelection}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.dropdownSelect(1)}>
                Price -- Lowest to Highest
              </DropdownItem>
              <DropdownItem onClick={() => this.dropdownSelect(2)}>
                Price -- Highest to Lowest
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Cell>
        {productsView}
        {pageView}
      </Grid>
    );

    const withoutProducts = (
      <div>
        <Progress animated color="info" value={100} />
        {pageView}
      </div>
    );

    return (
      { withProducts }
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
