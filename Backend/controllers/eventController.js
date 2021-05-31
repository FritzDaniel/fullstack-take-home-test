const EventModel = require('../models/event.model');
const TicketModel = require('../models/ticket.model');

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
};

exports.ticket_info = function(req,res,next) {
    const idQuery = req.params.eventid;
    TicketModel.findById(idQuery, function(err,response){
    if(err)
        res.send(err);
    else 
        res.send({
            status: 200,
            data: response
        });
    }).populate("eventId");
};

exports.create_ticket = function(req,res,next) {
    // Create Event
    const idParam = req.params.eventid;
    let newTicket = new TicketModel({
        eventId: idParam,
        ticketQuota: req.body.ticketQuota,
        ticketPrice: req.body.ticketPrice,
    });
    // var checkEventTicket = TicketModel.find({'eventId' : idParam}, function(err, response){
    //     console.log(response);
    // });
    // if(checkEventTicket == null)
    // {
    //     res.send('Cant create 2 ticket in a event!')
    // }else {
    
    // }
    newTicket.save(function(err, newTicket){
        if(err)
            res.send(err);
        else
            res.send({
            status: 200,
            message: 'Event Ticket added successfully',
            data: newTicket
        });
    });
};