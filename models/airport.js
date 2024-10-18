const mongoose = require('mongoose')
const {Schema} = require ('mongoose')


const airportSchema = new Schema (
    {
        id:{type:String,require:true},
        name: {type: String, require: true},
        location: {type: String, require: true},
        code: {type: String, require: true}
    },
    {timestamps:true}

)

module.exports = airportSchema