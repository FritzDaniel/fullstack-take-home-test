const LocationModel = require('../models/location.model');

exports.list_location = function(req, res, next) {
    // List Location
    LocationModel.find(function(err,response){
        if(err)
            res.send(err);
        else 
            res.send({
                status: 200,
                data: response
            });
    });
};

exports.create_location = function(req, res, next) {
    // Create Location
    let newLocation = new LocationModel({
        locationName: req.body.locationName,
    });
    newLocation.save(function(err, newLocation){
        if(err)
            res.send(err);
        else
            res.send({
                status: 200,
                message: 'Location added successfully',
                data: newLocation
            })
    });
}