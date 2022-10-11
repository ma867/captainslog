const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/log')

//reads the env file
require('dotenv').config();

const app = express()

app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.urlencoded({extended:true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

app.use(methodOverride('_method'))

app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('logs/Index', {
                logs: foundLogs
            })
        }
    })
})

app.get('/logs/new', (req,res)=>{
    // res.send("new")
    res.render('logs/New')
})


app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) =>{
      if(err){
        console.error(err)
        res.status(400).send(err)
      }
      else{
        res.redirect('/logs')
      }
    })
  })

app.put("/logs/:id", (req, res)=>{
    //req.body contains all the form data from the user
  req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true  ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  //return the original fruit, and we want to see th enew fruit
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog)=>{
    if(err){
      console.error(err)
      res.status(400).send(err)
    }
    else{
      res.redirect(`/logs/${updatedLog._id}`)
    }
  })
})

app.post('/logs', (req,res)=>{
    // res.send("created")
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    // res.send(req.body)
    Log.create(req.body, (err, createdLog) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.redirect('/logs')
        }
    })

})
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, editedLog) => {
        if(err){
            console.log(err)
            res.status(400).send(err)
        } 
        else {
        res.render('logs/Edit', {
            log: editedLog
        }
      )}
    })
  })
app.get('/logs/:i', (req, res) => {
    Log.findById(req.params.i, (err, foundLog)=>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        }
        else{
            res.render('logs/Show', {
                log: foundLog
            })
        }

    })
})

app.listen(3002, ()=>{
    console.log("listening on port 3002")
})