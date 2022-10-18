const mongoose = require('mongoose')
const Food = require('./models/food')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

const seedFoodLogs = [
{

    name: "Chicken Tonkatsu",
    calories: 500,
    isItHealthy: false

},

{

    name: "Eel Avocado Roll",
    calories: 350,
    isItHealthy: true

},

{
    name: "Bandeja Paisa",
    calories: 800,
    isItHealthy: false

},

{
    name: "Beyonce's Kale Salad",
    calories: 230,
    isItHealthy: true
}
]

const seedDatabase = async () => {
    await Food.insertMany(seedFoodLogs)
}

seedDatabase().then(() => {
    mongoose.connection.close()
})