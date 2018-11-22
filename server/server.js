const express = require('express');
const app = express();
const cors = require('cors');
const searchController = require('./searchController');
const mongoose = require('mongoose');

const PORT = 3300;
const url = 'mongodb://searchjob:practice123@ds052408.mlab.com:52408/search-job'
const db = mongoose.connection;

//connecting to db
mongoose.connect(url);
db.once('open', () => {
console.log('connected to MongoDB...')
});


//app.use(bodyParser.json());  body-parser middleware is bundled in express 4.16.0
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/searchJob', 
  searchController.jobsList,
  searchController.fetchJobsList,
  (req, res) => {
    const response = {...res.locals};
    return res.status(200).json(response);
  }
);






app.listen(PORT, () => (`Port ${PORT} is listening`));