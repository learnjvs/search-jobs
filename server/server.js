const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jobController = require('./jobController');


const PORT = 3300;

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/searchJob', 
  jobController.searchJob
);






app.listen(PORT, () => (`Port ${PORT} is listening`));