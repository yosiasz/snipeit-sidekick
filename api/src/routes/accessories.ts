var express = require('express')
var router = express.Router()

const accessoryController = require('../controllers/accessories');

router.route('/accessories')
      .get(accessoryController.getAccessories)

router.route('/accessories/:id')
      .get(accessoryController.getAccessory)  

module.exports = router;