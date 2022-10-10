const express = require('express')

const app = express()

app.use(express.urlencoded({extender:true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

app.get('/new', (req,res)=>{
    // res.send("new")
    res.render('New')
})

app.listen(3002, ()=>{
    console.log("listening on port 3002")
})