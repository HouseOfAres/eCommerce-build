const express = require('express');
const cors = require('cors');
const axios = require('axios');
const access = require('../config.js');
const compression = require('compression');
let app = express();

app.use(compression());
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(compression());
app.use(cors());

app.get('/products/:product_id', function (req, res) {
  //change endpoint
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}`,
    method: 'GET',
    headers: {
      Authorization: access.TOKEN
    }
  })
    .then(result => {
      res.send(result.data)
    })
    .catch(err => {
      console.log(err);
      res.send(`Failed GET request for product id`);
    })
});

app.get('/products/:product_id/styles', function (req, res) {
  //change endpoint
  // console.log(req.params.product_id)
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/styles`,
    method: 'GET',
    headers: {
      Authorization: access.TOKEN
    }
  })
    .then(response => {
      // console.log(response.data)
      res.send(response.data)
    })
    .catch(err => {
      console.log(err)
      res.send('Failed to GET request for styles');
    })
});

app.get('/reviews/meta/', function (req, res) {
  var newID = req.query.product_id
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${newID}`,
    method: 'GET',
    headers: {
      Authorization: access.TOKEN
    }
  })
  .then(response => {
    // console.log(response.data)
    res.send(response.data)
  })
  .catch(err => {
    console.log(err)
    res.send('Failed to GET request for meta data');
  })

})

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

app.get('/reviews/:product_id', function (req, res) {

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${req.params.product_id}`, {
    headers: {
      'Authorization': `${access.TOKEN}`
    }
  })
    .then((result) => {
      //console.log('SUCCESS DATA GET FROM SERVER')
      res.status(200);
      res.send(result.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(400);
      res.end('Unable to retrieve errors from server');
    })

});


app.post('/reviews', function(req, res) {
  const reviewInfo = req.body;
  const headerInfo = {
    'Authorization': `${access.TOKEN}`,
    'Content-Type': 'application/json'
  }

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', reviewInfo, { headers: headerInfo })
    .then((result) => {
      console.log('successful review form post :) ')
      res.status(200);
      res.send(result.data);
    })
    .catch((err) => {
      res.status(400);
      res.end('Unable to complete post request for review form submission')
    })
});

app.put('/reviews/helpful/:reviewId', function(req, res) {
  const newReviewObj = req.body;

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.paramsreviewId}/helpful`, newReviewObj, {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
  .then((result) => {
    res.status(200);
    res.end();
  })
  .catch((err) => {
    res.status(400);
    res.end('Added to product helpfulness!')
  })
});

app.post('/qa/questions', function (req, res) {
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

app.put('/qa/questions/:question_id/report', function (req, res) {

  const reportedQuestionId = req.params.question_id;
  const report = req.body;

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${reportedQuestionId}/report`, report, {
    headers: { 'Authorization': `${access.TOKEN}` }
  })
  .then((response) => {
    console.log('Question Reported!');
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

});

let port = 3000;

app.listen(port, function () {
  console.log(`Listening on port http://localhost:${3000}`);
})
