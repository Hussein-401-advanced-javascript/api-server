'use strict';
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {CallabackFunction} next  
 */
module.exports= (req, res, next) => {
  res.status(404);
  res.send('the page not found 404');
};

