import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'AUD',
    };
  }
  render() {
    return (
      <div>
        <p>{TAPi18n.__('header.currency', { currency: this.state.language })}
          <div>
            
          </div>
        </p>
      </div>
    );
  }
}

export default Currency;
