import React from 'react'
import { shallow } from 'enzyme'
import EventsContainer from './EventsContainer'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import EventItem from './EventItem'

const events = [
  {
    title: 'DGTL 2018',
    summary: 'DGTL Amsterdam is a cutting edge electronic music festival in Amsterdam. Championing the underground, this festival is all about creativity and discovery.',
    date: '01/03/2018',
    techno: false,
    disco: true,
    funkHouse: false,
  },
  {
    title: 'Lente Kabinet',
    summary: 'The Dekmantel crew do most things pretty damn well: their parties are up there with the best in Amsterdam, and their record label gets better with every release. They also curate Lente Kabinet, a daylong affair now in its second year. The 2013 edition will take place at a new location, Het Twiske, a big nature reserve in a cluster of villages north of Amsterdam. It boasts a small but elite cast of artists who represent the various strains of the Dekmantel sound: house, techno and a touch of bass.',
    date: '01/03/2018',
    techno: false,
    disco: false,
    funkHouse: true,
  },
  {
    title: 'Wildenburg',
    summary: 'De datum is bekend! Wildeburg vindt in 2018 plaats van vrijdag 13 t/m zondag 15 juli.',
    date: '01/03/2018',
    techno: false,
    disco: false,
    funkHouse: false,
  },
  {
    title: 'DKMTL',
    summary: 'Even in the familiar there can be surprise and wonder. It is with great pleasure and anticipation that we are able to celebrate Dekmantel Festivals next chapter. Spread over the course of three days, amid the beautiful surroundings and grasslands of the Amsterdam Forest, plus a concert program holding two consecutive nights at several venues located on the river banks of the IJ, we will serve you genre-bending live performances and dj-sets',
    date: '01/03/2018',
    techno: true,
    disco: true,
    funkHouse: false,
  },
]

describe('<EventsContainer />', () => {
  const container = shallow(<EventsContainer events={ events } />)
  const title = <Title content="Super Secret Events" />
  const subtitle = <SubTitle content="Plan your own Secret" />

  it('is wrapped in a div with class name "event"', () => {
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('event')
  })

  it('sets the Title to "Super Secret Events"', () => {
  expect(container).toContainReact(<Title content="Super Secret Events" />)
})

  it('contains a Title', () => {
    expect(container).toContainReact(title)
  })

  it('contains a SubTitle', () => {
    expect(container).toContainReact(subtitle)
  })

  it('renders all events as a EventItem', () => {
    events.map((event, index) => {
      return expect(container).toContainReact(<EventItem key={index} { ...event } />)
    })
  })
})
