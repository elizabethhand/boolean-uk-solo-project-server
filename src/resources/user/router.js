const usersRouter = require("express").Router();

const { addUser, getAllUsers } = require("./controller")

usersRouter.post("/", addUser)
usersRouter.get("/", getAllUsers)

module.exports = usersRouter;