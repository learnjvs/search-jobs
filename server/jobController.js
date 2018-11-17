const jobController = {};

jobController.searchJob = async (req, res, next) => {
  const { language, city } = req.body;
  const url = `https://jobs.github.com/positions.json?description=${language}&location=${city}`;

  const response = await fetch(url);
  const searchResult = await response.json();
  res.locals.searchResult = searchResult;
  next();
}


module.exports = jobController;