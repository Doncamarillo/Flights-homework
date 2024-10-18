const mongoose = require('mongoose');
const AirportSchema = require('./airport')
const FlightSchema = require('./flights')

const Flight = mongoose.model('Flight', FlightSchema)
const Airport = mongoose.model('Airport', AirportSchema);

module.exports = {
    Flight,
   Airport,
}