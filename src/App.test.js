import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import Title from './components/Title'
import SubTitle from './components/SubTitle'

describe('<App />', () => {
  const app = shallow(<App />)
  const title = <Title content="Super Secret Events" />
  const subtitle = <SubTitle content="Plan your own Secret" />

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(title)
  })

  it('contains a SubTitle', () => {
    expect(app).toContainReact(subtitle)
  })
  
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<App />, div)
      ReactDOM.unmountComponentAtNode(div)
    })

})
