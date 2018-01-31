import React from 'react'
import { shallow } from 'enzyme'
import EventsContainer from './EventsContainer'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'

describe('<EventsContainer />', () => {
  const container = shallow(<EventsContainer events={[]} />)
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

})
