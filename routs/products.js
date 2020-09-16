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
/**
 * this function will post me a new item 
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function postProductsHandler(req, res, next) {
  console.log('req.body====>', req.body);
  products.create(req.body).then(results => {
    res.status(201).json(results);
  }).catch(next);
}

/**************************************************************************/
/**
 * this function will get me the  all items
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function getProductsHandler(req, res, next) {
  console.log('req.body====>', req.body);
  products.get().then(results => {
    let count = results.length;
    res.status(201).json({count, results});
  }).catch(next);
}
/**************************************************************************/
/**
 * this function will get me the item by is id 
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function getByIDProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.get(id).then(results => {
    res.status(201).json(results);
  }).catch(next);
}
/**************************************************************************/
/**
 * this function will update me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function putProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.update(id, req.body).then(results => {
    res.status(201).json(results);
  }).catch(next);
}
// /**************************************************************************/
/**
 * this function will delete me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function deleteProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.delete(id).then(results => {
    res.status(201).json(results);
  }).catch(next);
}

// /**************************************************************************/
/**
 * this function will update me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function patchProductsHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  products.update(id, req.body).then(results => {
    res.status(201).json(results);
  }).catch(next);
}
// /**************************************************************************/
module.exports = router;