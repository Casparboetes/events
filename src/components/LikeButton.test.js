import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'
import sinon from 'sinon'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={ false } onChange={ toggleLike } />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('like')
  })

  it('has an initial state for "liked", that is "false"', () => {
  expect(button).toHaveState('liked', false)
  })

  describe('clicking the button', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })
})
