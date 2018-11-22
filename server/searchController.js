const fetch = require('node-fetch');
const List = require('./listModel');
const searchController = {};

searchController.fetchJobsList = async (req, res, next) => {
  const { language, city } = req.body;
  const url = `https://jobs.github.com/positions.json?description=${language}&location=${city}`;

  try {
    const response = await fetch(url);
    const searchResult = await response.json();
    console.log('FETCH JOB LIST RUNNING');
    res.locals.searchResult = searchResult;
    next();
  } catch (e) {
    return res.status(500).send(e)
  }
}

searchController.jobsList= (req, res, next) => {
  const { language, city } = req.body;
  List.find({ language, city }, (err, jobsList) => {
    if (jobsList.length === 0) {
      console.log('INSIDE IF,', jobsList)
      next();
    }
    else  console.log('FIND FROM DB'); res.locals.jobsList = jobsList;
  })
}

module.exports = searchController;