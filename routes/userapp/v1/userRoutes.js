const express = require("express")
const userController = require("../../../controller/user")

const router = express.Router()

router.post("/me",userController.createUser);

module.exports = router;