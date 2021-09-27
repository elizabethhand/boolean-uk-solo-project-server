const restaurantRouter = require("express").Router();

const { getOneRestaurant } = require("./controller")

restaurantRouter.get("/:id", getOneRestaurant)

module.exports = restaurantRouter;