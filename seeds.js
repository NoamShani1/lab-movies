const mongoose = require('mongoose')
const Celebrity = require('./models/Celebrity')

// open up the connection to mongo
mongoose.connect('mongodb://localhost/lab')




const celebArray = [

  {
    name: "playboi carti",
    occupation: "rapper",
    catchPhrase: "slatt",
},
{
    name: "paris hilton",
    occupation: "socialite",
    catchPhrase: "thats hot",
},
{
    name: "drake",
    occupation: "rapper",
    catchPhrase: "geez",
},


]


Celebrity.insertMany(celebArray)
    .then(Celebrity => {
        console.log(`Success! - ${Celebrity.length} were added to the database`)
        // mongoose.connection.close()
    })
    .catch(err => console.log(err))
