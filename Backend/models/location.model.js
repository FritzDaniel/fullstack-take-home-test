const mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
});

var LocationModel = mongoose.model("Location", locationSchema);

module.exports = LocationModel;