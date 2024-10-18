const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const airports = [
        {
            name: "Los Angeles Internation Airport",
            location: "Los Angeles, CA",
            code: "LAX"
        },
        {
            name:"Long Beach Airport",
            location: "Long Beach, CA",
            code: "LGB"
        },
        {
            name: "Harry Reid Internation Airport",
            location: "Paradise, NV",
            code: "LAS"
        },
        {
            name: "San Francisco International Airport",
            location: "San Francisco, CA",
            code: "SFO"
        }
    ]

const airport1 = await Airport.findOne({ code: "LAX" })
const airport2 = await Airport.findOne({ code: "LGB" })
const airport3 = await Airport.findOne({ code: "LAS" })
const airport4 = await Airport.findOne({ code: "SFO" })


const flights = [
    {
        airline: "Jetblue",
        flightNumber: 12,
        price: 120,
        numberOfSeats: 186,
        departingAirport: airport1._id,
        arrivalAirport: airport3._id,
        departureDateTime: 130
    },
    {
        airline: "Frontier",
        flightNumber: 4,
        price: 60,
        numberOfSeats: 186,
        departingAirport: airport3._id,
        arrivalAirport: airport4._id,
        departureDateTime: 600
    }, 
    {
        airline: "American Airlines",
        flightNumber: 17,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._id,
        arrivalAirport: airport1._id,
        departureDateTime: 1200

    },
    {
        airline: "United Airlines",
        flightNumber: 12,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._id,
        arrivalAirport: airport1._id,
        departureDateTime: 1600

    },
    {
        airline: "Southwest Airlines",
        flightNumber: 92,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport1._id,
        arrivalAirport: airport3._id,
        departureDateTime: 2000

    },
    {
        airline: "Alaska Airlines",
        flightNumber: 28,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport2._id,
        arrivalAirport: airport1._id,
        departureDateTime: 800

    },
    {
        airline: "Jetblue Airlines",
        flightNumber: 9,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport3._id,
        arrivalAirport: airport4._id,
        departureDateTime: 930

    },
    {
        airline: "Spirit Airlines",
        flightNumber: 8,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._id,
        arrivalAirport: airport3._id,
        departureDateTime: 1030

    },
]


await Airport.insertMany(airports)
console.log ('created airport list')
await Flight.insertMany(flights)
console.log('created flights list')
}

const run = async () => {
    await main ()
    db.close ()
}

run ()