var express = require('express')
var router = express.Router()

const userController = require('../controllers/users');

router.route('/users')
      .get(userController.getUsers)

module.exports = router;      