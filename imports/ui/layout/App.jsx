import React, { Component, PropTypes } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import Bottom from './Bottom.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
  }

  handlePopoverOpen(popoverOpen) {
    this.setState({
      popoverOpen,
    });
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header style={{ background: '#2C3E50' }} className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <img src="logo.png" alt={TAPi18n.__('title.websitename')} width="80px" height="80px" />
            </span>
            <div className="mdl-layout-spacer" />
            <nav className="mdl-navigation mdl-layout--large-screen-only" style={{ marginRight: '5px' }}>
              <a style={{ color: '#FFFFFF' }} className="mdl-navigation__link header-link" href="goodspage/wall">{TAPi18n.__('header.link.wall')}</a>
              <a style={{ color: '#FFFFFF' }} className="mdl-navigation__link header-link" href="goodspage/potted">{TAPi18n.__('header.link.potted')}</a>
              <a style={{ color: '#FFFFFF' }} className="mdl-navigation__link header-link" href="goodspage/massive">{TAPi18n.__('header.link.massive')}</a>
              <a style={{ color: '#FFFFFF' }} className="mdl-navigation__link header-link" href="goodspage/combo">{TAPi18n.__('header.link.combo')}</a>
            </nav>
            <div
              style={{ paddingLeft: '5px' }}
              className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right"
            >
              <label
                className="mdl-button mdl-js-button mdl-button--icon"
                htmlFor="waterfall-exp"
              >
                <i style={{ paddingTop: '5px' }} className="material-icons">search</i>
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
        <div style={{ background: '#FFFFFF' }} className="mdl-layout__drawer">
          <span className="mdl-layout-title">{TAPi18n.__('title.websitename')}</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="goodspage/wall">{TAPi18n.__('header.link.wall')}</a>
            <a className="mdl-navigation__link" href="goodspage/potted">{TAPi18n.__('header.link.potted')}</a>
            <a className="mdl-navigation__link" href="goodspage/massive">{TAPi18n.__('header.link.massive')}</a>
            <a className="mdl-navigation__link" href="goodspage/combo">{TAPi18n.__('header.link.combo')}</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content mainframe">{this.props.children}<Bottom /></div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
