# api-server
##  HTTP and REST
 - In this app we will be building an API to serve data for a virtual storefront, which displays categories and products to a potential shopper
## Solution
- Create api-server repository
  - Install json-server globally on your computer `npm install -g json-server
`
 - Create a folder in your api-server repository called data with a db.json file, with containers for your data models
{ "categories" : [], "products": [] }
 - Start json-server from within your working folder and “watch” your database file `json-server --watch ./data/db.json`
- Your api will automatically respond to the following endpoints:   
`/categories GET, POST
/categories/:id/ PUT, DELETE
/products GET, POST
/products/:id/ PUT, DELETE`
 ## swaggerhub Documentation
[swaggerHub link](https://app.swaggerhub.com/apis/Hussein66253/default-title/0.1)