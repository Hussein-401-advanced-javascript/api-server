# api-server

##  HTTP and REST
 - In this app we will be building an API to serve data for a virtual storefront, which displays categories and products to a potential shopper
# LAB - Class 09
 - **Project:** api server
 - **Author**: Hussein AL Mohamad

## Modules
 1. index.js
 2. 404.js
 3. 500.js
 4. server.js
 5. timestamp.js
 6. logger.js
## Setup
- How to initialize/run the application
 1. node index.js
 2. nodemon
- How to use your library
  - **Tests**
    1. **Lint test**: `npm run lint`
    2. **Code test**: `npm run test`
## UML
 - Will be added after the entaire app completed.
## Solution
 - Create api-server repository
 - Install json-server globally on your computer `npm install -g json-server`
 - Create a folder in your api-server repository called data with a db.json file, with containers 
 - for your data models
 - `{ "categories" : [], "products": [] }`
 - Start json-server from within your working folder and “watch” your database file `json-server --watch ./data/db.json`
- Your api will automatically respond to the following endpoints:   
`/categories GET, POST`
`/categories/:id/ PUT, DELETE`
`/products GET, POST`
`/products/:id/ PUT, DELETE`
 ## swaggerhub Documentation
[swaggerHub link](https://app.swaggerhub.com/apis/Hussein66253/default-title/0.1)