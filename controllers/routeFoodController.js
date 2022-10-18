// Start our router
// Import express 
const express = require('express')
// only the router none of the other app stuff
const foodrouter = express.Router()
const dataController = require('./dataFoodController')
const viewController = require('./viewFoodController')


// Routes
// Index
foodrouter.get('/', dataController.index, viewController.index)
// New
foodrouter.get('/new', viewController.new)
// Delete
foodrouter.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
foodrouter.put('/:id', dataController.update, viewController.redirectShow)
// Create
foodrouter.post('/', dataController.create, viewController.redirectShow)
// Edit
foodrouter.get('/:id/edit', dataController.show, viewController.edit)
// Show
foodrouter.get('/:id', dataController.show, viewController.show)



module.exports = foodrouter





