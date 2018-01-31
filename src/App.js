import React from 'react'
import './App.css'
import EventsContainer from './events/EventsContainer'

class App extends React.Component {
  render() {
    return (
    <div>
      <EventsContainer events={ [] } />
    </div>
    )
  }
}

export default App
