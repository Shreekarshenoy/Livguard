const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/tesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connection to DB'));
db.once('open', () => console.log('Connected to DB'));

app.post('/signup', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;

  var data = {
    "name": name,
    "email": email,
    "phone": phone,
    "password": password
  };

  db.collection('users').insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Data Inserted!!!");
  });

  return res.redirect('login.html');
});

app.get('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  return res.redirect('index.html');
});

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
