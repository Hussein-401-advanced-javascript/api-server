'use strict';
require('dotenv').config();
const express = require('express');
const notFoundHandler = require('./middleware/404.js')
const errorHandler = require('./middleware/500.js')
const loggerhandler = require('./middleware/logger.js')
const timestampHandler = require('./middleware/timestamp.js')
const app = express();
/**************************************************************************/
app.use(express.json());
app.use(loggerhandler);
/**************************************************************************/
let productsArrayrDB = [
];
/**************************************************************************/
app.post('/api/v1/products', timestampHandler, (req, res) => {
    console.log('req.body====>', req.body);
    let record = {
        id: req.body.id,
        category: req.body.category,
        name: req.body.name,
        display_name: req.body.display_name,
        description: req.body.description,
    };
    productsArrayrDB.push(record);
    res.status(200).json(record);
});

/**************************************************************************/
app.get('/api/v1/products', timestampHandler, (req, res) => {
    console.log('req.body====>', req.body);

    res.status(200).json(productsArrayrDB);
});
/**************************************************************************/
app.get('/api/v1/products/?id', timestampHandler, (req, res) => {
    let id = req.params.id;
    productsArrayrDB.forEach(val => {
        if (val.id == id) {
            // result = val;
            res.status(200).json(val);
        }
    });
});
/**************************************************************************/
app.get('/api/v1/products/:id', timestamp, (req, res) => {
    console.log('req.query: ', req.query);
    console.log('req.params: ', req.params);
    let id = req.params.id;
    res.status(200).json(productsArrayrDB[id]);
});

/**************************************************************************/
app.put('/api/v1//products/:id', (req, res) => {
    let id = req.params.id;
    let {id, name, display_name, description } = req.body;
    let record = { id, name, display_name, description };
    productsArrayrDB[id] = record;
    res.status(200).json(productsArrayrDB[id]);
});
/**************************************************************************/
app.delete('/api/v1//products/:id', (req, res) => {
    let id = req.params.id;
    categoriesArrayrDB.splice(id, 1);
    res.status(200).send('deleted :)');
});

/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
let categoriesArrayrDB = [
];
app.post('/api/v1/categories', timestampHandler, (req, res) => {
    console.log('req.body====>', req.body);
    let record = {
        id: req.body.id,
        category: req.body.category,
        name: req.body.name,
        display_name: req.body.display_name,
        description: req.body.description,
    };
    productsArrayrDB.push(record);
    res.status(200).json(record);
});

/**************************************************************************/
app.get('/api/v1/categories', timestampHandler, (req, res) => {
    console.log('req.body====>', req.body);

    res.status(200).json(productsArrayrDB);
});
/**************************************************************************/
app.get('/api/v1/categories/?id', timestampHandler, (req, res) => {
    let id = req.params.id;
    productsArrayrDB.forEach(val => {
        if (val.id == id) {
            // result = val;
            res.status(200).json(val);
        }
    });
});
/**************************************************************************/
app.get('/api/v1/categories/:id', timestamp, (req, res) => {
    console.log('req.query: ', req.query);
    console.log('req.params: ', req.params);
    let id = req.params.id;
    res.status(200).json(productsArrayrDB[id]);
});

/**************************************************************************/
app.put('/api/v1//categories/:id', (req, res) => {
    let id = req.params.id;
    let { id, name, display_name, description } = req.body;
    let record = { id, name, display_name, description };
    productsArrayrDB[id] = record;
    res.status(200).json(productsArrayrDB[id]);
});
/**************************************************************************/
app.delete('/api/v1//categories/:id', (req, res) => {
    let id = req.params.id;
    categoriesArrayrDB.splice(id, 1);
    res.status(200).send('deleted :)');
});

/**************************************************************************/
app.use('*', notFoundHandler);
app.use(errorHandler)
/**************************************************************************/
module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3030;
        app.listen(PORT, () => console.log(`server is running on ${PORT}`))
    }
};