'use strict';
const schema = require ('./categories-schema');
const Model = require ('../mongo-model');
class categories extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new categories;