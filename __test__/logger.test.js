'use strict';
const logger = require ('../lib/middleware/logger');

describe('logger  ', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  let req = {};
  let res = {};
  let next = jest.fn();

  it('properly logs requests', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});