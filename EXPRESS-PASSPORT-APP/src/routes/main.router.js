const express = require("express");
const mainRouter = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../middleware/auth");

mainRouter.get("/", checkAuthenticated, (req, res, next) => {
  res.render("index");
});

amainRouter.get("/login", checkNotAuthenticated, (req, res, next) => {
  res.render("login");
});

mainRouter.get("/signup", checkNotAuthenticated, (req, res, next) => {
  res.render("signup");
});

module.exports = mainRouter;
