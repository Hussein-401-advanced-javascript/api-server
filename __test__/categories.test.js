'use strict';

require('@code-fellows/supergoose');

const categories = require('../models/categories/categories-collectio');

describe('categories Model', () => {
  it('it can create()', async () => {
    const categoriesObj = { category: 'foo', name: 'foo', display_name: 'foo', description: 'foo' };
    const result = await categories.create(categoriesObj);
    Object.keys(categoriesObj).forEach(key => {
      expect(result[key]).toEqual(categoriesObj[key]);
    });
  });
  it('it can get()', async () => {
    const categoriesObj = { category: 'fooo', name: 'fooo', display_name: 'fooo', description: 'foo' };
    const result = await categories.create(categoriesObj);
    const records = await categories.get(result._id); // []
    console.log('records >>>> ', records);
    Object.keys(categoriesObj).forEach(key => {
      expect(records[0][key]).toEqual(categoriesObj[key]);
    });
  });
  it('it can update()', async () => {
    const categoriesObj = { category: 'foooo', name: 'foooo', display_name: 'foooo', description: 'foooo' };
    const categoriesObj2 = { category: 'foooo2', name: 'foooo2', display_name: 'foooo2', description: 'foooo2' };
    const result = await categories.create(categoriesObj);
    const updatedRecords = await categories.update(result._id,categoriesObj2 );
    const data = await categories.get(result._id);
    console.log('updatedRecords >>>> ', updatedRecords);
    Object.keys(categoriesObj2).forEach(key => {
      expect(data[0][key]).toEqual(categoriesObj2[key]);
    });
  });
  it('it can delete()', async () => {
    const categoriesObj = { category: 'foooo', name: 'foooo', display_name: 'foooo', description: 'foooo' };
    const result = await categories.create(categoriesObj);
    const updatedRecords = await categories.delete(result._id);
    console.log('updatedRecords >>>> ', updatedRecords);
    // console.log("records >>>> ", records)
    Object.keys(categoriesObj).forEach(key => {
      expect(updatedRecords[key]).toEqual(categoriesObj[key]);
    });
  });

});