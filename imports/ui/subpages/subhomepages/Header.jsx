import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header style={{ background: '#BADDD6' }} className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <img src="logo.png" alt={TAPi18n.__('title.websitename')} width="80px" height="80px" href="/homepage/" />
            </span>
            <div className="mdl-layout-spacer" />
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a style={{ color: '#616161' }} className="mdl-navigation__link" href="">{TAPi18n.__('header.link.interior')}</a>
              <a style={{ color: '#616161' }} className="mdl-navigation__link" href="">{TAPi18n.__('header.link.outdoor')}</a>
              <a style={{ color: '#616161' }} className="mdl-navigation__link" href="">{TAPi18n.__('header.link.artwork')}</a>
            </nav>
            <div>
              <img width="50px" height="50px" src="account.png" alt="Access Your Account" />
            </div>
            <div
              className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right"
            >
              <label
                className="mdl-button mdl-js-button mdl-button--icon"
                htmlFor="waterfall-exp"
              >
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input
                  className="mdl-textfield__input" type="text"
                  id="waterfall-exp"
                  placeholder="Green World"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{TAPi18n.__('title.websitename')}</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">{TAPi18n.__('header.link.interior')}</a>
            <a className="mdl-navigation__link" href="">{TAPi18n.__('header.link.outdoor')}</a>
            <a className="mdl-navigation__link" href="">{TAPi18n.__('header.link.artwork')}</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
