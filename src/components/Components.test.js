import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'
import SubTitle from './SubTitle'

describe('<Title />', () => {
  const title = shallow(<Title content="Hello, World" />)

  it('has a wrapping h1 tag', () => {
    expect(title).toHaveTagName('h1')
  })

  it('renders the content', () => {
    expect(title).toHaveText('Hello, World')
  })
})


describe('<SubTitle />', () => {
  const subtitle = shallow(<SubTitle content="Something Completely Different!" />)

  it('has a wrapping h2 tag', () => {
    expect(subtitle).toHaveTagName('h2')
  })

  it('renders a different subtitle text', () => {
    expect(subtitle).toHaveText('Something Completely Different!')
  })
})
