const express = require('express');
const { getAllProducts, server, getFullData, getDataByIds } = require('../controller/controllers');
const routes = express.Router()

routes.get('/', server)
routes.get('/productsCount', getFullData)
routes.get('/products', getAllProducts)
routes.post('/productsByIds', getDataByIds)

module.exports = routes;