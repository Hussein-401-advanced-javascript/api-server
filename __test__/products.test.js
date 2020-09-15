'use strict';

require('@code-fellows/supergoose');

const products = require('../models/products/products-collectio');

describe('products Model', () => {
  it('it can create()', async () => {
    const productsObj = { category: 'foo', name: 'foo', display_name: 'foo', description: 'foo' };
    const result = await products.create(productsObj);
    Object.keys(productsObj).forEach(key => {
      expect(result[key]).toEqual(productsObj[key]);
    });
  });
  it('it can get()', async () => {
    const productsObj = { category: 'fooo', name: 'fooo', display_name: 'fooo', description: 'foo' };
    const result = await products.create(productsObj);
    const records = await products.get(result._id); // []
    console.log('records >>>> ', records);
    Object.keys(productsObj).forEach(key => {
      expect(records[0][key]).toEqual(productsObj[key]);
    });
  });
  it('it can update()', async () => {
    const productsObj = { category: 'foooo', name: 'foooo', display_name: 'foooo', description: 'foooo' };
    const productsObj2 = { category: 'foooo2', name: 'foooo2', display_name: 'foooo2', description: 'foooo2' };
    const result = await products.create(productsObj);
    const updatedRecords = await products.update(result._id, productsObj2);
    const data = await products.get(result._id);
    console.log('updatedRecords >>>> ', updatedRecords);
    Object.keys(productsObj2).forEach(key => {
      expect(data[0][key]).toEqual(productsObj2[key]);
    });
  });
  it('it can delete()', async () => {
    const productsObj = { category: 'foooo', name: 'foooo', display_name: 'foooo', description: 'foooo' };
    const result = await products.create(productsObj);
    const updatedRecords = await products.delete(result._id);
    console.log('updatedRecords >>>> ', updatedRecords);
    // console.log("records >>>> ", records)
    Object.keys(productsObj).forEach(key => {
      expect(updatedRecords[key]).toEqual(productsObj[key]);
    });
  });

});