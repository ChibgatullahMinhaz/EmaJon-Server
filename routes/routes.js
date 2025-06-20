const express = require('express');
const { getAllProducts } = require('../controller/controllers');
const routes = express.Router()

routes.get('/products', getAllProducts)

module.exports = routes;