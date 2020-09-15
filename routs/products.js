'use strict';
const express = require('express');
const products = require('../models/products/products-collectio');
const router = express.Router();
const timestampHandler = require('../lib/middleware/timestamp');

/**************************************************************************/
router.post('/products',timestampHandler, postProductsHandler);
router.get('/products',timestampHandler, getProductsHandler);
router.get('/products/:id',timestampHandler, getByIDProductsHandler);
router.put('/products/:id',timestampHandler, putProductsHandler);
router.patch('/products/:id',timestampHandler, patchProductsHandler);
router.delete('/products/:id',timestampHandler, deleteProductsHandler);
/**************************************************************************/
// app.post('/api/v1/products', timestampHandler, (req, res) => 
function postProductsHandler(req, res, next) {
  console.log('req.body====>', req.body);
  products.create(req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}

/**************************************************************************/
function getProductsHandler(req, res, next) {
  console.log('req.body====>', req.body);
  products.get().then(data => {
    res.status(201).json(data);
  }).catch(next);
}
/**************************************************************************/
function getByIDProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.get(id).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
/**************************************************************************/
function putProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.update(id, req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
// /**************************************************************************/
function deleteProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.delete(id).then(data => {
    res.status(201).json(data);
  }).catch(next);
}

// /**************************************************************************/
function patchProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.update(id, req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
// /**************************************************************************/
module.exports = router;