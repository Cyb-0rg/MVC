const express = require("express")
const router  = express.Router();
const userController = require('../controller/userController')


router.get('/', userController.getUsers)
router.set('/', userController.setUsers)

module.exports = router 