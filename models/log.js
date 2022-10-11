const mongoose = require('mongoose')
const Sequelize = require('sequelize')

const logSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean},
    time : { type : Date, default: Date.now }
    })
    // {timestamps: true}

const Log = mongoose.model('Log', logSchema)

module.exports = Log