import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './style.css';
import HeaderNav from '../../components/HeaderNav.jsx';
import Currency from '../../components/Currency.jsx';

class Header extends Component {
  render() {
    return (
      <Grid className="homepage-header">
        <Cell offsetDesktop={2} col={8} tablet={8} phone={6}>
          <img src="logo.png" alt="Fast Buy" href="/homepage" />
          <div className="context">
            <HeaderNav />
          </div>
          <div className="currency">
            <Currency />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Header;
