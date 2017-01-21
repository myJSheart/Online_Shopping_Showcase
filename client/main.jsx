import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Routers from '/imports/ui/layout/Routers.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

Meteor.startup(() => {
  render(<Routers />, document.getElementById('render-target'));
});
