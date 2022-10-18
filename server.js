require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')

//reads the env file


const app = express()

app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/logs', require('./controllers/routeLogController'))
app.use('/foods', require('./controllers/routeFoodController'))

/*
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
  //return the original log, and we want to see th enew log
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

*/

app.listen(3002, ()=>{
    console.log("listening on port 3002")
})