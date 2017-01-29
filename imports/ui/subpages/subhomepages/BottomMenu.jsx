import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';

class BottomMenu extends Component {
  render() {
    return (
      <div className="bottom-menu">
        <a href=""><p>Language</p></a>
        <a href=""><p>Store Locator</p></a>
        <a href=""><p>Newsletter</p></a>
        <a href=""><p>Careers</p></a>
      </div>
    );
  }
}

export default BottomMenu;
