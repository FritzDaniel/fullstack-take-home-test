var express = require('express');
var router = express.Router();

const EventController = require('../controllers/eventController');

router.get('/', EventController.list_event);

router.get('/get_info/:id', EventController.detail_event);

router.post('/create', EventController.create_event);

router.get('/ticket/:eventid', EventController.ticket_info);

router.post('/ticket/create/:eventid', EventController.create_ticket);

module.exports = router;
