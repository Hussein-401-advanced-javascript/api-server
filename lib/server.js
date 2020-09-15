'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const productsRouts = require ('../routs/products');
const categoriesRouts = require ('../routs/categories');
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerhandler = require('./middleware/logger.js');
const app = express();
/**************************************************************************/
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(loggerhandler);
app.use('/api/v1', productsRouts);
app.use('/api/v1', categoriesRouts);
/**************************************************************************/
app.use('*', notFoundHandler);
app.use(errorHandler);
/**************************************************************************/
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3030;
    app.listen(PORT, () => console.log(`server is running on ${PORT}`));
  },
};