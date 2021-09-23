const usersRouter = require("express").Router();

const { addUser } = require("./controller")

usersRouter.post("/", addUser)

module.exports = usersRouter;