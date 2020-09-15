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
function postcategoriesHandler(req, res, next) {
  console.log('req.body====>', req.body);
  categories.create(req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}

/**************************************************************************/
function getcategoriesHandler(req, res, next) {
  console.log('req.body====>', req.body);
  categories.get().then(data => {
    res.status(201).json(data);
  }).catch(next);
}
/**************************************************************************/
function getByIDcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.get(id).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
/**************************************************************************/
function putcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.update(id, req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
// /**************************************************************************/
function deletecategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.delete(id).then(data => {
    res.status(201).json(data);
  }).catch(next);
}

// /**************************************************************************/
function patchcategoriesHandler(req, res, next) {
  const id = req.params.id;
  console.log('req.body====>', req.body);
  categories.update(id, req.body).then(data => {
    res.status(201).json(data);
  }).catch(next);
}
// /**************************************************************************/
module.exports = router;