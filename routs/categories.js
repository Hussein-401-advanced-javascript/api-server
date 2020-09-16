'use strict';
const express = require('express');
const categories = require('../models/categories/categories-collectio');
const router = express.Router();
const timestampHandler = require('../lib/middleware/timestamp');

/**************************************************************************/
router.post('/categories',timestampHandler, postcategoriesHandler);
router.get('/categories',timestampHandler, getcategoriesHandler);
router.get('/categories/:id',timestampHandler, getByIDcategoriesHandler);
router.put('/categories/:id',timestampHandler, putcategoriesHandler);
router.patch('/categories/:id',timestampHandler, patchcategoriesHandler);
router.delete('/categories/:id',timestampHandler, deletecategoriesHandler);
/**************************************************************************/
/**
 * this function will post me a new item 
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function postcategoriesHandler(req, res, next) {
  console.log('req.body====>', req.body);
  categories.create(req.body).then(results => {
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
function getcategoriesHandler(req, res, next) {
  console.log('req.body====>', req.body);
  categories.get().then(results => {
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
function getByIDcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.get(id).then(results => {
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
function putcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.update(id, req.body).then(results => {
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
function deletecategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.delete(id).then(results => {
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
function patchcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.update(id, req.body).then(results => {
    res.status(201).json(results);
  }).catch(next);
}
// /**************************************************************************/
module.exports = router;