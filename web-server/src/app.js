const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Enzo Parodi'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Human-faced dog'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is the help page'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is cloudy',
    location: 'Oberursel'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
