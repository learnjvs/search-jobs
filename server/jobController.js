const fetch = require('node-fetch');

const jobController = {};

jobController.searchJob = async (req, res, next) => {
  const { language, city } = req.body;
  const url = `https://jobs.github.com/positions.json?description=${language}&location=${city}`;

  try {
    const response = await fetch(url);
    const searchResult = await response.json();
    res.locals.searchResult = searchResult;
    next();
  } catch (e) {
    return res.status(500).send(e)
  }
}


module.exports = jobController;