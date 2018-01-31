import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
// import EventsContainer from './events/EventsContainer'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<App />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
})
