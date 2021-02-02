const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
        product_name: { type: String, required: true},
        quantity: {type: Number, required: false},
        date_entered: {type: Date, required: false},
        event_start: {type: Date, required: false},
        event_end: {type: Date, required: false},
        location: {type: String, required: false},
        contact_info: {type: String, required: false},
        description: {type: String, required: false},
    }, {
        timestamps: true,
    });

const event = mongoose.model('event', eventSchema);

module.exports = event;