const express = require('express');
const socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3000, () => {
  console.log('Listening to requests on port 3000');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);