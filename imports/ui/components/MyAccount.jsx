import React, { Component, PropTypes } from 'react';
// import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import { Badge, Icon } from 'react-mdl';

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: this.props.popoverOpen,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      popoverOpen: nextProps.popoverOpen,
    });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
    this.props.handlePopoverOpen(this.state.popoverOpen);
  }

  // render() {
  //   const icon = (<img className="my-account" width="50px" height="50px" src="account.png" alt="Access Your Account" />);
  //   return (
  //     <IconMenu icon={icon} position="bottom" menuRipple>
  //       <MenuItem value="wishlist" icon="favorite" caption="Wishlist" />
  //       <MenuItem value="shoppingcart" icon="shopping_cart" caption="Shopping Cart" />
  //       <MenuDivider />
  //       <MenuItem value="signout" icon="exit_to_app" caption="Sign Out" />
  //     </IconMenu>
  //   );
  // }

  render() {
    return (
      <Popover
        isOpen={this.state.popoverOpen}
        placement="right"
        toggle={this.toggle}
        target="jr-studio-myaccount"
      >
        <PopoverContent>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>
            <List>
              <ListItem
                avatar="logo.png"
                caption="JRStudio"
                legend="Good Morning"
              />
              <ListDivider />
              <ListItem caption="Wishlist" leftIcon="star" />
              <ListItem
                caption="Your Cart"
                leftIcon={
                  <Badge text="3" overlap>
                    <Icon name="shopping_cart" />
                  </Badge>
                }
              />
              <ListItem caption="Settings" left="settings" />
              <ListDivider />
              <ListItem caption="Log Out" left="exit to app" />
            </List>
          </PopoverContent>
        </PopoverContent>
      </Popover>
    );
  }
}

MyAccount.propTypes = {
  popoverOpen: PropTypes.bool.isRequired,
  handlePopoverOpen: PropTypes.func.isRequired,
};

export default MyAccount;
