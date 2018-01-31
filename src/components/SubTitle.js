import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ComponentStyler.css'

class subTitle extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h2 className="subTitle">{ this.props.content }</h2>
    )
  }
}

export default subTitle
