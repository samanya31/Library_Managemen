const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home', 'Mainpg.html'));
});



// Route for the About page
app.get('/About', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About', 'About.html'));
});
// Route for the about2 page
app.get('/about2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About', 'about2.html'));
});
// Route for the About1 page
app.get('/About1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About', 'About1.html'));
});
app.get('/services1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Services', 'services1.html'));
});
app.get('/eservices', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Services', 'eservices.html'));
});

app.use('/Service', express.static(path.join(__dirname, 'public', 'Services')));



// Route for serving CSS and JS files for the contact page
app.use('/Contact', express.static(path.join(__dirname, 'public', 'Contact')));
// Route for the contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact', 'contact.html'));
});
// Route for the Staff page

app.get('/staff', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'staff', 'staff.html'));
});



// Route for a dynamic page with a parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
