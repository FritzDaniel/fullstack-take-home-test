const EventModel = require('../models/event.model');

exports.list_event = function(req, res, next) {
    // List Event
    EventModel.find(function(err,response){
    if(err)
        res.send(err);
    else 
        res.send({
            status: 200,
            data: response
        });
    });
};

exports.detail_event = function(req, res, next) {
    // Detail Event
    const idQuery = req.params.id;
    EventModel.findById(idQuery, function(err,response){
    if(err)
        res.send(err);
    else 
        res.send({
            status: 200,
            data: response
        });
    }).populate("eventLocation");
};

exports.create_event = function(req,res,next) {
    // Create Event
    let newEvent = new EventModel({
        eventName: req.body.eventName,
        eventStartDate: req.body.eventStartDate,
        eventEndDate: req.body.eventEndDate,
        eventLocation: req.body.eventLocation
    });
    newEvent.save(function(err, newEvent){
        if(err)
            res.send(err);
        else
            res.send({
            status: 200,
            message: 'Event added successfully',
            data: newEvent
        });
    });
}