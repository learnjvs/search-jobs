const express = require('express');
const app = express();
const cors = require('cors');
const jobController = require('./jobController');

const PORT = 3300;

//app.use(bodyParser.json());  body-parser middleware is bundled in express 4.16.0
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/searchJob', 
  jobController.searchJob,
  (req, res) => {
    const response = {...res.locals};
    return res.status(200).json(response);
  }
);






app.listen(PORT, () => (`Port ${PORT} is listening`));