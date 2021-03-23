const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

console.log("URI in use " + uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => { 
    console.log("MongoDB database connection established successfully");
})

const eventRouter = require('./routes/event');

app.use(express.static(path.join(__dirname, '../build')));
app.use('/event', eventRouter);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});