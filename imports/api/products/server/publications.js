import { Meteor } from 'meteor/meteor';
import { Products } from '../products.js';

Meteor.publish('products.public', () => {
  return Products.find({ fields: Products.publicFields });
});
