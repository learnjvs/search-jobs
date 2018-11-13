import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
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

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edityfrhtyfdhtydfhgtd <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
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
        <button onClick={this.searchJob}>submit</button>
        </header>
      </div>
    );
  }
}

export default App;
