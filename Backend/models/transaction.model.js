const mongoose = require('mongoose');

var TransactionSchema = mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    },
    buyTicket: {
        type: Number,
        required: true
    },
});

var TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;