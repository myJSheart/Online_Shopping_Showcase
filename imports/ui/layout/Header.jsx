import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import MyAccount from '../components/MyAccount.jsx';

class Header extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      popoverOpen: false,
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
  }

  handlePopoverOpen(popoverOpen) {
    this.setState({
      popoverOpen,
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ background: '#2C3E50' }}>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand href="/">{<img alt="" src="logo.png" />}</NavbarBrand>
            <NavItem>
              <NavLink href="/plants/">Plants</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sullcent">Sullcent</NavLink>
            </NavItem>
            <NavItem>
              <div
                id="jr-studio-myaccount"
                onMouseEnter={() => this.handlePopoverOpen(true)}
                onMouseLeave={() => this.handlePopoverOpen(false)}
              >
                <img alt="" src="account.png" />
              </div>
            </NavItem>
          </Nav>
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">Fast Buy</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/plants/">Plants</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sullcent">Sullcent</NavLink>
              </NavItem>
              <NavItem>
                <div
                  id="jr-studio-myaccount"
                  onMouseEnter={() => this.handlePopoverOpen(true)}
                  onMouseLeave={() => this.handlePopoverOpen(false)}
                >
                  <img alt="" src="account.png" />
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <MyAccount
          popoverOpen={this.state.popoverOpen}
          handlePopoverOpen={this.handlePopoverOpen}
        />
      </div>
    );
  }
}

export default Header;
