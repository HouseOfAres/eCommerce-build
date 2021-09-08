const express = require('express');
const cors = require('cors');
const axios = require('axios');
const access = require('../config.js')
var compression = require('compression')
let app = express ();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(compression());
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

app.get('/questions/:product_id', function (req, res) {
  //change endpoint
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${req.params.product_id}&count=1000`,
  {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
  .then((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log('Error: ', err);
    res.status(400);
    res.end;
  })
});

app.get('/ratings', function (req, res) {
  //change endpoint
  res.send('Success!');
});


app.post('/qa/questions', function (req, res) {
  //change endpoint
  console.log(req.body)
  const addQuestionObj = req.body;
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', addQuestionObj, {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
    .then((response) => {
      console.log('post received');
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});

app.post('/qa/questions/:questionId/answers', function (req, res) {
  //change endpoint
  const questionId = req.params.questionId;
  const addQuestionObj = req.body;

  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`, addQuestionObj, {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
    .then((response) => {
      console.log('post received');
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});

app.put('/qa/answers/:answerId', function (req, res) {

  // console.log(req.body);
  console.log(req.params.answerId);
  const updateAnswerHelpful = req.body;

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.answerId}/helpful`, updateAnswerHelpful, {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
  .then((response) => {
    console.log('Vote received');
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

});


let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port http://localhost:${3000}`);
})
