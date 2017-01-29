import React, { Component } from 'react';
import Newitem from '../subpages/subhomepages/Newitem.jsx';
import Sections from '../subpages/subhomepages/Sections.jsx';
import BottomMenu from '../subpages/subhomepages/BottomMenu.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Newitem />
        <Sections />
        <BottomMenu />
      </div>
    );
  }
}

export default HomePage;
