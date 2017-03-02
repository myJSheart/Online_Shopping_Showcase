import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Products = new Mongo.Collection('products');

Products.allow({
  insert() { return false; },
  update() { return true; },
  remove() { return false; },
});

Products.schema = new SimpleSchema({
  name: { type: String, optional: false },
  type: { type: String, optional: false },
  url: { type: String, optional: false },
  num: { type: Number, optional: false },
  price: { type: String, optional: false },
  origin: { type: String, optional: false },
  describe: { type: String, optional: true },
  createdAt: {
    type: Date,
    autoValue: () => {
      if (this.isInsert()) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      return this.unset();
    },
  },
  updatedAt: {
    type: Date,
    autoValue: () => {
      if (this.isUpdate) {
        return new Date();
      }
      return this.unset();
    },
    denyInsert: true,
    optional: true,
  },
  updatesHistory: {
    type: Array,
    optional: true,
    autoValue: () => {
      const num = this.field('num');
      if (num.isSet) {
        if (this.isInsert) {
          return [{
            date: new Date(),
            num: num.value,
          }];
        }
        return {
          $push: {
            date: new Date(),
            num: num.value,
          },
        };
      }
      return this.unset();
    },
  },
  'updatesHistory.$': {
    type: Object,
  },
  'updatesHistory.$.date': {
    type: Date,
    optional: true,
  },
  'updatesHistory.$.num': {
    type: String,
    optional: true,
  },
});

Products.attachSchema(Products.schema);

Products.publicFields = {
  _id: 1,
  name: 1,
  type: 1,
  url: 1,
  num: 1,
  price: 1,
  origin: 1,
  describe: 1,
};

export default Products;
