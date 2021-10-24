const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter the name of your workout"
    },
    date: {
        type: Data,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;