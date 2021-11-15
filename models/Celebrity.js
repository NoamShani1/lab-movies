const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebSchema = new Schema(
    {
        name: {
            type: String,
            // unique: true -> Ideally, should be unique, but its up to you
        },
        occupation: {

            type: String,
        },

     catchPhrase: {

            type: String,

        }

    },

);

const Celebrity = model("Celebrtiy", celebSchema);

module.exports = Celebrity;
