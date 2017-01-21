import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { TAPi18n } from 'meteor/tap:i18n';
import { Grid, Cell } from 'react-mdl';

class HeaderNav extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell offsetDesktop={3} col={2} offsetTablet={1} tablet={2} phone={2}>
            <a className="sublink" href=""><center>{TAPi18n.__('header.subheader.storelocator')}</center></a>
          </Cell>
          <Cell col={2} tablet={2} phone={2}>
            <a className="sublink" href=""><center>{TAPi18n.__('header.subheader.storelocator')}</center></a>
          </Cell>
          <Cell col={2} tablet={2} phone={2}>
            <a className="sublink" href=""><center>{TAPi18n.__('header.subheader.subscribe')}</center></a>
          </Cell>
          <Cell offsetDesktop={3} col={2} offsetTablet={1} tablet={2} phone={2}>
            <a className="mainlink" href=""><center>{TAPi18n.__('header.megamenu.ladies')}</center></a>
          </Cell>
          <Cell col={2} tablet={2} phone={2}>
            <a className="mainlink" href=""><center>{TAPi18n.__('header.megamenu.men')}</center></a>
          </Cell>
          <Cell col={2} tablet={2} phone={2}>
            <a className="mainlink" href=""><center>{TAPi18n.__('header.megamenu.kid')}</center></a>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HeaderNav;
