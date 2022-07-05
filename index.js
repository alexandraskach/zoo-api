const express = require('express')
const app = express();
const port = 3000;

var mongoose = require('mongoose');

var mongoDB = '';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.get('/', (req, res) => {
  res.send('Hello World express!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
