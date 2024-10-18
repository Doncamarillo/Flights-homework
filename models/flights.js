const mongoose = require ('mongoose')
const {Schema} = require ('mongoose')

const flightSchema = new Schema (
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
        arrivalAirport: {type: mongoose.Schema.Types.ObjectId, ref:'Airport', required: true},
        departureDateTime: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = flightSchema