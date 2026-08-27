const express = require("express")
const router = express.Router()

const checkAuth = require("../Auth/auth")
const usersController = require("../Controller/users-controller");


router.post("/signup", usersController.getSignup)

router.post("/login", usersController.getLogin)

router.use(checkAuth)

router.get("/", usersController.getAllUsers)

module.exports = router;