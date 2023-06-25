// Dependencies
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js')


// creating environment variable port
const PORT = process.env.PORT || 3001;
// app use express
const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// parsing Json 

// sets up express app to handel data parser, middle wear created req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)

app.use(express.static('public'));

// routes to route files
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')));

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
