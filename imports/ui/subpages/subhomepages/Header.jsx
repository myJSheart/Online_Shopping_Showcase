import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './style.css';
import HeaderNav from '../../components/HeaderNav.jsx';
import Currency from '../../components/Currency.jsx';

class Header extends Component {
  render() {
    return (
      <div className="homepage-header">
        <Grid>
          <Cell offsetDesktop={2} col={1} offsetTablet={3} tablet={1} offsetPhone={2} phone={1}>
            <img src="logo.png" alt="Fast Buy" href="/homepage" />
          </Cell>
          <Cell col={6} tablet={8} phone={6}>
            <HeaderNav />
          </Cell>
          <Cell col={1} offsetTablet={3} tablet={1} offsetPhone={2} phone={1}>
            <Currency />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Header;
