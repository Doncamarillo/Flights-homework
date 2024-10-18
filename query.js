const db = require('./db')
const { Airport, Flight } = require('./models')

const findAllFlights = async () => {
    const flights = await Flight.find().populate('departingAirport arrivalAirport')
    console.log(flights)
}

const findFlightById = async (id) => {
    const flight = await Flight.findById(id).populate('departingAirport arrivalAirport')
    console.log(flight)
}


const createFlight = async () => {
    const flight = await Flight.create()
    console.log(flight)

}

const updateFlight = async (id, updateData) => {
    const updated = await Flight.findByIdAndUpdate(id, updateData).populate('departingAirport arrivalAirport')
    console.log(updated)

}


const deleteFlight = async (id) => {
    const deleted = await Flight.findByIdAndDelete(id)
    console.log(deleted)

}




const createAirport = async (airportData) => {
    const airport = await Airport.create(airportData)
    console.log(airport)

}


const findAllAirports = async () => {
    const airports = await Airport.find()
    console.log(airports)

}

const findAirportById = async (id) => {
    const airport = await Airport.findById(id)
    console.log(airport)

}


const updateAirport = async (id, updateData) => {
    const updated = await Airport.findByIdAndUpdate(id, updateData, { new: true })
    console.log(updated)

}


const deleteAirport = async (id) => {
    const deleted = await Airport.findByIdAndDelete(id)
    console.log(deleted)

}


async function main() {
    try {

        const lax = await createAirport({ name: "Los Angeles International Airport", location: "Los Angeles, CA", code: "LAX" })
        const sfo = await createAirport({ name: "San Francisco International Airport", location: "San Francisco, CA", code: "SFO" })


        const newFlight = await createFlight({
            airline: 'Spirit',
            flightNumber: 28,
            price: 120,
            numberOfSeats: 150,
            departingAirportCode: "LAX",
            arrivalAirportCode: "SFO",
            departureDateTime: 1200,
            
    })


        await findAllFlights()
        await findFlightById(newFlight)
        await findAllAirports()


        await updateFlight(newFlight)
        await updateAirport()


        await deleteFlight()
        await deleteAirport()

    } catch (error) {
        console.log('Error:', error)
    } finally {
        await db.close()
    }
}

main()

