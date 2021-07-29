const express = require('express');
const cors = require('cors');
let app = express ();

app.use(express.static(__dirname + '/../public'));
app.use(express.json()); //body parser
app.use(cors());

app.get('/products/:product_id', function (req, res) {
  //change endpoint
  console.log(res.body);
  res.send('Success!');
});

app.get('/products/styles', function (req, res) {
  //change endpoint
  res.send('Success!');
});

app.get('/questions', function (req, res) {
  //change endpoint
  res.send('Success!');
});

app.get('/ratings', function (req, res) {
  //change endpoint
  res.send('Success!');
});


app.post('/', function (req, res) {
  //change endpoint
});


let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port http://localhost:${3000}`);
})
