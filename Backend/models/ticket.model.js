const mongoose = require('mongoose');

var ticketSchema = mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    ticketQuota: {
        type: Number,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
});

var TicketModel = mongoose.model("Ticket", ticketSchema);

module.exports = TicketModel;