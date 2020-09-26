'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);


describe('server API', ()=> {

it('can post() a category item', async ()=> {
    let data = await mockRequest.post('/api/v1/categories')
    expect(data.status).toBe(201)
});

it('can get() a category item', async ()=> {
    let data = await mockRequest.get('/api/v1/categories')
    expect(data.status).toBe(201)
});
it('cat update() a category item',async()=>{
    return mockRequest.put('/api/v1/categories/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
it('cat patch() a category item',async()=>{
    return mockRequest.patch('/api/v1/categories/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
it('cat delete() a category item',async()=>{
    return mockRequest.delete('/api/v1/categories/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
/****************************************** */
it('can post() a products item', async ()=> {
    let data = await mockRequest.post('/api/v1/products')
    expect(data.status).toBe(201)
});

it('can get() a products item', async ()=> {
    let data = await mockRequest.get('/api/v1/products')
    expect(data.status).toBe(201)
});
it('cat update() a products item',async()=>{
    return mockRequest.put('/api/v1/products/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
it('cat update() a products item',async()=>{
    return mockRequest.patch('/api/v1/products/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
it('cat delete() a products item',async()=>{
    return mockRequest.delete('/api/v1/products/:id').then(data =>{
        expect(data.status).toBe(201)
    }).catch(error =>{
        console.log(error);
    })

});
});