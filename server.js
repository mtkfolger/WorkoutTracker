const express = require ("express");
const mongoose = requre ("mongoose");

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const app = express();

//add in middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//add routes
app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}!`);
});