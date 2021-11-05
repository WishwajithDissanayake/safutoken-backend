const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRouters = require('./routes/posts');

//cors enable
app.use(
    cors({
        origin: "*"
    })
)

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRouters);

const PORT = 8000;

DB_URL = 'mongodb+srv://safutoken-admin:safutokenpw@safutoken.feu7w.mongodb.net/safutoken?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});