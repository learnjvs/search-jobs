const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  language: { type:String, required:true },
  location: { type:String, required:true },
  listings: [{
    title: String, 
    location: String, 
    type: String,
    company: String,
    company_logo: String,
    date: Date,
    description: String
  }]
})

module.exports = mongoose.model('Job', listSchema);


