const express = require("express");
const productsController = require("../controllers/products.controller");
const productsRouter = express();

productsRouter.post("/", productsController.createdProduct);

module.exports = productsRouter;
