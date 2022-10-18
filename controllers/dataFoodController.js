const Food = require('../models/food')

const dataController = {
    //Index, does it need the database
    index(req, res, next){
        Food.find({}, (err, foundFoods) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.foods = foundFoods
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Food.findByIdAndDelete(req.params.id, (err, deletedFood) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.food = deletedFood
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.isItHealthy = req.body.isItHealthy  === 'on'? true : false;
        Food.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFood)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.food = updatedFood
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        req.body.isItHealthy  = req.body.isItHealthy  === 'on'? true : false;
        Food.create(req.body, (err, createdFood)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.food = createdFood
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Food.findById(req.params.id,(err, foundFood) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a log with that ID'
                })
            } else {
                res.locals.data.food = foundFood
                next()
            }
        })
    }
}

module.exports = dataController