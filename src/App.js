import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Result';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      city: "",
      searchResult: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  searchJob = () => {
    const { language, city } = this.state;
    fetch(`https://jobs.github.com/positions.json?description=${language}&location=${city}`)
      .then(response => response.json())
      .then(data => this.setState({
        searchResult: data
      }))
  }

  render() {
    const { language, city, searchResult } = this.state;

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
              value={this.state.language}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <button onClick={this.searchJob}>search</button>
          </div>
        </header>
        <Result language={language} city={city} result={searchResult}/>
      </div>
    );
  }
}

export default App;
