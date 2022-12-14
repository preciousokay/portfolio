// Imports
const express = require('express');
const path = require('path');

// Server app setup
const app = express();
const port = process.env.PORT || 3000;

// Routes

//req - request (Data that comes FROM the client, trying to visit my site), res = response (data/options for how I respond to that client's page visit request)

// Main route that is called when no path is specified. Returns a simple string.
app.get('/', (req, res) => {
  res.send('Hello World');
  //res.sendFile(path.join(dirname, '/client/index.html'));
});

//THIS PUSHED ALL FILES UNDERNEATH "CLIENT" IMPORTANT
// app.use(express.static(path.join(dirname, 'client')));

// Start server on specified port
app.listen(port, () => {
  console.log('App listening on port ${port}');
});



