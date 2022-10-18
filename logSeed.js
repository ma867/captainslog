const mongoose = require('mongoose')
const Log = require('./models/log')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

const seedLogs = [
{

    title: "Oct 10 2022",
    entry: "ate takis will need pepto bismol",
    shipIsBroken: true

},

{

    title: "Sep 26 2022",
    entry: "Walked mochi.... he was a lil hyper",
    shipIsBroken: false

},

{
    title:"Oct 9 2022",
    entry: "The back of my head looking ridiculous",
    shipIsBroken: true

},

{
    title: "Oct 2 2022",
    entry:"Glasses, jacket, shirt... Call me jacket glasses shirt MAANNN",
    shipIsBroken: false
}
]

const seedDatabase = async () => {
    await Log.insertMany(seedLogs)
}

seedDatabase().then(() => {
    mongoose.connection.close()
})