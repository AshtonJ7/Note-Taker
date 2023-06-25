// Dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')


// creating environment variable port
const PORT = process.env.PORT || 3001;
// app use express
const app = express();

// parsing Json 
app.use('/api', api)
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

// routes to route files
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')))

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')))

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
