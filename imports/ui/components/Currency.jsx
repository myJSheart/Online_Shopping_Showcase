import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      currency: 'AUD',
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {

  }

  render() {
    return (
      <div className="currency">
        <div>
          <p>{TAPi18n.__('header.currency.format', { currency: this.state.currency })}</p>
          <Dropdown size="sm" group isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.state.language}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >
                EN
              </DropdownItem>
              <DropdownItem>
                中文
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Currency;
