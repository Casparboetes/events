import React from 'react'
// import './App.css'
import EventsContainer from './events/EventsContainer'

const events = [
  {
    title: 'DGTL 2018',
    summary: 'DGTL Amsterdam is a cutting edge electronic music festival in Amsterdam. Championing the underground, this festival is all about creativity and discovery.',
    date: '01/03/2018',
    techno: true,
    disco: true,
    funkHouse: false,
  },
  {
    title: 'Lente Kabinet',
    summary: 'The Dekmantel crew do most things pretty damn well: their parties are up there with the best in Amsterdam, and their record label gets better with every release. They also curate Lente Kabinet, a daylong affair now in its second year. The 2013 edition will take place at a new location, Het Twiske, a big nature reserve in a cluster of villages north of Amsterdam. It boasts a small but elite cast of artists who represent the various strains of the Dekmantel sound: house, techno and a touch of bass.',
    date: '01/03/2018',
    techno: true,
    disco: false,
    funkHouse: true,
  },
  {
    title: 'Wildenburg',
    summary: 'De datum is bekend! Wildeburg vindt in 2018 plaats van vrijdag 13 t/m zondag 15 juli.',
    date: '01/03/2018',
    techno: true,
    disco: false,
    funkHouse: false,
  },
  {
    title: 'DKMTL',
    summary: 'Even in the familiar there can be surprise and wonder. It is with great pleasure and anticipation that we are able to celebrate Dekmantel Festivals next chapter. Spread over the course of three days, amid the beautiful surroundings and grasslands of the Amsterdam Forest, plus a concert program holding two consecutive nights at several venues located on the river banks of the IJ, we will serve you genre-bending live performances and dj-sets',
    date: '01/03/2018',
    techno: true,
    disco: true,
    funkHouse: true,
  },
]

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <EventsContainer events={ events } />
    </div>
    )
  }
}

export default App
