import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listings from './Listings';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "python",
      city: "culver city",
      listings: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  searchJob = async () => {
    const { language, city } = this.state;
    const url = 'http://localhost:3300/searchJob';
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        language,
        city
      })
    }
    try {
      const response = await fetch(url, options);
      const jobResult = await response.json();
      this.setState({
        listings: jobResult.searchResult
      })
     } catch(e) {
        console.log(`Error in searchJob ${e}`);
      };

  }

  render() {
    const { language, city, listings } = this.state;
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Search Job By Location</h1>
          <div className="search-field">
            <input
              type="text"
              placeholder="language"
              name="language"
              //defaultValue="python"
              value={this.state.language}
              onChange={this.handleChange}
              />
            <input
              type="text"
              placeholder="city"
              name="city"
              //defaultValue="culver city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <button onClick={this.searchJob}>search</button>
          </div>
        </header>
        <Listings language={language} city={city} listings={listings} />
      </div>
    );
  }
}

export default App;
