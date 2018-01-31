import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './components/Title'
import SubTitle from './components/SubTitle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Title content="Super Secret Events" />
        <SubTitle content="Plan your own Secret" />
        </header>

      </div>
    );
  }
}

export default App;
