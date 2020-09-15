'use strict';
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {CallabackFunction} next 
 */
module.exports = (req, res, next) => {
  let err;
  res.status(500);
  res.json({ error: err });
};

