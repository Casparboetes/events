import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ComponentStyler.css'

class SubTitle extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h2 className="SubTitle">{ this.props.content }</h2>
    )
  }
}

export default SubTitle
