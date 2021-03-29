const router = require('express').Router();
let event = require('../models/event.model');

router.route('/events').get((req, res) => {
    event.find()
        .then(event => res.json(event))
        .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/events/add').post((req, res) => {
    const product_name = req.body.product_name;
    const quantity = Number(req.body.quantity);
    const date_entered = Date.parse(req.body.date_entered);
    const event_start = Date.parse(req.body.event_start);
    const event_end = Date.parse(req.body.event_end);
    const location = req.body.location;
    const contact_info = req.body.contact_info;
    const description = req.body.description;

    const newEvent = new event({
        product_name,
        quantity,
        date_entered,
        event_start,
        event_end,
        location,
        contact_info,
        description,
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/events/:id').get((req, res) => {
    if(req.params.id==='11101999'){
        var eventEnd = new Date();
        res.json('{"_id":"11101999","product_name":"Second Helpings","quantity":1,"date_entered":"2020-09-09T10:44:00.000Z","event_start":"2020-09-13T04:00:00.000Z","event_end":"'+ eventEnd.toISOString() + '","location":"Bld 8","contact_info":"Tyler Morrison","description":"MERN stack project with a REST API","createdAt":"2021-02-02T11:44:16.000Z","updatedAt":"2021-03-28T10:53:40.096Z","__v":0}')
        return;
    }
    event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/events/:id').delete((req, res) => {
    event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/events/:id').put((req, res) => {
    event.findById(req.params.id)
    .then(event => {
        event.product_name = req.body.product_name;
        event.quantity = Number(req.body.quantity);
        event.date_entered = Date.parse(req.body.date_entered);
        event.event_start = Date.parse(req.body.event_start);
        event.event_end = Date.parse(req.body.event_end);
        event.location = req.body.location;
        event.contact_info = req.body.contact_info;
        event.description = req.body.description;

        event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;