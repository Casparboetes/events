import React from 'react'
import { shallow } from 'enzyme'
import EventItem from './EventItem'

const event = {
  title: 'DGTL 2018',
  summary: 'DGTL Amsterdam is a cutting edge electronic music festival in Amsterdam. Championing the underground, this festival is all about creativity and discovery.',
  date: '01/03/2018',
  techno: false,
  disco: true,
  funkHouse: false,
}

describe('<EventItem />', () => {
  const container = shallow(<EventItem { ...event } />)

  it('is wrapped in a article tag with class name "event"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('event')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).toHaveText(event.title)
  })

  it('shows a 🥕  when it is disco', () => {
    expect(container.find('ul > li')).toHaveText('🥕')
  })
})
