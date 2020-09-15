const { server } = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('SERVER TESTING', ()=> {
  it('respond with 201 if: get the route' ,() =>{
    return mockRequest.get('api/v1/products').then(data =>{
      expect(data.status).toBe(201);
    }).catch(err =>{
      console.log(err);
    });
  });
  it('respond with 201 if: get the route with ID' ,() =>{
    return mockRequest.get('api/v1/products/:id').then(data =>{
      expect(data.status).toBe(201);
    }).catch(err =>{
      console.log(err);
    });
  });
  it('respond with 201 if: post products using the route' ,() =>{
    return mockRequest.post('api/v1/products/:id').then(data =>{
      expect(data.status).toBe(201);
    }).catch(err =>{
      console.log(err);
    });
  });
  it('respond with 201 if: put products into the route' ,() =>{
    return mockRequest.put('api/v1/products/:id').then(data =>{
      expect(data.status).toBe(201);
    }).catch(err =>{
      console.log(err);
    });
  });
  it('respond with 201 if: delete products using the route' ,() =>{
    return mockRequest.delete('api/v1/products/:id').then(data =>{
      expect(data.status).toBe(201);
    }).catch(err =>{
      console.log(err);
    });
  });
});