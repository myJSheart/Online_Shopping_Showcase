import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { TAPi18n } from 'meteor/tap:i18n';

class HeaderNav extends Component {
  render() {
    return (
      <div>
        <div className="subheader">
          <Button className="link" color="link">{TAPi18n.__('header.subheader.storelocator')}</Button>
          <Button className="link" color="link">{TAPi18n.__('header.subheader.customerservice')}</Button>
          <Button className="link" color="link">{TAPi18n.__('header.subheader.subscribe')}</Button>
        </div>
        <br />
        <div className="megamenu">
          <Button className="button" color="link">{TAPi18n.__('header.megamenu.ladies')}</Button>
          <Button className="button" color="link">{TAPi18n.__('header.megamenu.men')}</Button>
          <Button className="button" color="link">{TAPi18n.__('header.megamenu.kid')}</Button>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
