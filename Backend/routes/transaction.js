var express = require('express');
var router = express.Router();

const TransactionController = require('../controllers/transactionController');

router.get('/', TransactionController.list_transaction);

router.get('/get_info/:id', TransactionController.transaction_info);

router.post('/purchase', TransactionController.purchase_ticket);

module.exports = router;
