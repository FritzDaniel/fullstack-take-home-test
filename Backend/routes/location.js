var express = require('express');
var router = express.Router();

const LocationController = require('../controllers/locationController');

router.get('/', LocationController.list_location);

router.post('/create', LocationController.create_location);

module.exports = router;
