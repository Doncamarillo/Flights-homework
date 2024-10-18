const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://doncamarillo:doncamarillo@student-cluster.qqopd.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=student-cluster')
    .then (() => {
        console.log (`connected to mongodb`)
    })
    .catch ((e) => {
        console.error ('error!', e.message)
    })

    mongoose.set('debug',true)

    const db = mongoose.connection
    module.exports = db