import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Title content="Super Secret Events" />
        <Title content="Plan your own Secret" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Title content="Super Secret Events" />
        <Title content="Plan your own Secret" />

      </div>
    );
  }
}

export default App;
