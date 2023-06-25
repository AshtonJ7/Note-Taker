// Dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')
// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;


// parsing Json 
app.use('/api', api)
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// routes to route files
app.get('/', (req, res) =>
res.sendFile(path.join(_diename, '/public/index.html')))

app.get('/notes', (req, res) =>
res.sendFile(path.join(_diename, '/public/notes.html')))

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});
