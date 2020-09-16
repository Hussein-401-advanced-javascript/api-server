'use strict';
const express = require('express');
const router = express.Router();
const categories = require('../models/categories/categories-collectio');
const products = require('../models/products/products-collectio');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/:model', getAllItemsHandler);
router.param('model', getModel);
/**
 * this function will get me the categories-collectio or products-collectio
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function getModel(req, res, next){
  let model = req.params.model;
  switch(model){
  case'categories':
    req.model=categories;
    next();
    break;
  case'products':
    req.model=products;
    next();
    break;
  default:
    next('INVALID MODEL');
    break;
  }
}
/**
 * this function will get me the  all items
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function getAllItemsHandler(req, res, next){
  let model = req.model; 
  model.get().then(results =>{
    let count = results.length;
    res.status(201).json({count, results});
  }).catch(next);
}
/********************************************************************************************************************/
/********************************************************************************************************************/ 
/********************************************************************************************************************/ 
/**
 * this function will post me a new item 
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
router.post('/:model', postAllItemsHandler);
function postAllItemsHandler(req, res, next){
  let model = req.model; 
  model.create(req.body).then(results =>{
    res.status(201).json(results);
  }).catch(next);
}
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/
// /********************************************************************************************************************/
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
router.get('/:model/:id', getByIDItemsHandler);
/**
 * this function will get me the item by is id 
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function getByIDItemsHandler(req, res, next){
  let model = req.model; 
  let  id = req.params.id;
  model.get(id).then(results =>{
    res.status(201).json(results);
  }).catch(next);
}
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
router.put('/:model/:id', putItemsHandler);
/**
 * this function will update me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function putItemsHandler(req, res, next){
  let model = req.model; 
  let id = req.params.id;
  model.update(id, req.body).then(results =>{
    res.status(201).json(results);
  }).catch(next);
}
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/
router.delete('/:model/:id', deletetemsHandler);
/**
 * this function will delete me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function deletetemsHandler(req, res, next){
  let model = req.model;
  let id = req.params.id; 
  model.delete(id).then(results =>{
    res.status(201).json(results);
  }).catch(next);
}
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/ 
// /********************************************************************************************************************/
router.patch('/:model/:id', patchtemsHandler);
/**
 * this function will update me the  an items by its ID
 * @param {object} req 
 * @param {object} res 
 * @param {callBackFunction} next 
 */
function patchtemsHandler(req, res, next){
  let id = req.params.id;
  let model = req.model; 
  model.update(id, req.body).then(results =>{
    res.status(201).json(results);
  }).catch(next);
}
/********************************************************************************************************************/ 
/********************************************************************************************************************/ 
/********************************************************************************************************************/
module.exports = router;