import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Routers from '/imports/ui/layouts/Routers.jsx';

Meteor.startup(() => {
  render(<Routers />, document.getElementById('render-target'));
});
