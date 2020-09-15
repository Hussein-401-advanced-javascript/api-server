'use strict';
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {CallabackFunction} next 
 */
function timestamp(req, res, next){
  let currentTime = new Date().toDateString();
  req.timestamp = currentTime;
  next();

}

module.exports = timestamp;