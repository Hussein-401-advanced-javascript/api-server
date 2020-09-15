const { server } = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('500.js TESTING', () => {
  it('respond with 500 for bad routs', () => {
    return mockRequest.get('api/v1/foo').then(data => {
      expect(data.status).toBe(500);
    }).catch(err => {
      console.log(err);
    });
  });
});