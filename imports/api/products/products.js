import { Mongo } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Products = new Mongo.Collection('products');

Products.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return false; },
});

Products.schema = new SimpleSchema({
  name: { type: String, optional: false },
  types: { type: [String], optional: false },
  'types.$': { type: String, optional: true },
  url: { type: String, optional: false },
  num: { type: Number },
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

export default Products;
