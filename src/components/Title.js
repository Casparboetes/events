import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    return(
      <h1>{ this.props.component }</h1>
    )
  }
}

export default Title
