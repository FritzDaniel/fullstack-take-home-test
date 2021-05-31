const TransactionModel = require('../models/transaction.model');

exports.list_transaction = function(req, res, next) {
    // List Location
    TransactionModel.find(function(err,response){
        if(err)
            res.send(err);
        else 
            res.send({
                status: 200,
                data: response
            });
    });
};

exports.transaction_info = function(req, res, next) {
    // Create Location
    const idQuery = req.params.id;
    TransactionModel.findById(idQuery, function(err,response){
    if(err)
        res.send(err);
    else 
        res.send({
            status: 200,
            data: response
        });
    }).populate(["eventId",'ticketId']);
};

exports.purchase_ticket	= function(req,res,next) {
    // Create Event
    const idParam = req.params.eventid;
    const idTicket = req.params.ticketid;
    let newTicket = new TransactionModel({
        eventId: idParam,
        ticketId: idTicket,
        buyTicket: req.body.buyTicket
    });
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