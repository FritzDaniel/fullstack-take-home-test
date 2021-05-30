const mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventStartDate: {
        type: Date,
        required: true
    },
    eventEndDate: {
        type: Date,
        required: true
    },
    eventLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    }
});

var EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;