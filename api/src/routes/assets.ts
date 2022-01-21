var express = require('express')
var router = express.Router()

const assetController = require('../controllers/assets');

router.route('/assets')
      .get(assetController.getAssets)

router.route('/assets/:assetid')
      .get(assetController.getAsset)  

module.exports = router;