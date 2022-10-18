const mongoose = require('mongoose')
const Sequelize = require('sequelize')

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    calories: {type: Number, required: true},
    isItHealthy: {type: Boolean},
    time : { type : Date, default: Date.now }
    })
    // {timestamps: true}

const Food = mongoose.model('Food', foodSchema)

module.exports = Food